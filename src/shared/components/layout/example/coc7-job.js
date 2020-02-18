// coc7职业信息
// http://static.moonrailgun.com/doc/%E5%85%8B%E8%8B%8F%E9%B2%81%E7%9A%84%E5%91%BC%E5%94%A4%E7%AC%AC%E4%B8%83%E7%89%88%E8%B0%83%E6%9F%A5%E5%91%98%E6%89%8B%E5%86%8C1.21.pdf

// 压缩js
// https://c.runoob.com/front-end/51

/**
 * 需要特殊处理的职业
 * 科学
 * 艺术
 * 工艺
 * 外语
 * 格斗
 * 生存
 * 驾驶
 */

// dutySkillExt即为提示用户需要手动处理的

const job = [
  {
    name: '会计师',
    desc:
      '会计师可能在企业工作或作为自由会计师，为个体经营者和企业客户担任顾问。他们是优秀的研究者，既勤奋又关注细节，能够通过仔细分析个人和企业交易记录、财务报表和其他记录支援其他调查员。',
    credit: [30, 70],
    duty: ['会计', '法律', '图书馆', '聆听', '说服', '侦查'],
    dutySkill: '教育*4',
    dutySkillExt: '任意其他两项个人或时代特长',
  },
  {
    name: '杂技演员',
    desc:
      '杂技演员可能是参加各级比赛（甚至奥运会）的业余运动员，也可能是专业的演员，在马戏团、嘉年华、歌舞团之类的地方作为娱乐业从业者工作。',
    credit: [9, 20],
    duty: ['攀爬', '闪避', '跳跃', '投掷', '侦查', '游泳'],
    dutySkill: '教育*2+敏捷*2',
    dutySkillExt: '任意其他两项个人或时代特长',
  },
  {
    name: '演员-戏剧演员',
    desc:
      '一般指舞台剧演员和电影演员。许多演员有相当深厚的文化素养，认为自己才是“正统”的，倾向于轻视电影业的商业活动。直到 20 世纪后期电影业的地位提高，电影演员的薪酬增加，这种情况才发生改变。电影业和电影明星一直是世界人民关注的焦点。许多明星一夜成名，在媒体的聚光灯下过着光鲜亮丽的生活。在 1920 年代，虽然全国都有大型剧院，美国的戏剧中心仍然是纽约城。英国的情况与之相近，戏剧的中心在伦敦，其他的剧团则在各郡作巡回演出。巡回剧团乘火车旅行，演出内容既包括新编剧目，也包括莎士比亚和其他人的传统剧目。有些剧团也会花时间去国外采风，通常是去加拿大、夏威夷、澳大利亚和欧洲大陆。20 年代后期出现了有声电影，不少默片时代的明星难以适应有声电影的冲击，挥舞手臂的夸张扮演从此让位给了细致入微的角色特写。这段时间前期的明星包括约翰·加菲尔德和弗兰西斯·布什曼，后期则是贾莱·库珀和琼·克劳馥。',
    credit: [9, 40],
    duty: ['艺术（表演）', '乔装', '格斗', '历史'],
    dutySkill: '教育*2+外貌*2',
    dutySkillExt: '两项社交技能, 任意一项其他个人或时代特长',
    dutySkillOptions: ['魅惑', '话术', '恐吓', '说服'],
  },
  {
    name: '演员-电影演员',
    desc:
      '一般指舞台剧演员和电影演员。许多演员有相当深厚的文化素养，认为自己才是“正统”的，倾向于轻视电影业的商业活动。直到 20 世纪后期电影业的地位提高，电影演员的薪酬增加，这种情况才发生改变。电影业和电影明星一直是世界人民关注的焦点。许多明星一夜成名，在媒体的聚光灯下过着光鲜亮丽的生活。在 1920 年代，虽然全国都有大型剧院，美国的戏剧中心仍然是纽约城。英国的情况与之相近，戏剧的中心在伦敦，其他的剧团则在各郡作巡回演出。巡回剧团乘火车旅行，演出内容既包括新编剧目，也包括莎士比亚和其他人的传统剧目。有些剧团也会花时间去国外采风，通常是去加拿大、夏威夷、澳大利亚和欧洲大陆。20 年代后期出现了有声电影，不少默片时代的明星难以适应有声电影的冲击，挥舞手臂的夸张扮演从此让位给了细致入微的角色特写。这段时间前期的明星包括约翰·加菲尔德和弗兰西斯·布什曼，后期则是贾莱·库珀和琼·克劳馥。',
    credit: [20, 90],
    duty: ['艺术（表演）', '乔装', '汽车驾驶', '心理学'],
    dutySkill: '教育*2+外貌*2',
    dutySkillExt: '两项社交技能, 任意两项其他个人或时代特长',
    dutySkillOptions: ['魅惑', '话术', '恐吓', '说服'],
  },
  {
    name: '事务所侦探',
    desc:
      '世界上有许多著名的侦探机构，其中最著名的是平克顿和伯恩斯调查局（后来合并成一家公司）。这样的公司一般有两类工作人员：安保人员和调查人员。',
    credit: [20, 45],
    duty: ['格斗（斗殴）', '射击', '法律', '图书馆', '心理学', '潜行', '追踪'],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
    dutySkillExt: '一项社交技能',
    dutySkillOptions: ['魅惑', '话术', '恐吓', '说服'],
  },
  {
    name: '精神病医生（古典）',
    desc:
      '1920 年代，“精神病医生”这个词专用来称呼治疗精神失常的医生（也就是早期的精神科医生）。精神分析在当时的美国鲜为人知，而且它的基本内容都是性生活和如厕训练之类令大众不齿的东西。精神病学，一种正规的从行为主义发展来的医学理论则要普及得多。精神病医生、精神科医生和神经科医生还经常爆发激烈的论战。',
    credit: [10, 60],
    duty: [
      '法律',
      '聆听',
      '医学',
      '外语',
      '精神分析',
      '心理学',
      '科学（生物学，化学）',
    ],
    dutySkill: '教育*4',
  },
  {
    name: '动物训练师',
    desc:
      '动物训练师可能在电影工作室、巡回马戏团、马厩工作或自由工作。不管是训练导盲犬、狮子钻火圈，他们工作时基本要独自一人长时间近距离地照看这些动物。动物训练师可以像对人一样对动物使用「心理学」技能。',
    credit: [10, 40],
    duty: [
      '跳跃',
      '聆听',
      '博物学',
      '动物驯养',
      '科学（动物学）',
      '潜行',
      '追踪',
    ],
    dutySkill: '教育*2+(外貌>意志?外貌*2:意志*2)',
    dutySkillExt: '任意一项其他个人或时代特长',
  },
  {
    name: '文物学家（原作向）',
    desc:
      '文物学家也许是调查员可以从事的最具有洛夫克拉夫特风格的职业：那些历久弥新的的卓越作品、湮没在古代传说中的神奇力量，总能使他们乐在其中。独立的收入使文物学家能够研究古旧晦涩的文物，或者根据自己的兴趣爱好集中探寻特别的种类。他们通常有着欣赏的眼光、敏锐的头脑，和讽刺无知、自大、贪婪者的愚蠢时尖酸刻薄的幽默。',
    credit: [30, 70],
    duty: ['估价', '艺术 / 工艺（任一）', '历史', '图书馆', '外语', '侦查'],
    dutySkill: '教育*4',
    dutySkillExt: '一项社交技能',
    dutySkillOptions: ['魅惑', '话术', '恐吓', '说服'],
  },
  {
    name: '古董商',
    desc:
      '古董商通常自己开店，从自己所在的地方转卖物品，或继续扩展业务范围，通过倒卖物品到城市商店赚取利润。',
    credit: [30, 50],
    duty: ['会计', '估价', '汽车驾驶', '历史', '图书馆', '导航'],
    dutySkill: '教育*4',
    dutySkillExt: '两项社交技能',
    dutySkillOptions: ['魅惑', '话术', '恐吓', '说服'],
  },
  {
    name: '考古学家（原作向）',
    desc:
      '考古学家研究探索历史的痕迹。主要来说，是对人类历史相关的物质资料进行各种鉴识、检查、分析。这项工作包含辛苦细致的研究，更不必提情愿亲自下斗铲土的决心。\n在 1920 年代，成功的考古学家会被当成著名冒险家与探险家，名利双收。有人运用科学方法考古，不过更多的人对付老祖宗的秘密时喜好暴力破解的办法，甚至祭出炸药，这种碉堡了的办法现代人可是很难看得惯的。',
    credit: [10, 40],
    duty: [
      '估价',
      '考古',
      '历史',
      '外语',
      '图书馆',
      '侦查',
      '机械维修',
      '导航',
      '科学(任一)',
    ],
    dutySkill: '教育*4',
  },
  {
    name: '建筑师',
    desc:
      '建筑师掌握设计和营造建筑的知识，不论是个人房屋的改造还是造价数百万美元的地标工程。建筑师与项目经理紧密合作，负责监督施工全程。建筑师必须了解当地的规划法律，健康和安全法规，和基础的公众安全原则。\n他们既可以在大公司工作，也可以自由工作，这在很大程度上取决于信誉。在 1920年代，许多人尝试在自家或小办公室单干。不过他们苦心创造的宏伟设计很少能卖得出去。',
    credit: [30, 70],
    duty: [
      '会计',
      '工艺（技术制图）',
      '法律',
      '母语',
      '计算机或图书馆',
      '说服',
      '心理',
      '科学（数学）',
    ],
    dutySkill: '教育*4',
  },
  {
    name: '艺术家',
    desc:
      '艺术家在这里可以是画家，雕塑家等等。他们有时沉浸于自己虚幻的想象当中，有时又沐浴在激发热情和理解的灵感之下。不论是否天资优秀，艺术家的内心必须足够强大，这样才能战胜生涯起步时的障碍和挑剔的眼光，并且在自己小有名气以后继续努力。有些艺术家对物质生活是否丰富并不在乎，而有些则有着强烈的创业倾向。',
    credit: [9, 50],
    duty: ['艺术 / 工艺（任一）', '历史或自然', '外语', '心理', '侦查'],
    dutySkill: '教育*2+(敏捷>意志?敏捷*2:意志*2)',
    dutySkillExt: '任意两项其他个人或时代特长',
    dutySkillOptions: ['历史', '自然'],
    dutySocial: 1,
  },
  {
    name: '精神病院看护',
    desc:
      '尽管少数富有的人会选择私人疗养院，大多精神病患者最终会被安置到州县设置的定点医院。这些地方除了医生护士以外，还会有一支看护队伍。选聘看护的时候，力量和体格往往比医学知识更被看重。',
    credit: [8, 20],
    duty: ['闪避', '格斗（斗殴）', '急救', '聆听', '心理', '潜行'],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
    dutySocial: 2,
  },
  {
    name: '运动员',
    desc:
      '运动员可能效力于职业的棒球、足球、板球或者篮球队伍。这支队伍也许是大联盟队伍，有着稳定工资，参加的比赛万人瞩目；或者是众多小联盟队伍之一，尤其是在1920 年代的棒球界。这些队伍往往寄于大联盟队伍篱下，各方面都受其管理，工资更是刚够运动员糊口又不至于让他们跳槽的水平。\n成功的运动员在自己的专业领域会拥有相当的声誉——现今尤其如此，在世界各地都能看到体育明星和电影明星并肩站在红地毯上的场景。',
    credit: [9, 70],
    duty: ['攀爬', '跳跃', '格斗（斗殴）', '骑乘', '游泳', '投掷'],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
    dutySkillExt: '任意一项其他个人或时代特长',
    dutySocial: 1,
  },
  {
    name: '作家（原作向）',
    desc:
      '作家不同于记者，他们用文字定义和探讨人们的社会生活，尤其是人们的情感变化。他们的劳动通常孤立而又自我中心：虽然以前写作是个能稳拿工资的行当，但如今只靠写作发大财的人屈指可数。\n作家的工作习惯相差极大。通常作家们会花费数月乃至数年的时间调查取材，为新书的创作做准备；然后闭门谢客，投入紧张的创作。',
    credit: [9, 30],
    duty: ['艺术（文学）', '历史', '图书馆', '外语', '母语', '心理'],
    dutySkill: '教育*4',
    dutySkillExt: '任意一项其他个人或时代特长',
    dutySkillOptions: ['自然', '神秘学'],
  },
  {
    name: '酒保',
    desc:
      '酒保虽然不一定是酒吧的掌柜，却一定是所有客人的朋友。对客人们的好声气，一部分来说是出于他们的职业或者业务，而更多的来说则是达到目的的一种手段。\n1920 年代，由于禁酒令的存在，酒保变成了非法的职业；但是遍地开花的黑酒吧又不能没有酒保，结果就是酒保仍然不愁找不到活干。',
    credit: [8, 25],
    duty: ['会计', '格斗（斗殴）', '聆听', '心理', '侦查'],
    dutySkill: '教育*2+外貌*2',
    dutySkillExt: '任意一项其他个人或时代特长',
    dutySocial: 2,
  },
  {
    name: '猎人',
    desc:
      '猎人是优秀的追踪者和狩猎者，通常靠为富裕的客户捕猎为生。绝大多数猎人会对地球上某一个部分的情况烂熟于心，比如加拿大森林、非洲草原等等。有些人可能从事盗猎活动，例如为私人收藏家捕捉珍稀动物，或者贩卖受保护的动物和违反道德的动物制品，如兽皮、象牙之类——虽然 1920 年代大多数国家这些活动都不算违法。\n尽管“王牌猎人”是最典型的类型，不过在加拿大育空的深山老林里打驼鹿和熊为生的土著人也可以算是猎人。',
    credit: [20, 50],
    duty: [
      '射击',
      '聆听或侦查',
      '自然',
      '导航',
      '外语或生存（任一）',
      '科学（生物学或植物学）',
      '潜行',
      '追踪',
    ],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
  },
  {
    name: '书商',
    desc:
      '书商可能拥有自己的店面或者利基（小众）邮购服务，也可能辗转全国甚至海外专门经销书籍。许多人拥有富有的，能提供利润丰厚又稀罕的工作的固定客户。',
    credit: [20, 40],
    duty: ['会计', '估价', '汽车驾驶', '历史', '图书馆', '母语', '外语'],
    dutySkill: '教育*4',
    dutySocial: 1,
  },
  {
    name: '赏金猎人',
    desc:
      '赏金猎人捉拿罪犯并将他们交给正义去审判。最常见的情况是受保释人的委托去缉捕逃狱者。赏金猎人们为了自己的猎物可以不择手段，几乎不会考虑其他人的正当权益之类细枝末节的东西。\n非法闯入、威胁、肢体暴力，都是赏金猎人屡试不爽的秘技。现在这些秘技还包括了电话窃听、黑客操作和其他的秘密监控。',
    credit: [9, 30],
    duty: ['汽车驾驶', '法律', '心理', '追踪', '潜行'],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
    dutySkillOptions: [
      ['电子学', '电气维修'],
      ['格斗', '射击'],
    ],
    dutySocial: 1,
  },
  {
    name: '拳击手、摔跤手',
    desc:
      '拳击手和摔跤手各分为职业和业余两种。\n职业拳击手和职业摔角手的活动由外部利益支持的赞助人安排，并有合同约束。他们还要进行全日制的工作和训练。\n业余拳击的竞赛种类非常丰富，同时它也是那些想成为职业拳手的人的训练场。不过也有业余和准职业的选手靠参加黑市拳击赛谋生，举办这些比赛的通常是本地的黑社会或者是从中渔利的庄家。',
    credit: [9, 60],
    duty: ['闪避', '格斗（斗殴）', '恐吓', '跳跃', '心理', '侦查'],
    dutySkill: '教育*2+力量*2',
    dutySkillExt: '任意两项其他个人或时代特长',
  },
  {
    name: '管家、男仆、女仆',
    desc:
      '管家、男仆、女仆都属于作为仆人被雇佣的服务业人员。\n管家通常为一个大家庭打理家事。传统上，他负责的范围包括厨房、酒窖和储藏室，在所有仆人中位置最高。一般男管家还要负责管理其他的男仆（女管家反之）。更多的职责则听候主人差遣。\n男仆和女仆则为主人提供贴身服务，包括管理主人的服装、准备浴室和担任私人助理。助理的工作则包括安排旅行日程、整理日记、家庭理财等。\n(信用范围取决于雇主家的社会地位和信用等级)',
    credit: [9, 40],
    duty: ['急救', '聆听', '外语', '心理', '侦查'],
    dutySkill: '教育*4',
    dutySkillOptions: [
      ['会计', '估价'],
      ['艺术', '工艺'],
    ],
  },
  {
    name: '神职人员',
    desc:
      '神职人员通常担任一个教区的牧师，或是经过分配外出传教，尤其是去国外（见传教士）。不同的教会工作的侧重点和组织结构各不相同，如天主教会的牧师可能上升到主教、大主教和红衣主教，而一个卫理公会的牧师则会升职到教区主管和主教。\n许多神职人员都接受忏悔（不仅仅是天主教）。虽然不能透露忏悔的内容，但是要怎样利用它们就全凭他们自己了。\n有些教职人员在教堂接受医生、律师、学者的专业培训。这样的调查员应该选择最符合自己工作的职业模板。',
    credit: [9, 60],
    duty: ['会计', '历史', '图书馆', '聆听', '外语', '心理'],
    dutySkill: '教育*4',
    dutySkillExt: '任意一项其他技能',
    dutySocial: 1,
  },
  {
    name: '计算机程序员、工程师(现代)',
    desc:
      '计算机程序员通常是设计、编写、测试、调试和维护计算机程序源代码的职业。他们精通从形式逻辑到系统平台（程序运行环境）的各种知识，可能是自由工作者，也可能供职于软件开发部门。\n计算机技术人员负责计算机系统和网络的开发和维护工作，经常与其他人员（如项目经理）合作来保证系统的完整稳定和正常提供所需功能。类似的职业还包括数据库管理员、系统管理员、网络管理员、多媒体开发人员、软件工程师、网络管理员等。\n计算机黑客则利用计算机和计算机网络为手段，进行干扰或破坏以达成政治目的（有时被称为“政治黑客”）或获取非法利益。达成目标的手段主要是非法入侵计算机和其他用户帐户，目的则可能包括篡改网页、人肉搜索、盗取身份信息、垃圾邮件炸弹、拒绝服务攻击等等。',
    credit: [10, 70],
    duty: ['计算机', '电气维修', '电子学', '图书馆', '科学（数学）', '侦查'],
    dutySkill: '教育*4',
    dutySkillExt: '任意两项其他个人或时代特长',
  },
  {
    name: '黑客(现代)',
    desc:
      '计算机程序员通常是设计、编写、测试、调试和维护计算机程序源代码的职业。他们精通从形式逻辑到系统平台（程序运行环境）的各种知识，可能是自由工作者，也可能供职于软件开发部门。\n计算机技术人员负责计算机系统和网络的开发和维护工作，经常与其他人员（如项目经理）合作来保证系统的完整稳定和正常提供所需功能。类似的职业还包括数据库管理员、系统管理员、网络管理员、多媒体开发人员、软件工程师、网络管理员等。\n计算机黑客则利用计算机和计算机网络为手段，进行干扰或破坏以达成政治目的（有时被称为“政治黑客”）或获取非法利益。达成目标的手段主要是非法入侵计算机和其他用户帐户，目的则可能包括篡改网页、人肉搜索、盗取身份信息、垃圾邮件炸弹、拒绝服务攻击等等。',
    credit: [10, 70],
    duty: ['计算机', '电气维修', '电子学', '图书馆', '侦查'],
    dutySkill: '教育*4',
    dutySkillExt: '任意两项其他技能',
    dutySocial: 1,
  },
  {
    name: '牛仔',
    desc:
      '牛仔在西部的牧区和牧场工作。有些人拥有自己的牧场，更多的则是在各处打工为生。想赚大钱的牛仔会去冒着丢胳膊少腿乃至送命的危险参加牛仔巡回赛，通过旅行获取名誉。\n在 1920 年代，一些牛仔能在好莱坞找到西部片替身演员和群众演员的工作，例如怀特·厄普就曾为西部电影担任顾问。在现代，有些牧场也对想要体验一把牛仔生活的游客开放。',
    credit: [9, 20],
    duty: ['闪避', '跳跃', '骑乘', '生存（任一）', '投掷', '追踪'],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
    dutySkillOptions: [
      ['格斗', '射击'],
      ['急救', '自然'],
    ],
  },
  {
    name: '工匠',
    desc:
      '工匠也可能被人叫做师傅或大师，是擅长对各种材料进行手工加工的人。通常都是才能出众的人，有的凭借自己的艺术作品出名，有的则会服务于自己的社区。\n可能的行当包括：家具、珠宝、钟表、陶艺、锻造、纺织、书法、裁缝、木工、书籍装裱、玩具制造、彩色玻璃吹制等等。',
    credit: [10, 40],
    duty: ['会计', '机械维修', '自然', '侦查'],
    dutySkill: '教育*2+敏捷*2',
    dutySkillExt: '艺术 / 工艺（任二）,任意两项其他个人或时代特长',
  },
  {
    name: '罪犯-刺客',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [30, 60],
    duty: [
      '乔装',
      '电气维修',
      '格斗',
      '射击',
      '锁匠',
      '机械维修',
      '潜行',
      '心理',
    ],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
  },
  {
    name: '罪犯-银行劫匪',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [5, 75],
    duty: ['汽车驾驶', '格斗', '射击', '恐吓', '锁匠', '操作重型机械'],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
    dutySkillExt: '任意一项其他个人或时代特长',
    dutySkillOptions: [['电气维修', '机械维修']],
  },
  {
    name: '罪犯-打手、暴徒',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [5, 30],
    duty: ['汽车驾驶', '格斗', '射击', '心理', '潜行', '侦查'],
    dutySkill: '教育*2+力量*2',
    dutySocial: 2,
  },
  {
    name: '罪犯-窃贼',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [5, 40],
    duty: ['估价', '攀爬', '聆听', '锁匠', '妙手', '潜行', '侦查'],
    dutySkill: '教育*2+敏捷*2',
    dutySkillOptions: [['电气维修', '机械维修']],
  },
  {
    name: '罪犯-欺诈师',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [10, 65],
    duty: ['估价', '艺术（表演）', '聆听', '心理', '妙手'],
    dutySkill: '教育*2+外貌*2',
    dutySkillOptions: [['法律', '外语']],
    dutySocial: 2,
  },
  {
    name: '罪犯-独行罪犯',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [5, 65],
    duty: ['估价', '潜行', '心理', '侦查'],
    dutySkill: '教育*2+(敏捷>外貌?敏捷*2:外貌*2)',
    dutySkillOptions: [
      ['艺术（表演）', '乔装'],
      ['格斗', '射击'],
      ['锁匠', '机械维修'],
    ],
    dutySocial: 1,
  },
  {
    name: '罪犯-女飞贼（古典）',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [10, 80],
    duty: ['汽车驾驶', '聆听', '潜行'],
    dutySkill: '教育*2+外貌*2',
    dutySkillExt: '任意一项其他个人或时代特长',
    dutySkillOptions: [
      ['艺术', '工艺'],
      ['格斗（斗殴）', '射击（手枪）'],
      ['锁匠', '机械维修'],
    ],
    dutySocial: 2,
  },
  {
    name: '罪犯-赃物贩子',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。\n女飞贼是名为专业大盗的女人。大部分都是独立行动，也有对自己的男伴言听计从的时候。不过这也不一定，实际上情况可能完全相反，她完全可以在干了某一票以后就卷走所有现金和皮草溜之大吉。',
    credit: [20, 40],
    duty: ['会计', '估价', '工艺（伪造）', '历史', '图书馆', '侦查'],
    dutySkill: '教育*2+外貌*2',
    dutySkillExt: '任意一项其他技能',
    dutySocial: 1,
  },
  {
    name: '罪犯-赝造者、伪造者',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [20, 60],
    duty: ['会计', '估价', '工艺（伪造）', '历史', '图书馆', '侦查', '妙手'],
    dutySkill: '教育*4',
    dutySkillExt: '任意一项其他个人或时代特长',
  },
  {
    name: '罪犯-走私者',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [20, 60],
    duty: ['射击', '聆听', '导航', '心理', '妙手', '侦查'],
    dutySkill: '教育*2+(外貌>敏捷?外貌*2:敏捷*2)',
    dutySkillOptions: [['汽车驾驶', '驾驶（飞行器或船）']],
    dutySocial: 1,
  },
  {
    name: '罪犯-混混',
    desc:
      '罪犯的体格和相貌形形色色，有些是纯粹碰运气伺机行事，比如扒手和暴徒；有些则组成分工明确，会详细调查并制定计划的犯罪组织。后者包括银行劫匪、飞贼、赝造者和诈骗者。\n罪犯可能为别人工作，后者通常是“匪帮”或罪犯家族；也可能单打独斗，如果成功的报酬值得去费力冒险，才会和别人搭伙。自由犯罪者则往往被称为抢劫犯、响马贼和江洋大盗。\n打手、暴徒都是犯罪组织的兵卒。他们被犯罪组织豢养，不过团伙上层出事的时候，倒霉的往往是他们这些喽啰。对于他们来说，嘴紧和忠心属于职业道德。\n欺诈师通常都是油嘴滑舌的人物。他们或单独或集体出没在富裕的人家和社区周边，诈取他们来之不易的钱财。许多骗局复杂精妙，诈骗团伙会倾巢出动乃至租用建筑；有些则不需要这么麻烦，只要一个骗子几分钟就能搞定。\n赃物贩子，顾名思义是买卖偷抢来的财产，通常是收购赃物并转手卖给其他罪犯或（无意中）守法的顾客。主要来说，他们是小偷和买家的中间人，有时也会从交易中收取提成；不过更常见的还是以极低的价格直接收购赃物。\n赝造者是地下世界的艺术家，专门从事伪造官方文件、契约、转让书，并提供伪造的签名。初学者只能做做小贼的假身份证，而顶级的赝造者连印假币的铸模都能做。杀手是地下世界的冷血夺命者。这是一项严谨的活计，他们从外地受雇杀人，接近目标，果断下手，又迅速离开。杀手通常很难融入社会，因为很多杀手行为总是很刻板，其他人很容易以为他们不近人情。但是另一方面，他们也会结婚生子，在其他方面和普通人没有什么不同。\n走私一直是一个有利可图的高风险行当。走私者往往有一个合法的表面职业，比如船长、飞行员或商人，以掩盖他们非法运输的行为。\n街头混混一般都是些小年轻，弄不好还在寻觅加入真正黑帮的契机。不过他们的本事也就限于偷车，盗窃商店货物，抢钱或者夜盗。',
    credit: [3, 10],
    duty: ['攀爬', '格斗', '射击', '跳跃', '妙手', '潜行', '投掷'],
    dutySkill: '教育*2+(力量>敏捷?力量*2:敏捷*2)',
    dutySocial: 1,
  },
  {
    name: '教团首领',
    desc:
      '美国的新兴宗教层出不穷。直到现在，也还有从新英格兰超验主义到“天父的儿女”等等许多种类。教团首领有的创立了严格的教条并且对信徒推行，另一些则仅仅是垂涎于信徒的金钱和权势。\n在 1920 年代，各种诱惑性的新兴宗教团体纷纷涌现。有些采取基督教的形式，有些则混杂了东方的神秘主义和神秘学的仪式。美国西海岸的人对这些教团屡见不鲜，不过其他形式的教团全国各地都存在。在美国南部的“圣经带”，就有许多巡回帐篷演出圣歌、舞蹈，推行信仰复兴。其他国家也是一样，只要有需要信仰的人，就会有新兴宗教团体。',
    credit: [30, 60],
    duty: ['会计', '神秘学', '心理', '侦查'],
    dutySkill: '教育*4',
    dutySkillExt: '任意其他两项其他个人特长',
    dutySocial: 2,
  },
  {
    name: '除魅师（现代）',
    desc:
      '除魅师的工作是说服（或者强迫）一个人放弃自己的信仰或是对宗教团体、社会团体的忠心。他们一般受雇于深陷教团之类组织的人的亲属，任务就是解救对方（通常靠绑架），并通过心理学手段使他们割断与原来教团的联系（“控制”）。\n也有不那么激烈的除魅师，他们的工作对象则是那些自愿离开教团的人，为他们完全地退出教团进行有效的指导。',
    credit: [20, 50],
    duty: ['汽车驾驶', '历史', '神秘学', '心理', '潜行'],
    dutySkill: '教育*4',
    dutySkillOptions: [['格斗（斗殴）', '射击']],
    dutySocial: 2,
  },
  {
    name: '设计师',
    desc:
      '设计师的工作包括许多方面，从时装到家具或是其他任何东西。他们自由工作，为设计工作室和企业设计产品、流程、法律、游戏、图像等等。\n调查员特定的设计方向也会影响他们对专业技能的选择，如果需要的话要进行调整。',
    credit: [20, 60],
    duty: ['会计', '艺术（摄影）', '机械维修', '心理', '侦查'],
    dutySkill: '教育*4',
    dutySkillOptions: [['计算机', '图书馆']],
    dutySkillExt: '艺术 / 工艺（任一）, 任意一项其他个人特长',
  },
  {
    name: '业余艺术爱好者（原作向）',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '潜水员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '医生（原作向）',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '流浪者',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '司机-私人司机',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '司机-司机',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '编辑',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '政府官员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '工程师',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '艺人',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '探险家（古典）',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '农民',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '联邦探员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '消防员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '驻外记者',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '法医',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '赌徒',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '黑帮-黑帮老大',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '黑帮-马仔',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '绅士、淑女',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '游民',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '勤杂护工',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '记者（原作向）-调查记者',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '记者（原作向）-通讯记者',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '法官',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '工人',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '律师',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '图书馆管理员（原作向）',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '技师',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '军官',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '传教士',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '登山家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '博物馆管理员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '音乐家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '护士',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '神秘学家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '旅行家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '超心理学家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '药剂师',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '摄影师-摄影师',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '摄影师-摄影记者',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '飞行员-飞行员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '飞行员-特技飞行员（古典）',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '警探',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '警官',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '私家侦探',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '教授（原作向）',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '淘金客',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '性工作者',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '精神病学家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '心理学家、心理分析学家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '研究员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '海员-军舰海员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '海员-民用船海员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '推销员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '科学家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '秘书',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '店老板',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '士兵、海军陆战队士兵',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '间谍',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '学生、实习生',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '替身演员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '部落成员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '殡葬师',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '工会活动家',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '服务生',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '白领工人-职员/主管',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '白领工人-中层、高层管理人员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '狂热者',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
  {
    name: '饲养员',
    desc: '',
    credit: [],
    duty: [],
    dutySkill: '教育*4',
  },
];

JSON.parse(JSON.stringify(job));
