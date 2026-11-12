// 构建 DSH 客户端半片：CSS 作用域化 → esbuild 打包 → ModuleLoader 包装。
import { build } from 'esbuild'
import postcss from 'postcss'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))

const scopePlugin = {
  postcssPlugin: 'podwave-scope',
  Once(rootNode) {
    rootNode.walkRules((rule) => {
      const parent = rule.parent
      if (parent && parent.type === 'atrule' && String(parent.name).endsWith('keyframes')) return
      if (!rule.selectors) return
      rule.selectors = rule.selectors.map((selector) =>
        selector.startsWith('.podwave-root') ? selector : `.podwave-root ${selector}`,
      )
    })
  },
}

const cssSource = await fs.readFile(path.join(root, 'client/src/styles.css'), 'utf8')
const prefixed = await postcss([scopePlugin]).process(cssSource, { from: path.join(root, 'client/src/styles.css') })
await fs.writeFile(path.join(root, 'client/src/styles.prefixed.css'), prefixed.css)

const result = await build({
  entryPoints: [path.join(root, 'client/src/plugin.jsx')],
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome110'],
  jsx: 'transform',
  external: ['react'],
  loader: { '.css': 'text' },
  minify: true,
  legalComments: 'none',
  logLevel: 'warning',
})

const code = result.outputFiles[0].text
const wrapped =
  'window.__ModuleLoader__.load({id:"dsh-podwave",factory:(require)=>{const module={exports:{}};const exports=module.exports;\n' +
  code +
  '\nreturn module.exports}})\n'

await fs.mkdir(path.join(root, 'dist'), { recursive: true })
await fs.writeFile(path.join(root, 'dist/client.js'), wrapped)
console.log(`dist/client.js  ${(wrapped.length / 1024).toFixed(1)} kB`)
