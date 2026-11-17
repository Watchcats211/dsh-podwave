// 客户端这份代码的版本号，由 build.mjs 在打包时注入（define.__PODWAVE_VERSION__）。
// 宿主进程的版本走 /podwave/api/setup 的 version 字段，两边不一致就说明
// 磁盘上的插件已经更新、但正在运行的还是旧代码 —— 这时候重启 DSH 才完全生效。
export const CLIENT_VERSION = typeof __PODWAVE_VERSION__ === 'string' ? __PODWAVE_VERSION__ : ''
