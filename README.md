# 罪城全书 VICE CODEX v8.0 (GTA 6 开源实战攻略与玩家社区)

面向《GTA 6》主机与未来 PC 玩家的开源实战攻略站，内置：

- 7 图全景滑动 Hero 轮播（支持实时热度排序与原生赞助席位）
- 55 条去重高播放 YouTube 攻略视频库（卡片原位播放 + 全屏支持 + 影院大屏与单条评论）
- 第二屏实战工作台：5 大区域扫荡清单 + 劫案收益与销赃决策器
- 莱奥尼达 6 大区域全景图鉴 + 全图 8 组固定门禁与保险箱密码一键速查板 + 16 条核心机制与首日补丁实测
- 极速超跑 Top 8 / Port Gellhorn 传奇武器 Top 8 速查表
- 100% 奖杯追踪器 + Canvas 一键导出高清战绩海报 PNG
- Vice Lounge 玩家投稿、主机交友名片墙、4 频道聊天室与 Giscus 全网云端真评论区

## 快速部署到 GitHub Pages

1. 在 GitHub 新建公开仓库 `vice-codex`
2. 在本目录执行：
   ```bash
   git remote add origin https://github.com/<你的用户名>/vice-codex.git
   git branch -M main
   git push -u origin main
   ```
3. 在仓库 `Settings > Pages` 选择 `main` 分支 `/ (root)` 保存即可上线。

## 目录结构

- `index.html`：主页面结构
- `styles.css`：Leonida Coastal Dusk 视觉样式与响应式布局
- `app.js`：55 条视频数据、16 项机制与补丁攻略、区域扫荡、销赃计算器、战绩海报与社区交互逻辑
- `assets/`：6 大区域定制 16:9 高清主视觉（未放本地图时自动启用在线高清兜底图）

License: MIT
