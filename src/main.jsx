import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import './styles.css';

const CONTACT = {
  whatsappUrl: 'https://wa.me/000000000000',
  email: 'hello@gabontravel.example',
  phone: '+241 00 00 00 00',
  address: 'Libreville, Gabon',
};

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}.png`;

const content = {
  en: {
    meta: {
      brand: 'Gabon Travel',
      tagline: 'Custom Tours & Travel Services',
      language: '中文',
    },
    nav: ['Home', 'Tours', 'Destinations', 'Travel Services', 'About Gabon', 'Contact'],
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
        image: asset('destination-rainforest'),
      },
      {
        title: 'Wildlife Safaris',
        body: 'Forest elephants, buffalo, birdlife, and national park visits planned with responsible operators.',
        image: asset('destination-wildlife'),
      },
      {
        title: 'Beach Escapes',
        body: 'Quiet Atlantic beaches, forest-edged coastline, coastal lodges, and unhurried private stays.',
        image: asset('destination-coast'),
      },
      {
        title: 'Culture & City Tours',
        body: 'Libreville, local markets, museums, seaside dining, craft encounters, and contemporary city life.',
        image: asset('destination-culture'),
      },
      {
        title: 'Business Travel',
        body: 'Airport pickup, hotel planning, meeting logistics, interpreters, and city transfers for work trips.',
        image: asset('destination-culture'),
      },
      {
        title: 'Custom Itineraries',
        body: 'Private routing for families, photographers, researchers, honeymooners, and small groups.',
        image: asset('destination-rainforest'),
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
        image: asset('destination-rainforest'),
      },
      {
        title: '野生动物之旅',
        body: '围绕森林象、水牛、鸟类与国家公园游览，连接负责任的当地服务商。',
        image: asset('destination-wildlife'),
      },
      {
        title: '海岸度假',
        body: '安静的大西洋海滩、雨林边缘海岸、海滨住宿与慢节奏私人假期。',
        image: asset('destination-coast'),
      },
      {
        title: '城市与文化游',
        body: '利伯维尔、当地市集、博物馆、海边餐饮、手工艺体验与现代城市生活。',
        image: asset('destination-culture'),
      },
      {
        title: '商务出行',
        body: '机场接送、酒店协调、会议交通、翻译协助与利伯维尔市内行程支持。',
        image: asset('destination-culture'),
      },
      {
        title: '私人定制路线',
        body: '适合家庭、摄影师、研究人员、蜜月旅行和小团体的多日私人行程。',
        image: asset('destination-rainforest'),
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
};

function App() {
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = content[language];
  const isZh = language === 'zh';

  const navLinks = useMemo(
    () => [
      ['#home', t.nav[0]],
      ['#tours', t.nav[1]],
      ['#destinations', t.nav[2]],
      ['#services', t.nav[3]],
      ['#about', t.nav[4]],
      ['#contact', t.nav[5]],
    ],
    [t],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className={isZh ? 'site zh' : 'site'}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={t.meta.brand}>
          <span className="brand-mark">
            <Globe2 size={22} strokeWidth={2.2} />
          </span>
          <span>
            <strong>{t.meta.brand}</strong>
            <small>{t.meta.tagline}</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-quote" href="#contact" onClick={() => setMenuOpen(false)}>
            {isZh ? '获取报价' : 'Get Quote'}
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="language-btn"
            type="button"
            onClick={() => setLanguage(isZh ? 'en' : 'zh')}
            aria-label="Switch language"
          >
            <Globe2 size={17} />
            {t.meta.language}
          </button>
          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-img" src={asset('hero-gabon-travel')} alt="" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-copy">{t.hero.body}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                {t.hero.primary}
                <ArrowRight size={18} />
              </a>
              <a className="btn btn-secondary" href="#tours">
                {t.hero.secondary}
              </a>
            </div>
            <div className="hero-stats">
              {t.hero.stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <a className="scroll-cue" href="#tours" aria-label="Scroll to tours">
            <ChevronDown size={22} />
          </a>
        </section>

        <section className="section intro-strip" id="tours">
          <div className="section-head">
            <p className="eyebrow">{isZh ? '旅行产品' : 'Tour Products'}</p>
            <h2>{t.categoriesTitle}</h2>
            <p>{t.categoriesIntro}</p>
          </div>
          <div className="category-grid">
            {t.categories.map((item) => (
              <article className="category-card" key={item.title}>
                <img src={item.image} alt="" />
                <div className="category-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a href="#contact">
                    {isZh ? '咨询该路线' : 'Ask about this'}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
            <p className="lead">{t.about.lead}</p>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="highlight-row">
              {t.about.highlights.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <aside className="service-panel" id="services">
            <div className="panel-icon">
              <ShieldCheck size={28} />
            </div>
            <h3>{isZh ? '旅行服务支持' : 'Travel Service Support'}</h3>
            <ul>
              <li>{isZh ? '定制路线与报价建议' : 'Custom routing and quote guidance'}</li>
              <li>{isZh ? '机场接送与市内交通' : 'Airport pickup and city transfers'}</li>
              <li>{isZh ? '当地向导与翻译协调' : 'Local guides and interpreter coordination'}</li>
              <li>{isZh ? '商务、家庭、小团旅行安排' : 'Business, family, and small-group arrangements'}</li>
            </ul>
          </aside>
        </section>

        <section className="section destination-section" id="destinations">
          <div className="section-head compact">
            <p className="eyebrow">{isZh ? '目的地' : 'Destinations'}</p>
            <h2>{t.destinations.title}</h2>
          </div>
          <div className="destination-list">
            {t.destinations.items.map(([name, description], index) => (
              <article key={name} className="destination-item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="section-head compact">
            <p className="eyebrow">{isZh ? '流程' : 'Process'}</p>
            <h2>{t.processTitle}</h2>
          </div>
          <div className="process-grid">
            {t.process.map(([title, body], index) => (
              <article className="process-step" key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section inquiry-section" id="contact">
          <div className="inquiry-copy">
            <p className="eyebrow">{t.inquiry.eyebrow}</p>
            <h2>{t.inquiry.title}</h2>
            <p>{t.inquiry.body}</p>
            <div className="contact-stack">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} />
                {t.inquiry.whatsapp}
              </a>
              <span>
                <Mail size={18} />
                {CONTACT.email}
              </span>
              <span>
                <Phone size={18} />
                {CONTACT.phone}
              </span>
              <span>
                <MapPin size={18} />
                {CONTACT.address}
              </span>
            </div>
          </div>

          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                {t.inquiry.fields.name}
                <input required name="name" type="text" />
              </label>
              <label>
                {t.inquiry.fields.contact}
                <input required name="contact" type="text" />
              </label>
            </div>
            <div className="form-row">
              <label>
                {t.inquiry.fields.dates}
                <input name="dates" type="text" />
              </label>
              <label>
                {t.inquiry.fields.group}
                <input name="group" type="number" min="1" />
              </label>
            </div>
            <label>
              {t.inquiry.fields.interests}
              <select name="interests" defaultValue="">
                <option value="" disabled>
                  {isZh ? '请选择' : 'Select an option'}
                </option>
                {t.categories.slice(0, 6).map((item) => (
                  <option key={item.title}>{item.title}</option>
                ))}
              </select>
            </label>
            <label>
              {t.inquiry.fields.message}
              <textarea required name="message" rows="5" />
            </label>
            <button className="btn btn-primary form-submit" type="submit">
              <Send size={17} />
              {t.inquiry.submit}
            </button>
            {submitted && <p className="form-success">{t.inquiry.success}</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>{t.meta.brand}</strong>
          <p>{t.meta.tagline}</p>
        </div>
        <div>
          <h3>{t.footer.quick}</h3>
          {navLinks.slice(0, 5).map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <h3>{t.footer.experiences}</h3>
          {t.categories.slice(0, 4).map((item) => (
            <a key={item.title} href="#tours">
              {item.title}
            </a>
          ))}
        </div>
        <div>
          <h3>{t.footer.contact}</h3>
          <p>{CONTACT.email}</p>
          <p>{CONTACT.phone}</p>
          <p>{CONTACT.address}</p>
        </div>
        <div className="newsletter">
          <h3>{t.footer.newsletter}</h3>
          <p>{t.footer.newsletterBody}</p>
          <form>
            <input type="email" placeholder={isZh ? '邮箱地址' : 'Email address'} aria-label="Email address" />
            <button type="button">{t.footer.subscribe}</button>
          </form>
        </div>
        <p className="copyright">© 2026 {t.footer.copyright}</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
