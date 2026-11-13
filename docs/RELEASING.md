# 发布流程（每次更新都走一遍）

用户的长期要求：**每个版本都要在 GitHub 发布 Release，并让 DSH 插件市场里的版本号跟着更新。**

## 1. 改版本号

三个地方必须同步：

- `package.json` 的 `version`
- `src/host.js` 里 `health` 返回的 `version`
- `client/src/App.jsx` 的 `brand-version`

再在 `CHANGELOG.md` 顶部加 `## vX.Y.Z` 小节，写清楚改了什么。

## 2. 验证

```bash
npm test
npm run build
```

## 3. 提交并打标签

```bash
git add -A
git commit -m "vX.Y.Z: <一句话>"
git tag vX.Y.Z
git push origin main
git push origin vX.Y.Z
```

## 4. GitHub Release

```bash
npm pack --pack-destination /tmp
gh release create vX.Y.Z /tmp/dsh-podwave-X.Y.Z.tgz --title "vX.Y.Z" --notes-file <(提取 CHANGELOG 小节)
```

## 5. 更新 DSH 插件市场里的版本

市场条目本身不含版本号，`awesome-dsh-plugin.com/plugins.json` 的 `version` 字段来自 **npm**：

- 已登录 npm 时：`npm publish`（包名 `dsh-podwave`）。随后市场抓取会显示新版本；GitHub-only 的插件 `version` 会一直是 `null`。
- 首次发布 npm 需要先 `npm login`，并确认包名未被占用。
- 如果市场条目还没合并，先合并 `data/plugins/<owner>__<repo>.yml` 的 PR；之后版本更新不需要再改市场仓库。

## 6. 更新本机桌面端

```bash
dsh plugin --profile desktop add file:$PWD
```

或在 DSH 的插件管理里移除后重新安装本目录，确认 `~/.dsh/profiles/desktop/node_modules/dsh-podwave/package.json` 的版本号。

## 7. 验收

- GitHub Release 资产可下载
- 市场页（合并后）显示新版本
- 桌面端刷新后版本号正确
