export const resolveAsset = (name) => `${import.meta.env.BASE_URL}assets/${name}.png`;

export const siteConfig = {
  contact: {
    whatsappUrl: 'https://wa.me/000000000000',
    email: 'hello@gabontravel.example',
    phone: '+241 00 00 00 00',
    address: 'Libreville, Gabon',
  },
  media: {
    hero: 'hero-gabon-travel',
  },
  content: {
    en: {
      meta: {
        brand: 'Gabon Travel',
        tagline: 'Custom Tours & Travel Services',
        language: '中文',
      },
      nav: ['Home', 'Tours', 'Destinations', 'Travel Services', 'About Gabon', 'Contact'],
      labels: {
        quote: 'Get Quote',
        tourProducts: 'Tour Products',
        askAbout: 'Ask about this',
        destinations: 'Destinations',
        process: 'Process',
        servicePanelTitle: 'Travel Service Support',
        selectOption: 'Select an option',
        emailAddress: 'Email address',
      },
      hero: {
        eyebrow: 'Private tours across rainforest, coast, and culture',
        title: 'Gabon Travel & Custom Tours',
        body:
          'Plan a refined journey through Central Africa’s Atlantic coast, equatorial rainforest, national parks, and modern Libreville with local travel support from inquiry to arrival.',
        primary: 'Plan My Trip',
        secondary: 'Explore Tours',
        stats: [
          ['6', 'Tour styles'],
          ['24/7', 'Arrival support'],
          ['100%', 'Tailor-made'],
        ],
      },
      categoriesTitle: 'Popular Gabon Travel Experiences',
      categoriesIntro:
        'Choose a ready direction or combine several experiences into a private itinerary designed around your dates, pace, and travel purpose.',
      categories: [
        {
          title: 'Rainforest Expeditions',
          body: 'Guided journeys into Gabon’s equatorial forest landscapes, river routes, and protected natural areas.',
          image: 'destination-rainforest',
        },
        {
          title: 'Wildlife Safaris',
          body: 'Forest elephants, buffalo, birdlife, and national park visits planned with responsible operators.',
          image: 'destination-wildlife',
        },
        {
          title: 'Beach Escapes',
          body: 'Quiet Atlantic beaches, forest-edged coastline, coastal lodges, and unhurried private stays.',
          image: 'destination-coast',
        },
        {
          title: 'Culture & City Tours',
          body: 'Libreville, local markets, museums, seaside dining, craft encounters, and contemporary city life.',
          image: 'destination-culture',
        },
        {
          title: 'Business Travel',
          body: 'Airport pickup, hotel planning, meeting logistics, interpreters, and city transfers for work trips.',
          image: 'hero-gabon-travel',
        },
        {
          title: 'Custom Itineraries',
          body: 'Private routing for families, photographers, researchers, honeymooners, and small groups.',
          image: 'destination-rainforest',
        },
      ],
      about: {
        eyebrow: 'Why travel with us',
        title: 'A Gabon journey built around real terrain, timing, and support.',
        lead:
          'Gabon rewards travelers who plan with care. Distances, seasons, park access, domestic logistics, and local guidance all shape the quality of a trip. Our travel service brings those details together so visitors can focus on the rainforest, wildlife, ocean, culture, and the quiet sense of discovery that makes Gabon distinct.',
        paragraphs: [
          'From Libreville city stays to Lope National Park, Atlantic beach extensions, cultural visits, and nature-focused expeditions, every itinerary is arranged around your arrival city, group size, comfort level, and preferred rhythm. We help compare route options, estimate travel time honestly, and recommend the right balance between adventure and rest.',
          'For international guests, we can support airport transfers, hotel coordination, local guides, vehicle arrangements, business travel needs, and custom tour planning. Whether your trip is a short stopover or a deeper Gabon holiday, the aim is simple: a clear plan, responsive communication, and travel days that feel well held.',
        ],
        highlights: ['Local route planning', 'Private and small-group trips', 'Nature, coast, city, and business support'],
      },
      services: [
        'Custom routing and quote guidance',
        'Airport pickup and city transfers',
        'Local guides and interpreter coordination',
        'Business, family, and small-group arrangements',
      ],
      destinations: {
        title: 'Destination Focus',
        items: [
          ['Libreville', 'Coastal capital, dining, markets, museums, and arrival logistics.'],
          ['Lope National Park', 'Rainforest and savanna landscapes with wildlife-focused trip options.'],
          ['Atlantic Coast', 'Quiet beaches, forest coastline, lagoons, and slower leisure routes.'],
          ['Custom Gabon Routes', 'Multi-day private itineraries combining culture, nature, and practical support.'],
        ],
      },
      processTitle: 'How Your Trip Comes Together',
      process: [
        ['Inquiry', 'Share your dates, travel purpose, group size, and must-see interests.'],
        ['Trip Planning', 'We shape a practical route, recommend tour styles, and align logistics.'],
        ['Confirmation', 'Finalize itinerary, hotels, transfers, guide needs, and contact details.'],
        ['Arrival & Support', 'Receive local assistance for transfers, schedule changes, and travel questions.'],
      ],
      inquiry: {
        eyebrow: 'Start a custom quote',
        title: 'Tell us what kind of Gabon trip you want.',
        body:
          'Send a quick WhatsApp message for faster replies, or use the form to outline dates, group size, and preferred experiences.',
        whatsapp: 'Chat on WhatsApp',
        submit: 'Send Inquiry',
        success: 'Thanks. Your inquiry is ready for follow-up. Replace the placeholder contact details to receive real submissions.',
        fields: {
          name: 'Name',
          contact: 'Email or phone',
          dates: 'Travel dates',
          group: 'Group size',
          interests: 'Interests',
          message: 'Message',
        },
      },
      footer: {
        quick: 'Quick Links',
        experiences: 'Experiences',
        contact: 'Contact',
        newsletter: 'Travel Notes',
        newsletterBody: 'Receive seasonal Gabon ideas and custom travel updates.',
        subscribe: 'Subscribe',
        copyright: 'Gabon Travel. Static preview site.',
      },
    },
    zh: {
      meta: {
        brand: '加蓬旅游',
        tagline: '定制行程与旅游服务',
        language: 'EN',
      },
      nav: ['首页', '线路', '目的地', '旅游服务', '关于加蓬', '联系'],
      labels: {
        quote: '获取报价',
        tourProducts: '旅行产品',
        askAbout: '咨询该路线',
        destinations: '目的地',
        process: '流程',
        servicePanelTitle: '旅行服务支持',
        selectOption: '请选择',
        emailAddress: '邮箱地址',
      },
      hero: {
        eyebrow: '雨林、海岸与人文的私人定制旅行',
        title: '加蓬旅行与定制行程',
        body:
          '从大西洋海岸、赤道雨林、国家公园到现代利伯维尔，为你规划清晰、可靠、有当地支持的加蓬旅行。',
        primary: '咨询定制行程',
        secondary: '查看线路',
        stats: [
          ['6', '旅行主题'],
          ['24/7', '抵达支持'],
          ['100%', '私人定制'],
        ],
      },
      categoriesTitle: '热门加蓬旅行体验',
      categoriesIntro:
        '你可以选择一个主题，也可以把自然、海岸、城市、人文和商务服务组合成适合日期与节奏的私人行程。',
      categories: [
        {
          title: '雨林探险',
          body: '深入加蓬赤道雨林、河流路线与自然保护区，适合生态旅行与深度体验。',
          image: 'destination-rainforest',
        },
        {
          title: '野生动物之旅',
          body: '围绕森林象、水牛、鸟类与国家公园游览，连接负责任的当地服务商。',
          image: 'destination-wildlife',
        },
        {
          title: '海岸度假',
          body: '安静的大西洋海滩、雨林边缘海岸、海滨住宿与慢节奏私人假期。',
          image: 'destination-coast',
        },
        {
          title: '城市与文化游',
          body: '利伯维尔、当地市集、博物馆、海边餐饮、手工艺体验与现代城市生活。',
          image: 'destination-culture',
        },
        {
          title: '商务出行',
          body: '机场接送、酒店协调、会议交通、翻译协助与利伯维尔市内行程支持。',
          image: 'hero-gabon-travel',
        },
        {
          title: '私人定制路线',
          body: '适合家庭、摄影师、研究人员、蜜月旅行和小团体的多日私人行程。',
          image: 'destination-rainforest',
        },
      ],
      about: {
        eyebrow: '为什么选择我们',
        title: '真正适合加蓬地形、季节与节奏的旅行计划。',
        lead:
          '加蓬不是只靠景点清单就能玩好的目的地。距离、季节、国家公园准入、当地交通与向导都会影响体验。我们把这些细节整合成清楚的旅行方案，让你更专注于雨林、野生动物、海岸、人文和加蓬独有的探索感。',
        paragraphs: [
          '从利伯维尔城市停留，到洛佩国家公园、大西洋海岸延伸、人文拜访和自然主题行程，每条路线都会根据抵达城市、人数、舒适度和旅行节奏来安排。我们会帮助比较路线、诚实估算交通时间，并把冒险与休息安排到合适比例。',
          '面向国际旅客，我们可以协助机场接送、酒店协调、当地向导、车辆安排、商务出行和定制线路规划。无论是短暂停留还是深度假期，目标都很简单：计划清楚、沟通及时、旅途安心。',
        ],
        highlights: ['当地路线规划', '私人及小团旅行', '自然、海岸、城市与商务支持'],
      },
      services: ['定制路线与报价建议', '机场接送与市内交通', '当地向导与翻译协调', '商务、家庭、小团旅行安排'],
      destinations: {
        title: '重点目的地',
        items: [
          ['利伯维尔', '海岸首都、餐饮、市集、博物馆与抵达后勤。'],
          ['洛佩国家公园', '雨林与稀树草原景观，适合野生动物主题路线。'],
          ['大西洋海岸', '安静海滩、雨林海岸线、泻湖与慢旅行路线。'],
          ['加蓬定制路线', '把文化、自然和实际出行支持组合成多日私人行程。'],
        ],
      },
      processTitle: '行程如何落地',
      process: [
        ['咨询', '告诉我们日期、旅行目的、人数和想看的体验。'],
        ['规划', '根据实际交通和季节设计路线，并匹配服务与预算方向。'],
        ['确认', '确认行程、酒店、接送、向导需求和联系方式。'],
        ['抵达支持', '提供接送、时间调整和旅途中问题的当地协助。'],
      ],
      inquiry: {
        eyebrow: '开始获取定制报价',
        title: '告诉我们你想要怎样的加蓬旅行。',
        body: '想快速沟通可以直接发 WhatsApp，也可以用表单留下日期、人数和感兴趣的体验。',
        whatsapp: 'WhatsApp 咨询',
        submit: '发送咨询',
        success: '已生成咨询信息。请替换占位联系方式，以便接收真实提交。',
        fields: {
          name: '姓名',
          contact: '邮箱或电话',
          dates: '旅行日期',
          group: '人数',
          interests: '感兴趣的体验',
          message: '留言',
        },
      },
      footer: {
        quick: '快速链接',
        experiences: '旅行体验',
        contact: '联系方式',
        newsletter: '旅行灵感',
        newsletterBody: '获取加蓬季节旅行建议和定制路线更新。',
        subscribe: '订阅',
        copyright: '加蓬旅游。静态预览站点。',
      },
    },
  },
};
