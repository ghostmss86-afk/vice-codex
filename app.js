const HERO_SLIDES = [
  { id: 'hero-1', order: 1, views24h: 3953074, engagement: 0.96, freshness: 1.0, sponsored: false, tag: '热度榜首 / 70 条视频站内播放', title: '罪恶都市黄昏海滨全玩法百科', desc: '收录 70 条实测高播放视频、8 组全图门禁密码速查板、6 大区域扫荡清单与 127 传奇武器点位，主机第二屏常驻工具站。', ctaText: '浏览 70 条实战视频', ctaHref: '#videos', image: 'assets/vice-city.jpg', fallback: 'https://vice6map.com/assets/screenshots/vice-city-ocean-drive.jpg', shortTitle: '罪恶都市海滨' },
  { id: 'hero-2', order: 2, views24h: 1580000, engagement: 0.94, freshness: 0.98, sponsored: false, tag: 'Port Gellhorn 扫荡专题', title: '8 把传奇武器与 UFO 2314 永久加成', desc: '树顶沙发左轮、4 组固定地堡密码与星光旅馆 UFO 营救，一键进入区域扫荡模式逐项勾选。', ctaText: '打开区域扫荡工作台', ctaHref: '#sweep', image: 'assets/port-gellhorn.jpg', fallback: 'https://i.ytimg.com/vi/0NIez05L0YE/hqdefault.jpg', shortTitle: 'Port Gellhorn 扫荡' },
  { id: 'hero-3', order: 3, views24h: 1227918, engagement: 0.93, freshness: 0.96, sponsored: false, tag: 'Leonida Keys 开荒防漏', title: '第一章离岛前绝不能漏的隐藏收集', desc: 'Tourist Trap 任务会清空 Jason 旧宅与现金，先去卧室地板藏钱并领完门口信箱赏金。', ctaText: '查看章节避坑路线', ctaHref: '#chapters', image: 'assets/leonida-keys.jpg', fallback: 'https://i.ytimg.com/vi/FvbVccBoVds/hqdefault.jpg', shortTitle: '群岛开荒防漏' },
  { id: 'hero-4', order: 4, views24h: 1040000, engagement: 0.91, freshness: 0.93, sponsored: false, tag: 'Grassrivers 湿地探索', title: '臭鼬猿、巨型变异蟹与水下秘宝', desc: '深入草河沼泽追踪夜间怪谈生物与 33 处水下探索，出发前记得查清油量与后备箱配枪。', ctaText: '查看隐藏彩蛋解析', ctaHref: '#mechanics', image: 'assets/grassrivers.jpg', fallback: 'https://i.ytimg.com/vi/X08cBTfKpP4/hqdefault.jpg', shortTitle: '草河湿地怪谈' },
  { id: 'hero-5', order: 5, views24h: 960000, engagement: 0.89, freshness: 0.92, sponsored: false, tag: 'Mount Kalaga 峡谷', title: '100% 奖杯追踪与战绩海报一键生成', desc: '勾选 12 项核心白金权重，一键导出高清 PNG 战绩卡晒给好友，自带双主角犯罪档案评级。', ctaText: '生成我的战绩海报', ctaHref: '#checklist', image: 'assets/mount-kalaga.jpg', fallback: 'https://i.redd.it/lf1754vhgw3f1.jpeg', shortTitle: '100% 战绩海报' },
  { id: 'hero-6', order: 6, views24h: 910000, engagement: 0.90, freshness: 0.95, sponsored: false, tag: '劫案利润决策器', title: '从第 1 章到第 4 章 20 万金库最优路线', desc: '实测 Yasmani 与 Tyrone 销赃差价，结合 8 袋厢车与双人传袋算出单趟最高净收益。', ctaText: '打开销赃计算器', ctaHref: '#sweep', image: 'https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_Beach_landscape.0419q._86ukpt.jpg?akim=1&imdensity=1&imwidth=3840', fallback: 'https://i.ytimg.com/vi/uObAnlU0MgI/hqdefault.jpg', shortTitle: '劫案销赃计算器' },
  { id: 'hero-7', order: 7, views24h: 850000, engagement: 0.88, freshness: 0.95, sponsored: true, tag: '原生赞助席位 / 品牌示范', title: 'Ambrosia 夜幕与主机外设推荐通道', desc: '此焦点位支持热度算法与原生商业赞助混排，零弹窗干扰，助力开源攻略站长期运营。', ctaText: '查看硬件与赞助方案', ctaHref: '#sponsor', image: 'assets/ambrosia.jpg', fallback: 'https://preview.redd.it/absolutely-breathtaking-screenshot-of-ambrosia-from-gta-6-v0-k78ocmce05af1.jpeg?auto=webp&s=d7c4ff612e7d52f2c3e4f6799ad3fb1c522d855d', shortTitle: '原生赞助示范位' }
];

const VIDEOS = [
  { id: 'jdaixJMV7L8', title: '50 INSANE Details In GTA 6（50 个震撼细节全实测）', channel: 'T5G', cat: 'easter', views: 3953074, hoursAgo: 18, duration: '13:32', note: '全网最高播放细节盘点，覆盖物理交互与环境生态' },
  { id: 'CiHuzgwaWYw', title: 'DON\'T Finish Chapter 1 in GTA 6 Until You Do THIS!', channel: 'BiggySweats', cat: 'starter', views: 1227918, hoursAgo: 20, duration: '08:01', note: '第一章结束前必须拿齐的防漏要素与现金保全' },
  { id: 'uObAnlU0MgI', title: '第一章离岛前绝不能错过的隐藏任务与现金处理', channel: 'SubscribeForTacos', cat: 'starter', views: 960618, hoursAgo: 19, duration: '03:23', note: '3 分钟速览 Tourist Trap 前的避坑清单' },
  { id: 'kcuB9mr9GCE', title: 'This HIDDEN Bunker Gives You The BEST Car in GTA 6!', channel: 'Schlayer', cat: 'vehicles', views: 678853, hoursAgo: 16, duration: '01:18', note: '隐藏地堡直接白嫖顶级性能超跑点位' },
  { id: 'tRZu-sjvyHA', title: 'GTA 6 Tips And Tricks I Wish I Knew Earlier（开荒必看）', channel: 'JorRaptor', cat: 'starter', views: 563869, hoursAgo: 24, duration: '09:16', note: '老玩家总结的前期最容易忽略的操作与系统技巧' },
  { id: 'zzJrBYsV39Y', title: 'GTA 6 - 23 HUGE Tips You NEED to Know on Day 1', channel: 'BennyCentral', cat: 'starter', views: 545428, hoursAgo: 25, duration: '12:49', note: '首日 23 条核心实战技巧，新手快速上手' },
  { id: '5-OQPwar3oQ', title: '坠机、UFO 与麦克彩蛋：15 个你错过的隐藏细节', channel: 'The GTA Assassin', cat: 'easter', views: 474313, hoursAgo: 22, duration: '08:35', note: '串联前作主角彩蛋与莱奥尼达神秘事件' },
  { id: 'bCKm934JnY0', title: '50 GTA 6 Easter Eggs & Secrets!（50 个彩蛋大合集）', channel: 'ZacCoxTV', cat: 'easter', views: 461786, hoursAgo: 26, duration: '13:21', note: '目前最全的莱奥尼达隐藏彩蛋速览合集' },
  { id: 'ie4vtIle3lU', title: 'GTA 6 载具系统全解析：操控、转向灯与深度改装', channel: 'Digital Car Addict', cat: 'vehicles', views: 448280, hoursAgo: 23, duration: '13:32', note: '深度拆解新一代车辆物理、油量与自定义细节' },
  { id: 'ldrj5hTraFY', title: 'GTA 6 最佳画面与手柄设置：立刻修改的 24 项参数', channel: 'NIXNE', cat: 'starter', views: 428181, hoursAgo: 28, duration: '06:58', note: '大幅提升瞄准手感与主机帧率流畅度' },
  { id: 'ijiUKmXx69Y', title: '全图 14 家改装厂详解：各店专属套件与改车差异', channel: 'Digital Car Addict', cat: 'vehicles', views: 412506, hoursAgo: 15, duration: '21:37', note: '想改出稀缺外观件必看的分店专属清单' },
  { id: 'xRiJZOrxV6Y', title: '隐藏地堡免费白嫖火箭筒（Rocket Launcher）点位', channel: 'Tristan', cat: 'weapons', views: 394146, hoursAgo: 21, duration: '01:31', note: '开局就能直接去拿的重火力武器位置' },
  { id: 'ZrtuF9Gx9Bk', title: '全章节通用刷钱法：每小时稳定赚 $500,000', channel: 'Caspahz', cat: 'money', views: 351265, hoursAgo: 14, duration: '01:57', note: '不到 2 分钟讲透当前最高效循环赚钱路线' },
  { id: '7Ph0yQ5q3wE', title: 'GTA 6 车辆深度改装实机展示与涂装玩法', channel: 'HarmNone', cat: 'vehicles', views: 346300, hoursAgo: 29, duration: '10:15', note: '超跑宽体、内饰细节与轮毂配色实测' },
  { id: 'DM1Au7JTzcE', title: '每小时 $500,000 速刷赚钱流程与路线演示', channel: 'MrDalekJD', cat: 'money', views: 320915, hoursAgo: 12, duration: '08:05', note: '完整路线跟跑教学，适合缺钱买车买枪阶段' },
  { id: 'dRY6hMN63ic', title: '前期就能拿到的 2 把隐藏传奇武器点位', channel: 'Misleading', cat: 'weapons', views: 295975, hoursAgo: 24, duration: '01:19', note: '开荒期瞬间拉高火力的隐藏传奇枪速拿' },
  { id: '1WmPpT2cjUY', title: 'GTA 6 作弊码怎么解锁与使用（含 $250K 现金码）', channel: 'Riot Clipping', cat: 'cheats', views: 223173, hoursAgo: 17, duration: '00:31', note: '30 秒看懂作弊码输入规则与存档提醒' },
  { id: 'TuHgODe6GWE', title: '潜入 GTA 6 深海洞穴：水下秘宝与恐怖深渊实探', channel: 'Dr Mod', cat: 'easter', views: 206857, hoursAgo: 16, duration: '14:41', note: '配合 33 处水下探索与 Kenton 收藏食用' },
  { id: 'v7bcehsh6Co', title: 'GTA 6 街头 ATM 提款机抢劫与脱警教学', channel: 'GosuNoob', cat: 'money', views: 145470, hoursAgo: 23, duration: '05:50', note: '前期零成本启动资金实操技巧' },
  { id: 'JQ4N2fXEIvE', title: '免费满改肌肉车隐藏刷车点合集', channel: 'JFM', cat: 'vehicles', views: 141240, hoursAgo: 22, duration: '01:48', note: '不用花改装费直接开走的隐藏定制车' },
  { id: '630BqbOSVRI', title: 'PS5 与 Xbox 全 61 条作弊码汇总与解锁方式', channel: 'SubscribeForTacos', cat: 'cheats', views: 124934, hoursAgo: 25, duration: '03:08', note: '开作弊前务必手动存档以免锁定奖杯' },
  { id: 'HDjSPIX58dc', title: 'GTA 6 隐藏异次元空间彩蛋完整触发攻略', channel: 'TheGamingRevolution', cat: 'easter', views: 98601, hoursAgo: 18, duration: '06:55', note: '深入探索罪城异空间彩蛋触发条件' },
  { id: '6zIMaVo2QxU', title: '你可能不知道的冷门 GTA 6 惊喜彩蛋', channel: 'DrippyHimself', cat: 'easter', views: 78603, hoursAgo: 21, duration: '00:54', note: '一分钟速览高能街头彩蛋' },
  { id: 'gs_66AXjGes', title: 'Dexter 嗜血法医全彩蛋合集（公寓、船只与海底骸骨）', channel: 'TheGamingRevolution', cat: 'easter', views: 69382, hoursAgo: 22, duration: '03:20', note: 'Washington Island 经典美剧致敬点位' },
  { id: '18PWqFgCQ4U', title: '隐藏街头赛车点位与专属定制车辆获取', channel: 'CovertMF', cat: 'vehicles', views: 69346, hoursAgo: 15, duration: '03:04', note: '夜间飙车党专属涂装车收集路线' },
  { id: 'pswoO1qeYM0', title: '全图集换卡（Collectible Cards）100% 收集攻略', channel: 'How to Everything', cat: 'cheats', views: 53600, hoursAgo: 20, duration: '09:09', note: '冲刺 15 套集换卡奖杯必备路线' },
  { id: '4Cncf9oTAIA', title: '全 55 项成就奖杯解析：隐藏结局与 UFO 奖杯条件', channel: 'TheGamingRevolution', cat: 'cheats', views: 49091, hoursAgo: 27, duration: '04:08', note: '白金党提前规划防漏奖杯清单' },
  { id: 'epv3Oxf7bps', title: '银行运钞车（Security Van）固定刷新路线图', channel: 'Gamers Heroes', cat: 'money', views: 47672, hoursAgo: 14, duration: '02:17', note: '沿线蹲守高额现金运钞车稳定变现' },
  { id: 'm7Boio7NE1A', title: '完美开局必做的 7 件小事（1 分钟速查）', channel: 'Aiming4Gaming', cat: 'starter', views: 47061, hoursAgo: 13, duration: '00:51', note: '极简节奏梳理新手前 30 分钟路线' },
  { id: 'VzLf5anMLaE', title: '全 61 条作弊码实机演示与逐条解锁条件', channel: 'Atlas Baudelaire', cat: 'cheats', views: 41301, hoursAgo: 16, duration: '12:46', note: '附带全部武器、载具与天气作弊演示' },
  { id: 'AXHgTg6AfAk', title: 'GTA 6 全作弊码详尽图文与按键指南', channel: 'Gamer Onus', cat: 'cheats', views: 15133, hoursAgo: 9, duration: '15:22', note: '最新验证补全版作弊码手册' },
  { id: '9BYalGApxjo', title: '隐藏忍者神龟起源故事彩蛋（TMNT Easter Egg）', channel: 'Dynasty', cat: 'easter', views: 13773, hoursAgo: 7, duration: '11:03', note: '下水道神秘彩蛋完整探索路线' },
  { id: 'oQo8uF6f5ek', title: '如何单次洗劫 $205,000 大型银行金库', channel: 'Five Star Replays', cat: 'money', views: 13267, hoursAgo: 11, duration: '01:07', note: '第 4 章最强印钞机标准作业流程' },
  { id: 'bNqea0o7q5Q', title: 'President Russo 手枪与 Cold War 步枪地堡门禁密码', channel: 'LunarGaming', cat: 'weapons', views: 12223, hoursAgo: 17, duration: '05:14', note: '实机输入 085355、010317 与 2975 全程演示' },
  { id: 'yBssT_OwdXs', title: '进游戏第一件事该做什么（零剧透新手向导）', channel: 'How to Everything', cat: 'starter', views: 8774, hoursAgo: 28, duration: '08:47', note: '适合刚买游戏还没进主线的纯萌新' },
  { id: 'C-t6lM41hns', title: '全奖杯白金防漏指南：哪些支线千万别错过', channel: 'How to Everything', cat: 'cheats', views: 8050, hoursAgo: 21, duration: '08:11', note: '梳理所有容易卡 99% 的易漏点' },
  { id: 'j7C4PZGxQ38', title: '灯塔幽灵船神秘彩蛋（Ghost Ship Mystery）', channel: 'TheGamingRevolution', cat: 'easter', views: 7050, hoursAgo: 12, duration: '18:22', note: '特定天气与时间段触发的海面奇观' },
  { id: 'VAtgNfhV3z4', title: '废车场隐藏地堡高价值战利品速拿点', channel: 'GTA6FOB', cat: 'weapons', views: 3762, hoursAgo: 20, duration: '01:03', note: '前期免费补给武器与现金的好去处' },
  { id: 'OhnhY5o4iWo', title: '1980s 复古罪城传送门与汤米花衬衫全步骤攻略', channel: 'MrBossFTW', cat: 'easter', views: 2150000, hoursAgo: 14, duration: '17:04', note: '12 座 LPL 变电站按 LIFE IS PASSING ME BY 顺序踩点' },
  { id: 'jiOwGho58To', title: 'UFO 与 2314 设施外星人营救：永久提升血量体力聚焦', channel: 'Trippy Commentaries', cat: 'easter', views: 1710000, hoursAgo: 10, duration: '14:52', note: '第 2 章起夜晚星光旅馆东侧触发，实用度拉满' },
  { id: 'I6tV_rFNghA', title: 'GTA 6 极速超跑 Top 20 直线与弯道实测排名', channel: 'Broughy1322', cat: 'vehicles', views: 1490000, hoursAgo: 15, duration: '22:14', note: 'Andrew Node Thrax 与三款 Emerus 极限圈速对比' },
  { id: 'FvbVccBoVds', title: '第一章 Tourist Trap 前全收集与地板藏钱实测', channel: 'PowerPyx', cat: 'starter', views: 1260000, hoursAgo: 22, duration: '14:15', note: '保住开荒资产与门口信箱赏金的关键操作' },
  { id: 'N_yUb7vc5mY', title: '双人抢劫传袋教学：厢式货车搬空全部 8 袋现金', channel: 'TGG', cat: 'money', views: 1180000, hoursAgo: 19, duration: '11:20', note: '十字键右+圆圈传袋配合染料包干扰器实战' },
  { id: '0NIez05L0YE', title: 'Port Gellhorn 全部 8 把传奇武器精确点位实录', channel: 'FuzzyBearbarian', cat: 'weapons', views: 1120000, hoursAgo: 12, duration: '15:12', note: '含树顶沙发左轮与保龄球可选任务霰弹枪' },
  { id: 'nHoerwzaAAk', title: '100% 奖杯漫漫长路最快白金路线规划（200 小时压缩）', channel: 'PowerPyx', cat: 'cheats', views: 1090000, hoursAgo: 26, duration: '24:36', note: '按权重拆解 12 项核心达标指标' },
  { id: 'X08cBTfKpP4', title: 'Gullet 沼泽臭鼬猿 Skunk Ape 与巨型变异蟹遭遇指南', channel: 'Nought', cat: 'easter', views: 1040000, hoursAgo: 21, duration: '12:08', note: 'Grassrivers 湿地夜间拍照触发点' },
  { id: 'UOOoHDzfhWk', title: 'Black Widow Emerus 免费集装箱拿法与第 3 章切割工具', channel: 'Kyr Speedy', cat: 'vehicles', views: 960000, hoursAgo: 17, duration: '10:33', note: '省下巨额购车款的 8.9 极速超跑白嫖路线' },
  { id: '--mU3IJVZ6I', title: '第 3 章易错过传奇手枪 Money Bag 1992 拿法提醒', channel: 'WikiGameGuides', cat: 'weapons', views: 880000, hoursAgo: 13, duration: '09:15', note: '任务 The Missing Link 阶段务必顺手拿走' },
  { id: 'SnsyDUm6zfw', title: 'Gambit Bay 摩托艇 Cool Dog 彩蛋与 $1,218 钱包彩蛋', channel: 'Easter Egg Hunter', cat: 'easter', views: 840000, hoursAgo: 20, duration: '07:56', note: '海湾巡游路线顺手拿隐藏钱包' },
  { id: 'LiY1RXa9gGw', title: '隐藏电台 The Vault 解锁：夜店 WAiNK 扫描毒气面具海报', channel: 'GTAMen', cat: 'easter', views: 790000, hoursAgo: 16, duration: '08:41', note: 'Downtown Vice City 夜店内部实拍位置' },
  { id: 'ytOHzoDyMIQ', title: '*NEW* UNLIMITED MONEY GLITCH IN GTA 6!（免存档无限刷钱新漏洞实测）', channel: 'MrDalekJD', cat: 'money', views: 663914, hoursAgo: 5, duration: '01:25', note: '过去 24 小时最高播放刷钱教学，无需反复切存档即可循环触发' },
  { id: 'GotN7bLCgpU', title: 'GTA 6 - What\'s New In the First Patch?（首日补丁 1.002.001 更新全拆解）', channel: 'IGN', cat: 'starter', views: 634658, hoursAgo: 6, duration: '01:14', note: '官方首个更新修复 7 项恶性 Bug、补回缺失特性并升级雨天粒子画质' },
  { id: '3-DB9LLfYTo', title: '21 Secrets You Will REGRET Missing In GTA 6!（21 个错过必悔的隐藏秘密）', channel: 'MrRoflWaffles', cat: 'easter', views: 330889, hoursAgo: 8, duration: '12:01', note: '涵盖红鹦鹉提示藏钱格栅、限时传奇枪与早期高价值隐藏互动' },
  { id: 'ZoDqVAmqBOg', title: 'First GTA 6 Update Adds Missing Feature & More...（1.002.001 补丁实机对比）', channel: 'JorRaptor', cat: 'starter', views: 127949, hoursAgo: 7, duration: '01:56', note: '实测首日补丁新增功能细节与主机帧率稳定性提升' },
  { id: '91q_-8PHRgc', title: 'GTA 6: Safe Codes You Need (Save This)（全图必存保险箱与门禁密码速查）', channel: 'Manatee GTA', cat: 'weapons', views: 91123, hoursAgo: 9, duration: '00:52', note: '52 秒速记全图固定门禁密码与传奇武器保险箱开锁码' },
  { id: 'GdQae4QznVM', title: '*NEW* UNLIMITED MONEY GLITCH $500K/H（每小时 50 万无限刷钱实测）', channel: 'MrDalekJD', cat: 'money', views: 567795, hoursAgo: 4, duration: '01:47', note: '1 分 47 秒完整演示最新每小时 $500K 刷钱循环与触发点位' },
  { id: 'EFLcrYJEkpc', title: 'GTA 6 机场大型劫案 Airport Heist 4K 完整实机流程', channel: 'Shirrako', cat: 'money', views: 481892, hoursAgo: 6, duration: '43:05', note: '4K 超清无剪辑实录机场劫案潜行、交火与撤离全流程' },
  { id: 'QHtBvEUgCp4', title: 'GTA 6 深度最佳画面与操控设置指南（GhillieMaster 实测）', channel: 'GhillieMaster', cat: 'starter', views: 173203, hoursAgo: 7, duration: '12:02', note: '逐项拆解瞄准辅助、死区、视角与主机性能模式最优配置' },
  { id: 'Ce47LOQauQY', title: '前期必拿隐藏消音手枪 Assassin Nipper .38 精确点位', channel: 'Mon Facts', cat: 'weapons', views: 141230, hoursAgo: 5, duration: '01:35', note: '第一章开荒即可免费拿到的沉船隐藏消音传奇手枪' },
  { id: '-TMOZIF_UwA', title: 'GTA 6 全图隐藏车辆刷新点速查（Every Secret Car Location）', channel: 'RipItRandy GTA', cat: 'vehicles', views: 130324, hoursAgo: 4, duration: '01:15', note: '75 秒速览全图免费稀有定制车与隐藏刷车坐标' },
  { id: 'x8dhhsDEcZk', title: '零剧透新手必看：游玩前最希望早知道的 25 件事', channel: 'GameSight', cat: 'starter', views: 97218, hoursAgo: 8, duration: '12:41', note: '无剧透梳理开荒经济、载具后备箱与任务避坑要点' },
  { id: 'zp1-8v1HtO8', title: '劫案筹备任务 Heist Planning 完整前置攻略', channel: 'GuidingLight', cat: 'money', views: 83520, hoursAgo: 5, duration: '02:03', note: '快速完成全部劫案前置侦察与准备目标，避免卡关' },
  { id: 'm_fD92vrB10', title: '全作最快超跑 Thrax 45 秒速拿路线指南', channel: 'Dec Games', cat: 'vehicles', views: 80346, hoursAgo: 3, duration: '00:45', note: '极速第一超跑 Thrax 的精确刷车与获取路线演示' },
  { id: '-ktc3V-UWjI', title: '第 3 章 Cartel Heist 保险箱开锁练习任务速通教学', channel: 'TyphoonX', cat: 'money', views: 48976, hoursAgo: 4, duration: '01:01', note: '1 分钟讲透开锁节奏与判定点，快速通过劫案前置训练' },
  { id: 'GJsRRqqYVYw', title: '全图隐藏传奇武器点位合集（Every Secret Weapon Location）', channel: 'RipItRandy GTA', cat: 'weapons', views: 36754, hoursAgo: 3, duration: '01:07', note: '1 分钟高密度盘点全图多把免费隐藏传奇武器坐标' },
  { id: 'GxoUusz9Js4', title: '前期开荒必拿的 3 把隐藏免费强力武器点位', channel: 'Spawn Szn', cat: 'weapons', views: 35722, hoursAgo: 6, duration: '00:40', note: '40 秒速查开局立刻提升火力的 3 处隐藏枪械位置' },
  { id: 'ZGm3EaIJrks', title: '犯罪档案隐藏判定解析：GTA 6 如何在暗中评价你的玩法', channel: 'Mr. AK', cat: 'starter', views: 33188, hoursAgo: 5, duration: '01:08', note: '一分钟看懂五级犯罪档案对聚焦充能与剧情细节的影响' },
  { id: 'y6kVhh5-qb4', title: '40 秒速览 GTA 6 当前最高效赚钱方式', channel: 'Craszy', cat: 'money', views: 32158, hoursAgo: 4, duration: '00:40', note: '极简快节奏总结当前版本最稳的刷钱与销赃循环' },
  { id: 'ELaR1Ui6O7A', title: '第 3 章 Cartel Heist 银行金库快速开启实操演示', channel: 'Gamitu', cat: 'money', views: 26456, hoursAgo: 7, duration: '00:28', note: '28 秒直击 Sinfrontera 银行金库开启关键步骤' },
  { id: 'IE_ttpmDzdg', title: '隐藏黄金 AK 传奇步枪精确获取点位（Golden AK）', channel: 'Rodwenn', cat: 'weapons', views: 10986, hoursAgo: 4, duration: '00:17', note: '17 秒直指全图隐藏黄金 AK 步枪刷新坐标' }
];

const SWEEP_DATA = {
  'port-gellhorn': {
    name: 'Port Gellhorn 格尔霍恩港', sub: '第 2 章核心扫荡区 / 8 把传奇武器 + UFO 2314', image: 'assets/port-gellhorn.jpg', fallback: 'https://i.ytimg.com/vi/0NIez05L0YE/hqdefault.jpg',
    items: [
      { id: 'pg-1', title: 'Couch Potato Mustang .357（传奇左轮）', detail: 'Tanglewood Ln 打断树上吊着沙发的绳索并坐上去触发' },
      { id: 'pg-2', title: 'Clunker 556（传奇步枪）', detail: 'Brooks Boatworks 船厂二楼办公室桌旁直接拾取' },
      { id: 'pg-3', title: 'Kolt & Associates 556', detail: 'Brooks 船厂东侧藏匿屋（Stash House）内部战利品箱' },
      { id: 'pg-4', title: 'Scrapper VF5C（传奇冲锋枪）', detail: 'La Cascara Motel 汽车旅馆顶楼房间' },
      { id: 'pg-5', title: 'Kolt & Associates Vatra', detail: 'June Warehouse 仓库深处货架区域' },
      { id: 'pg-6', title: 'Gutterball Moreland 850（定制霰弹枪）', detail: '完成 Coffee Break 后接取可选任务 Hit Kingpin Bowling' },
      { id: 'pg-7', title: '枪店限定：Fortune & Son Gorse 425 / Darknite Drifter', detail: 'Pawn & Gun ($1,790) 与 Gellhorn Outfitters ($2,420) 购入' },
      { id: 'pg-8', title: 'UFO 目击 + 2314 设施永久三维加成', detail: '第 2 章起夜晚 Starlet Motel 东侧看 UFO，再进南部设施输 2314 营救' }
    ]
  },
  'vice-city': {
    name: 'Vice City 罪恶都市', sub: '第 3-4 章主战场 / 隐藏电台 + 免费超跑 + 大金库', image: 'assets/vice-city.jpg', fallback: 'https://vice6map.com/assets/screenshots/vice-city-ocean-drive.jpg',
    items: [
      { id: 'vc-1', title: '解锁隐藏电台 The Vault', detail: 'Downtown Vice City 夜店内用 WAiNK（R1/RB）扫红色毒气面具海报' },
      { id: 'vc-2', title: '免费拿 Black Widow Emerus（8.9 极速）', detail: '第 3 章获得切割工具后开启码头指定集装箱直接开走' },
      { id: 'vc-3', title: '防漏传奇枪：Money Bag 1992', detail: '第 3 章主线任务 The Missing Link 流程中务必顺手拾取' },
      { id: 'vc-4', title: '小古巴 Yasmani 高价销赃线', detail: '珠宝与标记钞票优先送小古巴，收益显著高于普通黑市' },
      { id: 'vc-5', title: 'Washington Island Dexter 彩蛋', detail: '探索华盛顿岛公寓与码头船只致敬彩蛋' }
    ]
  },
  'leonida-keys': {
    name: 'Leonida Keys 群岛', sub: '第 1 章开荒必扫 / 藏钱防漏 + 复古罪城起点', image: 'assets/leonida-keys.jpg', fallback: 'https://i.ytimg.com/vi/FvbVccBoVds/hqdefault.jpg',
    items: [
      { id: 'lk-1', title: 'Jason 卧室松动地板藏钱 + 门口信箱领赏', detail: '解锁 BuckMe 银行前所有现金务必存地板，离岛前清光' },
      { id: 'lk-2', title: 'Key Lento 无线电塔彩蛋开关', detail: '登顶拨动电源并按身后按钮，开启 12 座 LPL 变电站传送门线' },
      { id: 'lk-3', title: 'Big Pine 地堡密码 085355', detail: '输入 085355 进入隐藏地堡获取传奇步枪 Cold War 556' },
      { id: 'lk-4', title: 'Sharktooth 岛门禁 010317 / 保险箱 2975', detail: '输入双密码解锁传奇手枪 Russo\'s 1992' },
      { id: 'lk-5', title: 'Gambit Bay 摩托艇 Cool Dog 彩蛋', detail: '海湾骑水上摩托触发事件可捡 $1,218 钱包' }
    ]
  },
  'grassrivers': {
    name: 'Grassrivers 草河湿地', sub: '沼泽怪谈与水下秘宝扫荡区', image: 'assets/grassrivers.jpg', fallback: 'https://i.ytimg.com/vi/X08cBTfKpP4/hqdefault.jpg',
    items: [
      { id: 'gr-1', title: 'Gullet 沼泽臭鼬猿 Skunk Ape', detail: '夜间深入湿地深处触发稀有神秘生物目击' },
      { id: 'gr-2', title: '巨型变异蟹遭遇点', detail: '沼泽岸边探索隐藏生物彩蛋并完成动物研究计数' },
      { id: 'gr-3', title: 'Tola Bay 电脑密码 President Russo 0612', detail: '解锁据点终端隐藏情报与高价值战利品' },
      { id: 'gr-4', title: 'Pelican Valley 保险箱 0072 / 门禁 0212', detail: '双密码开启密室拿到传奇武器 Crabshack VF5' }
    ]
  },
  'mount-kalaga': {
    name: 'Mount Kalaga 卡拉加山国家公园', sub: '山林彩蛋、无人机赛道与 100% 冲刺区', image: 'assets/mount-kalaga.jpg', fallback: 'https://i.redd.it/lf1754vhgw3f1.jpeg',
    items: [
      { id: 'mk-1', title: '山顶粉色发光陨石彩蛋', detail: '攀登国家公园高地寻找发光陨石奇观' },
      { id: 'mk-2', title: '峡谷 Top Fun 无人机计时赛', detail: '完成山谷穿障赛道推进 42 项无人机 100% 进度' },
      { id: 'mk-3', title: '稀有野生动物研究点', detail: '补齐 100 种野生动物研究清单的高密度区域' },
      { id: 'mk-4', title: '废车场与山林隐藏地堡', detail: '搜刮重火力免费火箭筒与高额战利品箱' }
    ]
  }
};

const REGIONS = [
  { name: 'Vice City 罪恶都市', county: 'Vice-Dale 郡', desc: '第 3 与第 4 章主战场，涵盖 Ocean Beach、Downtown 与小古巴。聚集珠宝店、Randy 超跑订单、The Vault 隐藏电台与大型金库。', image: 'assets/vice-city.jpg', fallback: 'https://vice6map.com/assets/screenshots/vice-city-ocean-drive.jpg' },
  { name: 'Leonida Keys 群岛', county: 'Mariana 郡', desc: '第 1 章开荒起点 Key Lento 所在海域。包含 Jason 卧室藏钱暗格、门口赏金信箱、无线电塔彩蛋起点及浅海沉船秘宝。', image: 'assets/leonida-keys.jpg', fallback: 'https://i.ytimg.com/vi/FvbVccBoVds/hqdefault.jpg' },
  { name: 'Port Gellhorn 格尔霍恩港', county: 'Kelly 郡', desc: '第 2 章核心工业与公路城镇。藏有 8 把高性价比传奇武器、Moses 偷车销赃线，以及星光旅馆东侧夜间 UFO 遭遇点。', image: 'assets/port-gellhorn.jpg', fallback: 'https://i.ytimg.com/vi/0NIez05L0YE/hqdefault.jpg' },
  { name: 'Grassrivers 湿地沼泽', county: 'Leonard 郡', desc: '鳄鱼与气垫船纵横的原始湿地。出没臭鼬猿 Skunk Ape、巨型变异蟹与多处非法帮派藏匿点，长途穿越务必盯紧油量。', image: 'assets/grassrivers.jpg', fallback: 'https://i.ytimg.com/vi/X08cBTfKpP4/hqdefault.jpg' },
  { name: 'Ambrosia 工业腹地', county: 'Leonard 郡东缘', desc: '重工业与货运枢纽区域，遍布地下飙车、重型货车截劫路线与高危帮派据点，适合刷 200 辆载具扫描进度。', image: 'assets/ambrosia.jpg', fallback: 'https://preview.redd.it/absolutely-breathtaking-screenshot-of-ambrosia-from-gta-6-v0-k78ocmce05af1.jpeg?auto=webp&s=d7c4ff612e7d52f2c3e4f6799ad3fb1c522d855d' },
  { name: 'Mount Kalaga 国家公园', county: 'Lummox 郡北部', desc: '盘山峡谷与森林秘境，分布粉色发光陨石、稀有野生动物研究点、无人机高速穿峡赛道以及多处隐藏地堡入口。', image: 'assets/mount-kalaga.jpg', fallback: 'https://i.redd.it/lf1754vhgw3f1.jpeg' }
];

const MECHANICS = [
  { id: 'cash-stash', cat: 'economy', meta: '经济与劫案 / 开荒必看', title: '现金防丢机制与 Jason 卧室地板暗格', body: '开局前 1 到 2 小时尚未解锁银行账户，所有收入均为随身现金，阵亡或被捕会直接清零。完成任务 Buck Me 解锁 BuckMe 手机银行前，务必随时把现金存回安全点，且主线与支线赏金必须去 Jason 家门口信箱亲自领取。', tip: '操作要点：调查 Jason 卧室松动地板即可藏钱；第 1 章结尾 Tourist Trap 会清空旧宅与随身现金，离岛前先处理完毕。', spoiler: false },
  { id: 'robbery-bags', cat: 'economy', meta: '经济与劫案 / 抢劫与销赃', title: '染料包陷阱、赃物袋容量与双人传袋', body: '保险箱密码全随机。银行与发薪日贷款店现金常藏有染料包，离开建筑即引爆毁钱，必须推进到第 3 章拿到染料包干扰器后再下手。双主角每人最多背 2 个赃物袋，厢式货车与皮卡可装 8 个，摩托车无法装袋。', tip: '双人配合：按十字键右再按圆圈或 B 可将赃物袋传给搭档，一人送去销赃，另一人负责甩警。', spoiler: false },
  { id: 'fences', cat: 'economy', meta: '经济与劫案 / 销赃差价', title: '销赃人（Fence）收购偏好与高价策略', body: '赃物分为违禁品、珠宝和标记钞票三大类。小古巴的 Yasmani 对珠宝与标记钞票报价最高，Tyrone 对违禁品出价最慷慨；提升信任后还可解锁付费上门取货。', tip: '避坑提醒：得手大额赃物先销赃并存银行，避免载具被扣押时连车带包一并没收。', spoiler: false },
  { id: 'criminal-profile', cat: 'combat', meta: '战斗与档案 / 五阶评级', title: '犯罪档案（Criminal Profile）五级体系', body: 'Jason 与 Lucia 各自独立记录犯罪风格：Professional、Hardened、Violent、Psycho 与 Irredeemable。潜行与非致命制服偏向专业路线，屠杀路人或警员会迅速滑向狂徒。', tip: '随时查看：打开地图按 L1 / LB 切换至双主角页签，或游玩时直接长按十字键右在右下角呼出。', spoiler: false },
  { id: 'focus-mode', cat: 'combat', meta: '战斗与档案 / 子弹时间', title: '聚焦模式（L3+R3）与非致命四肢点射', body: '按下 L3+R3 启动慢动作聚焦时，敌人四肢与肩膀高亮黄色非致命区，命中使其倒地而不致死。Professional 与 Hardened 靠潜行和非致命充能，Violent 与 Psycho 靠爆头充能，跌至 Irredeemable 会永久失去全部聚焦充能加成。', tip: '实战配装：走专业路线推荐消音手枪点射四肢，既保高额充能又压低通缉热度。', spoiler: false },
  { id: 'wanted-heat', cat: 'combat', meta: '战斗与档案 / 警务记忆', title: '新版通缉 Heat 与 CCTV 监控识别', body: '莱奥尼达警方会持续记录你的外貌、服装、载具、武器、搭档以及沿途 CCTV 监控影像，并在后续街头巡逻中认出你。', tip: '脱身习惯：做完大票及时换装换车，行动前留意监控视角，且不要携带武器进入机场。', spoiler: false },
  { id: 'trunk-fuel', cat: 'combat', meta: '载具与生存 / 57 座加油站', title: '后备箱武器库、车辆油耗与 14 家改装厂', body: '重型长枪可收纳进汽车后备箱，避免满街背枪引发路人报警。全图分布 57 座加油站与 14 家改装厂，燃油余量与引擎损伤都会真实影响极速和逃逸表现。', tip: '养成习惯：长途进沼泽或进山前先加满油并检查引擎，定期带主角健身提升基础耐力。', spoiler: false },
  { id: 'legendary-rules', cat: 'weapons', meta: '武器与密码 / 127 把传奇枪', title: '127 把黄色传奇武器分布与双主角共享规则', body: '全图共有 127 把黄色高亮独立变体武器：39 把世界探索拾取、31 把非法行动奖励、24 把枪店购买、15 把主线与彩蛋专属。任意一名主角获取后，Jason 与 Lucia 永久共享。', tip: '防漏预警：第 3 章任务 The Missing Link 中的 Money Bag 1992 属于易错过武器，任务内务必顺手拾取。', spoiler: false },
  { id: 'bunker-codes', cat: 'weapons', meta: '武器与密码 / 实测密码合集', title: '四大隐藏地堡、海岛门禁与保险箱密码', body: 'Big Pine 地堡输入 085355 拿 Cold War 556；Sharktooth 岛门禁 010317、保险箱 2975 拿 Russo\'s 1992；Tola Bay 电脑密码 President Russo 0612；Pelican Valley 保险箱 0072、门禁 0212 拿 Crabshack VF5。', tip: '输入提示：上述 4 组为固定剧情/探索密码，而普通商铺与银行保险箱仍为每次随机密码。', spoiler: false },
  { id: 'vice-portal', cat: 'easter', meta: '隐藏彩蛋 / 1980s 复古罪城', title: '汤米花衬衫与 1980 年代复古罪城传送门', body: '先登顶 Key Lento 无线电塔拨动电源并按下身后按钮，随后严格按 LIFE IS PASSING ME BY 字母顺序依次访问全图 12 座 LPL 变电站，即可开启 1980s 复古罪城传送门。', tip: '变电站分布：Downtown、Balsero、Key Lento、Penmarch Isle、Crosstown、Port Gellhorn、Hamlet（3 处）、Gloriana Key、North Mariana County。', spoiler: true },
  { id: 'ufo-2314', cat: 'easter', meta: '隐藏彩蛋 / 永久三维加成', title: 'UFO 遭遇与 2314 研究设施营救外星人', body: '第 2 章起夜晚前往 Port Gellhorn 东侧 Starlet Motel 附近可目击 UFO 并解锁奖杯 The Truth Is Out There；随后前往南部研究设施输入门禁 2314 营救活体外部生命，即可获得永久生命值、体力与聚焦上限加成。', tip: '收益评级：全作实用价值最高的隐藏彩蛋，建议第 2 章一解锁就优先完成。', spoiler: true },
  { id: 'secret-radio', cat: 'easter', meta: '隐藏彩蛋 / 隐藏电台与怪谈', title: 'The Vault 隐藏电台、Cool Dog 与臭鼬猿', body: '在 Downtown Vice City 的 The Vault 夜店内用 WAiNK 应用（R1/RB）扫描红色毒气面具海报即可解锁隐藏电台；Gambit Bay 水上摩托遇 Cool Dog 可得 $1,218 钱包；Gullet 沼泽可遇臭鼬猿与巨型变异蟹；Jason 屋外停着 GTA 5 麦克的游艇。', tip: '补充彩蛋：Washington Island 可找到 Dexter 公寓与船只，Mount Kalaga 山顶藏有发光粉色陨石。', spoiler: true },
  { id: 'black-eagle-codes', cat: 'weapons', meta: '武器与密码 / Balsero 军火库双传奇枪', title: 'Black Eagle 仓库双密码（789987 / 031462）与两把传奇武器', body: '位于罪恶都市西侧 Balsero（Griffin 靶场旁 Black Eagle 枪店右侧）。先进枪店后台员工室，用相机或瞄准镜放大对面墙上的靶纸读出办公室门禁 789987；从装卸区溜进仓库输入 789987 进入办公室，查看电脑与绿色便签（店主母亲生日）得到保险箱密码 031462（首位 0 必填），打开即得银色虎纹传奇手枪 Black Eagle Import Kalinga .50。', tip: '第二把传奇枪：前往仓库后方铁丝网围栏区，开叉车移开挡路木箱即可打开武器箱拿走传奇步枪 Black Eagle Import M306 TMR。', spoiler: false },
  { id: 'cartel-heist-150k', cat: 'economy', meta: '经济与劫案 / 第 3 章终局完美分红', title: '第 3 章终局 Cartel Heist（Sinfrontera 银行）$150,000 满分攻略', body: '第 3 章收官劫案洗劫贩毒集团洗钱银行 Sinfrontera National Bank（解锁奖杯 Break the Bank）。警报触发仅得 $100,000，普通通关 $120,000，零失误完美执行可拿满 $150,000。前置任务 Hidden Charges 务必炸毁全部 3 座信号塔争取最长金库时间，Company Property 保全全部货物。', tip: '完美细节：大厅听 Karim 口令再击晕标记保安，金库内避开地面电缆，优先装大捆钞票；突围时射击守卫手部夺枪（非致命）以保住 Professional 犯罪档案评级。', spoiler: true },
  { id: 'ch1-free-weapons-parrot', cat: 'weapons', meta: '武器与密码 / 第 1 章防漏与红鹦鹉藏钱', title: '第 1 章 9 把免费武器、CLEAVES 三连密码与会说话的红鹦鹉', body: '第 1 章任务 Don Gone 摧毁 Donnie 汽车前，务必先开后备箱拿走易错过左轮 Donnie\'s H&L .38（拖车内还有专属飞行员墨镜）。Pelican Valley 完整三步解锁：先合屋外电闸，看卧室地板字迹后在电脑输入密码 CLEAVES，再用 0072 开主保险箱（含 $8,000 标记钞票）、0212 开船屋门禁拿传奇步枪 Crabshack VF5。', tip: '红鹦鹉现金暗格：帮邻居 Shirley 跑腿买朗姆酒时翻过侧栏击败匪徒，听笼中红鹦鹉提示“发电机旁有钱”，撬开发电机旁墙面格栅即可拿走大额开荒现金。', spoiler: false },
  { id: 'patch-1002001-timed-weapons', cat: 'easter', meta: '官方补丁与限时武器 / Update 1.002.001', title: '首日补丁 1.002.001 更新要点与两把限时窗口传奇武器', body: 'Rockstar 已推送首个正式补丁 1.002.001，修复 7 项玩家高频反馈的卡死与物理异常、补回缺失交互特性，并显著改善雨天积水反射与粒子表现。同时社区破译出两把严格卡游戏内时间窗口的隐藏传奇武器。', tip: '限时点位：正午 12:00 至 13:00 前往 Ocean Beach 的 Sunlite Motel 二楼红遮阳篷房间互动再走下远端楼梯，开门可得传奇微冲 Little Friend W-10；夜间读 St. Lucia 灯塔日志后于凌晨 01:30 潜入 Little Hardin Island 东侧海底沉船可拿 Cursed Knife 诅咒匕首。', spoiler: false }
];

const SUPERCARS = [
  { rank: 1, name: 'Andrew Node\'s Thrax', speed: '9.2 / 10', tier: '定制超跑', method: '终局高阶竞速与稀缺刷车点获取，全作极速第一' },
  { rank: 2, name: 'Seaspray Emerus', speed: '8.9 / 10', tier: '限定涂装超跑', method: 'Ocean Beach 沿海展厅与高端偷车事件概率刷新' },
  { rank: 3, name: 'Honeycomb Emerus', speed: '8.9 / 10', tier: '限定涂装超跑', method: 'Vice City 富人区车库及高阶街头赛奖励' },
  { rank: 4, name: 'Black Widow Emerus', speed: '8.9 / 10', tier: '黑寡妇定制超跑', method: '第 3 章获得切割工具后开启指定码头集装箱免费拿走' },
  { rank: 5, name: 'Grotti Status RSX', speed: '8.7 / 10', tier: '意式双门超跑', method: 'Legendary Motorsport 购入或 Randy 超跑单周边截获' },
  { rank: 6, name: 'Pegassi Dante\'s Vitello', speed: '8.6 / 10', tier: '中置引擎超跑', method: 'Vice City 市中心夜间俱乐部外围刷新，弯道极稳' },
  { rank: 7, name: 'Overflod Entity MT-R', speed: '8.5 / 10', tier: '赛道级超跑', method: '中后期高端车行上架，加速起步爆发力极强' },
  { rank: 8, name: 'Pfister Comet Vice GT', speed: '8.4 / 10', tier: '公路跑车', method: '第 2 章末即可入手，兼顾高速逃逸与复杂街区操控' }
];

const LEGENDARY_WEAPONS = [
  { rank: 1, name: 'Couch Potato Mustang .357', type: '传奇左轮', cost: '免费探索', location: 'Tanglewood Ln 树上吊着一张沙发，开枪打断绳索后坐上沙发触发获得' },
  { rank: 2, name: 'Clunker 556', type: '突击步枪', cost: '免费探索', location: 'Brooks Boatworks 船厂二楼办公室桌旁直接拾取' },
  { rank: 3, name: 'Kolt & Associates 556', type: '战术步枪', cost: '清理据点', location: 'Brooks 船厂东侧藏匿屋（Stash House）内部战利品箱' },
  { rank: 4, name: 'Scrapper VF5C', type: '紧凑冲锋枪', cost: '免费探索', location: 'La Cascara Motel 汽车旅馆顶楼房间内获取' },
  { rank: 5, name: 'Kolt & Associates Vatra', type: '高精度步枪', cost: '仓库探索', location: 'June Warehouse 仓库深处货架区域拾取' },
  { rank: 6, name: 'Gutterball Moreland 850', type: '定制霰弹枪', cost: '可选任务', location: '完成 Coffee Break 后接取可选任务 Hit Kingpin Bowling 结算奖励' },
  { rank: 7, name: 'Fortune & Son Gorse 425', type: '传奇手枪', cost: '$1,790', location: 'Port Gellhorn 当地 Pawn & Gun 典当枪店直接购买' },
  { rank: 8, name: 'Darknite Drifter', type: '战术武器', cost: '$2,420', location: 'Gellhorn Outfitters 户外装备枪店直接购买' }
];

const CHAPTERS = {
  1: { title: '第 1 章 / Just Like Paradise', missions: 22, region: 'Key Lento 群岛', moneyRate: '约 $35,000 至 $60,000 / 小时', summary: '开局 Lucia 仍在狱中，前期以 Jason 视角在 Key Lento 熟悉走私与基础机制，随后推进至 Lucia 出狱。末尾任务 Tourist Trap 会清空 Jason 旧宅、车辆与随身现金。', moneyStrategy: '商铺速抢配合帮派据点与水下寻宝；务必去 Jason 家门口信箱领赏金，并在解锁 BuckMe 前把现金存进卧室地板。', highlights: ['完成 Buck Me 解锁首个 BuckMe 手机银行账户', '顺手勘察 Key Lento 无线电塔（复古罪城彩蛋起点）', '熟悉聚焦模式 L3+R3、后备箱换枪与载具油量管理'], spoiler: false },
  2: { title: '第 2 章 / Paradise Lost', missions: 11, region: 'Port Gellhorn 周边', moneyRate: '偷车交单稳定起家', summary: '全作节奏最紧凑的过渡章，重心转向 Port Gellhorn。双主角开始搭档执行更高风险行动，同时可以顺手收齐本区 8 把传奇武器与 UFO 2314 永久属性加成。', moneyStrategy: '本阶段性价比最高的赚钱途径是在任务 Moses 后解锁偷车销赃渠道，把指定车辆偷给 Moses 变现，并穿插清理 Port Gellhorn 藏匿屋。', highlights: ['重点任务：What\'s in the Bag?、Moses、Daily Driver', '可选任务 Hit Kingpin Bowling 拿传奇霰弹枪', '夜晚去 Starlet Motel 东侧触发 UFO 与 2314 设施营救'], spoiler: false },
  3: { title: '第 3 章 / TADM', missions: 26, region: '罪恶都市主城区', moneyRate: '珠宝店 $10k-$25k / 超跑 $30k+', summary: '全作任务数最多的一章，正式踏入罪恶都市大都会。双主角深入地下犯罪网络，涵盖高端偷车、珠宝抢劫、银行劫案与大型贩毒集团行动。', moneyStrategy: '本章解锁染料包干扰器与切割工具：珠宝劫案单次 $10,000 至 $25,000，完成 Randy 指定超跑订单单次可达 $30,000 以上；还能免费撬开集装箱拿 Black Widow Emerus。', highlights: ['解锁染料包干扰器，安全洗劫银行与发薪日贷款店', '任务 The Missing Link 别漏掉 Money Bag 1992 传奇手枪', '全面打通小古巴 Yasmani 等高价销赃人网络'], spoiler: true },
  4: { title: '第 4 章 / Vice City, Baby', missions: 25, region: 'Ocean Beach 与全城核心区', moneyRate: '大型金库单次最高约 $205,000', summary: 'Jason 与 Lucia 在 Ocean Beach 自立门户，承接高烈度安保、运送与卧底任务，剧情张力全面拉满。', moneyStrategy: '第 4 章后期开放的大型银行金库是单人模式最强印钞机，单次洗劫最高产出约 $205,000。备好 8 袋容量厢式货车并善用双人传袋，得手立即销赃存行。', highlights: ['Ocean Beach 自建据点与连续高危主线行动', '大型金库成为终局前最高效资金来源', '建议推进至最终章前单独保留一份手动存档'], spoiler: true },
  5: { title: '第 5 章 / Top of the World, Ma', missions: 7, region: '莱奥尼达全境终局', moneyRate: '终局自由探索与白金冲刺', summary: '仅 7 个高密度主线任务构成最终决战，为双主角故事画上句点。通关后全面开放自由探索与各类运动休闲活动。', moneyStrategy: '资金已高度充裕，重心转向 100% 奖杯漫漫长路查漏补缺，补齐靶场金牌、无人机计时赛、集换卡与野生动物研究。', highlights: ['7 场收官任务完成全部 91 个主线节点', '无压力体验深海潜水、篮球与全图彩蛋巡礼', '配合下方 100% 追踪器导出你的白金战绩海报'], spoiler: true }
};

const CHECKLIST_ITEMS = [
  { id: 'story', title: '完成全部 5 章 91 个主线任务', sub: '纯主线约 65 至 70 小时，终局前建议保留手动存档', weight: 50 },
  { id: 'optional', title: '完成核心可选任务（Optional Missions）', sub: '按游戏内进度页完成要求项即可，不必清光所有路人', weight: 6 },
  { id: 'gangs', title: '清理全部 39 处帮派据点（Gang Operations）', sub: '清理据点时务必搜刮所有高价值战利品与武器', weight: 3 },
  { id: 'banks', title: '洗劫 22 家银行、7 家贷款店与 8 座金库', sub: '第 3 章拿到染料包干扰器后再集中清理最省心', weight: 7 },
  { id: 'underwater', title: '完成 33 处水下探索与 7 套 Kenton 收藏', sub: '覆盖莱奥尼达群岛近海与沼泽水域', weight: 5 },
  { id: 'range', title: '在全部 42 项靶场挑战中拿到金牌', sub: '测试各类枪械精度与换弹节奏', weight: 5 },
  { id: 'drones', title: '完成全部 42 项 Top Fun 无人机计时赛', sub: '遍布六大区域的高速穿障赛道', weight: 5 },
  { id: 'bret', title: '以 Jason 身份完成全部 15 组 Bret 目标牌组', sub: '需切换至 Jason 触发与结算', weight: 4 },
  { id: 'cards', title: '集齐 15 套完整集换卡（全图共 480 张 / 18 套）', sub: '无需集齐 18 套，满 15 套即计入 100%', weight: 5 },
  { id: 'waink', title: '完成 100 次 WAiNK 扫描', sub: '街区探索时顺手按 R1/RB 扫描累计', weight: 4 },
  { id: 'vehicles', title: '扫描 200 辆不同载具', sub: '开局见到新车即扫描，中后期轻松达标', weight: 3 },
  { id: 'animals', title: '研究 100 种莱奥尼达野生动物', sub: '覆盖湿地、海滩、深海与 Mount Kalaga 山林', weight: 3 }
];

const DEFAULT_POSTS = [
  { id: 'p-1', title: '实测：第 2 章优先做 UFO 2314 设施营救，永久三维加成太香了', author: '@PortGellhornScout', category: '隐藏彩蛋', upvotes: 268, videoUrl: 'https://www.youtube.com/watch?v=jiOwGho58To', body: '第 2 章晚上先去 Starlet Motel 东侧看一眼 UFO 拿奖杯，接着直接去南部研究设施按 2314 救出外星人。血量、体力和聚焦条上限全部永久上涨。' },
  { id: 'p-2', title: '双人抢劫零损耗：十字键右+圆圈传袋，一人引警一人找 Yasmani', author: '@ViceHeistPro', category: '赚钱路线', upvotes: 204, videoUrl: 'https://www.youtube.com/watch?v=N_yUb7vc5mY', body: '开厢式货车能装 8 袋，背满 2 袋跑不掉时按十字键右再按圆圈（Xbox 按 B）直接传给搭档，让搭档去小古巴找 Yasmani 卖珠宝和标记钞票。' },
  { id: 'p-3', title: '避坑提醒：第 1 章结束任务 Tourist Trap 前把旧宅和现金清空', author: '@LeonidaStarter', category: '开荒避坑', upvotes: 179, videoUrl: 'https://www.youtube.com/watch?v=CiHuzgwaWYw', body: '刚进 Key Lento 时没开 BuckMe 银行一定要把现金藏在 Jason 卧室松动地板里，打 Tourist Trap 前把钱存进账户并领完门口信箱赏金。' }
];

const DEFAULT_FRIENDS = [
  { id: 'f-1', gameId: 'ViceRunner_PS5', platform: 'PS5', note: '每晚 21:00 后在线，主攻 100% 收集与彩蛋实测' },
  { id: 'f-2', gameId: 'LeonidaDrift_X', platform: 'Xbox', note: '周末全天，专注极速超跑改车与海滨摄影' },
  { id: 'f-3', gameId: 'KeyLentoHunter', platform: 'PS5', note: '127 传奇武器全收集进度 94/127，欢迎交流点位' },
  { id: 'f-4', gameId: 'PC_WaitSquad_CN', platform: 'PC', note: '等 PC 版与 GTA 6 Online 上线第一时间组建车队' }
];

const DEFAULT_CHAT = {
  '#开荒互助': [
    { author: '@OceanBreeze', time: '09:12', text: '刚过 Buck Me 解锁银行，终于不用每次跑回地板藏钱了。' },
    { author: '@JasonLuciaFan', time: '09:18', text: '提醒新人：第 1 章结尾 Tourist Trap 前一定去门口信箱把赏金全领了！' }
  ],
  '#彩蛋破译': [
    { author: '@RetroTommy86', time: '08:45', text: '12 座 LPL 变电站必须严格按 LIFE IS PASSING ME BY 顺序踩，错一个都不出传送门。' },
    { author: '@Alien2314', time: '09:05', text: '2314 研究设施救完外星人之后聚焦条明显变长了，强推第 2 章就做。' }
  ],
  '#晒车拍照': [{ author: '@EmerusKing', time: '09:01', text: '刚用第 3 章切割工具从码头集装箱免费开走 Black Widow Emerus，黄昏下漆面绝了。' }],
  '#车队预招': [{ author: '@ViceCrewLead', time: '08:30', text: '提前招收中文联机车队核心成员，PS5/Xbox/未来 PC 版同步集结！' }]
};

const DEFAULT_COMMENTS = {
  'v-jdaixJMV7L8': [{ author: '@KeyLentoNewbie', time: '2 小时前', text: '50 个细节里连车内后视镜和泥浆附着都有，R 星太疯了。' }],
  'v-jiOwGho58To': [{ author: '@NightOwl', time: '1 小时前', text: '亲测第 2 章晚上 11 点在 Starlet Motel 东侧一次刷出 UFO！' }],
  'p-1': [{ author: '@Hardcore100', time: '3 小时前', text: '补一句：去设施之前带一把消音手枪，潜行进去更省时间。' }]
};

function loadStore(key, fallback) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (e) { return fallback; } }
function saveStore(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
function escapeHtml(str) { return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function extractYoutubeId(url) { if (!url) return ''; const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/); return m ? m[1] : ''; }
function calcHeroHeat(s) { const base = (s.views24h / 20000) * s.engagement * s.freshness; return Math.round(s.sponsored ? base * 0.92 : base); }
function calcVideoHeat(v) { const decay = 1 / Math.pow((v.hoursAgo + 6) / 12, 0.55); return Math.round((v.views / 12000) * decay); }
const EN = window.VICE_I18N_EN || null;
function detectDefaultLang() {
  const saved = loadStore('vc_lang', null);
  if (saved === 'zh' || saved === 'en') return saved;
  const primary = String((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase();
  return primary.startsWith('zh') ? 'zh' : 'en';
}
function isEn() { return state.lang === 'en' && Boolean(EN); }
function formatViews(n) {
  if (isEn()) return n >= 1000000 ? (n / 1000000).toFixed(2).replace(/\.00$/, '') + EN.ui.viewsM : (n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + EN.ui.viewsK : n + EN.ui.viewsSuffix);
  return n >= 10000 ? (n / 10000).toFixed(1) + '万播放' : n + '播放';
}

const state = {
  lang: detectDefaultLang(),
  heroSort: 'heat', heroIndex: 0, videoCat: 'all', videoSort: 'heat', videoQuery: '', videoLimit: 12,
  cloudUpdatedAt: '',
  member: loadStore('vc_member_session', null),
  profile: loadStore('vc_player_profile', { handle: '', gameId: '', platform: 'PS5', avatarColor: '#F5B041' }),
  loungeTab: 'chat',
  replyTarget: null,
  reactions: loadStore('vc_reactions', {}),
  myReactions: loadStore('vc_my_reactions', {}),
  activeSweepRegion: 'port-gellhorn', sweepChecked: loadStore('vc_v7_sweep', {}),
  mechCat: 'all', arsenalTab: 'cars', activeChapter: 1, spoilerSafe: false,
  checklist: loadStore('vc_v7_checklist', {}), posts: loadStore('vc_v7_posts', DEFAULT_POSTS),
  upvoted: loadStore('vc_v7_upvoted', {}), postCat: 'all',
  friends: loadStore('vc_v7_friends', DEFAULT_FRIENDS), friendPlat: 'all',
  chatChannel: '#开荒互助', chatMessages: loadStore('vc_v7_chat', DEFAULT_CHAT),
  comments: loadStore('vc_v7_comments', DEFAULT_COMMENTS),
  activeCommentKey: null, activeVideoId: null
};
function getActiveIdentity() {
  if (state.member) {
    return { handle: state.member.displayName, isMember: true, platform: state.member.platform || 'PS5', avatarColor: state.member.avatarColor || '#FF5A36' };
  }
  return { handle: state.profile.handle || '', isMember: false, platform: state.profile.platform || 'PS5', avatarColor: state.profile.avatarColor || '#F5B041' };
}
function rememberPlayerHandle(raw) {
  if (state.member) return;
  const h = String(raw || '').trim(); if (!h) return;
  state.profile.handle = h.startsWith('@') ? h : '@' + h;
  saveStore('vc_player_profile', state.profile);
  applySavedProfileInputs(); syncIdentityUI();
}
function applySavedProfileInputs() {
  const iden = getActiveIdentity();
  if (iden.handle) {
    ['chatAuthorInput', 'vmCommentAuthor', 'commentAuthor', 'postAuthor'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = iden.handle;
    });
  }
  const chatAuthor = document.getElementById('chatAuthorInput');
  if (chatAuthor) chatAuthor.readOnly = Boolean(state.member);
  if (state.profile.gameId) {
    const gid = document.getElementById('friendGameId'); if (gid && !gid.value) gid.value = state.profile.gameId;
  }
}
let progressSyncTimer = null;
function scheduleMemberProgressSync() {
  if (!state.member || !window.VICE_CLOUD || !window.VICE_CLOUD.enabled) return;
  clearTimeout(progressSyncTimer);
  progressSyncTimer = setTimeout(() => {
    window.VICE_CLOUD.saveMemberProgress(state.member.username, { checklist: state.checklist, sweepChecked: state.sweepChecked });
  }, 800);
}
function syncIdentityUI() {
  const en = isEn(), m = state.member, p = state.profile;
  const openBtn = document.getElementById('openAccountBtn');
  const mobileBtn = document.getElementById('mobileAccountBtn');
  const loungeText = document.getElementById('loungeIdentityText');
  const loungeBtn = document.getElementById('loungeAccountBtn');
  if (m) {
    const badgeHtml = `<span class="avatar-dot" style="background:${escapeHtml(m.avatarColor)}"></span><span>${escapeHtml(m.displayName)} ✓</span>`;
    if (openBtn) { openBtn.innerHTML = badgeHtml; openBtn.classList.add('logged-in'); }
    if (mobileBtn) mobileBtn.textContent = `${m.displayName} ✓`;
    if (loungeText) loungeText.innerHTML = `<span class="avatar-dot" style="background:${escapeHtml(m.avatarColor)}; margin-right:0.35rem;"></span><strong>${escapeHtml(m.displayName)}</strong> <span class="member-badge">${en ? 'Verified ✓' : '认证玩家 ✓'}</span> <span class="plat-tag">${escapeHtml(m.platform)}</span>`;
    if (loungeBtn) loungeBtn.textContent = en ? 'Account & Cloud Sync' : '账号与云端进度';
  } else {
    const guestLabel = p.handle ? (en ? `Guest: ${p.handle}` : `游客：${p.handle}`) : (en ? 'Guest / Sign In' : '登录 / 游客');
    if (openBtn) { openBtn.textContent = guestLabel; openBtn.classList.remove('logged-in'); }
    if (mobileBtn) mobileBtn.textContent = guestLabel;
    if (loungeText) loungeText.textContent = p.handle ? (en ? `Active as Guest (${p.handle}) · Sign in anytime to sync progress` : `当前身份：游客 ${p.handle}（免注册畅聊，登录可云端同步进度）`) : (en ? 'Guest Mode (No login needed to chat & post)' : '当前身份：游客模式（免注册直接玩，登录解锁认证徽章）');
    if (loungeBtn) loungeBtn.textContent = en ? 'Sign In / Free Register' : '登录 / 免费注册';
  }
}

const ZH_META = {
  title: document.title,
  description: (document.querySelector('meta[name="description"]') || {}).content || ''
};
function applyStaticI18n() {
  const en = isEn();
  document.documentElement.lang = en ? 'en' : 'zh-CN';
  document.title = en ? EN.meta.title : ZH_META.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = en ? EN.meta.description : ZH_META.description;
  const brandEl = document.querySelector('.brand-wordmark');
  if (brandEl) {
    if (!brandEl.dataset.zhHtml) brandEl.dataset.zhHtml = brandEl.innerHTML;
    brandEl.innerHTML = en ? 'VICE CODEX <span>GTA 6 HUB</span>' : brandEl.dataset.zhHtml;
  }
  const btnMap = {
    '#openSearchBtn': en ? EN.ui.searchBtn : null,
    '#openPublishBtn': en ? EN.ui.publishBtn : null,
    '#menuToggleBtn': en ? EN.ui.menuBtn : null
  };
  Object.keys(btnMap).forEach(sel => {
    const el = document.querySelector(sel); if (!el) return;
    if (!el.dataset.zh) el.dataset.zh = el.textContent;
    el.textContent = en ? btnMap[sel] : el.dataset.zh;
  });
  ['langToggleBtn', 'mobileLangToggleBtn'].forEach(id => {
    const b = document.getElementById(id); if (!b) return;
    b.textContent = en ? '中文' : 'EN';
    b.setAttribute('aria-label', en ? EN.ui.langToggleAria : 'Switch to English');
  });
  const spLabel = state.spoilerSafe ? (en ? EN.ui.spoilerOn : '防剧透：开') : (en ? EN.ui.spoilerOff : '防剧透：关');
  ['spoilerToggle', 'mobileSpoilerToggle'].forEach(id => {
    const btn = document.getElementById(id); if (btn) { btn.setAttribute('aria-pressed', String(state.spoilerSafe)); btn.textContent = spLabel; }
  });
  if (EN) {
    Object.keys(EN.staticText).forEach(sel => {
      const el = document.querySelector(sel); if (!el) return;
      if (!el.dataset.zh) el.dataset.zh = el.textContent;
      el.textContent = en ? EN.staticText[sel] : el.dataset.zh;
    });
    Object.keys(EN.placeholders).forEach(sel => {
      const el = document.querySelector(sel); if (!el) return;
      if (!el.dataset.zhPlaceholder) el.dataset.zhPlaceholder = el.getAttribute('placeholder') || '';
      el.setAttribute('placeholder', en ? EN.placeholders[sel] : el.dataset.zhPlaceholder);
    });
    const cells = document.querySelectorAll('#codeVaultStrip .code-vault-cell');
    cells.forEach((cell, idx) => {
      const cfg = EN.codeVault[idx]; if (!cfg) return;
      const pairs = [
        [cell.querySelector('.code-vault-region'), cfg.region],
        [cell.querySelector('[data-copy-pin]'), cfg.btn],
        [cell.querySelector('.code-vault-reward'), cfg.reward],
        [cell.querySelector('.code-vault-note'), cfg.note]
      ];
      pairs.forEach(([node, enVal]) => {
        if (!node) return;
        if (!node.dataset.zh) node.dataset.zh = node.textContent;
        node.textContent = en ? enVal : node.dataset.zh;
      });
    });
  }
  const giscusFrame = document.querySelector('iframe.giscus-frame');
  if (giscusFrame && giscusFrame.contentWindow) {
    giscusFrame.contentWindow.postMessage({ giscus: { setConfig: { lang: en ? 'en' : 'zh-CN' } } }, 'https://giscus.app');
  }
}
function updateSocialCloudBadge() {
  const el = document.getElementById('socialCloudBadge'); if (!el) return;
  const en = isEn(), live = Boolean(window.VICE_CLOUD && window.VICE_CLOUD.enabled);
  el.textContent = live
    ? (en ? EN.ui.socialCloudLive : '云端实时互通已连接 · 游客免注册即可畅聊发帖，站内注册支持跨设备云端同步进度')
    : (en ? EN.ui.socialCloudLocal : '当前为本地保存模式 · 你的昵称与发帖将自动保留在浏览器');
}
function updateSocialCountersAndPulse() {
  const en = isEn();
  let totalChat = 0, latestMsg = null;
  Object.keys(state.chatMessages).forEach(ch => {
    const arr = state.chatMessages[ch] || [];
    totalChat += arr.length;
    if (arr.length) latestMsg = { ch, msg: arr[arr.length - 1] };
  });
  const tChat = document.getElementById('tabBtnChat'), tPosts = document.getElementById('tabBtnPosts'), tSquad = document.getElementById('tabBtnSquad');
  if (tChat) tChat.innerHTML = `${en ? 'Live Chat' : '实时聊天室'} <span class="tab-count tabular" id="tabCountChat">${totalChat}</span>`;
  if (tPosts) tPosts.innerHTML = `${en ? 'Guides & Videos' : '攻略与视频广场'} <span class="tab-count tabular" id="tabCountPosts">${state.posts.length}</span>`;
  if (tSquad) tSquad.innerHTML = `${en ? 'Squad Cards' : '车队与交友墙'} <span class="tab-count tabular" id="tabCountSquad">${state.friends.length}</span>`;
  const dockC = document.getElementById('dockChatCount'); if (dockC) dockC.textContent = String(totalChat);
  const liveStat = document.getElementById('chatLiveStat');
  if (liveStat) {
    const chCount = (state.chatMessages[state.chatChannel] || []).length;
    const chLbl = en ? (EN.ui.chatChannels[state.chatChannel] || state.chatChannel) : state.chatChannel;
    liveStat.textContent = en ? `${chLbl} · ${chCount} messages · Auto-syncs every 10s` : `${chLbl} · 共 ${chCount} 条实时对话 · 每 10 秒云端自动刷新`;
  }
  const chatPrev = document.getElementById('pulseChatPreview');
  if (chatPrev && latestMsg) {
    const chLbl = en ? (EN.ui.chatChannels[latestMsg.ch] || latestMsg.ch) : latestMsg.ch;
    chatPrev.textContent = `${chLbl} ${latestMsg.msg.author}: ${latestMsg.msg.text}`;
  }
  const postPrev = document.getElementById('pulsePostPreview');
  if (postPrev && state.posts.length) {
    const topPost = getPostCopy(state.posts.slice().sort((a, b) => b.upvotes - a.upvotes)[0]);
    postPrev.textContent = `${topPost.title} (▲${topPost.upvotes})`;
  }
}
function switchLoungeTab(tab) {
  state.loungeTab = tab;
  document.querySelectorAll('#loungeMainTabs button[data-lounge-tab]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.loungeTab === tab)));
  const map = { chat: 'loungePanelChat', posts: 'loungePanelPosts', squad: 'loungePanelSquad' };
  Object.keys(map).forEach(k => { const el = document.getElementById(map[k]); if (el) el.hidden = (k !== tab); });
}
function jumpToLounge(tab, focusChat) {
  switchLoungeTab(tab || 'chat');
  const sec = document.getElementById('lounge');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (focusChat) setTimeout(() => { const inp = document.getElementById('chatTextInput'); if (inp) inp.focus(); }, 360);
}
function renderAll() {
  applyStaticI18n(); syncIdentityUI(); updateSocialCloudBadge(); renderHero(); renderVideos(); renderSweep(); renderCalculator();
  renderRegions(); renderMechanics(); renderArsenal(); renderChapter(); renderChecklist();
  renderCommunity(); renderFriends(); renderChat(); updateSocialCountersAndPulse();
  if (state.activeVideoId) openVideoPlayer(state.activeVideoId);
}
function toggleLang() {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  saveStore('vc_lang', state.lang);
  renderAll();
  showToast(isEn() ? EN.ui.toasts.langSwitched : '已切换为中文');
}

let toastTimer = null;
function showToast(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 2500); }
function copyText(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => showToast(successMsg)).catch(() => fallbackCopy(text, successMsg));
  else fallbackCopy(text, successMsg);
}
function fallbackCopy(text, successMsg) {
  const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); showToast(successMsg); } catch (e) { showToast(isEn() ? EN.ui.toasts.copyFail : '复制未完成，请手动选中复制'); }
  document.body.removeChild(ta);
}

const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => { siteHeader.classList.toggle('scrolled', window.scrollY > 36); }, { passive: true });
const menuToggleBtn = document.getElementById('menuToggleBtn'), mobileNav = document.getElementById('mobileNav');
menuToggleBtn.addEventListener('click', () => { const open = mobileNav.classList.toggle('open'); menuToggleBtn.setAttribute('aria-expanded', String(open)); });
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobileNav.classList.remove('open'); menuToggleBtn.setAttribute('aria-expanded', 'false'); }));
document.getElementById('langToggleBtn').addEventListener('click', toggleLang);
document.getElementById('mobileLangToggleBtn').addEventListener('click', () => { mobileNav.classList.remove('open'); menuToggleBtn.setAttribute('aria-expanded', 'false'); toggleLang(); });

function toggleSpoiler() {
  state.spoilerSafe = !state.spoilerSafe;
  const label = state.spoilerSafe ? (isEn() ? EN.ui.spoilerOn : '防剧透：开') : (isEn() ? EN.ui.spoilerOff : '防剧透：关');
  ['spoilerToggle', 'mobileSpoilerToggle'].forEach(id => { const btn = document.getElementById(id); if (btn) { btn.setAttribute('aria-pressed', String(state.spoilerSafe)); btn.textContent = label; } });
  renderMechanics(); renderChapter();
  showToast(state.spoilerSafe ? (isEn() ? EN.ui.toasts.spoilerOn : '已开启防剧透，后期章节与彩蛋已模糊') : (isEn() ? EN.ui.toasts.spoilerOff : '已切换为全玩法无限制展示'));
}
document.getElementById('spoilerToggle').addEventListener('click', toggleSpoiler);
document.getElementById('mobileSpoilerToggle').addEventListener('click', toggleSpoiler);

function getHeroCopy(s) { return (isEn() && EN.hero[s.id]) ? { ...s, ...EN.hero[s.id] } : s; }
function getOrderedHeroSlides() {
  const list = HERO_SLIDES.map(s => ({ ...getHeroCopy(s), heat: calcHeroHeat(s) }));
  return state.heroSort === 'heat' ? list.sort((a, b) => b.heat - a.heat) : list.sort((a, b) => a.order - b.order);
}
let heroAutoTimer = null;
function renderHero() {
  const slides = getOrderedHeroSlides();
  if (state.heroIndex >= slides.length) state.heroIndex = 0;
  const active = slides[state.heroIndex];
  const heatLabel = isEn() ? EN.ui.heatPrefix : '实时热度';
  document.getElementById('heroSlides').innerHTML = slides.map((s, idx) => `<div class="hero-slide${idx === state.heroIndex ? ' active' : ''}"><img src="${s.image}" alt="${escapeHtml(s.title)}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${s.fallback}';"></div>`).join('');
  document.getElementById('heroCopyBlock').innerHTML = `<div class="hero-meta-line tabular">${escapeHtml(active.tag)} / ${heatLabel} ${active.heat}</div><h1 class="hero-title">${escapeHtml(active.title)}</h1><p class="hero-desc">${escapeHtml(active.desc)}</p><div class="hero-cta-row"><a href="${active.ctaHref}" class="btn-primary">${escapeHtml(active.ctaText)}</a><span class="tabular" style="font-size:var(--text-sm); color:var(--text-muted);">${state.heroIndex + 1} / ${slides.length}</span></div>`;
  document.getElementById('heroFilmstrip').innerHTML = slides.map((s, idx) => `<button type="button" class="filmstrip-item${idx === state.heroIndex ? ' active' : ''}" role="tab" aria-selected="${idx === state.heroIndex}" data-slide-idx="${idx}"><img class="filmstrip-thumb" src="${s.image}" alt="${escapeHtml(s.shortTitle)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${s.fallback}';"><div class="filmstrip-caption">${escapeHtml(s.shortTitle)}</div></button>`).join('');
}
function stepHero(delta) { state.heroIndex = (state.heroIndex + delta + HERO_SLIDES.length) % HERO_SLIDES.length; renderHero(); restartHeroAuto(); }
function restartHeroAuto() { clearInterval(heroAutoTimer); if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; heroAutoTimer = setInterval(() => { state.heroIndex = (state.heroIndex + 1) % HERO_SLIDES.length; renderHero(); }, 6500); }
document.getElementById('heroPrevBtn').addEventListener('click', () => stepHero(-1));
document.getElementById('heroNextBtn').addEventListener('click', () => stepHero(1));
document.getElementById('heroFilmstrip').addEventListener('click', (e) => { const btn = e.target.closest('[data-slide-idx]'); if (!btn) return; state.heroIndex = Number(btn.dataset.slideIdx); renderHero(); restartHeroAuto(); });
document.getElementById('heroSortTabs').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-hero-sort]'); if (!btn) return;
  state.heroSort = btn.dataset.heroSort; state.heroIndex = 0;
  document.querySelectorAll('#heroSortTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn)));
  renderHero(); showToast(state.heroSort === 'heat' ? (isEn() ? EN.ui.toasts.heroHeat : '已按实时热度重排全景封面') : (isEn() ? EN.ui.toasts.heroEditorial : '已切换为官方精选顺序'));
});
const heroStage = document.getElementById('heroStage'); let touchStartX = 0;
heroStage.addEventListener('pointerdown', (e) => { if (!e.target.closest('button, a')) touchStartX = e.clientX; });
heroStage.addEventListener('pointerup', (e) => { if (!touchStartX) return; const diff = e.clientX - touchStartX; touchStartX = 0; if (Math.abs(diff) > 48) stepHero(diff > 0 ? -1 : 1); });
heroStage.addEventListener('mouseenter', () => clearInterval(heroAutoTimer));
heroStage.addEventListener('mouseleave', restartHeroAuto);

function getFilteredVideos() {
  const q = state.videoQuery.trim().toLowerCase();
  let list = VIDEOS.map(v => ({ ...v, heat: calcVideoHeat(v) }));
  if (state.videoCat !== 'all') list = list.filter(v => v.cat === state.videoCat);
  if (q) {
    list = list.filter(raw => {
      const v = getVideoCopy(raw);
      return (raw.title + ' ' + v.title + ' ' + raw.channel + ' ' + (raw.note || '') + ' ' + (v.note || '')).toLowerCase().includes(q);
    });
  }
  if (state.videoSort === 'heat') list.sort((a, b) => b.heat - a.heat);
  if (state.videoSort === 'views') list.sort((a, b) => b.views - a.views);
  if (state.videoSort === 'newest') list.sort((a, b) => a.hoursAgo - b.hoursAgo);
  return list;
}

function getVideoCopy(v) {
  if (!isEn()) return v;
  if (EN.videos[v.id]) return { ...v, ...EN.videos[v.id] };
  return { ...v, title: v.enTitle || v.title, note: v.enNote || v.note };
}
function syncDynamicVideoCounts() {
  const n = VIDEOS.length, en = isEn();
  const setText = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  setText('.nav-links a[href="#videos"]', en ? `${n} Videos` : `${n} 视频库`);
  setText('#mobileNav a[href="#videos"]', en ? `${n} Top Video Guides` : `${n} 条高流量视频`);
  setText('#videos h2', en ? `${n} Top-Viewed Video Guides (Inline Playback)` : `${n} 条高流量实战视频库（站内直接播放）`);
  setText('#videoCatTabs button[data-vcat="all"]', en ? `All ${n}` : `全部 ${n} 条`);
  setText('.footer-inner span:last-child', en ? `${n} verified video guides, 8-pin code vault & 6 Leonida regions` : `已收录 ${n} 条实测高流量视频、中英双语切换、8 组全图门禁密码速查板与 6 大区域定制视觉`);
  const statusEl = document.getElementById('videoCloudStatus');
  if (statusEl && state.cloudUpdatedAt) {
    const ts = state.cloudUpdatedAt.replace('T', ' ').replace('Z', ' UTC');
    statusEl.textContent = en ? EN.ui.cloudStatus(n, ts) : `云端最近自动更新：${ts} · 已收录 ${n} 条高分实测视频`;
  }
  const searchEl = document.getElementById('globalSearchInput');
  if (searchEl) searchEl.setAttribute('placeholder', en ? `Search ${n} videos, 789987, 031462, CLEAVES, 2314, 085355, Emerus, or legendaries...` : `搜索 ${n} 条视频、789987、031462、CLEAVES、2314、085355、Emerus 或传奇武器...`);
  if (HERO_SLIDES[0]) {
    HERO_SLIDES[0].tag = `热度榜首 / ${n} 条视频站内播放`;
    HERO_SLIDES[0].desc = `收录 ${n} 条实测高播放视频、8 组全图门禁密码速查板、6 大区域扫荡清单与 127 传奇武器点位，主机第二屏常驻工具站。`;
    HERO_SLIDES[0].ctaText = `浏览 ${n} 条实战视频`;
  }
  if (EN && EN.hero && EN.hero['hero-1']) {
    EN.hero['hero-1'].tag = `Top Heat / ${n} Inline Videos`;
    EN.hero['hero-1'].desc = `${n} verified top-viewed video guides, 8-pin code vault, 6 region sweep lists, and 127 legendary weapon locations built for your console second screen.`;
    EN.hero['hero-1'].ctaText = `Browse ${n} Video Guides`;
  }
}
function renderVideos() {
  syncDynamicVideoCounts();
  const fullList = getFilteredVideos();
  const visible = fullList.slice(0, state.videoLimit);
  const en = isEn();
  const grid = document.getElementById('videoGrid');
  if (!visible.length) {
    grid.innerHTML = `<p class="empty-state">${en ? EN.ui.noVideoMatch : '没有匹配到相关视频，试试换个关键词或切换分类。'}</p>`;
    document.getElementById('videoLoadMoreWrap').innerHTML = '';
    return;
  }
  grid.innerHTML = visible.map(raw => {
    const v = getVideoCopy(raw);
    const cKey = 'v-' + v.id; const cCount = (state.comments[cKey] || []).length;
    const heatLbl = en ? EN.ui.videoHeatPrefix : '热度';
    const playLbl = en ? EN.ui.cinemaPlay : '影院大屏播放';
    const cmtLbl = en ? EN.ui.commentsBtn : '评论';
    const shareLbl = en ? EN.ui.shareBtn : '分享';
    return `<article class="video-item" id="video-${v.id}"><div class="video-media-slot" id="slot-${v.id}"><button type="button" class="video-cover-btn" data-inline-play="${v.id}" aria-label="${en ? 'Play inline ' : '当前卡片直接播放 '}${escapeHtml(v.title)}"><img src="https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg" alt="${escapeHtml(v.title)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${v.id}/hqdefault.jpg';"><span class="video-play-ring" aria-hidden="true">&#9654;</span><div class="video-overlay-bar tabular"><span class="video-heat-num">${heatLbl} ${v.heat}</span><span>${v.duration}</span></div></button></div><div class="video-meta-row tabular"><span>${escapeHtml(v.channel)}</span><span>${formatViews(v.views)}</span></div><button type="button" class="video-title-btn" data-play-video="${v.id}">${escapeHtml(v.title)}</button><p style="font-size:var(--text-sm); color:var(--text-muted);">${escapeHtml(v.note)}</p><div class="video-foot-row"><button type="button" class="text-action-btn" style="color:var(--accent); font-weight:700;" data-play-video="${v.id}">${playLbl}</button><div style="display:flex; gap:0.85rem;"><button type="button" class="text-action-btn" data-share-video="${v.id}">${shareLbl}</button><button type="button" class="text-action-btn tabular" data-play-video="${v.id}">${cmtLbl} (${cCount})</button></div></div></article>`;
  }).join('');
  const wrap = document.getElementById('videoLoadMoreWrap');
  if (visible.length < fullList.length) {
    const step = fullList.length > 100 ? 24 : 12;
    const moreText = en ? EN.ui.loadMore(visible.length, fullList.length) : `加载更多视频（已显示 ${visible.length} / ${fullList.length}）`;
    wrap.innerHTML = `<button type="button" class="btn-secondary tabular" id="loadMoreVideosBtn">${moreText}</button>`;
    document.getElementById('loadMoreVideosBtn').addEventListener('click', () => { state.videoLimit += step; renderVideos(); });
  } else { wrap.innerHTML = ''; }
}
const videoSearchInputEl = document.getElementById('videoSearchInput');
if (videoSearchInputEl) {
  videoSearchInputEl.addEventListener('input', (e) => { state.videoQuery = e.target.value; state.videoLimit = 12; renderVideos(); });
}
document.getElementById('videoCatTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-vcat]'); if (!btn) return; state.videoCat = btn.dataset.vcat; state.videoLimit = 12; document.querySelectorAll('#videoCatTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderVideos(); });
document.getElementById('videoSortSelect').addEventListener('change', (e) => { state.videoSort = e.target.value; renderVideos(); });

function renderSweep() {
  const reg = SWEEP_DATA[state.activeSweepRegion], enReg = isEn() ? EN.sweep[state.activeSweepRegion] : null;
  const done = reg.items.filter(i => state.sweepChecked[i.id]).length, pct = Math.round((done / reg.items.length) * 100);
  const regName = enReg ? enReg.name : reg.name, regSub = enReg ? enReg.sub : reg.sub;
  document.getElementById('sweepBanner').innerHTML = `<img src="${reg.image}" alt="${escapeHtml(regName)}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${reg.fallback}';"><div class="sweep-banner-overlay"><div><div style="font-size:var(--text-sm); color:var(--accent-gold); font-weight:700;">${escapeHtml(regSub)}</div><h3 style="font-size:1.35rem;">${escapeHtml(regName)}</h3></div><div class="tabular" style="font-weight:900; font-size:1.25rem; color:var(--accent-teal);">${done} / ${reg.items.length} (${pct}%)</div></div>`;
  document.getElementById('sweepChecklist').innerHTML = reg.items.map(item => {
    const checked = Boolean(state.sweepChecked[item.id]);
    const enItem = enReg && enReg.items[item.id] ? enReg.items[item.id] : item;
    return `<label class="check-row${checked ? ' done' : ''}"><div class="check-left"><input type="checkbox" class="check-box" data-sweep-id="${item.id}" ${checked ? 'checked' : ''}><div><div class="check-title">${escapeHtml(enItem.title)}</div><div class="check-sub">${escapeHtml(enItem.detail)}</div></div></div></label>`;
  }).join('');
}
document.getElementById('sweepRegionTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-sweep]'); if (!btn) return; state.activeSweepRegion = btn.dataset.sweep; document.querySelectorAll('#sweepRegionTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderSweep(); });
document.getElementById('sweepChecklist').addEventListener('change', (e) => { const box = e.target.closest('input[data-sweep-id]'); if (!box) return; state.sweepChecked[box.dataset.sweepId] = box.checked; saveStore('vc_v7_sweep', state.sweepChecked); renderSweep(); scheduleMemberProgressSync(); });

function renderCalculator() {
  const ch = Number(document.getElementById('calcChapter').value), bags = Number(document.getElementById('calcVehicle').value), loot = document.getElementById('calcLoot').value, prof = document.getElementById('calcProfile').value;
  const en = isEn();
  let fence = en ? 'Yasmani (Little Cuba, top buyer for jewelry & marked bills)' : 'Yasmani（小古巴，珠宝与标记钞票出价最高）';
  let payout = '$15,000 - $25,000';
  let warning = en ? 'Fence and deposit into BuckMe right away so impounded vehicles never wipe your bags.' : '建议得手后先销赃存 BuckMe 银行，避免通缉扣车没收。';
  if (loot === 'narcotics') {
    fence = en ? 'Tyrone (Black market, highest payout for narcotics)' : 'Tyrone（黑市线，违禁品收购价最高）';
    payout = bags === 0 ? (en ? '0 bag capacity (switch vehicle)' : '无法装袋（请换车）') : `$${(bags * 3500).toLocaleString()} - $${(bags * 5500).toLocaleString()}`;
  } else if (loot === 'supercar') {
    fence = ch >= 3 ? (en ? 'Randy (Vice City supercar orders)' : 'Randy（罪恶都市超跑单）') : (en ? 'Moses (Ch. 2 Port Gellhorn car ring)' : 'Moses（第 2 章 Port Gellhorn 偷车线）');
    payout = ch >= 3 ? (en ? '$30,000 - $45,000 / car' : '$30,000 - $45,000 / 辆') : (en ? '$6,000 - $12,000 / car' : '$6,000 - $12,000 / 辆');
  } else if (loot === 'vault') {
    fence = en ? 'Yasmani (Marked Bills) + instant BuckMe deposit' : 'Yasmani（大额标记钞票）+ 立即存入 BuckMe';
    if (ch < 3) { payout = en ? 'HIGH RISK: No Dye-Pack Jammer yet' : '高危警告：尚未获得染料包干扰器'; warning = en ? 'Bank cash packs explode on exit in Ch. 1-2. Wait until Ch. 3 unlocks the Dye-Pack Jammer.' : '第 1-2 章洗劫银行离开建筑会触发染料包毁钱，务必推进到第 3 章拿干扰器再动手！'; }
    else if (bags === 0) { payout = en ? '0 bag capacity (motorcycle)' : '无法装袋（摩托车容量 0）'; warning = en ? 'Bring a van or pickup (up to 8 bags) and use duo bag-passing to maximize payout.' : '请更换厢式货车或皮卡（最高 8 袋），配合双人传袋最大化收益。'; }
    else { const est = Math.round((bags / 8) * (ch >= 4 ? 205000 : 85000)); payout = en ? `~$${est.toLocaleString()} / run` : `约 $${est.toLocaleString()} / 趟`; warning = ch >= 4 ? (en ? 'Ch. 4 major vaults cap near $205,000 on an 8-bag van run. Swap car and outfit after escaping CCTV.' : '第 4 章大型金库满载 8 袋单趟封顶约 $205,000，撤离时建议换车换装避开 CCTV。') : (en ? 'Ch. 3 Jammer unlocked; safe to raid banks and payday loan shops.' : '第 3 章已解锁干扰器，可安全扫荡银行与贷款店。'); }
  } else { payout = bags === 0 ? (en ? '0 bag capacity (motorcycle)' : '无法装袋（摩托车容量 0）') : `$${(bags * 4200).toLocaleString()} - $${(bags * 6500).toLocaleString()}`; }
  const focusNote = prof === 'irredeemable' ? (en ? 'Irredeemable permanently removes Focus charge bonuses. Stock extra body armor.' : '当前档案为 Irredeemable，已永久失去聚焦充能加成，请备足防弹衣。') : (prof === 'pro' ? (en ? 'Professional builds charge L3+R3 Focus quickly with suppressed non-lethal limb shots.' : '专业路线可配合消音手枪打四肢非致命快速充满 L3+R3 聚焦条。') : (en ? 'Violent/Psycho builds charge Focus via headshots; avoid civilian kills to stay above Irredeemable.' : '狂徒路线依赖爆头充能聚焦，注意控制路人伤亡防止跌入 Irredeemable。'));
  document.getElementById('calcResultBox').innerHTML = `<div style="font-size:var(--text-sm); color:var(--text-muted);">${en ? EN.ui.calcEstLabel : '预估单趟净收益'}</div><div class="calc-payout tabular">${escapeHtml(payout)}</div><div style="font-size:var(--text-sm);"><strong>${en ? EN.ui.calcFenceLabel + ' ' : '最优销赃去向：'}</strong>${escapeHtml(fence)}</div><div style="font-size:var(--text-sm); color:var(--accent-teal);">${escapeHtml(warning)}</div><div style="font-size:var(--text-sm); color:var(--text-muted);">${escapeHtml(focusNote)}</div>`;
}
['calcChapter', 'calcVehicle', 'calcLoot', 'calcProfile'].forEach(id => document.getElementById(id).addEventListener('change', renderCalculator));

function renderRegions() {
  document.getElementById('regionGrid').innerHTML = REGIONS.map((r, idx) => {
    const item = (isEn() && EN.regions[idx]) ? { ...r, ...EN.regions[idx] } : r;
    return `<article class="region-item"><div class="region-media"><img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${item.fallback}';"></div><div class="region-sub">${escapeHtml(item.county)}</div><h3>${escapeHtml(item.name)}</h3><p class="region-desc">${escapeHtml(item.desc)}</p></article>`;
  }).join('');
}
function renderMechanics() {
  const filtered = MECHANICS.filter(m => state.mechCat === 'all' || m.cat === state.mechCat);
  document.getElementById('mechanicsGrid').innerHTML = filtered.map(raw => {
    const m = (isEn() && EN.mechanics[raw.id]) ? { ...raw, ...EN.mechanics[raw.id] } : raw;
    const mask = state.spoilerSafe && m.spoiler;
    return `<article class="mechanic-entry" id="mech-${m.id}"><div class="entry-meta">${escapeHtml(m.meta)}</div><h3>${escapeHtml(m.title)}</h3><p class="entry-body${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${escapeHtml(m.body)}</p><div class="entry-tip${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${escapeHtml(m.tip)}</div></article>`;
  }).join('');
}
document.getElementById('mechanicsGrid').addEventListener('click', (e) => { const el = e.target.closest('[data-reveal="true"]'); if (el) el.classList.toggle('revealed'); });
document.getElementById('mechFilterTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-cat]'); if (!btn) return; state.mechCat = btn.dataset.cat; document.querySelectorAll('#mechFilterTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderMechanics(); });

function renderArsenal() {
  const en = isEn();
  const carH = en ? EN.ui.tableCarsHead : ['排名', '载具名称', '实测极速分', '级别定位', '获取方式与点位'];
  const wepH = en ? EN.ui.tableWeaponsHead : ['编号', '传奇武器名称', '武器类型', '获取成本', 'Port Gellhorn 精确点位与触发方式'];
  document.getElementById('arsenalTableWrap').innerHTML = state.arsenalTab === 'cars'
    ? `<table class="data-table tabular"><thead><tr>${carH.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${SUPERCARS.map((raw, idx) => { const c = (en && EN.supercars[idx]) ? { ...raw, ...EN.supercars[idx] } : raw; return `<tr id="car-${c.rank}"><td class="stat-highlight">#${c.rank}</td><td><strong>${escapeHtml(c.name)}</strong></td><td class="stat-highlight">${escapeHtml(c.speed)}</td><td>${escapeHtml(c.tier)}</td><td style="color:var(--text-muted);">${escapeHtml(c.method)}</td></tr>`; }).join('')}</tbody></table>`
    : `<table class="data-table tabular"><thead><tr>${wepH.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${LEGENDARY_WEAPONS.map((raw, idx) => { const w = (en && EN.weapons[idx]) ? { ...raw, ...EN.weapons[idx] } : raw; return `<tr id="weapon-${w.rank}"><td class="stat-highlight">#${w.rank}</td><td><strong>${escapeHtml(w.name)}</strong></td><td>${escapeHtml(w.type)}</td><td class="stat-highlight">${escapeHtml(w.cost)}</td><td style="color:var(--text-muted);">${escapeHtml(w.location)}</td></tr>`; }).join('')}</tbody></table>`;
}
document.getElementById('arsenalTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-arsenal]'); if (!btn) return; state.arsenalTab = btn.dataset.arsenal; document.querySelectorAll('#arsenalTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderArsenal(); });

function renderChapter() {
  const en = isEn(), raw = CHAPTERS[state.activeChapter], ch = (en && EN.chapters[state.activeChapter]) ? { ...raw, ...EN.chapters[state.activeChapter] } : raw, mask = state.spoilerSafe && ch.spoiler;
  const fh = en ? EN.ui.fenceHead : ['销赃人', '高价品类', '区域 / 阶段'];
  const frows = en ? EN.ui.fenceRows : [['Yasmani', '珠宝、标记钞票', '小古巴 Little Cuba'], ['Tyrone', '违禁品 Narcotics', '莱奥尼达黑市线'], ['Moses', '指定偷盗车辆', '第 2 章 Port Gellhorn'], ['Randy', '稀缺超跑 ($30k+)', '第 3 章 罪恶都市']];
  document.getElementById('chapterPanel').innerHTML = `<div class="chapter-detail"><h3>${escapeHtml(ch.title)}</h3><div class="chapter-metrics"><div><div class="metric-label">${en ? EN.ui.chMissionsLabel : '主线任务数'}</div><div class="metric-val tabular">${ch.missions}${en ? EN.ui.chMissionsUnit : ' 个'}</div></div><div><div class="metric-label">${en ? EN.ui.chRegionLabel : '核心区域'}</div><div class="metric-val">${escapeHtml(ch.region)}</div></div><div><div class="metric-label">${en ? EN.ui.chMoneyLabel : '阶段收益预期'}</div><div class="metric-val tabular">${escapeHtml(ch.moneyRate)}</div></div></div><p class="entry-body${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${escapeHtml(ch.summary)}</p><ul class="mission-list${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${ch.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}</ul></div><div class="money-panel"><h3>${en ? EN.ui.chStrategyTitle : '本阶段最优赚钱与销赃渠道'}</h3><p class="entry-body${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${escapeHtml(ch.moneyStrategy)}</p><table class="data-table" style="min-width:0;"><thead><tr>${fh.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${frows.map(r => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div>`;
}
document.getElementById('chapterPanel').addEventListener('click', (e) => { const el = e.target.closest('[data-reveal="true"]'); if (el) el.classList.toggle('revealed'); });
document.getElementById('chapterTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-ch]'); if (!btn) return; state.activeChapter = Number(btn.dataset.ch); document.querySelectorAll('#chapterTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderChapter(); });

function getChecklistStats() { let weight = 0, count = 0; CHECKLIST_ITEMS.forEach(item => { if (state.checklist[item.id]) { weight += item.weight; count += 1; } }); return { weight, count }; }
function renderChecklist() {
  const en = isEn();
  document.getElementById('checklistGrid').innerHTML = CHECKLIST_ITEMS.map(raw => {
    const item = (en && EN.checklist[raw.id]) ? { ...raw, ...EN.checklist[raw.id] } : raw;
    const checked = Boolean(state.checklist[item.id]);
    return `<label class="check-row${checked ? ' done' : ''}"><div class="check-left"><input type="checkbox" class="check-box" data-check-id="${item.id}" ${checked ? 'checked' : ''}><div><div class="check-title">${escapeHtml(item.title)}</div><div class="check-sub">${escapeHtml(item.sub)}</div></div></div><span class="check-weight tabular">+${item.weight}%</span></label>`;
  }).join('');
  const { weight } = getChecklistStats();
  document.getElementById('checklistProgressBar').style.width = `${Math.min(100, weight)}%`;
  document.getElementById('checklistSummaryText').textContent = en ? EN.ui.checklistSummary(weight.toFixed(1)) : `已完成 ${weight.toFixed(1)}%`;
}
document.getElementById('checklistGrid').addEventListener('change', (e) => { const box = e.target.closest('input[data-check-id]'); if (!box) return; state.checklist[box.dataset.checkId] = box.checked; saveStore('vc_v7_checklist', state.checklist); renderChecklist(); scheduleMemberProgressSync(); });
document.getElementById('resetChecklistBtn').addEventListener('click', () => { state.checklist = {}; saveStore('vc_v7_checklist', state.checklist); renderChecklist(); scheduleMemberProgressSync(); showToast(isEn() ? EN.ui.toasts.checklistReset : '已重置进度'); });

document.getElementById('downloadPosterBtn').addEventListener('click', () => {
  const en = isEn(), { weight, count } = getChecklistStats(), rank = document.getElementById('posterRankSelect').value, doneItems = CHECKLIST_ITEMS.filter(i => state.checklist[i.id]).slice(0, 5);
  const canvas = document.createElement('canvas'); canvas.width = 1200; canvas.height = 630; const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 1200, 630); grad.addColorStop(0, '#090E16'); grad.addColorStop(0.55, '#131D2E'); grad.addColorStop(1, '#231624');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 1200, 630);
  const glow = ctx.createRadialGradient(980, 110, 20, 980, 110, 460); glow.addColorStop(0, 'rgba(255, 90, 54, 0.32)'); glow.addColorStop(1, 'rgba(255, 90, 54, 0)');
  ctx.fillStyle = glow; ctx.fillRect(0, 0, 1200, 630);
  ctx.strokeStyle = 'rgba(245, 242, 235, 0.16)'; ctx.lineWidth = 2; ctx.strokeRect(36, 36, 1128, 558);
  ctx.fillStyle = '#F5B041'; ctx.font = '700 22px "Space Grotesk", "Noto Sans SC", sans-serif'; ctx.fillText(en ? EN.ui.posterHeader : 'VICE CODEX / 莱奥尼达 100% 奖杯战绩卡', 72, 98);
  ctx.fillStyle = '#F5F2EB'; ctx.font = '900 58px "Space Grotesk", "Noto Sans SC", sans-serif'; ctx.fillText(en ? EN.ui.posterProgress(weight.toFixed(1)) : `白金总进度 ${weight.toFixed(1)}%`, 72, 178);
  ctx.fillStyle = '#2EC4B6'; ctx.font = '700 26px "Space Grotesk", "Noto Sans SC", sans-serif'; ctx.fillText(en ? EN.ui.posterSub(count, CHECKLIST_ITEMS.length, rank) : `已完成 ${count} / ${CHECKLIST_ITEMS.length} 核心指标   |   犯罪档案：${rank}`, 72, 228);
  ctx.fillStyle = 'rgba(245, 242, 235, 0.14)'; ctx.fillRect(72, 260, 1056, 18);
  ctx.fillStyle = '#FF5A36'; ctx.fillRect(72, 260, Math.max(12, Math.round(1056 * (Math.min(100, weight) / 100))), 18);
  ctx.fillStyle = '#9AA7B8'; ctx.font = '500 22px "Noto Sans SC", sans-serif';
  if (doneItems.length) { ctx.fillText(en ? EN.ui.posterDoneTitle : '已攻克里程碑：', 72, 330); ctx.fillStyle = '#F5F2EB'; doneItems.forEach((raw, idx) => { const item = (en && EN.checklist[raw.id]) ? EN.checklist[raw.id] : raw; ctx.fillText(`✓ ${item.title}`, 72, 372 + idx * 36); }); }
  else { ctx.fillText(en ? EN.ui.posterEmpty : '刚刚踏入莱奥尼达群岛，即将开启 100% 漫漫长路冲刺！', 72, 345); }
  ctx.fillStyle = 'rgba(245, 242, 235, 0.55)'; ctx.font = '500 20px "Space Grotesk", "Noto Sans SC", sans-serif'; ctx.fillText(en ? EN.ui.posterFooter : '罪城全书 VICE CODEX v8.0  |  GTA 6 开源攻略与玩家社区', 72, 560);
  const link = document.createElement('a'); link.download = `vice-codex-100-progress-${Math.round(weight)}pct.png`; link.href = canvas.toDataURL('image/png'); link.click();
  showToast(en ? EN.ui.toasts.posterSaved : '已下载 100% 战绩海报 PNG');
});

const EMOJI_MAP = { fire: '🔥', like: '👍', lol: '😂' };
function renderReactionButtons(targetKey) {
  const bag = state.reactions[targetKey] || {};
  return ['fire', 'like', 'lol'].map(code => {
    const count = Number(bag[code] || 0);
    const active = Boolean(state.myReactions[targetKey + ':' + code]);
    return `<button type="button" class="react-btn tabular${active ? ' active' : ''}" data-react-key="${escapeHtml(targetKey)}" data-react-emoji="${code}">${EMOJI_MAP[code]}${count ? ' ' + count : ''}</button>`;
  }).join('');
}
function toggleReaction(targetKey, emoji) {
  if (!state.reactions[targetKey]) state.reactions[targetKey] = {};
  const mk = targetKey + ':' + emoji;
  const prev = Number(state.reactions[targetKey][emoji] || 0);
  if (state.myReactions[mk]) {
    delete state.myReactions[mk];
    state.reactions[targetKey][emoji] = Math.max(0, prev - 1);
  } else {
    state.myReactions[mk] = true;
    state.reactions[targetKey][emoji] = prev + 1;
  }
  saveStore('vc_reactions', state.reactions); saveStore('vc_my_reactions', state.myReactions);
  if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) window.VICE_CLOUD.saveReaction(targetKey, emoji, state.reactions[targetKey][emoji]);
  renderChat(); renderCommunity();
}
function getPostCopy(p) { return (isEn() && EN.defaultPosts[p.id]) ? { ...p, ...EN.defaultPosts[p.id] } : p; }
function renderCommunity() {
  const en = isEn(), list = document.getElementById('communityList'), filtered = state.posts.filter(p => state.postCat === 'all' || p.category === state.postCat).sort((a, b) => b.upvotes - a.upvotes);
  if (!filtered.length) { list.innerHTML = `<p class="empty-state">${en ? EN.ui.emptyPosts : '当前分类还没有投稿，点击“上传攻略 / 站内视频”抢先分享。'}</p>`; return; }
  const inlineHint = en ? EN.ui.playInlineLabel : '站内直接播放';
  const cinemaLbl = en ? EN.ui.cinemaPlay : '影院大屏播放';
  const shareLbl = en ? EN.ui.shareBtn : '复制直达链接';
  list.innerHTML = filtered.map(raw => {
    const p = getPostCopy(raw), catLabel = en ? (EN.ui.postCategories[p.category] || p.category) : p.category;
    const voted = Boolean(state.upvoted[p.id]), ytId = extractYoutubeId(p.videoUrl), cCount = (state.comments[p.id] || []).length;
    const memberTag = p.isMember ? `<span class="member-badge">✓</span>` : '';
    const platTag = p.platform ? `<span class="plat-tag">${escapeHtml(p.platform)}</span>` : '';
    const mediaHtml = ytId ? `<div class="post-video-slot" id="post-slot-${p.id}"><button type="button" class="video-cover-btn" data-inline-play-post="${p.id}" data-yt-id="${ytId}" aria-label="${escapeHtml(inlineHint)} ${escapeHtml(p.title)}"><img src="https://i.ytimg.com/vi/${ytId}/hqdefault.jpg" alt="${escapeHtml(p.title)}" loading="lazy" referrerpolicy="no-referrer"><span class="video-play-ring" aria-hidden="true">&#9654;</span><div class="video-overlay-bar"><span class="video-heat-num">${escapeHtml(inlineHint)}</span><span>16:9</span></div></button></div>` : '';
    const cinemaBtn = ytId ? `<button type="button" class="text-action-btn" style="color:var(--accent); font-weight:700;" data-play-post-modal="${p.id}" data-yt-id="${ytId}">${escapeHtml(cinemaLbl)}</button>` : '';
    return `<article class="post-row" id="post-${p.id}"><button type="button" class="upvote-btn tabular" data-upvote="${p.id}" aria-pressed="${voted}"><span>&#9650;</span><span>${p.upvotes}</span></button><div><div class="post-meta"><span>${escapeHtml(catLabel)}</span><span>/</span><strong style="color:var(--accent-gold);">${escapeHtml(p.author)}</strong>${memberTag}${platTag}</div><h3>${escapeHtml(p.title)}</h3><p class="post-body">${escapeHtml(p.body)}</p>${mediaHtml}<div class="post-toolbar">${renderReactionButtons('post:' + p.id)}${cinemaBtn}<button type="button" class="text-action-btn tabular" data-open-comments="${p.id}" data-comment-title="${escapeHtml(p.title)}">${en ? EN.ui.expandComments(cCount) : `展开评论 (${cCount})`}</button><button type="button" class="text-action-btn" data-share-post="${p.id}">${escapeHtml(shareLbl)}</button></div></div></article>`;
  }).join('');
}
document.getElementById('communityFilterTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-post-cat]'); if (!btn) return; state.postCat = btn.dataset.postCat; document.querySelectorAll('#communityFilterTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderCommunity(); });
document.getElementById('communityList').addEventListener('click', (e) => {
  const upBtn = e.target.closest('button[data-upvote]');
  if (upBtn) {
    const id = upBtn.dataset.upvote, post = state.posts.find(p => p.id === id); if (!post) return;
    if (state.upvoted[id]) { delete state.upvoted[id]; post.upvotes = Math.max(0, post.upvotes - 1); } else { state.upvoted[id] = true; post.upvotes += 1; }
    saveStore('vc_v7_upvoted', state.upvoted); saveStore('vc_v7_posts', state.posts); if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) window.VICE_CLOUD.updateUpvotes(post.id, post.upvotes); renderCommunity(); updateSocialCountersAndPulse(); return;
  }
  const shBtn = e.target.closest('button[data-share-post]');
  if (shBtn) { copyText(location.origin + location.pathname + '#post-' + shBtn.dataset.sharePost, isEn() ? EN.ui.linkCopied : '已复制该条攻略直达链接'); }
});

function renderFriends() {
  const en = isEn(), list = document.getElementById('friendList'), filtered = state.friends.filter(f => state.friendPlat === 'all' || f.platform === state.friendPlat);
  if (!filtered.length) { list.innerHTML = `<p class="empty-state" style="padding:1.5rem;">${en ? EN.ui.emptyFriends : '该平台暂无名片，点击“登记我的游戏名片”成为首位召集人。'}</p>`; return; }
  const inviteLbl = en ? 'Say Hi / Squad Up' : '打招呼约战';
  list.innerHTML = filtered.map(f => { const note = (en && EN.defaultFriends[f.id]) ? EN.defaultFriends[f.id] : f.note; return `<div class="friend-row"><div><div class="friend-name">${escapeHtml(f.gameId)} <span style="font-size:var(--text-sm); color:var(--accent-gold); font-weight:500;">(${escapeHtml(f.platform)})</span></div><div class="friend-detail">${escapeHtml(note)}</div></div><div class="friend-actions"><button type="button" class="btn-secondary" data-copy-id="${escapeHtml(f.gameId)}">${en ? EN.ui.copyIdBtn : '复制游戏 ID'}</button><button type="button" class="text-action-btn" style="font-weight:700;" data-invite-squad="${escapeHtml(f.gameId)}">${escapeHtml(inviteLbl)}</button></div></div>`; }).join('');
}
document.getElementById('friendPlatformTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-plat]'); if (!btn) return; state.friendPlat = btn.dataset.plat; document.querySelectorAll('#friendPlatformTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderFriends(); });
document.getElementById('friendList').addEventListener('click', (e) => {
  const copyBtn = e.target.closest('button[data-copy-id]'); if (copyBtn) { copyText(copyBtn.dataset.copyId, isEn() ? EN.ui.toasts.idCopied(copyBtn.dataset.copyId) : '已复制游戏 ID：' + copyBtn.dataset.copyId); return; }
  const invBtn = e.target.closest('button[data-invite-squad]');
  if (invBtn) {
    const targetId = invBtn.dataset.inviteSquad;
    state.chatChannel = '#车队预招';
    document.querySelectorAll('#chatChannelTabs button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.ch === '#车队预招')));
    renderChat(); updateSocialCountersAndPulse(); switchLoungeTab('chat');
    const inp = document.getElementById('chatTextInput');
    if (inp) { inp.value = isEn() ? `@${targetId} Hey! Want to squad up for GTA 6?` : `@${targetId} 你好，一起组队开荒或刷收集吗？`; inp.focus(); }
  }
});

function setReplyTarget(author, text) {
  state.replyTarget = { author, text: String(text || '').slice(0, 60) };
  const bar = document.getElementById('chatReplyBar'), lbl = document.getElementById('chatReplyText');
  if (bar && lbl) {
    lbl.textContent = (isEn() ? 'Replying to ' : '正在回复 ') + author + '：' + state.replyTarget.text;
    bar.hidden = false;
  }
  const inp = document.getElementById('chatTextInput'); if (inp) inp.focus();
}
function clearReplyTarget() {
  state.replyTarget = null;
  const bar = document.getElementById('chatReplyBar'); if (bar) bar.hidden = true;
}
document.getElementById('cancelReplyBtn').addEventListener('click', clearReplyTarget);
function renderChat() {
  const en = isEn(), box = document.getElementById('chatMessages'), baseMsgs = state.chatMessages[state.chatChannel] || [];
  const enSeed = (en && EN.defaultChat[state.chatChannel]) ? EN.defaultChat[state.chatChannel] : null;
  const msgs = baseMsgs.map((m, idx) => (enSeed && enSeed[idx] && DEFAULT_CHAT[state.chatChannel] && DEFAULT_CHAT[state.chatChannel][idx] && m.text === DEFAULT_CHAT[state.chatChannel][idx].text) ? Object.assign({}, m, enSeed[idx]) : m);
  const replyLbl = en ? 'Reply' : '回复';
  box.innerHTML = msgs.map((m, idx) => {
    const rKey = 'chat:' + (m.id || (state.chatChannel + ':' + idx));
    const color = m.avatarColor || '#F5B041';
    const memberTag = m.isMember ? `<span class="member-badge">✓</span>` : '';
    const platTag = m.platform ? `<span class="plat-tag">${escapeHtml(m.platform)}</span>` : '';
    const quoteHtml = m.replyToAuthor ? `<div class="chat-quote">${en ? 'Replying to ' : '回复 '}${escapeHtml(m.replyToAuthor)}：${escapeHtml(m.replyToText || '')}</div>` : '';
    return `<div class="chat-msg"><div class="chat-msg-head"><span class="chat-author-wrap"><span class="avatar-dot" style="background:${escapeHtml(color)}"></span><span class="chat-msg-author">${escapeHtml(m.author)}</span>${memberTag}${platTag}</span><span class="tabular">${escapeHtml(m.time)}</span></div>${quoteHtml}<div style="font-size:var(--text-sm); color:var(--text-primary);">${escapeHtml(m.text)}</div><div class="chat-msg-actions">${renderReactionButtons(rKey)}<button type="button" class="text-action-btn" data-reply-author="${escapeHtml(m.author)}" data-reply-text="${escapeHtml(m.text)}">${escapeHtml(replyLbl)}</button></div></div>`;
  }).join('');
  box.scrollTop = box.scrollHeight;
}
document.getElementById('chatChannelTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-ch]'); if (!btn) return; state.chatChannel = btn.dataset.ch; document.querySelectorAll('#chatChannelTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); clearReplyTarget(); renderChat(); updateSocialCountersAndPulse(); });
document.getElementById('chatForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const iden = getActiveIdentity();
  const authorRaw = iden.isMember ? iden.handle : document.getElementById('chatAuthorInput').value.trim();
  const text = document.getElementById('chatTextInput').value.trim(); if (!authorRaw || !text) return;
  if (!iden.isMember) rememberPlayerHandle(authorRaw);
  const cur = getActiveIdentity(), now = new Date(), time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  if (!state.chatMessages[state.chatChannel]) state.chatMessages[state.chatChannel] = [];
  const msgObj = {
    id: 'local-' + Date.now(), author: cur.handle, time, text,
    replyToAuthor: state.replyTarget ? state.replyTarget.author : '',
    replyToText: state.replyTarget ? state.replyTarget.text : '',
    isMember: cur.isMember, platform: cur.platform, avatarColor: cur.avatarColor
  };
  state.chatMessages[state.chatChannel].push(msgObj); saveStore('vc_v7_chat', state.chatMessages);
  if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) window.VICE_CLOUD.sendChat(state.chatChannel, cur.handle, text, msgObj);
  document.getElementById('chatTextInput').value = ''; clearReplyTarget(); renderChat(); updateSocialCountersAndPulse(); showToast(isEn() ? EN.ui.toasts.chatSent(EN.ui.chatChannels[state.chatChannel] || state.chatChannel) : '已发送到 ' + state.chatChannel);
});

const backdrop = document.getElementById('backdrop'), videoModal = document.getElementById('videoModal'), publishDrawer = document.getElementById('publishDrawer'), commentDrawer = document.getElementById('commentDrawer'), friendDrawer = document.getElementById('friendDrawer'), searchModal = document.getElementById('searchModal'), authModal = document.getElementById('authModal');
function closeAllOverlays() {
  [videoModal, publishDrawer, commentDrawer, friendDrawer, searchModal, authModal].forEach(el => { if (el) { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); } });
  backdrop.classList.remove('open'); backdrop.setAttribute('aria-hidden', 'true');
  document.getElementById('videoIframeWrap').innerHTML = ''; state.activeVideoId = null;
}
function openOverlay(el) { closeAllOverlays(); backdrop.classList.add('open'); backdrop.setAttribute('aria-hidden', 'false'); el.classList.add('open'); el.setAttribute('aria-hidden', 'false'); }
function switchAuthMode(mode) {
  document.querySelectorAll('#authModeTabs button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.authMode === mode)));
  document.getElementById('authRegisterForm').hidden = (mode !== 'register');
  document.getElementById('authLoginForm').hidden = (mode !== 'login');
  document.getElementById('authGuestForm').hidden = (mode !== 'guest');
}
function openAuthModal(defaultMode) {
  const guestView = document.getElementById('authGuestView'), memberView = document.getElementById('authMemberView');
  if (state.member) {
    guestView.hidden = true; memberView.hidden = false;
    const { weight } = getChecklistStats();
    document.getElementById('memberProfileCard').innerHTML = `<div style="display:flex; align-items:center; gap:0.5rem;"><span class="avatar-dot" style="background:${escapeHtml(state.member.avatarColor)}; width:14px; height:14px;"></span><strong>${escapeHtml(state.member.displayName)}</strong><span class="member-badge">${isEn() ? 'Verified ✓' : '认证玩家 ✓'}</span><span class="plat-tag">${escapeHtml(state.member.platform)}</span></div><div style="font-size:var(--text-sm); color:var(--text-muted);">${isEn() ? `Cloud synced 100% Trophy Progress: ${weight.toFixed(1)}%` : `当前 100% 奖杯总进度：${weight.toFixed(1)}%（已开启跨设备云端同步）`}</div>`;
  } else {
    guestView.hidden = false; memberView.hidden = true;
    const gInput = document.getElementById('guestHandleInput'); if (gInput && state.profile.handle) gInput.value = state.profile.handle;
    switchAuthMode(defaultMode || 'register');
  }
  openOverlay(authModal);
}
backdrop.addEventListener('click', closeAllOverlays);
document.querySelectorAll('[data-close-drawer]').forEach(btn => btn.addEventListener('click', closeAllOverlays));
document.getElementById('closeVideoModalBtn').addEventListener('click', closeAllOverlays);
document.getElementById('closeAuthModalBtn').addEventListener('click', closeAllOverlays);
document.getElementById('openPublishBtn').addEventListener('click', () => openOverlay(publishDrawer));
document.getElementById('panelPublishBtn').addEventListener('click', () => openOverlay(publishDrawer));
document.getElementById('dockPublishBtn').addEventListener('click', () => openOverlay(publishDrawer));
document.getElementById('pulseSubmitBtn').addEventListener('click', () => openOverlay(publishDrawer));
document.getElementById('openFriendBtn').addEventListener('click', () => openOverlay(friendDrawer));
document.getElementById('openAccountBtn').addEventListener('click', () => openAuthModal('register'));
document.getElementById('mobileAccountBtn').addEventListener('click', () => { mobileNav.classList.remove('open'); openAuthModal('register'); });
document.getElementById('loungeAccountBtn').addEventListener('click', () => openAuthModal('register'));
document.getElementById('loungeMainTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-lounge-tab]'); if (btn) switchLoungeTab(btn.dataset.loungeTab); });
document.getElementById('authModeTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-auth-mode]'); if (btn) switchAuthMode(btn.dataset.authMode); });
['pulseChatBtn', 'pulseJoinChatBtn', 'dockChatBtn'].forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('click', () => jumpToLounge('chat', true)); });
document.getElementById('pulsePostBtn').addEventListener('click', () => jumpToLounge('posts', false));
document.getElementById('authRegisterForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const u = document.getElementById('regUsername').value.trim(), pw = document.getElementById('regPassword').value, plat = document.getElementById('regPlatform').value, color = document.getElementById('regColor').value;
  if (!u || pw.length < 4) return;
  if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) {
    const res = await window.VICE_CLOUD.registerMember({ username: u, displayName: u, password: pw, platform: plat, avatarColor: color, progressJson: { checklist: state.checklist, sweepChecked: state.sweepChecked } });
    if (!res.ok) {
      if (res.reason === 'exists') { showToast(isEn() ? 'Username already taken. Try logging in or pick another.' : '该用户名已被注册，请直接登录或换一个名字'); return; }
      if (res.reason === 'schema_missing') {
        state.member = { username: u.toLowerCase(), displayName: u.startsWith('@') ? u : '@' + u, platform: plat, avatarColor: color };
        saveStore('vc_member_session', state.member); applySavedProfileInputs(); syncIdentityUI(); closeAllOverlays();
        showToast(isEn() ? 'Account active locally (run schema-v2.sql in Supabase for cloud sync)' : '已创建本地认证身份（在 Supabase 运行 schema-v2.sql 即可跨设备云同步）'); return;
      }
      showToast(isEn() ? 'Registration failed, please retry.' : '注册暂未成功，请稍后再试'); return;
    }
    state.member = res.member;
  } else {
    state.member = { username: u.toLowerCase(), displayName: u.startsWith('@') ? u : '@' + u, platform: plat, avatarColor: color };
  }
  saveStore('vc_member_session', state.member); applySavedProfileInputs(); syncIdentityUI(); closeAllOverlays();
  showToast(isEn() ? `Welcome, ${state.member.displayName}! Cloud progress synced.` : `注册成功！欢迎 ${state.member.displayName}，当前进度已同步到云端`);
});
document.getElementById('authLoginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const u = document.getElementById('loginUsername').value.trim(), pw = document.getElementById('loginPassword').value;
  if (!u || !pw) return;
  if (!window.VICE_CLOUD || !window.VICE_CLOUD.enabled) { showToast(isEn() ? 'Cloud sync is offline.' : '云端数据库未连接'); return; }
  const res = await window.VICE_CLOUD.loginMember(u, pw);
  if (!res.ok) {
    const msg = res.reason === 'not_found' ? (isEn() ? 'Account not found.' : '未找到该用户名，请先注册') : (res.reason === 'wrong_password' ? (isEn() ? 'Incorrect password.' : '密码不正确，请重试') : (isEn() ? 'Please run schema-v2.sql in Supabase first.' : '请先在 Supabase 运行 schema-v2.sql 升级脚本'));
    showToast(msg); return;
  }
  state.member = res.member; saveStore('vc_member_session', state.member);
  if (res.member.progressJson && res.member.progressJson.checklist) { state.checklist = Object.assign({}, state.checklist, res.member.progressJson.checklist); saveStore('vc_v7_checklist', state.checklist); }
  if (res.member.progressJson && res.member.progressJson.sweepChecked) { state.sweepChecked = Object.assign({}, state.sweepChecked, res.member.progressJson.sweepChecked); saveStore('vc_v7_sweep', state.sweepChecked); }
  applySavedProfileInputs(); renderAll(); closeAllOverlays();
  showToast(isEn() ? `Welcome back, ${state.member.displayName}!` : `欢迎回来 ${state.member.displayName}，云端进度已恢复`);
});
document.getElementById('authGuestForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const h = document.getElementById('guestHandleInput').value.trim(), plat = document.getElementById('guestPlatformInput').value;
  if (!h) return;
  state.profile.handle = h.startsWith('@') ? h : '@' + h; state.profile.platform = plat; saveStore('vc_player_profile', state.profile);
  applySavedProfileInputs(); syncIdentityUI(); closeAllOverlays();
  showToast(isEn() ? `Guest handle saved: ${state.profile.handle}` : `已保存游客身份：${state.profile.handle}`);
});
document.getElementById('syncProgressNowBtn').addEventListener('click', async () => {
  if (!state.member || !window.VICE_CLOUD || !window.VICE_CLOUD.enabled) return;
  await window.VICE_CLOUD.saveMemberProgress(state.member.username, { checklist: state.checklist, sweepChecked: state.sweepChecked });
  showToast(isEn() ? '100% progress & sweep lists synced to cloud!' : '已将 100% 奖杯与区域扫荡进度同步至云端');
});
document.getElementById('logoutBtn').addEventListener('click', () => {
  state.member = null; saveStore('vc_member_session', null); applySavedProfileInputs(); syncIdentityUI(); closeAllOverlays();
  showToast(isEn() ? 'Signed out. Switched back to Guest mode.' : '已退出登录，切回免注册游客模式');
});
const vmShareBtn = document.getElementById('vmShareBtn');
if (vmShareBtn) vmShareBtn.addEventListener('click', () => {
  if (!state.activeVideoId) return;
  const url = location.origin + location.pathname + '#video-' + state.activeVideoId;
  copyText(url, isEn() ? EN.ui.linkCopied : '已复制该条攻略视频直达链接');
});

function getLocalizedComments(key) {
  const base = state.comments[key] || [];
  if (!isEn() || !EN.defaultComments[key]) return base;
  const enSeed = EN.defaultComments[key], zhSeed = DEFAULT_COMMENTS[key] || [];
  return base.map((c, idx) => (enSeed[idx] && zhSeed[idx] && c.text === zhSeed[idx].text) ? enSeed[idx] : c);
}
function renderVideoModalComments() {
  const cKey = 'v-' + state.activeVideoId, list = document.getElementById('vmCommentList'), items = getLocalizedComments(cKey);
  list.innerHTML = items.length ? items.map(c => `<div class="chat-msg"><div class="chat-msg-head"><span class="chat-msg-author">${escapeHtml(c.author)}</span><span class="tabular">${escapeHtml(c.time)}</span></div><p style="font-size:var(--text-sm); color:var(--text-primary);">${escapeHtml(c.text)}</p></div>`).join('') : `<p class="empty-state" style="padding:0.75rem 0;">${isEn() ? EN.ui.emptyVideoComments : '暂无评论，写下你的第一条实测反馈。'}</p>`;
}
function playInlineVideo(vid){const slot=document.getElementById("slot-"+vid),raw=VIDEOS.find(x=>x.id===vid);if(!slot||!raw)return;const v=getVideoCopy(raw);slot.innerHTML=`<iframe class="video-inline-iframe" src="https://www.youtube.com/embed/${vid}?autoplay=1&rel=0&playsinline=1" title="${escapeHtml(v.title)}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;}
function playInlinePostVideo(postId, ytId) {
  const slot = document.getElementById('post-slot-' + postId);
  const raw = state.posts.find(p => p.id === postId); if (!slot || !ytId) return;
  const p = raw ? getPostCopy(raw) : { title: 'Community Video' };
  slot.innerHTML = `<iframe class="video-inline-iframe" src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&playsinline=1" title="${escapeHtml(p.title)}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
}
function openPostVideoModal(postId, ytId) {
  if (VIDEOS.some(v => v.id === ytId)) { openVideoPlayer(ytId); return; }
  const raw = state.posts.find(p => p.id === postId); if (!raw || !ytId) return;
  const p = getPostCopy(raw);
  openOverlay(videoModal); state.activeVideoId = ytId;
  document.getElementById('videoIframeWrap').innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&playsinline=1" title="${escapeHtml(p.title)}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  document.getElementById('vmTitle').textContent = p.title;
  document.getElementById('vmMeta').textContent = `${p.author} / ${isEn() ? (EN.ui.postCategories[p.category] || p.category) : p.category}`;
  document.getElementById('vmNote').textContent = p.body;
  renderVideoModalComments();
}
function openVideoPlayer(vid) {
  const raw = VIDEOS.find(x => x.id === vid); if (!raw) return;
  const v = getVideoCopy(raw);
  openOverlay(videoModal); state.activeVideoId = vid;
  document.getElementById('videoIframeWrap').innerHTML = `<iframe src="https://www.youtube.com/embed/${vid}?autoplay=1&rel=0&playsinline=1" title="${escapeHtml(v.title)}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  document.getElementById('vmTitle').textContent = v.title;
  document.getElementById('vmMeta').textContent = isEn() ? EN.ui.vmMeta(v.channel, formatViews(v.views), v.duration) : `${v.channel} / ${formatViews(v.views)} / 时长 ${v.duration}`;
  document.getElementById('vmNote').textContent = v.note;
  renderVideoModalComments();
}

document.body.addEventListener('click', (e) => {
  const reactBtn = e.target.closest('[data-react-key]'); if (reactBtn) { toggleReaction(reactBtn.dataset.reactKey, reactBtn.dataset.reactEmoji); return; }
  const replyBtn = e.target.closest('[data-reply-author]'); if (replyBtn) { setReplyTarget(replyBtn.dataset.replyAuthor, replyBtn.dataset.replyText); return; }
  const pinBtn = e.target.closest('[data-copy-pin]'); if (pinBtn) { copyText(pinBtn.dataset.copyPin, isEn() ? EN.ui.toasts.pinCopied(pinBtn.dataset.copyPin) : '已复制密码：' + pinBtn.dataset.copyPin); return; }
  const shareBtn = e.target.closest('[data-share-video]'); if (shareBtn) { const url = location.origin + location.pathname + '#video-' + shareBtn.dataset.shareVideo; copyText(url, isEn() ? EN.ui.linkCopied : '已复制该条攻略视频直达链接'); return; }
  const inlinePostBtn = e.target.closest('[data-inline-play-post]'); if (inlinePostBtn) { playInlinePostVideo(inlinePostBtn.dataset.inlinePlayPost, inlinePostBtn.dataset.ytId); return; }
  const modalPostBtn = e.target.closest('[data-play-post-modal]'); if (modalPostBtn) { openPostVideoModal(modalPostBtn.dataset.playPostModal, modalPostBtn.dataset.ytId); return; }
  const inlineBtn = e.target.closest('[data-inline-play]'); if (inlineBtn) { playInlineVideo(inlineBtn.dataset.inlinePlay); return; }
  const playBtn = e.target.closest('[data-play-video]');
  if (playBtn) { openVideoPlayer(playBtn.dataset.playVideo); return; }
  const cBtn = e.target.closest('button[data-open-comments]');
  if (cBtn) {
    state.activeCommentKey = cBtn.dataset.openComments; document.getElementById('commentDrawerTitle').textContent = (isEn() ? EN.ui.commentDrawerPrefix : '评论：') + cBtn.dataset.commentTitle;
    const list = document.getElementById('commentList'), items = getLocalizedComments(state.activeCommentKey);
    list.innerHTML = items.length ? items.map(c => `<div class="chat-msg"><div class="chat-msg-head"><span class="chat-msg-author">${escapeHtml(c.author)}</span><span class="tabular">${escapeHtml(c.time)}</span></div><p style="font-size:var(--text-sm); color:var(--text-primary);">${escapeHtml(c.text)}</p></div>`).join('') : `<p class="empty-state">${isEn() ? EN.ui.emptyDrawerComments : '还没有人讨论这条内容，在下方写下第一条实测心得。'}</p>`;
    openOverlay(commentDrawer);
  }
});

document.getElementById('vmCommentForm').addEventListener('submit', (e) => {
  e.preventDefault(); if (!state.activeVideoId) return;
  const authorRaw = document.getElementById('vmCommentAuthor').value.trim(), text = document.getElementById('vmCommentText').value.trim(); if (!authorRaw || !text) return;
  rememberPlayerHandle(authorRaw);
  const cKey = 'v-' + state.activeVideoId, author = state.profile.handle;
  if (!state.comments[cKey]) state.comments[cKey] = [];
  state.comments[cKey].push({ author, time: isEn() ? EN.ui.justNow : '刚刚', text }); saveStore('vc_v7_comments', state.comments);
  if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) window.VICE_CLOUD.addComment(cKey, author, text);
  document.getElementById('vmCommentText').value = ''; renderVideoModalComments(); renderVideos(); showToast(isEn() ? EN.ui.toasts.videoCommented : '已发表视频评论');
});

document.getElementById('commentForm').addEventListener('submit', (e) => {
  e.preventDefault(); if (!state.activeCommentKey) return;
  const authorRaw = document.getElementById('commentAuthor').value.trim(), text = document.getElementById('commentBody').value.trim(); if (!authorRaw || !text) return;
  rememberPlayerHandle(authorRaw);
  const author = state.profile.handle;
  if (!state.comments[state.activeCommentKey]) state.comments[state.activeCommentKey] = [];
  state.comments[state.activeCommentKey].push({ author, time: isEn() ? EN.ui.justNow : '刚刚', text }); saveStore('vc_v7_comments', state.comments);
  if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) window.VICE_CLOUD.addComment(state.activeCommentKey, author, text);
  document.getElementById('commentBody').value = '';
  document.getElementById('commentList').innerHTML = getLocalizedComments(state.activeCommentKey).map(c => `<div class="chat-msg"><div class="chat-msg-head"><span class="chat-msg-author">${escapeHtml(c.author)}</span><span class="tabular">${escapeHtml(c.time)}</span></div><p style="font-size:var(--text-sm); color:var(--text-primary);">${escapeHtml(c.text)}</p></div>`).join('');
  renderCommunity(); showToast(isEn() ? EN.ui.toasts.commented : '已发表评论');
});

document.getElementById('publishForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('postTitle').value.trim(), authorRaw = document.getElementById('postAuthor').value.trim(), category = document.getElementById('postCategory').value, videoUrl = document.getElementById('postVideoUrl').value.trim(), body = document.getElementById('postContent').value.trim();
  if (!title || !authorRaw || !body) return;
  rememberPlayerHandle(authorRaw);
  const cur = getActiveIdentity();
  const newPost = { id: 'p-' + Date.now(), title, author: cur.handle || authorRaw, category, videoUrl, upvotes: 1, body, isMember: cur.isMember, platform: cur.platform };
  state.posts.unshift(newPost); state.upvoted[newPost.id] = true; saveStore('vc_v7_posts', state.posts); saveStore('vc_v7_upvoted', state.upvoted);
  if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) window.VICE_CLOUD.createPost(newPost);
  e.target.reset(); applySavedProfileInputs(); closeAllOverlays(); renderCommunity(); updateSocialCountersAndPulse(); jumpToLounge('posts', false); showToast(isEn() ? EN.ui.toasts.guidePublished : '已发布攻略到广场');
});

document.getElementById('friendForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const gameId = document.getElementById('friendGameId').value.trim(), platform = document.getElementById('friendPlatform').value, note = document.getElementById('friendNote').value.trim();
  if (!gameId || !note) return;
  state.profile.gameId = gameId; state.profile.platform = platform; saveStore('vc_player_profile', state.profile);
  const card = { id: 'f-' + Date.now(), gameId, platform, note };
  state.friends.unshift(card); saveStore('vc_v7_friends', state.friends);
  if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) window.VICE_CLOUD.createSquadCard(card);
  e.target.reset(); applySavedProfileInputs(); closeAllOverlays(); renderFriends(); showToast(isEn() ? EN.ui.toasts.friendSaved : '已保存名片');
});

document.getElementById('exportJsonBtn').addEventListener('click', () => copyText(JSON.stringify({ project: 'VICE CODEX v8.0 (MIT)', exportedAt: new Date().toISOString(), videosCount: VIDEOS.length, posts: state.posts, friends: state.friends }, null, 2), isEn() ? EN.ui.toasts.jsonCopied : '已复制社区数据 JSON'));
document.getElementById('sponsorActionBtn').addEventListener('click', () => copyText(isEn() ? EN.ui.sponsorCopyText : '罪城全书 VICE CODEX v8.0 商业合作：支持首页焦点轮播原生赞助位与页底主机外设/加速器导购席位，零弹窗广告。', isEn() ? EN.ui.toasts.sponsorCopied : '已复制商业合作说明'));

const globalSearchInput = document.getElementById('globalSearchInput'), searchResultsEl = document.getElementById('searchResults');
function openSearch() { openOverlay(searchModal); renderGlobalSearch(''); setTimeout(() => globalSearchInput.focus(), 40); }
document.getElementById('openSearchBtn').addEventListener('click', openSearch);
document.getElementById('mobileSearchBtn').addEventListener('click', () => { mobileNav.classList.remove('open'); openSearch(); });
document.getElementById('closeSearchBtn').addEventListener('click', closeAllOverlays);

function buildSearchIndex() {
  const en = isEn(), t = en ? EN.ui.searchTypes : { video: '站内视频', mechanic: '机制密码', car: '极速超跑', weapon: '传奇武器', post: '社区投稿' }, items = [];
  VIDEOS.forEach(raw => { const v = getVideoCopy(raw); items.push({ type: t.video, title: v.title, sub: v.channel + ' / ' + v.note, playId: v.id }); });
  MECHANICS.forEach(raw => { const m = (en && EN.mechanics[raw.id]) ? { ...raw, ...EN.mechanics[raw.id] } : raw; items.push({ type: t.mechanic, title: m.title, sub: m.body + ' ' + m.tip, target: '#mech-' + m.id, action: () => { state.mechCat = 'all'; renderMechanics(); } }); });
  SUPERCARS.forEach((raw, idx) => { const c = (en && EN.supercars[idx]) ? { ...raw, ...EN.supercars[idx] } : raw; items.push({ type: t.car, title: c.name + ' (' + c.speed + ')', sub: c.method, target: '#car-' + c.rank, action: () => { state.arsenalTab = 'cars'; renderArsenal(); } }); });
  LEGENDARY_WEAPONS.forEach((raw, idx) => { const w = (en && EN.weapons[idx]) ? { ...raw, ...EN.weapons[idx] } : raw; items.push({ type: t.weapon, title: w.name, sub: w.location + ' ' + w.cost, target: '#weapon-' + w.rank, action: () => { state.arsenalTab = 'weapons'; renderArsenal(); } }); });
  state.posts.forEach(raw => { const p = getPostCopy(raw); items.push({ type: t.post, title: p.title, sub: p.author + ' ' + p.body, target: '#post-' + p.id, action: () => { state.postCat = 'all'; renderCommunity(); } }); });
  return items;
}
function renderGlobalSearch(query) {
  const q = query.trim().toLowerCase(), index = buildSearchIndex();
  const matches = q ? index.filter(item => (item.title + ' ' + item.sub + ' ' + item.type).toLowerCase().includes(q)).slice(0, 14) : index.slice(0, 8);
  if (!matches.length) { searchResultsEl.innerHTML = `<p class="empty-state">${isEn() ? EN.ui.searchEmpty : '没有找到匹配条目。试试搜索“2314”“085355”“Emerus”“作弊码”或“汤米”。'}</p>`; return; }
  searchResultsEl.innerHTML = matches.map((m, idx) => `<div class="search-result-row" data-sr-idx="${idx}"><div><div style="font-weight:700;">${escapeHtml(m.title)}</div><div style="font-size:var(--text-sm); color:var(--text-muted);">${escapeHtml(m.sub.slice(0, 72))}</div></div><span class="search-result-type">${escapeHtml(m.type)}</span></div>`).join('');
  searchResultsEl._matches = matches;
}
globalSearchInput.addEventListener('input', (e) => renderGlobalSearch(e.target.value));
searchResultsEl.addEventListener('click', (e) => {
  const row = e.target.closest('[data-sr-idx]'); if (!row || !searchResultsEl._matches) return;
  const item = searchResultsEl._matches[Number(row.dataset.srIdx)];
  if (item.playId) { openVideoPlayer(item.playId); return; }
  closeAllOverlays();
  if (item.action) item.action();
  setTimeout(() => { const target = document.querySelector(item.target); if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'center' }); target.classList.remove('highlight-pulse'); void target.offsetWidth; target.classList.add('highlight-pulse'); } }, 60);
});

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); return; }
  if (e.key === 'Escape') { closeAllOverlays(); return; }
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft') stepHero(-1);
  if (e.key === 'ArrowRight') stepHero(1);
});

async function syncCloudSocial() {
  if (!window.VICE_CLOUD || !window.VICE_CLOUD.enabled) return;
  const data = await window.VICE_CLOUD.fetchAll(); if (!data) return;
  if (Array.isArray(data.reactions)) {
    data.reactions.forEach(r => {
      if (!state.reactions[r.target_key]) state.reactions[r.target_key] = {};
      state.reactions[r.target_key][r.emoji] = Math.max(Number(r.count || 0), Number(state.reactions[r.target_key][r.emoji] || 0));
    });
    saveStore('vc_reactions', state.reactions);
  }
  if (Array.isArray(data.posts) && data.posts.length) {
    const seen = new Set(data.posts.map(p => p.id));
    const mapped = data.posts.map(p => ({ id: p.id, title: p.title, author: p.author, category: p.category, videoUrl: p.video_url || '', upvotes: p.upvotes || 1, body: p.body, isMember: Boolean(p.is_member), platform: p.platform || '' }));
    state.posts = mapped.concat(DEFAULT_POSTS.filter(d => !seen.has(d.id)));
    renderCommunity();
  }
  if (Array.isArray(data.squad) && data.squad.length) {
    const seen = new Set(data.squad.map(s => s.id));
    const mapped = data.squad.map(s => ({ id: s.id, gameId: s.game_id, platform: s.platform, note: s.note }));
    state.friends = mapped.concat(DEFAULT_FRIENDS.filter(d => !seen.has(d.id)));
    renderFriends();
  }
  if (Array.isArray(data.chat) && data.chat.length) {
    const grouped = JSON.parse(JSON.stringify(DEFAULT_CHAT));
    data.chat.forEach(m => {
      if (!grouped[m.channel]) grouped[m.channel] = [];
      const t = (m.created_at || '').slice(11, 16) || 'live';
      grouped[m.channel].push({
        id: m.id, author: m.author, time: t, text: m.text,
        replyToAuthor: m.reply_to_author || '', replyToText: m.reply_to_text || '',
        isMember: Boolean(m.is_member), platform: m.platform || '', avatarColor: m.avatar_color || '#F5B041'
      });
    });
    state.chatMessages = grouped; renderChat();
  }
  if (Array.isArray(data.comments) && data.comments.length) {
    const grouped = JSON.parse(JSON.stringify(DEFAULT_COMMENTS));
    data.comments.forEach(c => {
      if (!grouped[c.target_key]) grouped[c.target_key] = [];
      const t = (c.created_at || '').slice(5, 16).replace('T', ' ') || 'live';
      grouped[c.target_key].push({ author: c.author, time: t, text: c.text });
    });
    state.comments = grouped; renderVideos(); renderCommunity();
  }
  updateSocialCountersAndPulse();
}
function checkHashDeepLink() {
  const vm = (location.hash || '').match(/^#video-([A-Za-z0-9_-]{11})$/);
  if (vm && VIDEOS.some(v => v.id === vm[1])) { openVideoPlayer(vm[1]); return; }
  const pm = (location.hash || '').match(/^#post-(.+)$/);
  if (pm) { jumpToLounge('posts', false); }
}
async function loadCloudVideos() {
  try {
    const res = await fetch('./data/videos.json', { cache: 'no-cache' });
    if (!res.ok) return;
    const payload = await res.json();
    if (payload.updatedAt) state.cloudUpdatedAt = payload.updatedAt;
    const cloud = Array.isArray(payload.videos) ? payload.videos : [];
    const seen = new Set(VIDEOS.map(v => v.id));
    let added = 0;
    cloud.forEach(item => {
      if (item && item.id && !seen.has(item.id)) {
        seen.add(item.id);
        VIDEOS.push(item);
        added += 1;
      }
    });
    if (added > 0 || state.cloudUpdatedAt) { syncDynamicVideoCounts(); renderHero(); renderVideos(); }
    checkHashDeepLink();
  } catch (e) {}
}
renderAll(); applySavedProfileInputs(); restartHeroAuto(); loadCloudVideos(); syncCloudSocial();
if (window.VICE_CLOUD && window.VICE_CLOUD.enabled) setInterval(syncCloudSocial, 10000);