const HERO_SLIDES = [
  { id: 'hero-1', order: 1, views24h: 3953074, engagement: 0.96, freshness: 1.0, sponsored: false, tag: '热度榜首 / 50 条视频站内播放', title: '罪恶都市黄昏海滨全玩法百科', desc: '收录 50 条实测高播放视频、6 大区域扫荡清单与 127 传奇武器点位，主机第二屏常驻工具站。', ctaText: '浏览 50 条实战视频', ctaHref: '#videos', image: 'assets/vice-city.jpg', fallback: 'https://vice6map.com/assets/screenshots/vice-city-ocean-drive.jpg', shortTitle: '罪恶都市海滨' },
  { id: 'hero-2', order: 2, views24h: 1580000, engagement: 0.94, freshness: 0.98, sponsored: false, tag: 'Port Gellhorn 扫荡专题', title: '8 把传奇武器与 UFO 2314 永久加成', desc: '树顶沙发左轮、4 组固定地堡密码与星光旅馆 UFO 营救，一键进入区域扫荡模式逐项勾选。', ctaText: '打开区域扫荡工作台', ctaHref: '#sweep', image: 'assets/port-gellhorn.jpg', fallback: 'https://static.wikia.nocookie.net/gtawiki/images/9/9f/PortGellhorn-GTAVI-CroppedPostcard.png/revision/latest?cb=20250507043050', shortTitle: 'Port Gellhorn 扫荡' },
  { id: 'hero-3', order: 3, views24h: 1227918, engagement: 0.93, freshness: 0.96, sponsored: false, tag: 'Leonida Keys 开荒防漏', title: '第一章离岛前绝不能漏的隐藏收集', desc: 'Tourist Trap 任务会清空 Jason 旧宅与现金，先去卧室地板藏钱并领完门口信箱赏金。', ctaText: '查看章节避坑路线', ctaHref: '#chapters', image: 'assets/leonida-keys.jpg', fallback: 'https://static.wikia.nocookie.net/gtawiki/images/5/59/LeonidaKeys-GTAVI-CroppedPostcard.png/revision/latest?cb=20250507043056', shortTitle: '群岛开荒防漏' },
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
  { id: 'LiY1RXa9gGw', title: '隐藏电台 The Vault 解锁：夜店 WAiNK 扫描毒气面具海报', channel: 'GTAMen', cat: 'easter', views: 790000, hoursAgo: 16, duration: '08:41', note: 'Downtown Vice City 夜店内部实拍位置' }
];

const SWEEP_DATA = {
  'port-gellhorn': {
    name: 'Port Gellhorn 格尔霍恩港', sub: '第 2 章核心扫荡区 / 8 把传奇武器 + UFO 2314', image: 'assets/port-gellhorn.jpg', fallback: 'https://static.wikia.nocookie.net/gtawiki/images/9/9f/PortGellhorn-GTAVI-CroppedPostcard.png/revision/latest?cb=20250507043050',
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
    name: 'Leonida Keys 群岛', sub: '第 1 章开荒必扫 / 藏钱防漏 + 复古罪城起点', image: 'assets/leonida-keys.jpg', fallback: 'https://static.wikia.nocookie.net/gtawiki/images/5/59/LeonidaKeys-GTAVI-CroppedPostcard.png/revision/latest?cb=20250507043056',
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
  { name: 'Leonida Keys 群岛', county: 'Mariana 郡', desc: '第 1 章开荒起点 Key Lento 所在海域。包含 Jason 卧室藏钱暗格、门口赏金信箱、无线电塔彩蛋起点及浅海沉船秘宝。', image: 'assets/leonida-keys.jpg', fallback: 'https://static.wikia.nocookie.net/gtawiki/images/5/59/LeonidaKeys-GTAVI-CroppedPostcard.png/revision/latest?cb=20250507043056' },
  { name: 'Port Gellhorn 格尔霍恩港', county: 'Kelly 郡', desc: '第 2 章核心工业与公路城镇。藏有 8 把高性价比传奇武器、Moses 偷车销赃线，以及星光旅馆东侧夜间 UFO 遭遇点。', image: 'assets/port-gellhorn.jpg', fallback: 'https://static.wikia.nocookie.net/gtawiki/images/9/9f/PortGellhorn-GTAVI-CroppedPostcard.png/revision/latest?cb=20250507043050' },
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
  { id: 'secret-radio', cat: 'easter', meta: '隐藏彩蛋 / 隐藏电台与怪谈', title: 'The Vault 隐藏电台、Cool Dog 与臭鼬猿', body: '在 Downtown Vice City 的 The Vault 夜店内用 WAiNK 应用（R1/RB）扫描红色毒气面具海报即可解锁隐藏电台；Gambit Bay 水上摩托遇 Cool Dog 可得 $1,218 钱包；Gullet 沼泽可遇臭鼬猿与巨型变异蟹；Jason 屋外停着 GTA 5 麦克的游艇。', tip: '补充彩蛋：Washington Island 可找到 Dexter 公寓与船只，Mount Kalaga 山顶藏有发光粉色陨石。', spoiler: true }
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
function formatViews(n) { return n >= 10000 ? (n / 10000).toFixed(1) + '万播放' : n + '播放'; }

const state = {
  heroSort: 'heat', heroIndex: 0, videoCat: 'all', videoSort: 'heat', videoLimit: 12,
  activeSweepRegion: 'port-gellhorn', sweepChecked: loadStore('vc_v7_sweep', {}),
  mechCat: 'all', arsenalTab: 'cars', activeChapter: 1, spoilerSafe: false,
  checklist: loadStore('vc_v7_checklist', {}), posts: loadStore('vc_v7_posts', DEFAULT_POSTS),
  upvoted: loadStore('vc_v7_upvoted', {}), postCat: 'all',
  friends: loadStore('vc_v7_friends', DEFAULT_FRIENDS), friendPlat: 'all',
  chatChannel: '#开荒互助', chatMessages: loadStore('vc_v7_chat', DEFAULT_CHAT),
  comments: loadStore('vc_v7_comments', DEFAULT_COMMENTS),
  activeCommentKey: null, activeVideoId: null
};

let toastTimer = null;
function showToast(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 2500); }
function copyText(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(() => showToast(successMsg)).catch(() => fallbackCopy(text, successMsg));
  else fallbackCopy(text, successMsg);
}
function fallbackCopy(text, successMsg) {
  const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); showToast(successMsg); } catch (e) { showToast('复制未完成，请手动选中复制'); }
  document.body.removeChild(ta);
}

const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => { siteHeader.classList.toggle('scrolled', window.scrollY > 36); }, { passive: true });
const menuToggleBtn = document.getElementById('menuToggleBtn'), mobileNav = document.getElementById('mobileNav');
menuToggleBtn.addEventListener('click', () => { const open = mobileNav.classList.toggle('open'); menuToggleBtn.setAttribute('aria-expanded', String(open)); });
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobileNav.classList.remove('open'); menuToggleBtn.setAttribute('aria-expanded', 'false'); }));

function toggleSpoiler() {
  state.spoilerSafe = !state.spoilerSafe;
  const label = state.spoilerSafe ? '防剧透：开' : '防剧透：关';
  ['spoilerToggle', 'mobileSpoilerToggle'].forEach(id => { const btn = document.getElementById(id); if (btn) { btn.setAttribute('aria-pressed', String(state.spoilerSafe)); btn.textContent = label; } });
  renderMechanics(); renderChapter();
  showToast(state.spoilerSafe ? '已开启防剧透，后期章节与彩蛋已模糊' : '已切换为全玩法无限制展示');
}
document.getElementById('spoilerToggle').addEventListener('click', toggleSpoiler);
document.getElementById('mobileSpoilerToggle').addEventListener('click', toggleSpoiler);

function getOrderedHeroSlides() {
  const list = HERO_SLIDES.map(s => ({ ...s, heat: calcHeroHeat(s) }));
  return state.heroSort === 'heat' ? list.sort((a, b) => b.heat - a.heat) : list.sort((a, b) => a.order - b.order);
}
let heroAutoTimer = null;
function renderHero() {
  const slides = getOrderedHeroSlides();
  if (state.heroIndex >= slides.length) state.heroIndex = 0;
  const active = slides[state.heroIndex];
  document.getElementById('heroSlides').innerHTML = slides.map((s, idx) => `<div class="hero-slide${idx === state.heroIndex ? ' active' : ''}"><img src="${s.image}" alt="${escapeHtml(s.title)}" onerror="this.onerror=null;this.src='${s.fallback}';"></div>`).join('');
  document.getElementById('heroCopyBlock').innerHTML = `<div class="hero-meta-line tabular">${escapeHtml(active.tag)} / 实时热度 ${active.heat}</div><h1 class="hero-title">${escapeHtml(active.title)}</h1><p class="hero-desc">${escapeHtml(active.desc)}</p><div class="hero-cta-row"><a href="${active.ctaHref}" class="btn-primary">${escapeHtml(active.ctaText)}</a><span class="tabular" style="font-size:var(--text-sm); color:var(--text-muted);">${state.heroIndex + 1} / ${slides.length}</span></div>`;
  document.getElementById('heroFilmstrip').innerHTML = slides.map((s, idx) => `<button type="button" class="filmstrip-item${idx === state.heroIndex ? ' active' : ''}" role="tab" aria-selected="${idx === state.heroIndex}" data-slide-idx="${idx}"><img class="filmstrip-thumb" src="${s.image}" alt="${escapeHtml(s.shortTitle)}" loading="lazy" onerror="this.onerror=null;this.src='${s.fallback}';"><div class="filmstrip-caption">${escapeHtml(s.shortTitle)}</div></button>`).join('');
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
  renderHero(); showToast(state.heroSort === 'heat' ? '已按实时热度重排全景封面' : '已切换为官方精选顺序');
});
const heroStage = document.getElementById('heroStage'); let touchStartX = 0;
heroStage.addEventListener('pointerdown', (e) => { if (!e.target.closest('button, a')) touchStartX = e.clientX; });
heroStage.addEventListener('pointerup', (e) => { if (!touchStartX) return; const diff = e.clientX - touchStartX; touchStartX = 0; if (Math.abs(diff) > 48) stepHero(diff > 0 ? -1 : 1); });
heroStage.addEventListener('mouseenter', () => clearInterval(heroAutoTimer));
heroStage.addEventListener('mouseleave', restartHeroAuto);

function getFilteredVideos() {
  let list = VIDEOS.map(v => ({ ...v, heat: calcVideoHeat(v) }));
  if (state.videoCat !== 'all') list = list.filter(v => v.cat === state.videoCat);
  if (state.videoSort === 'heat') list.sort((a, b) => b.heat - a.heat);
  if (state.videoSort === 'views') list.sort((a, b) => b.views - a.views);
  if (state.videoSort === 'newest') list.sort((a, b) => a.hoursAgo - b.hoursAgo);
  return list;
}

function renderVideos() {
  const fullList = getFilteredVideos();
  const visible = fullList.slice(0, state.videoLimit);
  document.getElementById('videoGrid').innerHTML = visible.map(v => {
    const cKey = 'v-' + v.id; const cCount = (state.comments[cKey] || []).length;
    return `<article class="video-item" id="video-${v.id}"><button type="button" class="video-cover-btn" data-play-video="${v.id}" aria-label="站内播放 ${escapeHtml(v.title)}"><img src="https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg" alt="${escapeHtml(v.title)}" loading="lazy" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${v.id}/hqdefault.jpg';"><span class="video-play-ring" aria-hidden="true">&#9654;</span><div class="video-overlay-bar tabular"><span class="video-heat-num">热度 ${v.heat}</span><span>${v.duration}</span></div></button><div class="video-meta-row tabular"><span>${escapeHtml(v.channel)}</span><span>${formatViews(v.views)}</span></div><button type="button" class="video-title-btn" data-play-video="${v.id}">${escapeHtml(v.title)}</button><p style="font-size:var(--text-sm); color:var(--text-muted);">${escapeHtml(v.note)}</p><div class="video-foot-row"><button type="button" class="text-action-btn" style="color:var(--accent); font-weight:700;" data-play-video="${v.id}">站内播放</button><button type="button" class="text-action-btn tabular" data-play-video="${v.id}">评论 (${cCount})</button></div></article>`;
  }).join('');
  const wrap = document.getElementById('videoLoadMoreWrap');
  if (visible.length < fullList.length) {
    wrap.innerHTML = `<button type="button" class="btn-secondary tabular" id="loadMoreVideosBtn">加载更多视频（已显示 ${visible.length} / ${fullList.length}）</button>`;
    document.getElementById('loadMoreVideosBtn').addEventListener('click', () => { state.videoLimit += 12; renderVideos(); });
  } else { wrap.innerHTML = ''; }
}
document.getElementById('videoCatTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-vcat]'); if (!btn) return; state.videoCat = btn.dataset.vcat; state.videoLimit = 12; document.querySelectorAll('#videoCatTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderVideos(); });
document.getElementById('videoSortSelect').addEventListener('change', (e) => { state.videoSort = e.target.value; renderVideos(); });

function renderSweep() {
  const reg = SWEEP_DATA[state.activeSweepRegion], done = reg.items.filter(i => state.sweepChecked[i.id]).length, pct = Math.round((done / reg.items.length) * 100);
  document.getElementById('sweepBanner').innerHTML = `<img src="${reg.image}" alt="${escapeHtml(reg.name)}" onerror="this.onerror=null;this.src='${reg.fallback}';"><div class="sweep-banner-overlay"><div><div style="font-size:var(--text-sm); color:var(--accent-gold); font-weight:700;">${escapeHtml(reg.sub)}</div><h3 style="font-size:1.35rem;">${escapeHtml(reg.name)}</h3></div><div class="tabular" style="font-weight:900; font-size:1.25rem; color:var(--accent-teal);">${done} / ${reg.items.length} (${pct}%)</div></div>`;
  document.getElementById('sweepChecklist').innerHTML = reg.items.map(item => {
    const checked = Boolean(state.sweepChecked[item.id]);
    return `<label class="check-row${checked ? ' done' : ''}"><div class="check-left"><input type="checkbox" class="check-box" data-sweep-id="${item.id}" ${checked ? 'checked' : ''}><div><div class="check-title">${escapeHtml(item.title)}</div><div class="check-sub">${escapeHtml(item.detail)}</div></div></div></label>`;
  }).join('');
}
document.getElementById('sweepRegionTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-sweep]'); if (!btn) return; state.activeSweepRegion = btn.dataset.sweep; document.querySelectorAll('#sweepRegionTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderSweep(); });
document.getElementById('sweepChecklist').addEventListener('change', (e) => { const box = e.target.closest('input[data-sweep-id]'); if (!box) return; state.sweepChecked[box.dataset.sweepId] = box.checked; saveStore('vc_v7_sweep', state.sweepChecked); renderSweep(); });

function renderCalculator() {
  const ch = Number(document.getElementById('calcChapter').value), bags = Number(document.getElementById('calcVehicle').value), loot = document.getElementById('calcLoot').value, prof = document.getElementById('calcProfile').value;
  let fence = 'Yasmani（小古巴，珠宝与标记钞票出价最高）', payout = '$15,000 - $25,000', warning = '建议得手后先销赃存 BuckMe 银行，避免通缉扣车没收。';
  if (loot === 'narcotics') { fence = 'Tyrone（黑市线，违禁品收购价最高）'; payout = bags === 0 ? '无法装袋（请换车）' : `$${(bags * 3500).toLocaleString()} - $${(bags * 5500).toLocaleString()}`; }
  else if (loot === 'supercar') { fence = ch >= 3 ? 'Randy（罪恶都市超跑单）' : 'Moses（第 2 章 Port Gellhorn 偷车线）'; payout = ch >= 3 ? '$30,000 - $45,000 / 辆' : '$6,000 - $12,000 / 辆'; }
  else if (loot === 'vault') {
    fence = 'Yasmani（大额标记钞票）+ 立即存入 BuckMe';
    if (ch < 3) { payout = '高危警告：尚未获得染料包干扰器'; warning = '第 1-2 章洗劫银行离开建筑会触发染料包毁钱，务必推进到第 3 章拿干扰器再动手！'; }
    else if (bags === 0) { payout = '无法装袋（摩托车容量 0）'; warning = '请更换厢式货车或皮卡（最高 8 袋），配合双人传袋最大化收益。'; }
    else { const est = Math.round((bags / 8) * (ch >= 4 ? 205000 : 85000)); payout = `约 $${est.toLocaleString()} / 趟`; warning = ch >= 4 ? '第 4 章大型金库满载 8 袋单趟封顶约 $205,000，撤离时建议换车换装避开 CCTV。' : '第 3 章已解锁干扰器，可安全扫荡银行与贷款店。'; }
  } else { payout = bags === 0 ? '无法装袋（摩托车容量 0）' : `$${(bags * 4200).toLocaleString()} - $${(bags * 6500).toLocaleString()}`; }
  const focusNote = prof === 'irredeemable' ? '当前档案为 Irredeemable，已永久失去聚焦充能加成，请备足防弹衣。' : (prof === 'pro' ? '专业路线可配合消音手枪打四肢非致命快速充满 L3+R3 聚焦条。' : '狂徒路线依赖爆头充能聚焦，注意控制路人伤亡防止跌入 Irredeemable。');
  document.getElementById('calcResultBox').innerHTML = `<div style="font-size:var(--text-sm); color:var(--text-muted);">预估单趟净收益</div><div class="calc-payout tabular">${escapeHtml(payout)}</div><div style="font-size:var(--text-sm);"><strong>最优销赃去向：</strong>${escapeHtml(fence)}</div><div style="font-size:var(--text-sm); color:var(--accent-teal);">${escapeHtml(warning)}</div><div style="font-size:var(--text-sm); color:var(--text-muted);">${escapeHtml(focusNote)}</div>`;
}
['calcChapter', 'calcVehicle', 'calcLoot', 'calcProfile'].forEach(id => document.getElementById(id).addEventListener('change', renderCalculator));

function renderRegions() { document.getElementById('regionGrid').innerHTML = REGIONS.map(r => `<article class="region-item"><div class="region-media"><img src="${r.image}" alt="${escapeHtml(r.name)}" loading="lazy" onerror="this.onerror=null;this.src='${r.fallback}';"></div><div class="region-sub">${escapeHtml(r.county)}</div><h3>${escapeHtml(r.name)}</h3><p class="region-desc">${escapeHtml(r.desc)}</p></article>`).join(''); }
function renderMechanics() {
  const filtered = MECHANICS.filter(m => state.mechCat === 'all' || m.cat === state.mechCat);
  document.getElementById('mechanicsGrid').innerHTML = filtered.map(m => {
    const mask = state.spoilerSafe && m.spoiler;
    return `<article class="mechanic-entry" id="mech-${m.id}"><div class="entry-meta">${escapeHtml(m.meta)}</div><h3>${escapeHtml(m.title)}</h3><p class="entry-body${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${escapeHtml(m.body)}</p><div class="entry-tip${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${escapeHtml(m.tip)}</div></article>`;
  }).join('');
}
document.getElementById('mechanicsGrid').addEventListener('click', (e) => { const el = e.target.closest('[data-reveal="true"]'); if (el) el.classList.toggle('revealed'); });
document.getElementById('mechFilterTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-cat]'); if (!btn) return; state.mechCat = btn.dataset.cat; document.querySelectorAll('#mechFilterTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderMechanics(); });

function renderArsenal() {
  document.getElementById('arsenalTableWrap').innerHTML = state.arsenalTab === 'cars'
    ? `<table class="data-table tabular"><thead><tr><th>排名</th><th>载具名称</th><th>实测极速分</th><th>级别定位</th><th>获取方式与点位</th></tr></thead><tbody>${SUPERCARS.map(c => `<tr id="car-${c.rank}"><td class="stat-highlight">#${c.rank}</td><td><strong>${escapeHtml(c.name)}</strong></td><td class="stat-highlight">${escapeHtml(c.speed)}</td><td>${escapeHtml(c.tier)}</td><td style="color:var(--text-muted);">${escapeHtml(c.method)}</td></tr>`).join('')}</tbody></table>`
    : `<table class="data-table tabular"><thead><tr><th>编号</th><th>传奇武器名称</th><th>武器类型</th><th>获取成本</th><th>Port Gellhorn 精确点位与触发方式</th></tr></thead><tbody>${LEGENDARY_WEAPONS.map(w => `<tr id="weapon-${w.rank}"><td class="stat-highlight">#${w.rank}</td><td><strong>${escapeHtml(w.name)}</strong></td><td>${escapeHtml(w.type)}</td><td class="stat-highlight">${escapeHtml(w.cost)}</td><td style="color:var(--text-muted);">${escapeHtml(w.location)}</td></tr>`).join('')}</tbody></table>`;
}
document.getElementById('arsenalTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-arsenal]'); if (!btn) return; state.arsenalTab = btn.dataset.arsenal; document.querySelectorAll('#arsenalTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderArsenal(); });

function renderChapter() {
  const ch = CHAPTERS[state.activeChapter], mask = state.spoilerSafe && ch.spoiler;
  document.getElementById('chapterPanel').innerHTML = `<div class="chapter-detail"><h3>${escapeHtml(ch.title)}</h3><div class="chapter-metrics"><div><div class="metric-label">主线任务数</div><div class="metric-val tabular">${ch.missions} 个</div></div><div><div class="metric-label">核心区域</div><div class="metric-val">${escapeHtml(ch.region)}</div></div><div><div class="metric-label">阶段收益预期</div><div class="metric-val tabular">${escapeHtml(ch.moneyRate)}</div></div></div><p class="entry-body${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${escapeHtml(ch.summary)}</p><ul class="mission-list${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${ch.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}</ul></div><div class="money-panel"><h3>本阶段最优赚钱与销赃渠道</h3><p class="entry-body${mask ? ' spoiler-masked' : ''}" ${mask ? 'data-reveal="true"' : ''}>${escapeHtml(ch.moneyStrategy)}</p><table class="data-table" style="min-width:0;"><thead><tr><th>销赃人</th><th>高价品类</th><th>区域 / 阶段</th></tr></thead><tbody><tr><td><strong>Yasmani</strong></td><td>珠宝、标记钞票</td><td>小古巴 Little Cuba</td></tr><tr><td><strong>Tyrone</strong></td><td>违禁品 Narcotics</td><td>莱奥尼达黑市线</td></tr><tr><td><strong>Moses</strong></td><td>指定偷盗车辆</td><td>第 2 章 Port Gellhorn</td></tr><tr><td><strong>Randy</strong></td><td>稀缺超跑 ($30k+)</td><td>第 3 章 罪恶都市</td></tr></tbody></table></div>`;
}
document.getElementById('chapterPanel').addEventListener('click', (e) => { const el = e.target.closest('[data-reveal="true"]'); if (el) el.classList.toggle('revealed'); });
document.getElementById('chapterTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-ch]'); if (!btn) return; state.activeChapter = Number(btn.dataset.ch); document.querySelectorAll('#chapterTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderChapter(); });

function getChecklistStats() { let weight = 0, count = 0; CHECKLIST_ITEMS.forEach(item => { if (state.checklist[item.id]) { weight += item.weight; count += 1; } }); return { weight, count }; }
function renderChecklist() {
  document.getElementById('checklistGrid').innerHTML = CHECKLIST_ITEMS.map(item => {
    const checked = Boolean(state.checklist[item.id]);
    return `<label class="check-row${checked ? ' done' : ''}"><div class="check-left"><input type="checkbox" class="check-box" data-check-id="${item.id}" ${checked ? 'checked' : ''}><div><div class="check-title">${escapeHtml(item.title)}</div><div class="check-sub">${escapeHtml(item.sub)}</div></div></div><span class="check-weight tabular">+${item.weight}%</span></label>`;
  }).join('');
  const { weight } = getChecklistStats();
  document.getElementById('checklistProgressBar').style.width = `${Math.min(100, weight)}%`;
  document.getElementById('checklistSummaryText').textContent = `已完成 ${weight.toFixed(1)}%`;
}
document.getElementById('checklistGrid').addEventListener('change', (e) => { const box = e.target.closest('input[data-check-id]'); if (!box) return; state.checklist[box.dataset.checkId] = box.checked; saveStore('vc_v7_checklist', state.checklist); renderChecklist(); });
document.getElementById('resetChecklistBtn').addEventListener('click', () => { state.checklist = {}; saveStore('vc_v7_checklist', state.checklist); renderChecklist(); showToast('已重置进度'); });

document.getElementById('downloadPosterBtn').addEventListener('click', () => {
  const { weight, count } = getChecklistStats(), rank = document.getElementById('posterRankSelect').value, doneItems = CHECKLIST_ITEMS.filter(i => state.checklist[i.id]).slice(0, 5);
  const canvas = document.createElement('canvas'); canvas.width = 1200; canvas.height = 630; const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 1200, 630); grad.addColorStop(0, '#090E16'); grad.addColorStop(0.55, '#131D2E'); grad.addColorStop(1, '#231624');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 1200, 630);
  const glow = ctx.createRadialGradient(980, 110, 20, 980, 110, 460); glow.addColorStop(0, 'rgba(255, 90, 54, 0.32)'); glow.addColorStop(1, 'rgba(255, 90, 54, 0)');
  ctx.fillStyle = glow; ctx.fillRect(0, 0, 1200, 630);
  ctx.strokeStyle = 'rgba(245, 242, 235, 0.16)'; ctx.lineWidth = 2; ctx.strokeRect(36, 36, 1128, 558);
  ctx.fillStyle = '#F5B041'; ctx.font = '700 22px "Space Grotesk", "Noto Sans SC", sans-serif'; ctx.fillText('VICE CODEX / 莱奥尼达 100% 奖杯战绩卡', 72, 98);
  ctx.fillStyle = '#F5F2EB'; ctx.font = '900 58px "Space Grotesk", "Noto Sans SC", sans-serif'; ctx.fillText(`白金总进度 ${weight.toFixed(1)}%`, 72, 178);
  ctx.fillStyle = '#2EC4B6'; ctx.font = '700 26px "Space Grotesk", "Noto Sans SC", sans-serif'; ctx.fillText(`已完成 ${count} / ${CHECKLIST_ITEMS.length} 核心指标   |   犯罪档案：${rank}`, 72, 228);
  ctx.fillStyle = 'rgba(245, 242, 235, 0.14)'; ctx.fillRect(72, 260, 1056, 18);
  ctx.fillStyle = '#FF5A36'; ctx.fillRect(72, 260, Math.max(12, Math.round(1056 * (Math.min(100, weight) / 100))), 18);
  ctx.fillStyle = '#9AA7B8'; ctx.font = '500 22px "Noto Sans SC", sans-serif';
  if (doneItems.length) { ctx.fillText('已攻克里程碑：', 72, 330); ctx.fillStyle = '#F5F2EB'; doneItems.forEach((item, idx) => ctx.fillText(`✓ ${item.title}`, 72, 372 + idx * 36)); }
  else { ctx.fillText('刚刚踏入莱奥尼达群岛，即将开启 100% 漫漫长路冲刺！', 72, 345); }
  ctx.fillStyle = 'rgba(245, 242, 235, 0.55)'; ctx.font = '500 20px "Space Grotesk", "Noto Sans SC", sans-serif'; ctx.fillText('罪城全书 VICE CODEX v7.0  |  GTA 6 开源攻略与玩家社区', 72, 560);
  const link = document.createElement('a'); link.download = `vice-codex-100-progress-${Math.round(weight)}pct.png`; link.href = canvas.toDataURL('image/png'); link.click();
  showToast('已下载 100% 战绩海报 PNG');
});

function renderCommunity() {
  const list = document.getElementById('communityList'), filtered = state.posts.filter(p => state.postCat === 'all' || p.category === state.postCat).sort((a, b) => b.upvotes - a.upvotes);
  if (!filtered.length) { list.innerHTML = '<p class="empty-state">当前分类还没有投稿，点击右上角“发布攻略”抢先分享。</p>'; return; }
  list.innerHTML = filtered.map(p => {
    const voted = Boolean(state.upvoted[p.id]), ytId = extractYoutubeId(p.videoUrl), cCount = (state.comments[p.id] || []).length;
    return `<article class="post-row" id="post-${p.id}"><button type="button" class="upvote-btn tabular" data-upvote="${p.id}" aria-pressed="${voted}"><span>&#9650;</span><span>${p.upvotes}</span></button><div><div class="post-meta">${escapeHtml(p.category)} / ${escapeHtml(p.author)}</div><h3>${escapeHtml(p.title)}</h3><p class="post-body">${escapeHtml(p.body)}</p>${ytId ? `<a href="${escapeHtml(p.videoUrl)}" target="_blank" rel="noopener noreferrer"><img class="post-thumb" src="https://i.ytimg.com/vi/${ytId}/hqdefault.jpg" alt="${escapeHtml(p.title)}" loading="lazy"></a>` : ''}<div class="post-toolbar"><button type="button" class="text-action-btn tabular" data-open-comments="${p.id}" data-comment-title="${escapeHtml(p.title)}">展开评论 (${cCount})</button><button type="button" class="text-action-btn" data-copy-md="${p.id}">复制 GitHub PR 模板</button></div></div></article>`;
  }).join('');
}
document.getElementById('communityFilterTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-post-cat]'); if (!btn) return; state.postCat = btn.dataset.postCat; document.querySelectorAll('#communityFilterTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderCommunity(); });
document.getElementById('communityList').addEventListener('click', (e) => {
  const upBtn = e.target.closest('button[data-upvote]');
  if (upBtn) {
    const id = upBtn.dataset.upvote, post = state.posts.find(p => p.id === id); if (!post) return;
    if (state.upvoted[id]) { delete state.upvoted[id]; post.upvotes = Math.max(0, post.upvotes - 1); } else { state.upvoted[id] = true; post.upvotes += 1; }
    saveStore('vc_v7_upvoted', state.upvoted); saveStore('vc_v7_posts', state.posts); renderCommunity(); return;
  }
  const mdBtn = e.target.closest('button[data-copy-md]');
  if (mdBtn) { const p = state.posts.find(x => x.id === mdBtn.dataset.copyMd); if (p) copyText(`---\ntitle: "${p.title}"\nauthor: "${p.author}"\ncategory: "${p.category}"\nvideoUrl: "${p.videoUrl || ''}"\n---\n\n${p.body}\n`, '已复制 GitHub PR 模板'); }
});

function renderFriends() {
  const list = document.getElementById('friendList'), filtered = state.friends.filter(f => state.friendPlat === 'all' || f.platform === state.friendPlat);
  if (!filtered.length) { list.innerHTML = '<p class="empty-state">该平台暂无名片，点击“登记我的名片”成为首位召集人。</p>'; return; }
  list.innerHTML = filtered.map(f => `<div class="friend-row"><div><div class="friend-name">${escapeHtml(f.gameId)} <span style="font-size:var(--text-sm); color:var(--accent-gold); font-weight:500;">(${escapeHtml(f.platform)})</span></div><div class="friend-detail">${escapeHtml(f.note)}</div></div><button type="button" class="btn-secondary" data-copy-id="${escapeHtml(f.gameId)}">复制游戏 ID</button></div>`).join('');
}
document.getElementById('friendPlatformTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-plat]'); if (!btn) return; state.friendPlat = btn.dataset.plat; document.querySelectorAll('#friendPlatformTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderFriends(); });
document.getElementById('friendList').addEventListener('click', (e) => { const btn = e.target.closest('button[data-copy-id]'); if (btn) copyText(btn.dataset.copyId, '已复制游戏 ID：' + btn.dataset.copyId); });

function renderChat() {
  const box = document.getElementById('chatMessages'), msgs = state.chatMessages[state.chatChannel] || [];
  box.innerHTML = msgs.map(m => `<div class="chat-msg"><div class="chat-msg-head"><span class="chat-msg-author">${escapeHtml(m.author)}</span><span class="tabular">${escapeHtml(m.time)}</span></div><div style="font-size:var(--text-sm); color:var(--text-primary);">${escapeHtml(m.text)}</div></div>`).join('');
  box.scrollTop = box.scrollHeight;
}
document.getElementById('chatChannelTabs').addEventListener('click', (e) => { const btn = e.target.closest('button[data-ch]'); if (!btn) return; state.chatChannel = btn.dataset.ch; document.querySelectorAll('#chatChannelTabs button').forEach(b => b.setAttribute('aria-selected', String(b === btn))); renderChat(); });
document.getElementById('chatForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const authorRaw = document.getElementById('chatAuthorInput').value.trim(), text = document.getElementById('chatTextInput').value.trim(); if (!authorRaw || !text) return;
  const author = authorRaw.startsWith('@') ? authorRaw : '@' + authorRaw, now = new Date(), time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  if (!state.chatMessages[state.chatChannel]) state.chatMessages[state.chatChannel] = [];
  state.chatMessages[state.chatChannel].push({ author, time, text }); saveStore('vc_v7_chat', state.chatMessages);
  document.getElementById('chatTextInput').value = ''; renderChat(); showToast('已发送到 ' + state.chatChannel);
});

const backdrop = document.getElementById('backdrop'), videoModal = document.getElementById('videoModal'), publishDrawer = document.getElementById('publishDrawer'), commentDrawer = document.getElementById('commentDrawer'), friendDrawer = document.getElementById('friendDrawer'), searchModal = document.getElementById('searchModal');
function closeAllOverlays() {
  [videoModal, publishDrawer, commentDrawer, friendDrawer, searchModal].forEach(el => { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); });
  backdrop.classList.remove('open'); backdrop.setAttribute('aria-hidden', 'true');
  document.getElementById('videoIframeWrap').innerHTML = ''; state.activeVideoId = null;
}
function openOverlay(el) { closeAllOverlays(); backdrop.classList.add('open'); backdrop.setAttribute('aria-hidden', 'false'); el.classList.add('open'); el.setAttribute('aria-hidden', 'false'); }
backdrop.addEventListener('click', closeAllOverlays);
document.querySelectorAll('[data-close-drawer]').forEach(btn => btn.addEventListener('click', closeAllOverlays));
document.getElementById('closeVideoModalBtn').addEventListener('click', closeAllOverlays);
document.getElementById('openPublishBtn').addEventListener('click', () => openOverlay(publishDrawer));
document.getElementById('openFriendBtn').addEventListener('click', () => openOverlay(friendDrawer));

function renderVideoModalComments() {
  const cKey = 'v-' + state.activeVideoId, list = document.getElementById('vmCommentList'), items = state.comments[cKey] || [];
  list.innerHTML = items.length ? items.map(c => `<div class="chat-msg"><div class="chat-msg-head"><span class="chat-msg-author">${escapeHtml(c.author)}</span><span class="tabular">${escapeHtml(c.time)}</span></div><p style="font-size:var(--text-sm); color:var(--text-primary);">${escapeHtml(c.text)}</p></div>`).join('') : '<p class="empty-state" style="padding:0.75rem 0;">暂无评论，写下你的第一条实测反馈。</p>';
}
function openVideoPlayer(vid) {
  const v = VIDEOS.find(x => x.id === vid); if (!v) return;
  openOverlay(videoModal); state.activeVideoId = vid;
  document.getElementById('videoIframeWrap').innerHTML = `<iframe src="https://www.youtube.com/embed/${vid}?autoplay=1&rel=0" title="${escapeHtml(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  document.getElementById('vmTitle').textContent = v.title;
  document.getElementById('vmMeta').textContent = `${v.channel} / ${formatViews(v.views)} / 时长 ${v.duration}`;
  document.getElementById('vmNote').textContent = v.note;
  document.getElementById('vmExtLink').href = `https://www.youtube.com/watch?v=${vid}`;
  renderVideoModalComments();
}

document.body.addEventListener('click', (e) => {
  const playBtn = e.target.closest('[data-play-video]');
  if (playBtn) { openVideoPlayer(playBtn.dataset.playVideo); return; }
  const cBtn = e.target.closest('button[data-open-comments]');
  if (cBtn) {
    state.activeCommentKey = cBtn.dataset.openComments; document.getElementById('commentDrawerTitle').textContent = '评论：' + cBtn.dataset.commentTitle;
    const list = document.getElementById('commentList'), items = state.comments[state.activeCommentKey] || [];
    list.innerHTML = items.length ? items.map(c => `<div class="chat-msg"><div class="chat-msg-head"><span class="chat-msg-author">${escapeHtml(c.author)}</span><span class="tabular">${escapeHtml(c.time)}</span></div><p style="font-size:var(--text-sm); color:var(--text-primary);">${escapeHtml(c.text)}</p></div>`).join('') : '<p class="empty-state">还没有人讨论这条内容，在下方写下第一条实测心得。</p>';
    openOverlay(commentDrawer);
  }
});

document.getElementById('vmCommentForm').addEventListener('submit', (e) => {
  e.preventDefault(); if (!state.activeVideoId) return;
  const authorRaw = document.getElementById('vmCommentAuthor').value.trim(), text = document.getElementById('vmCommentText').value.trim(); if (!authorRaw || !text) return;
  const cKey = 'v-' + state.activeVideoId, author = authorRaw.startsWith('@') ? authorRaw : '@' + authorRaw;
  if (!state.comments[cKey]) state.comments[cKey] = [];
  state.comments[cKey].push({ author, time: '刚刚', text }); saveStore('vc_v7_comments', state.comments);
  document.getElementById('vmCommentText').value = ''; renderVideoModalComments(); renderVideos(); showToast('已发表视频评论');
});

document.getElementById('commentForm').addEventListener('submit', (e) => {
  e.preventDefault(); if (!state.activeCommentKey) return;
  const authorRaw = document.getElementById('commentAuthor').value.trim(), text = document.getElementById('commentBody').value.trim(); if (!authorRaw || !text) return;
  const author = authorRaw.startsWith('@') ? authorRaw : '@' + authorRaw;
  if (!state.comments[state.activeCommentKey]) state.comments[state.activeCommentKey] = [];
  state.comments[state.activeCommentKey].push({ author, time: '刚刚', text }); saveStore('vc_v7_comments', state.comments);
  document.getElementById('commentBody').value = '';
  document.getElementById('commentList').innerHTML = state.comments[state.activeCommentKey].map(c => `<div class="chat-msg"><div class="chat-msg-head"><span class="chat-msg-author">${escapeHtml(c.author)}</span><span class="tabular">${escapeHtml(c.time)}</span></div><p style="font-size:var(--text-sm); color:var(--text-primary);">${escapeHtml(c.text)}</p></div>`).join('');
  renderCommunity(); showToast('已发表评论');
});

document.getElementById('publishForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('postTitle').value.trim(), authorRaw = document.getElementById('postAuthor').value.trim(), category = document.getElementById('postCategory').value, videoUrl = document.getElementById('postVideoUrl').value.trim(), body = document.getElementById('postContent').value.trim();
  if (!title || !authorRaw || !body) return;
  const newPost = { id: 'p-' + Date.now(), title, author: authorRaw.startsWith('@') ? authorRaw : '@' + authorRaw, category, videoUrl, upvotes: 1, body };
  state.posts.unshift(newPost); state.upvoted[newPost.id] = true; saveStore('vc_v7_posts', state.posts); saveStore('vc_v7_upvoted', state.upvoted);
  e.target.reset(); closeAllOverlays(); renderCommunity(); document.getElementById('lounge').scrollIntoView({ behavior: 'smooth' }); showToast('已发布攻略');
});

document.getElementById('friendForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const gameId = document.getElementById('friendGameId').value.trim(), platform = document.getElementById('friendPlatform').value, note = document.getElementById('friendNote').value.trim();
  if (!gameId || !note) return;
  state.friends.unshift({ id: 'f-' + Date.now(), gameId, platform, note }); saveStore('vc_v7_friends', state.friends);
  e.target.reset(); closeAllOverlays(); renderFriends(); showToast('已保存名片');
});

document.getElementById('exportJsonBtn').addEventListener('click', () => copyText(JSON.stringify({ project: 'VICE CODEX v7.0 (MIT)', exportedAt: new Date().toISOString(), videosCount: VIDEOS.length, posts: state.posts, friends: state.friends }, null, 2), '已复制社区数据 JSON'));
document.getElementById('sponsorActionBtn').addEventListener('click', () => copyText('罪城全书 VICE CODEX v7.0 商业合作：支持首页焦点轮播原生赞助位与页底主机外设/加速器导购席位，零弹窗广告。', '已复制商业合作说明'));

const globalSearchInput = document.getElementById('globalSearchInput'), searchResultsEl = document.getElementById('searchResults');
function openSearch() { openOverlay(searchModal); renderGlobalSearch(''); setTimeout(() => globalSearchInput.focus(), 40); }
document.getElementById('openSearchBtn').addEventListener('click', openSearch);
document.getElementById('mobileSearchBtn').addEventListener('click', () => { mobileNav.classList.remove('open'); openSearch(); });
document.getElementById('closeSearchBtn').addEventListener('click', closeAllOverlays);

function buildSearchIndex() {
  const items = [];
  VIDEOS.forEach(v => items.push({ type: '站内视频', title: v.title, sub: v.channel + ' / ' + v.note, playId: v.id }));
  MECHANICS.forEach(m => items.push({ type: '机制密码', title: m.title, sub: m.body + ' ' + m.tip, target: '#mech-' + m.id, action: () => { state.mechCat = 'all'; renderMechanics(); } }));
  SUPERCARS.forEach(c => items.push({ type: '极速超跑', title: c.name + ' (' + c.speed + ')', sub: c.method, target: '#car-' + c.rank, action: () => { state.arsenalTab = 'cars'; renderArsenal(); } }));
  LEGENDARY_WEAPONS.forEach(w => items.push({ type: '传奇武器', title: w.name, sub: w.location + ' ' + w.cost, target: '#weapon-' + w.rank, action: () => { state.arsenalTab = 'weapons'; renderArsenal(); } }));
  state.posts.forEach(p => items.push({ type: '社区投稿', title: p.title, sub: p.author + ' ' + p.body, target: '#post-' + p.id, action: () => { state.postCat = 'all'; renderCommunity(); } }));
  return items;
}
function renderGlobalSearch(query) {
  const q = query.trim().toLowerCase(), index = buildSearchIndex();
  const matches = q ? index.filter(item => (item.title + ' ' + item.sub + ' ' + item.type).toLowerCase().includes(q)).slice(0, 14) : index.slice(0, 8);
  if (!matches.length) { searchResultsEl.innerHTML = '<p class="empty-state">没有找到匹配条目。试试搜索“2314”“085355”“Emerus”“作弊码”或“汤米”。</p>'; return; }
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

renderHero(); restartHeroAuto(); renderVideos(); renderSweep(); renderCalculator(); renderRegions(); renderMechanics(); renderArsenal(); renderChapter(); renderChecklist(); renderCommunity(); renderFriends(); renderChat();