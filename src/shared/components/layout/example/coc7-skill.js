const skill = [
  {
    name: '会计',
    base: 5,
    desc:
      '使你理解会计工作的流程以及一个企业或者个人的金融职务。通过检查账簿，你可以发现做假账的员工，对资金的偷偷挪用，对行贿或者敲诈的款项支付，以及经济状况是否比表面陈述的更好或者更差。通过仔细检查旧账户，你可以了解过去的资金的得与失（谷物，奴隶贸易，威士忌酒的运营等）以及这些资金是付给了谁以及为了什么款项而支付。',
  },
  {
    name: '动物驯养',
    base: 5,
    desc:
      '命令以及训练已驯化动物去完成一些简单任务的技能。这个技能最常用于狗上，但也包括鸟、猫、猴子以及其他（取决于KP的判断）。至于对动物的骑乘，例如马或者骆驼，则要用骑术技能来进行行动以及操控这些坐骑。',
  },
  {
    name: '人类学',
    base: 1,
    desc:
      '使使用者能够通过观察来辨认和理解一个人的生活方式。如果技能使用者持续观察一个其他的文化一段时间，或者在有着关于某种已消失文化的正确资料环境下工作，那么他可以对文化方式以及道德习惯进行简单的预测，即使证据可能并不完整。通过学习文化一个月或者更久，人类学家开始理解这种文化是如何运作的以及，如果结合心理学，可以预测那些研究文化的行为和信仰。',
  },
  {
    name: '估价',
    base: 5,
    desc:
      '用来估计某种物品的价值，包括质量，使用的材料以及工艺。相关的，技能使用者可以准确地辨认出物品的年龄，评估它的历史关联性以及发现赝品。',
  },
  {
    name: '考古学',
    base: 1,
    desc:
      '允许从过去的文化中鉴定一件古董的年代以及辨别它，以及可以用来发现赝品。使获得建立以及开掘一个挖掘遗址的专业知识。通过对遗址的勘察，使用者可以推断留下这遗址的生物的目的和生活方式。人类学可能对此会有所帮助。考古学还有助于辨认已消失的人类语言的书面形式。',
  },
  {
    name: '艺术与手艺',
    base: 5,
    sub: [
      {
        name: '表演',
        desc:
          '表演者收到过戏剧以及/或电影演技的训练（在现代，这可能也包括电视），使你能适应一个人物角色，记住剧本，以及使用舞台/电影化妆来改变他们的外貌。',
      },
      {
        name: '美术',
        desc:
          '艺术家在艺术绘画上十分熟练（油画、丙烯画、水彩画），同样在用铅笔、彩色蜡笔、粉笔的素描上十分熟练。然而这各种各样的艺术工作许多天或者许多月来完成，艺术家可能能快速素描出准确的印象，物体或者人物。这项技能也代表了对艺术世界的熟悉，以及技术家能确定特定艺术家的作品，他们的学校，以及了解的历史。',
      },
      {
        name: '伪造',
        desc:
          ' 熟练于细节，使用者可以制作高质量的伪造文档，使它以某人的笔迹写成，制作官僚作风的形式或许可，或者进行卷册的复制。伪造者需要合适的材料（墨水，不同的纸张等）以及想要复制的文档的原件。\n一个成功的检定表示伪造文档将通过一个普通而草率的检查。当有人花费时间并仔细检查伪造品时需要使用估价技能（与原始的伪造者的技能进行对抗）来决定是否能辨认出是伪造品。',
      },
      {
        name: '摄影',
        desc:
          '同时包括静止以及运动摄影。这项技能允许某人拍摄清晰的照片，恰当地修饰照片，并且强化半掩的细节。\n在1920年代，使用者可以准备必须的化学用品来制作闪光粉。\n在现代，这个技能拓展到包括摄影机，视频播放设备，数码摄影以及数码编辑，使用者熟练于对数字图像的操作修改。可以从原始的资源中创造出完全不同的版本，例如改变照片中一个人所处的地点，和谁在一起，以及在做什么。这些专家也可能可以发现一张图像什么时候被修改过了。\n正常的快拍不需要技能检定。当想要进行有效的偷拍，或者进行细节捕捉—特别是远距离，快速，以及低光，时将会被要求进行这个检定。这项技能也允许调查员判断一张照片是否被篡改或者捏造，以及进行这张照片拍摄的角度和位置。',
      },
    ],
  },
  {
    name: '炮术',
    base: '1',
    desc:
      '这项技能呈现出对一些形式的军事训练和经历。使用者具有在战争中操作战地武器的经验：可以在一个工作队或“派遣队”中工作，进行对超过个人武器射击距离的武器的操作。这些武器通常过于巨大以至于无法单人进行操作，并且个人无法再没有工作队支援的情况下使用这武器，或者应当提高难度等级（取决于KP的判断，也取决于使用的武器类型）。\n存在着许多不同的武器专攻，取决于游戏设定的时期，包括加农炮、榴弹炮、迫击炮以及火箭发射器。',
  },
  {
    name: '取悦',
    base: 15,
    desc:
      '取悦允许通过许多形式来使用，包括肉体魅力、诱惑、奉承或是单纯令人感到温暖的人格魅力。取悦可能可以被用于迫使某人进行特定的行动，但是不会是与个人日常举止完全相反的行为。取悦或是心理学技能可以用于对抗取悦技能。\n取悦技能可以被用于讨价还价来使一件物品或者服务的价格降低。如果成功，使用者得到了卖家的赞同，并且他们可能乐意降低一点价格。',
  },
  {
    name: '攀爬',
    base: 20,
    desc:
      '这项技能允许一名角色借助或者不借助绳索或者登山工具进行爬树、墙以及其他垂直表面。这项技能也同样包括用绳索下降。\n攀爬表面是否坚固，是否有可以用手握住的地方，风力，可见度，雨等等坏境状况都可能会影响难度等级。\n第一次在这个技能上失败可能意味着这攀爬超出了调查员的能力范围。在孤注一掷上失败则可能意味着摔落了下来，同时因此受到伤害。一个成功的攀爬检定应当允许调查员在任何场合下完成攀爬（而不是进行反复检定）。一次富有挑战性或者长距离的攀爬则应当增加难度等级。',
  },
  {
    name: '计算机使用',
    base: 5,
    age: '现代',
    desc:
      '这项技能允许调查员用各种不同的电脑语言进行编程；恢复或者分析隐藏的数据；解除被加了保护的系统；探索一个复杂的网络；或者发现别人的骇入、后门程序、病毒。对电脑系统的特殊操作可能会需要这个检定。\n互联网将大量的信息放置在了调查员的指尖上。使用互联网来找到高度详细以及/或模糊不清的咨询可能会需要一个计算机使用和图书馆使用的组合检定。\n这项技能在用电脑上网，检查电子邮件，或者运行一般的商品化软件时不需要使用。',
  },
  {
    name: '信用评级',
    base: 0,
    desc:
      '衡量了调查员表现出来的富裕程度以及经济上的自信度。钱是敲门砖；如果调查员尝试用他的经济地位来达成某个目标，那么也许使用信用评级技能会比较合适。信用评级可以被用来取代APP来评估第一印象。\n信用评级并不是一个被用于评估经济富裕度的技能，也不应该与其他技能挂钩。一个高信用评级在游戏中将会是一个有用的资源，并且应当在创造调查员时加上一定的点数。每个职业有着起始的信用评级范围，并且应当花费技能点来达到这个评级范围内。\n克苏鲁的呼唤并不是一个需要仔细追溯金钱的游戏；然而，了解一名调查员的经济能到什么程度也是很有用的—例如，一个调查员是否足以支付得起雇佣一队考古学家以及工作人员来挖掘一个埃及坟墓？一名调查员的信用评级可以随着时间而改变。调查员的克苏鲁神话技能有着易于疯狂的倾向，而这个技能可能导致失业并因此变成一个更低的信用评级。见 信用评级 与调查员的支出来获得一个更加深入的对信用评级及其使用的了解。',
  },
  {
    name: '克苏鲁神话',
    base: 0,
    desc:
      '这项技能反应了对非人类（洛夫克拉夫特的）克苏鲁神话的了解。这个技能并不像学术技能一样建立在知识的积累之上。相反地，它代表了克苏鲁神话向人类思想的打开以及同化。因此，克苏鲁神话技能因遇见深潜者（举例来说）而取得可以转换成其他情况以及生物。同样也指像是“哪些是人类不该知道的”，克苏鲁神话是与人类的理解相对立的，并且接触它将会侵蚀人类的理智。\n没有调查员能在初始技能设定时给克苏鲁神话加点（除非被KP同意）。因此在调查员表单上没有给克苏鲁神话的勾选格，因为成功的使用克苏鲁神话技能并不会提供给调查员在这个技能百分比上的提升。取而代之的，在克苏鲁神话上的点数将通过与神话生物相遇而导致的疯狂获得，通过洞察了这个宇宙真实世界而造成的疯狂，以及通过阅读了禁书以及其他的神话书作。一名角色的理智永远不可能超过99减去他的克苏鲁神话技能。当克苏鲁神话点数上升，它将减少理智上限，并且使得调查员变得脆弱。\n每当神话生物的足迹或者其他证据被发现，一个成功的克苏鲁神话检定可以允许调查员辨认出这个神话生物，推测出有关它行为的一些资讯，或者猜测出它所拥有的某些特性。一个成功的克苏鲁神话检定也可能允许调查员回想起一些关于神话的真实，通过看见咒语的施展来辨认出它，回想起克苏鲁书卷中详细的咒语或者部分的信息，或者完成一些其他的任务。克苏鲁神话技能也可以被用来展现出魔法的“咒语一样的”效果。',
  },
  {
    name: '爆破',
    base: 1,
    desc:
      '在这项技能的帮助下，使用者将熟练于安全使用爆破，包括设置以及拆除炸药。地雷以及相似的设备被设计得容易设置（不需要检定）但是相对较为困难地进行除去或拆除。\n这项技能也包含军用等级的爆炸物（反人类地雷，塑料炸弹，等）。\n给予足够的时间和资源，这些专家可以装设炸药来摧毁一幢建筑，清除一个被堵住的隧道，以及赋予炸药不同用处（例如构造微量炸药，诡雷，以及其他）。',
  },
  {
    name: '乔装',
    base: 5,
    desc:
      '使用在当你想要演出除你自己外的别人时。使用者改变了态度，习惯，以及/或声音来进行一个乔装，以另一个人或者另一类人的形象出现。戏剧化妆品可能会有所帮助，还有伪造的身份证。',
  },
  {
    name: '潜水',
    base: 1,
    desc:
      '使用者接受过在深海游泳的使用以及维持潜水设备的训练，水下导航，合适的下潜配重，以及应对紧急情况的方法。\n在1942年的水肺[潜水氧气筒]发明前，严格的潜水套装是装备着能从水面输送空气的连接管道。\n在现代，一名水肺潜水员将会熟悉当呼吸增压氧气时发生的潜水时的物理现象，气压，以及生理学的过程。',
  },
  {
    name: '汽车驾驶',
    base: 20,
    desc:
      '任何有着这项技能的人都可以驾驶一辆汽车或者轻型卡车，进行常规的移动，并且处理机动车的一般毛病。如果调查员想要甩掉一名追踪者或者追踪某人，则需要一个汽车驾驶检定。\n一些其他的文化可能用相似的事物来取代这个技能；因纽特人可能使用狗撬驾驶，或者维多利亚人可能使用四轮马车驾驶。',
  },
  {
    name: '电气维修',
    base: 10,
    desc:
      '使调查员能够修理或者改装电气设备，例如自动点火装置，电动机，保险丝盒，以及防盗自动警铃。在现代，这项技能对现代电子器件几乎做不到什么。为了维修电气设备，可能需要特殊的部件或者工具。在1920年代的职业可能会需要这个技能，并且需要机械维修技能作为组合。\n电气维修也可能在现代的爆破上被使用，例如雷管，C-4塑料炸弹，以及地雷。这些武器被设计得简单易用；只有一个大失败的结果才会造成不启动（记住这检定可以使用孤注一掷）。拆除爆炸物是远远更为复杂的，因为它们可能被安装了反拆改装置；当用于解除爆炸物时应当提高难度等级—见 爆破技能。',
  },
  {
    name: '电子学',
    base: 1,
    age: '现代',
    desc:
      '用来发现并对电子设备的故障进行维修。允许制作简单的电子设备。这是个现代技能—在1920年代则是使用物理学以及电气维修来应对电子设备。\n不像电气维修技能，电子学工作的部件通常是不能临时配备的：它们通过精密的工作被设计出来。通常如果没有正确的微晶片或者电路板，技能的使用者就无法进行工作，除非他们可以策划出一些形式的应急方案。',
  },
  {
    name: '话术',
    base: 5,
    desc:
      '话术特别限定于言语上的哄骗，欺骗以及误导，例如迷惑一名门卫来让你进入一间俱乐部，让某人在一张他还没有读的文件上签字，误导警察看向另一边，以及诸如此类的。这项技能的对立技能为心理学或者话术。经过一段时间的相信期后（通常在使用话术的人离开场景之后），对方会意识到自己被欺骗了。话术的效果总是暂时性的，尽管如果达成了更高的难度等级可能会使这个效果更加长一点。\n可以被用来对一件物品或者服务的价格进行砍价。如果成功，卖家会暂时性地觉得这是一场不错得交易；然而，如果买家打算归还或者试图购买别的物品，卖家可能会拒绝继续提供降价，并且甚至可能会提高价格为了补回他们在上一次交易中所造成的损失！',
  },
  {
    name: '格斗',
    desc:
      '格斗技能指的是一名角色在近距离战斗上的技能。你可以花费一定的点数来获得任何技能专攻。作为类属的“格斗”技能不能够获得。选择对你的调查员的职业以及当时历史合适的专业格斗技能。\n那些有着50%或者以上的格斗（斗殴）技能的调查员可能会希望选择一种正规的训练，并且作为背景的一部分来对他们的技能程度进行解释。格斗方式存在着各种各样的。武术只是单纯的一种提升一个人战斗技巧的方式。决定角色是如何学习格斗的，是否是从正规的军队训练，武术教室，或者以自己的努力从街头格斗中学会。术语斗殴可能会觉得对于作为一个技能化的武术来说过于粗糙，并且可以被代替（例如用“空手道”），如果玩家是这样希望的话。',
    sub: [
      {
        name: '斧',
        base: 15,
        desc:
          '当使用大型的木斧时使用这个技能。短柄小斧则可以用基础的斗殴技能；如果投掷出去，使用投掷技能。',
      },
      {
        name: '斗殴',
        base: 25,
        desc:
          '包括空手格斗以及任何人都可以捡起并使用的基础武器，例如棍棒（例如板球棒或者棒球棍），小刀，以及许多临时武器，例如瓶子以及椅子腿。为了决定这些临时武器所造成的伤害，KP应当参考武器表并且挑选那些类似的。',
      },
      {
        name: '链锯',
        base: 10,
        desc:
          '第一个以汽油为能源，大量生产的链锯出现于1927年；然而，也存在着一些早期版本。',
      },
      {
        name: '连枷',
        base: 10,
        desc: '索连棍，钉锤，以及相似的中世纪兵器。',
      },
      {
        name: '绞索',
        base: 15,
        desc:
          '任何长度的材料被用于绞死对方。需要受害者进行一个战技检定来逃脱，否则就要遭受每轮1D6的伤害。',
      },
      {
        name: '矛',
        base: 20,
        desc: '长枪或者投矛。如果投掷，使用投掷技能。',
      },
      {
        name: '剑',
        base: 20,
        desc: '所有的长度超过两英尺的剑器。',
      },
      {
        name: '鞭',
        base: 5,
        desc: '套索以及鞭子。',
      },
    ],
  },
  {
    name: '射击',
    desc:
      '包括了各种形式的火器，也包括了弓箭和弩。你可以花费技能点数来获得任何技能专攻。作为属类的“射击”技能不能被获得。选择与你调查员的职业与时代历史相契合的技能专攻。',
    sub: [
      {
        name: '弓',
        base: 15,
        desc: '用来使用弓以及弩，包括从中世纪的长弓到现代，高性能的复合弓。',
      },
      {
        name: '手枪',
        base: 20,
        desc:
          '用来使用所有的类似于手枪的火器，进行非连续的射击。对于现代游戏中的全自动手枪（MAC-11，乌兹手枪，等等），当使用全自动模式时，用冲锋枪的技能进行判定。',
      },
      {
        name: '重武器',
        base: 10,
        desc: '用于使用枪榴弹发射器，反坦克火箭炮等等。',
      },
      {
        name: '火焰喷射器',
        base: 10,
        desc:
          '喷射出一连串点燃的可燃烧液体或者气体的武器。可以被操作者携带或者架设在交通工具上。',
      },
      {
        name: '机枪',
        base: 10,
        desc:
          '用两脚架或者三脚架架设的进行连续射击的武器。如果两脚架的类型进行单次射击，那么使用步枪技能。对于今日来说，突击步枪，冲锋枪以及轻机枪之间的差别已经是十分细微的了。',
      },
      {
        name: '步枪/霰弹枪',
        base: 25,
        desc:
          '这个技能可以用于射击任何类型的步枪（无论是杠杆作用，手动栓式或者半自动的）或者霰弹枪。因为霰弹枪中装填的弹药会以散射的方式发射，所以使用者的命中几率不会因为距离而减少，但是造成的伤害会受到影响。当突击步枪进行单次射击时（或者多次进行单次），使用这个技能。',
      },
      {
        name: '冲锋枪',
        base: 15,
        desc:
          '当用任何自动手枪或者冲锋枪开火时使用这个技能；同样也用于突击步枪的全自动模式。',
      },
    ],
  },
  {
    name: '急救',
    base: 30,
    desc:
      '使用者有能力可以提供紧急的医疗处理。这可能包括：对摔断了的腿用夹板进行处理，止血，处理烧伤，对一名溺水的受害者进行复苏处理，包扎以及清理伤口等等。急救不能用于治疗疾病（这需要医学技能）。\n为了能做到有效，急救必须在一小时内进行处理，在这情况下，能回复1生命值的损伤。这项技能可以尝试一次，并且后续的尝试将为进行孤注一掷。两个人可以合作进行急救，只要其中一人成功便可以得到生命值的回复。成功的急救的使用可以将一名昏迷的角色唤醒过来。一名角色被限制只能进行一次成功的急救和医学，直到受到其他伤害。\n当处理一名濒死的角色，成功的急救可以稳定他的状态一小时，并且得到一点临时生命。在一小时结束后，在那之后每经过一小时，那名角色必须进行一次成功的体质（CON）检定来维持伤势的稳定，否则（如果体质检定失败）那名角色陷入濒死并且失去临时生命，之后每轮必须进行一次体质（CON）检定来避免死亡。如果那名角色存活到下一轮，可以再次尝试对其使用急救（最多可以两人使用）。这个可以不断持续下去（不算是使用孤注一掷）直到伤势被稳定或者其死亡。\n急救（并且只有急救）可以拯救一名濒死角色的生命，在之后他必须接受一个成功的医学检定或者被送往医院。因此，急救是一个需要拥有的重要的技能，伴随着医学，如果你希望能成为一名有用的医生。',
  },
  {
    name: '历史',
    base: 5,
    desc:
      '让一名调查员能够记住一个国家，城市，区域或者个人及其相关的重要情报。一个成功的检定可以用来帮助辨认先祖所熟悉的工具，科技，或者想法，但是对当下的所知甚少。',
  },
  {
    name: '催眠',
    base: 1,
    desc:
      '使用者可以在一名自愿并经历过高度暗示、放松的目标身上引出出神似的状态，并且可能回忆起忘却的记忆。对于催眠的限制应当由KP根据适应自己游戏的情况来制定；这可能是只有自愿的目标可以被催眠，或者KP可能会允许这项技能以一种更加富有侵略性的方式被用在非自愿的目标身上。\n对那些遭受了精神创伤的人，这项技能可以当做催眠疗法来使用，减轻一名病人的恐惧或者躁狂（成功的使用这个技能意味着这名病人在该场合克服了恐惧或者躁狂）。记住，为了完全治愈某人的恐惧，可能会需要一系列成功的催眠疗法疗程（最少1D6疗程，由KP决定）。',
  },
  {
    name: '恐吓',
    base: 15,
    desc:
      '恐吓可以以许多形式使用，包括武力威慑，心理操控，以及威胁。这通常被用来使某人害怕，并迫使其进行某种特定的行为。恐吓的对抗技能为恐吓或者心理学。\n携带武器或者其他的有力的威胁或诱因来协助恐吓可能可以降低难度等级。当在恐吓上使用孤注一掷时，失败的可能结果之一是对目标进行了远远超过本身意图的恐吓。\n恐吓可以被用于降低一件物品或者服务的价格。如果成功，卖家可能会降低价格，或者免费交出，但是根据情况，对方可能会将这事情举报给警察或者当地犯罪组织的成员。',
  },
  {
    name: '跳跃',
    base: 20,
    desc:
      '如果成功，调查员可以在垂直方向上跳起或跳下，或者从一个站立点或起步点水平向外跳。当坠落时，跳跃可以被用来降低可能造成的坠落伤害。\n为了分辨哪些算在正常跳跃，困难跳跃以及极难跳跃（分别需要一个常规难度成功，困难难度成功，以及极难难度成功），必须对判断进行训练。作为一个指导，当调查员想要安全地从垂直等同于其自身高度的地方跳下来时，需要一个常规难度的成功，或者水平地从其站立点跳过长度等同于他自身高度的坑，或者助跑后跳过两倍于其自身高度的距离。如果要达成两倍距离的跳跃，则需要一个极难难度的成功，尽管应当牢记，最长跳跃的世界纪录为大约29英尺。\n如果从高处摔落下来，一个成功的跳跃检定可以使对坠落有所准备，降低一半的坠落伤害。',
  },
  {
    name: '母语',
    base: '教育',
  },
  {
    name: '外语',
    base: 1,
    sub: [
      { name: '汉语' },
      { name: '英语' },
      { name: '日语' },
      { name: '粤语' },
      { name: '法语' },
      { name: '德语' },
      { name: '俄语' },
      { name: '韩语' },
      { name: '拉丁语' },
      { name: '荷兰语' },
      { name: '挪威语' },
      { name: '丹麦语' },
      { name: '印度语' },
      { name: '西班牙语' },
      { name: '葡萄牙语' },
      { name: '阿拉伯语' },
      { name: '希伯来语' },
    ],
  },
  {
    name: '法律',
    base: 5,
    desc:
      '代表你对相关法律、早期事件、法庭辩术或者法院程序了解的可能性。一个在法律实务上的专家可能会获得巨大的奖励以及政治事务所，但是这可能需要长达几年的认真申请—一个较高的信用评级在这关系上也十分重要。在美国，一个州的州法庭（StateBar）必须批准某人的法律实务。\n当到一个外国国家时，使用这项技能的难度等级可能会上升，除非这名角色花费数月的时间来学习这个国家的法律系统。',
  },
  {
    name: '图书馆使用',
    base: 20,
    desc:
      '图书馆使用使一名调查员能在图书馆找到一些信息，例如特定的一本书，新闻或者参考书，搜集文件或者资料库，假设需要的东西确实在那里的话。使用这个技能需要数小时的连续的调查。这项技能可以定位寻找一件隐藏的案例或者一本特殊收藏的稀有书籍，但是说服，话术，取悦，恐吓，信用评级，或者特殊的证明书可能会需要来获得阅读这书或者信息的许可。',
  },
  {
    name: '聆听',
    base: 20,
    desc:
      '衡量一名调查员理解声音的能力，包括偶然听到的对话，一扇关着的门后的轻声嘀咕，以及咖啡厅里的私语。KP可以用这来决定一场即将发生的遭遇的形式：是你的调查员因被踩碎的树枝的声音而警觉到了到来的遭遇？甚至此外，一个较高的聆听技能可以指一名角色有着较高的警觉能力。',
  },
  {
    name: '锁匠',
    base: 1,
    desc:
      '锁匠技能可以打开车门，短路电线来发动汽车，用铁撬撬开图书馆的窗子，解决中国机关箱，以及穿过常规的商用警报系统。使用者可能会修复锁，制作钥匙，或者在万能钥匙，开锁工具或者其他工具的帮助下打开锁。特别困难的锁可能会需要一个更高的难度等级。',
  },
  {
    name: '机械维修',
    base: 10,
    desc:
      '这项技能允许调查员修理一个破损的机器或者制造一个新的。基础的木工手艺和管道项目也可以执行，制作物品也同样可以（例如一组滑轮系统）以及维修物品（例如蒸汽泵）。在使用技能中可能会需要特殊的工具或者部件。这项技能可以用来打开普通的家庭锁，但是更加专业的就不能了—见 锁匠技能来打开更加复杂的锁。机械维修是一个与电气维修相伴随的技能，并且两者都可能需要来为了修理一个复杂的设备，例如汽车或者飞行器。',
  },
  {
    name: '医学',
    base: 1,
    desc:
      '使用者可以诊断并治疗事故，创伤，疾病，毒药等，并且可以提供公共健康建议。如果一个时代还并没有好的治疗某种疾病的疗法，那么这项技能的效果是有限的，不确定的，或者无效的。医学技能能给予大范围的对于药片以及药剂，是自然还是人造的知识，以及对副作用以及禁忌症状的理解。\n用医学技能来进行治疗最少要花费1小时时间，并且可以在造成了伤害后的任何时间进行处理，但是如果这并没有在同一天内进行处理，难度等级将会上升（需要一个困难难度的成功）。一名角色如果被成功地用医学技能进行治疗，他将恢复1D3的生命值（除在任何接受的急救之外的），除了在一名濒死角色的场合，他必须先接受一个成功的急救技能检定来稳定伤势，然后才能接受一个医学检定。\n一名角色被限定只能接受一次成功的急救以及医学的治疗，直到遭受了进一步的伤害（除了在濒死角色的场合，他可能需要多次的急救检定来稳定伤势）。成功的医学技能的使用可以将一名昏迷的角色从昏迷中唤醒。\n当处理重伤时，成功的医学技能的使用可以提供病人在每周的恢复检定上一个奖励骰。\nKP可能准许医学治疗自动成功，如果是在一个当代的，设备完善的医院中。',
  },
  {
    name: '博物学',
    base: 1,
    desc:
      '起初指对于在自然环境中的植物以及动物生命的研究。直到19世纪，这门学科被分开到一系列的学术学科（生物学，植物学，等等）。作为一个技能，博物学达标了传统的（非科学的）知识以及农民，渔民，优秀的业余者，以及单纯的爱好者的个人观察。它可以一般地对物种，栖息地进行辨认，并且可以辨认踪迹、足迹以及叫声，也可以允许对什么事物可能对某种特定物种来说很重要进行猜测。如果要一个对自然世界的科学性的理解，那么应当去看生物学，植物学以及动物学技能。\n博物学可能准确也可能不准确—这只是评估，判断，民间传统，以及热衷的事物的领域。使用博物学来判断集市中的马肉，或者决定是否蝴蝶收集品非常棒或者只是非常棒地排列了起来。',
  },
  {
    name: '导航',
    base: 10,
    desc:
      '允许使用者在早上或者晚上，在暴风雨或者晴朗天气中认清自己的路。有着更高技能的人将对天文表图和工具，以及卫星定位装置十分熟悉，如果他们是在有着那些东西的时代的话。一名角色也可以用这项技能来测量以及对一块区域进行绘图（制图学），判断是有着几平方米的小岛或者是一块内陆区域—使用现代工具可以降低甚至取消难度等级。\nKP可以将这个技能的检定作为隐藏骰进行处理—调查员需要尝试去解决的一件事情，并且最后承受结果。\n如果角色对该区域十分熟悉，那么在这个检定上可以得到一个奖励骰。',
  },
  {
    name: '神秘学',
    base: 5,
    desc:
      '使用者可以识别出神秘学道具，用语和概念，以及民间传统，并且可以辨认魔法书以及神秘学记号。神秘学家对于代代相传的各类神秘知识十分熟悉，包括从埃及和苏美尔，从中世纪和文艺复兴时期的西方，以及也许从亚洲或者非洲。\n理解特定的书籍可能可以增加神秘学技能的百分比。这项技能不能运用于与克苏鲁神话相关的咒术，书本，以及魔法，尽管旧日支配者的崇拜者对于神秘学有着很高的接受能力。',
  },
  {
    name: '操作重型机械',
    base: 1,
    desc:
      '当驾驶以及操纵一辆坦克，反铲挖土机，蒸汽挖土机或者其他巨型建造机械时需要这个技能。对于种类非常不同的机械，KP可以决定提高难度等级，如果遇到的问题是极大程度上不熟悉的；例如，过去常常开推土机的某人，不会立刻能够掌握对船的引擎舱中的蒸汽涡轮机的使用。',
  },
  {
    name: '说服',
    base: 10,
    desc:
      '使用说服来通过一场有理有据的论述、争辩以及讨论让目标相信一个确切的想法，概念，或者信仰。说服并不一定需要涉及真实的内容。成功的说服技能的运用将花费不少的时间：至少半小时。如果你想快速地说服某人，你应该使用话术技能。\n取决于玩家表述的目标，如果调查员花费了足够的时间，说服造成的影响可能一直持续下去，并且无意识地影响着别人；可能会持续好几年，直到某件事件或者另一次得说服改变了目标的想法。\n说服可以被用于讨价还价，以此来削低某样物品或者服务的价格。如果成功，卖家将会完全地相信自己做了一场好买卖。',
  },
  {
    name: '驾驶',
    base: 1,
    sub: [
      {
        name: '飞行器',
        desc:
          '理解以及足以操作飞行器类的载具。当进行任何的降落时，即使是在最好的环境下，也必须进行一个驾驶检定。失败的结果将取决于具体的情况。如果在一个平整的，有着绿草覆盖的地方进行降落，且是一个风平浪静的夏季日子，那么在飞机降落上检定的失败也许只是意味着导致了一次颠簸不稳的降落，可能会让一些心灵脆弱的乘客不敢再次乘坐飞机。在极端情况下，在一个暴风雨的天气里在冰川上进行降落的失败检定可能会导致飞机的坠毁并且里面所有人都受伤或者死亡。失败的检定通常意味着对飞行器造成了损伤，并且在下次起飞前必须先进行修复。如果检定的结果为100，那么将会导致一起令人难忘的灾难性事件。\n每种不同的飞行器的技能都需要独立计算，并且分开罗列，或者依照KP觉得合适的方式来做。1920年代：仅有驾驶热气球/飞船/民用螺旋桨飞机。现代：驾驶民用螺旋桨飞机，驾驶民用喷气飞机，驾驶客机，驾驶喷气战斗机，驾驶直升飞机。对于一件飞行器的驾驶技能可以被转而用于一个别的形式的飞行器，但是难度等级可能会提升。',
      },
      {
        name: '船',
        desc:
          '理解在风，暴风雨以及潮流下操纵小型摩托艇以及轮船的机理，并且可以读懂潮流以及风的流向，以此来得到暗礁以及将要逼近的暴风雨的情报。初学的水手将会发现到在大风中停靠一艘小船是多么困难。',
      },
    ],
  },
  {
    name: '精神分析',
    base: 1,
    desc:
      '这项技能指的是广泛的情感上的治疗，不单是弗洛伊德的疗法。在1890年代，正规的心理治疗仍处于发展的初期阶段，尽管一些疗法有着人类存在般悠久的历史。一些时候，这看上去像是一门欺诈性的研究，即使是在1920年代。在之后用来称呼那些精神病医师或者对情绪障碍进行研究的学者的通用术语为精神病学家（alienist）。在现代，心理治疗的各种方面都有了很大的发展，并且这项技能已经不能仅仅用精神病治疗来命名了。\n短期强化的精神分析可以恢复一名调查员患者的理智值。进行心理治疗时，游戏时间每月一次，精神病医师或医生进行一次精神分析技能检定。如果成功了，病人恢复1D3的理智值。如果检定失败了，没有任何恢复。如果检定为大失败，那么病人失去1d6的理智值，并且由心理医师进行的治疗到此结束：可能在心理治疗中发生了一些严重的事变或者戏剧性的阻碍，并且在病人与治疗专家之间的关系破损到了难以修复的地步。\n在游戏中，单独的精神分析并不能加速不定性疯狂的恢复，恢复需要1D6个月的系统全面（或者相似的）的照顾，而精神疗法只是构成了其中的一部分。成功使用这项技能将允许角色在短期内克服恐惧症状，或者看穿幻觉。在游戏中，这允许一名疯狂的调查员在短期内免受恐惧症或者躁狂症的影响，例如允许一名幽闭恐惧症患者躲藏在扫把柜中十分钟。同样的，一名角色可以进行一个精神分析检定来帮助一名处于妄想中的调查员在短期内看破幻觉不受影响。由一名心理治疗专家进行的治疗可以在不定性疯狂期间内回复理智值。\n精神分析无法将一名角色的理智值加到超过99-克苏鲁神话。',
  },
  {
    name: '心理学',
    base: 10,
    desc:
      '对所有人来说都很通用的察觉方面的技能，允许使用者研究个人并且形成对于其他某人动机和人格的了解。KP可以选择替代玩家暗骰心理学技能，根据检定结果，向玩家声明真或假的信息（不告知玩家检定成功与否以及信息的真伪）。',
  },
  {
    name: '读唇',
    base: 1,
    desc:
      '这项技能允许好奇的调查员听懂一段交谈对话，而不需要听见对方说了什么。能看到对方的视线是必须的，并且如果只能看到其中一名说话者的唇（另一名可能只能看到背），那么只能辨认出一半的对话。\n读唇也可以用于与另一个人进行无声的交流（如果双方都是专家），允许相对更加复杂的短语以及含义。',
  },
  {
    name: '骑术',
    base: 5,
    desc:
      '这项技能被用于给坐在鞍上驾驭马，驴子或者骡子，以及获得对这些骑乘动物、骑乘工具的基础照料知识，以及如何在疾驰中或困难地形上操纵坐骑。当坐骑出乎意外地抬起身子或失足时，骑手保持自己在坐骑上不摔落的几率等同于他的骑术技能。偏坐在马鞍上进行骑乘将会提高一个等级的难度等级。对于不熟悉的坐骑（例如骆驼）也可以成功地骑乘，但是可能会需要更高的难度等级。\n如果一名调查员从坐骑上摔落下来，可能是因为坐骑垮了，摔落了或者是死了（或者因为骑术的孤注一掷检定失败），这次意外将造成至少1D6生命值的损失—尽管跳跃检定可以抵消这个损失。',
  },
  {
    name: '科学',
    base: 1,
    desc:
      '科学专业上的理论和实践的能力，拥有这个技能的人接受过一定程度的正式的教育或者训练，尽管一名博览群书的业余科学家也是可能存在的。对于知识的理解和认识受到游戏时代的限制。你可以花费点数来获得任何你想要的技能专攻。作为属类的“科学”技能不能被获得。\n每个技能专攻包括了一门专门的学科，并且列表所给出的并不是全部。许多专业跨越了不同的知识领域，并且有所重叠，例如数学和密码学，植物学和生物学，化学和药学。当一名角色没有完全对应的专业学科技能，他可以用一个相似的技能进行检定，但是由KP来判断是否要增加难度等级（或者一个惩罚骰）。',
    sub: [
      {
        name: '天文学',
        desc:
          '使用者可以知道在某个特定的日子或者一天早晚某个时间时哪颗恒星或者行星位于正上方，何时彗星和流星雨会出现，以及重要的恒星的名字。这项技能同样会提供有关其他世界的生命，银河的存在和结构，以及类似的知识的现代概念。一名学者可能能够计算轨道，判断恒星生命周期，以及（在现代）有关红外天文学或者超长基线干涉测量的相关知识。',
      },
      {
        name: '生物学',
        desc:
          '关于生命和存活的有机物的学科，包括细胞学、生态学、基因学、组织学、微观生物学、生理学等等。在这项技能的帮助下，一个人可能能够研究出能够对抗可怕的克苏鲁神话细菌的疫苗，将自己从能够令人产生幻觉的丛林植物下隔离开来，或者对鲜血以及/或者有机物质进行分析。',
      },
      {
        name: '植物学',
        desc:
          '关于植物生命的研究，包括物种分类，结构，生长，繁殖，化学特性，进化原理，疾病，以及显微研究。植物学的分支学科包括农学，森林学，园艺和古植物学。在这项技能的帮助下，某人可以辨认出某种特定植物的特性（例如是否有毒性，是否可食用，或者具有精神治疗作用）以及它的具体用处。',
      },
      {
        name: '化学',
        desc:
          '有关物质组成，温度的影响，能量，以及作用于其上的压力的研究，也包括物质如何互相影响。在化学的帮助下，某人可以创造或者提取复杂的化学复合物，包括简单的炸药，毒药，气体以及酸液，需要至少一天以上并且在合适的设备以及化学药剂的帮助。使用者也可以对一种不明的物质进行分析，如果有这合适的设备以及试剂。',
      },
      {
        name: '密码学',
        desc:
          '关于由其他人发展出来的用于隐藏对话或者信息内容用的暗码或者密语的研究。一种数学的专业分支，这项技能使使用者能够辨认，创造或破译暗码。暗码通常上来说是写下来的，但也可能通过其他的形式，例如隐藏在乐曲、画作或者电脑编码（在现代设定下）下的信息。破译一个暗码可能会是一个漫长的工作，通常需要很长时间的调查研究以及大量的演算处理。',
      },
      {
        name: '工程学',
        desc:
          '尽管严格上来说这并不是科学，但是为了方便归到了这里。科学是与辨认特定的现象相关（通过观察和记录）。然而工程学将这些发现利用起来进行实际利用，例如机器，结构，以及材料。',
      },
      {
        name: '司法科学',
        desc:
          '对于证据的分析和检定的研究。通常与犯罪现场调查（检验指纹、DNA、头发以及体液）和实验室工作相联系，以此来确定真相以及为法庭争论提供专业的证人和证据。',
      },
      {
        name: '地质学',
        desc:
          '用来决定大致的岩层年龄，辨认出化石的类型，区分矿物和水晶，确定合理的采矿和挖掘地址，评估土地，预测火山活动、地震、雪崩以及其他类似的现象。',
      },
      {
        name: '数学',
        base: 10,
        desc:
          '对于数字和逻辑的研究，包括数学理论、应用以及理论上的解决方法设计和推演发展。这项技能可能允许使用者辨认非欧几里得几何，解决困难的公式，以及破译复杂的图样或者暗码。',
      },
      {
        name: '气象学',
        desc:
          '这是门关于大气的科学研究，包括天气系统和形态，以及大气现象。使用这项技能可以判断长期的天气形态以及对其影响进行预报，例如雨、雪以及雾。',
      },
      {
        name: '药学',
        desc:
          '关于化学复合物以及它们的在有机生命体上的效果的研究。传统上来说，这包括药物的配方、创造以及施用（不管是一名巫医进行药草组合或者是现代的药剂师在实验室里进行操作）。这个技能的应用在与确认药物被安全以及有效地使用，包括人工合成原料，毒素的检定，以及有可能产生的副作用的相关知识。',
      },
      {
        name: '物理学',
        desc:
          '使使用者能够理论上了解压力、材料、运动、磁力、电力、光学、辐射和相关的现象，以及给予一定的能力来构建实验器材来验证想法。对于知识的了解程度取决于所在的年代。实际运用的装置，例如汽车，并不是物理学家的范围，然而实验设备可能会是，也许要结合电气维修或者机械维修。',
      },
      {
        name: '动物学',
        desc:
          '对专门联系到动物王国的生物学的研究，包括仍存在以及灭绝动物的生态结构，进化，分类，行为习性，以及分布。使用这项技能来从动物与环境的互动（脚印，兽粪，痕迹等等），行为举止，以及区域特点上辨认出其物种。',
      },
    ],
  },
  {
    name: '妙手',
    base: 10,
    desc:
      '允许对物体进行视觉上的遮住，藏匿，或者掩盖，也许通过残害，衣服或者其他的干涉或促成错觉的材料，也许通过使用一个秘密的嵌板或者隔间。任何种类的巨大物件应当增加藏匿的难度。\n妙手包括偷窃，卡牌魔术，以及秘密使用手机。',
  },
  {
    name: '侦查',
    base: 25,
    desc:
      '这项技能允许使用者发现密门或者秘密隔间，注意到隐藏的闯入者，发现并不明显的线索，发现重新涂过漆的汽车，意识到埋伏，注意到鼓出的口袋，或者任何类似的事情。对于调查员来说，这是一个很重要的技能。\n如果一名角色仅有很短的时间来进行侦查，例如飞奔经过对方时，KP可能会提升难度等级。如果一名角色正在进行一场完整的调查，那么KP也许会允许一个自动成功。这项技能的难度等级同样也会环境的情况来调整，在一个杂乱的房间中进行侦查将会更加困难。',
  },
  {
    name: '潜行',
    base: 20,
    desc:
      '安静地移动以及/或者躲藏的技巧，不惊扰到那些可能在听或者看的人们。当尝试躲避探查，玩家应当进行一个潜行的技能检定。与这项技能相关的能力意味着要么角色能够安静地移动（轻声轻足）以及/或者在伪装技巧上有所训练。这项技能也同样意味着角色可以在长时间维持一定程度的谨慎心态以及冷静的头脑来使自己保持静止和隐秘。',
  },
  {
    name: '生存',
    base: 10,
    desc:
      '提供专业的如何在极端环境下生存的知识和技巧，例如在沙漠中或者极地环境，也包括海洋上或者荒野。内容包括狩猎的知识，搭建住所，可能遇到的危险的知识（例如如何避开有毒性的植物）等等，取决于所处的环境。\n你可以花费技能点来获得任何的技能专攻。作为属类的“生存”技能本身不能被获得。专业环境的生存技巧应当在技能选择时就决定下来，例如：生存（沙漠），（海洋），（极地），等等。当一名角色没有明显对应的生存专业技能，他可以使用相似的专业进行检定，但是将会提升难度等级（或者惩罚骰），取决于KP的判断。',
    sub: [
      {
        name: '沙漠',
      },
      {
        name: '海洋',
      },
      {
        name: '极地',
      },
    ],
  },
  {
    name: '游泳',
    base: 20,
    desc:
      '有能力在水或者其他液体中漂浮以及移动。只有在遭遇危险的时候需要进行游泳技能检定，或者当KP认为合适的时候。当进行游泳的孤注一掷失败时，可能会导致生命值的损失。也可能会导致人物被顺着水流向下冲走，被水流半淹或者完全淹没。',
  },
  {
    name: '投掷',
    base: 20,
    desc:
      '当需要用物体击中目标或者用物件的正确部分击中目标（例如小刀或者短柄小斧的刃）时，使用投掷技能。\n一件有着合理平衡构架的可以藏于手中大小的物品可以被投掷至多等同于STR码距离。\n如果投掷技能检定失败，投掷物将会掉落在距离目标随机距离的地方。KP应当将骰子检定数与最高的能够达成成功的数值相比较，然后判断投掷物落在目标和投掷者之间合适的距离的地方。\n投掷技能被用于在战斗中投掷小刀，石头，投矛或者回力标时。',
  },
  {
    name: '追踪',
    base: 10,
    desc:
      '一名调查员可以凭借追踪技能来通过土壤上的脚印，或是物体通过植被时留下的印记来追踪别人，或者是交通工具以及地球上的动物。时间的经过，雨，以及土地的种类都可能会影响追踪的难度等级。',
  },
];
