# 获取小宇宙 token（用于插件登录）

插件的「小宇宙」登录支持两种凭据，任选其一：

- **refresh token**（推荐）：有效期长，插件会自动续期。
- **access token**：有效期短，适合临时验证。

## 步骤（Chrome / Edge / Safari）

1. 浏览器打开并登录 <https://www.xiaoyuzhoufm.com>。
2. 打开开发者工具（右键 → 检查，或 `Cmd/Ctrl + Option/Alt + I`）。
3. 切到 **Network（网络）** 面板，刷新页面，在筛选框输入 `api.xiaoyuzhoufm.com`。
4. 点任意一条请求，在 **Headers（标头）→ Request Headers（请求标头）** 里找到：
   - `x-jike-refresh-token`
   - 或 `x-jike-access-token`
5. 复制它的值（一整串字母数字），粘进插件登录框，点「登录」。

## 粘贴格式

插件会自动识别以下格式，直接整段粘贴即可：

```text
x-jike-refresh-token: eyJhbGciOi...
```

```json
{ "x-jike-refresh-token": "eyJhbGciOi..." }
```

也接受 `Bearer xxx` 或纯 token 值。

## 安全说明

token 只写入本机 `~/.podwave/xyz.json`（权限 0600），不会上传到任何服务器；插件用它与小宇宙官方接口通信。若不再使用，点「退出登录」会清除本地 token。

## 风险提示

用小宇宙账号在第三方客户端登录属于非官方用法，**存在被平台风控或限制登录的可能**。建议只在个人设备上使用，并避免频繁切换登录环境。
