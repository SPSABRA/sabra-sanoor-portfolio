import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, BookOpen, BriefcaseBusiness,
  Check, ChevronDown, Code2, ExternalLink, Github, Globe2, GraduationCap,
  HeartHandshake, Linkedin, Mail, Menu, Network, ScanLine, Send,
  Sparkles, Terminal, Users, X, Zap, Database, Cpu, MapPin, Layers3
} from 'lucide-react';
import './styles.css';

const PROFILE = {
  name: 'Sabra Sanoor',
  role: 'BICT Undergraduate · Aspiring Developer',
  university: 'South Eastern University of Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/sabra-sanoor-1a66a1362/',
  github: 'https://github.com/SPSABRA',
  email: 'shabrasanoor@gmail.com' // Public portfolio contact email.
};

const projects = [
  {
    id: '01', type: 'Full-stack', label: 'LIVE · TEAM PROJECT', title: 'Dream Ceylon',
    tagline: 'A smarter way to discover Sri Lanka.',
    description: 'A tourism planning platform created as a collaborative university project. It brings destination discovery and travel-planning ideas into one digital experience.',
    contribution: 'Contributed to the React frontend and Node.js / Express backend, API integration and collaborative GitHub workflows, including branches and pull requests.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://140-245-4-104.sslip.io',
    visual: 'dream',
    insight: 'A team-built application that connects frontend interfaces with backend services and a database.'
  },
  {
    id: '02', type: 'Programming', label: 'C PROGRAMMING · ACADEMIC', title: 'Vehicle Parking Fee System',
    tagline: 'Turning rules into working logic.',
    description: 'A C-language project that calculates parking fees from vehicle and parking details supplied by the user.',
    contribution: 'Practised input handling, conditional logic, calculations and structured problem-solving in C.',
    stack: ['C', 'Functions', 'Conditionals', 'Input handling', 'Problem solving'],
    repo: '', // Add the confirmed Vehicle Parking Fee System repository URL here.
    visual: 'parking',
    insight: 'A fundamentals-first project focused on translating a real-world process into clear program logic.'
  },
  {
    id: '03', type: 'IoT & Hardware', label: 'MICROCONTROLLER · PRACTICAL', title: 'Smart Parking Assistant',
    tagline: 'Distance sensing meets real-time feedback.',
    description: 'An Arduino-based parking assistance prototype designed to indicate distance and parking status through visual, audio and servo feedback.',
    contribution: 'Worked with an ultrasonic sensor, servo motor, red and green LEDs, buzzer and 16×2 I2C LCD as part of a microcontroller practical.',
    stack: ['Arduino Uno', 'C/C++', 'Ultrasonic sensor', 'Servo motor', 'I2C LCD'],
    visual: 'iot',
    insight: 'Explores how software logic interacts with physical components and sensor input.'
  },
  {
    id: '04', type: 'Frontend', label: 'WEB DESIGN · BRAND EXPLORATION', title: 'RAADHAFATHI',
    tagline: 'A digital direction for gems & jewellery.',
    description: 'A visual and website exploration for a premium gems and jewellery identity, guided by black, champagne gold and ivory.',
    contribution: 'Explored brand-led interface direction, responsive layout, navigation, spacing and product presentation.',
    stack: ['UI research', 'HTML', 'CSS', 'Responsive design', 'Visual direction'],
    visual: 'raadha',
    insight: 'An exercise in creating a coherent digital experience around a distinct visual identity.'
  },
  {
    id: '05', type: 'Frontend', label: 'FRONTEND · PRACTICE PROJECT', title: 'Balance Coffee',
    tagline: 'A small brand with a clear digital voice.',
    description: 'A coffee shop website concept built to practise content structure, responsive layouts and interactive frontend behaviour.',
    contribution: 'Applied core HTML, CSS and JavaScript to shape a simple, brand-led web experience.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    visual: 'coffee',
    insight: 'A practice build focused on visual hierarchy and approachable user experience.'
  }
];

const skillGroups = [
  { icon: Globe2, title: 'Frontend', level: 'Building interfaces', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { icon: Code2, title: 'Backend & APIs', level: 'Learning by building', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT basics'] },
  { icon: Database, title: 'Data', level: 'Working knowledge', skills: ['MongoDB', 'Mongoose', 'MySQL', 'Database design'] },
  { icon: Terminal, title: 'Programming', level: 'Academic practice', skills: ['C', 'Java', 'JavaScript', 'Python fundamentals'] },
  { icon: Network, title: 'Networks & systems', level: 'Academic foundation', skills: ['Cisco Packet Tracer', 'IPv4', 'Subnetting / VLSM', 'Routing & switching'] },
  { icon: Cpu, title: 'Tools & emerging tech', level: 'Exploring', skills: ['Git & GitHub', 'VS Code', 'Postman', 'Arduino', 'AWS AI learning'] }
];

const certificates = [
  { name: 'AI Fundamentals', issuer: 'LEARN · Lanka Education and Research Network', detail: 'Certificate of completion', image: '/certificates/ai-fundamentals.jpg', year: '2026' },
  { name: 'AWS Academy Graduate – Generative AI Foundations', issuer: 'AWS Academy', detail: '12 course hours · 06 August 2025', image: '/certificates/aws-generative-ai.jpg', year: '2025', link: 'https://www.credly.com/badges/824deac5-bc5b-4840-84a8-9b39a98b462b', linkLabel: 'Verify digital badge' },
  { name: 'C Essentials 1', issuer: 'Cisco Networking Academy · OpenEDG C++ Institute', detail: 'Statement of Achievement · May 2026', image: '/certificates/c-essentials.jpg', year: '2026', pdf: '/certificates/c-essentials-statement.pdf' },
  { name: 'Level 3 Diploma in Information Technology', issuer: 'Skills & Education Group Awards', detail: 'Issued 19 July 2024', image: '/certificates/level-3-diploma.jpg', year: '2024' },
  { name: 'Introduction to C', issuer: 'SoloLearn', detail: 'Issued 25 May 2025', image: '/certificates/sololearn-c.jpg', year: '2025' },
  { name: 'Advanced Certificate in Spoken English', issuer: 'British Way English Academy', detail: 'Distinction Pass', image: '/certificates/spoken-english.jpg', year: '—' },
  { name: 'Hacktoberfest Meetup Oluvil × SEUSL', issuer: 'Hacktoberfest 2026', detail: 'Certificate of attendance · 21 October 2026', image: '/certificates/hacktoberfest.jpg', year: '2026' },
  { name: 'My Sri Lanka Summit', issuer: 'Global Unites', detail: 'Certificate of participation · 2026', image: '/certificates/my-sri-lanka-summit.jpg', year: '2026' }
];

const moments = [
  { image: '/images/sri-lanka-unites-mentoring.jpg', title: 'Peer mentoring', caption: 'Sri Lanka Unites · Orientation programme', size: 'wide' },
  { image: '/images/sabra-recognition.jpg', title: 'A moment of recognition', caption: 'Celebrating progress', size: 'tall' },
  { image: '/images/sri-lanka-unites-group.jpg', title: 'Growing together', caption: 'Sri Lanka Unites · Community', size: '' },
  { image: '/images/my-sri-lanka-summit-ceremony.jpg', title: 'Young leaders, shared purpose', caption: 'My Sri Lanka Summit · 2026', size: 'wide' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [filter, setFilter] = useState('All');
  const [project, setProject] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [certIndex, setCertIndex] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [copied, setCopied] = useState(false);
  const [mentorFocus, setMentorFocus] = useState('listen');

  const nav = [['home','Home'],['story','About'],['education','Education'],['work','Projects'],['toolkit','Skills'],['impact','Leadership'],['proof','Certificates'],['contact','Contact']];
  const filters = ['All', 'Full-stack', 'Frontend', 'Programming', 'IoT & Hardware'];
  const filteredProjects = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.type === filter), [filter]);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    const update = () => {
      const sections = [...document.querySelectorAll('main section[id]')];
      let current = 'home';
      sections.forEach(section => { if (window.scrollY >= section.offsetTop - 150) current = section.id; });
      setActive(current);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--read-progress', `${max > 0 ? window.scrollY / max * 100 : 0}%`);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => { observer.disconnect(); window.removeEventListener('scroll', update); };
  }, [filter]);

  useEffect(() => {
    const close = e => { if (e.key === 'Escape') { setProject(null); setCertificate(null); setPhoto(null); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    if (!PROFILE.email) return;
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return <div className="site theme-dark">
    <div className="reading-progress" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S<span>.</span></span><span className="brand-name">SABRA SANOOR<small>PORTFOLIO / 2026</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Main navigation">
        {nav.map(([id,label]) => <a key={id} href={`#${id}`} className={active === id ? 'current' : ''} onClick={closeMenu}>{label}</a>)}
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-main">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot"/> CURIOUS BY NATURE. BUILDING BY PRACTICE.</div>
            <p className="hero-pretitle">HELLO, I'M SABRA —</p>
            <h1>Learning to<br/><span>build what</span><br/>matters<span className="hero-period">.</span></h1>
            <p className="hero-role">Information & Communication Technology undergraduate <span>at SEUSL</span></p>
            <p className="hero-intro">I turn classroom concepts into practical experiments — from full-stack web applications to programming, networks and community-led experiences. This is my work in progress, and I'm just getting started.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">Let's connect <ArrowDownRight size={17}/></a>
            </div>
            <div className="hero-socials">
              {PROFILE.linkedin.startsWith('https://') && <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>}
              {PROFILE.github.startsWith('https://') && <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>}
              <span>BASED IN SRI LANKA <i/> OPEN TO LEARNING & COLLABORATION</span>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-asterisk">✳</div>
            <div className="portrait-frame"><img src="/images/sabra-portrait.png" alt="Professional portrait of Sabra Sanoor"/><div className="portrait-overlay"><span>THE PERSON BEHIND THE CODE</span><strong>Sabra Sanoor</strong></div></div>
            <div className="portrait-caption"><span>01 / 07</span><span>STUDENT · BUILDER · COMMUNITY-MINDED</span></div>
            <div className="floating-card floating-card-top"><Sparkles size={16}/><span>ALWAYS<br/><b>EXPLORING</b></span></div>
            <div className="floating-card floating-card-bottom"><Code2 size={17}/><span>LEARN IT.<br/><b>BUILD IT.</b></span></div>
          </div>
        </div>
        <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="hero-line"/><span>01 — 07</span></div>
      </section>

      <div className="marquee" aria-label="Areas of interest"><div className="marquee-track">{Array.from({length:2}).map((_,i)=><React.Fragment key={i}><span>WEB DEVELOPMENT</span><b>✳</b><span>PROBLEM SOLVING</span><b>✳</b><span>EMERGING TECHNOLOGY</span><b>✳</b><span>COMMUNITY</span><b>✳</b><span>CONTINUOUS LEARNING</span><b>✳</b></React.Fragment>)}</div></div>

      <section className="learning-loop-section" aria-labelledby="learning-loop-title">
        <div className="learning-loop-head reveal"><span className="eyebrow">A SMALL PHILOSOPHY, A BIG DIFFERENCE</span><p>MY LEARNING LOOP <span>↘</span></p><h2 id="learning-loop-title">Curiosity becomes<br/><em>capability.</em></h2></div>
        <div className="learning-loop-track">
          <article className="loop-card reveal"><span className="loop-index">01 / DISCOVER</span><span className="loop-icon"><BookOpen size={20}/></span><h3>Start with a question.</h3><p>Understand the problem, explore the fundamentals and stay open to perspectives I haven't considered yet.</p><span className="loop-foot">ASK · OBSERVE · LEARN</span></article>
          <div className="loop-connector" aria-hidden="true"><ArrowRight size={18}/></div>
          <article className="loop-card reveal"><span className="loop-index">02 / EXPERIMENT</span><span className="loop-icon"><Code2 size={20}/></span><h3>Turn ideas into practice.</h3><p>Build a small version, test what happens, debug the rough edges and improve it one step at a time.</p><span className="loop-foot">BUILD · TEST · REFINE</span></article>
          <div className="loop-connector" aria-hidden="true"><ArrowRight size={18}/></div>
          <article className="loop-card reveal"><span className="loop-index">03 / SHARE</span><span className="loop-icon"><HeartHandshake size={20}/></span><h3>Grow with people.</h3><p>Share what I learn, listen to others and make room for teammates to contribute and grow together.</p><span className="loop-foot">SUPPORT · COLLABORATE · GROW</span></article>
        </div>
        <div className="learning-loop-note reveal"><span className="loop-note-dot"/> CURRENTLY EXPLORING <strong>Full-stack development</strong><i/> ALWAYS RETURNING TO <strong>Strong fundamentals</strong></div>
      </section>

      <section className="section story-section" id="story">
        <div className="section-index reveal"><span>01</span><span>THE STORY SO FAR</span></div>
        <div className="story-layout">
          <div className="story-heading reveal"><p className="eyebrow">NOT JUST A DEGREE. A DIRECTION.</p><h2>Technology is<br/>my <em>playground.</em></h2></div>
          <div className="story-copy reveal"><p className="story-lead">I'm Sabra Sanoor, a second-year Bachelor of Information and Communication Technology undergraduate at <strong>South Eastern University of Sri Lanka.</strong></p><p>I'm interested in how digital products are imagined, designed and built. My learning journey moves between frontend interfaces, backend logic, databases, programming and networking — and I enjoy connecting those pieces through practical work.</p><p>I believe growth happens when curiosity meets action: trying something unfamiliar, debugging what breaks, asking questions and learning with other people.</p><div className="story-signoff"><span>MY APPROACH</span><strong>Stay curious. Build thoughtfully. Share what you learn.</strong></div></div>
        </div>
        <div className="story-facts reveal">
          <div><span>01 / CURRENT CHAPTER</span><strong>Second-year</strong><small>BICT undergraduate</small></div>
          <div><span>02 / UNIVERSITY</span><strong>SEUSL</strong><small>Faculty of Technology</small></div>
          <div><span>03 / INTERESTS</span><strong>Build + explore</strong><small>Web · software · networks</small></div>
          <div><span>04 / BEYOND TECH</span><strong>People & purpose</strong><small>Mentoring · community</small></div>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-index reveal"><span>02</span><span>THE EDUCATION JOURNEY</span></div>
        <div className="section-title-row reveal"><div><p className="eyebrow">THE PLACES THAT SHAPED MY FOUNDATION</p><h2>From first lessons<br/>to <em>building technology.</em></h2></div><p className="section-aside">Every stage has added a new layer to how I learn, think and approach challenges.</p></div>
        <div className="education-timeline">
          <article className="education-step reveal"><div className="education-step-marker"><span>01</span></div><div className="education-step-card"><div className="education-step-meta"><span>SECONDARY EDUCATION</span><span>ORDINARY LEVEL</span></div><h3>An-Noor Central College</h3><p>Completed my Ordinary Level education, building the academic foundation for my next stage of learning.</p><div className="education-tags"><span>School education</span><span>Academic foundation</span></div></div></article>
          <article className="education-step reveal"><div className="education-step-marker"><span>02</span></div><div className="education-step-card"><div className="education-step-meta"><span>ADVANCED SECONDARY EDUCATION</span><span>ADVANCED LEVEL</span></div><h3>Kekunagolla National School</h3><p>Completed my Advanced Level studies, strengthening my interest in learning and preparing for university life.</p><div className="education-tags"><span>G.C.E. Advanced Level</span><span>Pre-university</span></div></div></article>
          <article className="education-step education-current reveal"><div className="education-step-marker"><GraduationCap size={19}/></div><div className="education-step-card"><div className="education-step-meta"><span>UNDERGRADUATE · CURRENT</span><span>2024 — 2028</span></div><h3>South Eastern University of Sri Lanka</h3><p>Bachelor of Information and Communication Technology (BICT), Faculty of Technology. Currently in my second year, developing practical skills across software development, databases, networking and emerging technologies.</p><div className="education-tags"><span>BICT</span><span>Faculty of Technology</span><span>Second year</span></div></div></article>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-index reveal"><span>02</span><span>SELECTED WORK / EXPERIMENTS</span></div>
        <div className="section-title-row reveal"><div><p className="eyebrow">FROM CLASSROOM TO REAL-WORLD THINKING</p><h2>Things I've<br/><em>put into motion.</em></h2></div><p className="section-aside">A selection of collaborative builds, academic projects and creative explorations. Each one taught me something different.</p></div>
        <div className="filter-row reveal"><span>FILTER PROJECTS</span>{filters.map(f=><button key={f} className={filter===f?'selected':''} onClick={()=>setFilter(f)}>{f}</button>)}</div>
        <div className="projects-grid">{filteredProjects.map((p,i)=><article className={`work-card work-${p.visual} reveal`} key={p.id} onClick={()=>setProject(p)} tabIndex={0} role="button" aria-label={`Open ${p.title} case study`} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setProject(p)}}}>
          <div className="work-art"><div className="work-art-top"><span>{p.label}</span><span>/{p.id}</span></div><div className="art-core">{p.visual==='dream'?<div className="dream-art"><span>DISCOVER</span><strong>CEYLON</strong><i/><small>PLAN · EXPLORE · EXPERIENCE</small></div>:p.visual==='parking'?<div className="terminal-art"><span>parking_fee.c</span><code>if (vehicle)<br/>{'{'} calculateFee(); {'}'}</code><b>RUNNING <i/></b></div>:p.visual==='iot'?<div className="iot-art"><div className="sensor-ring"><span>CM</span></div><i/><i/><i/><small>ULTRASONIC / SENSOR</small></div>:p.visual==='raadha'?<div className="raadha-art"><small>R A A D H A F A T H I</small><strong>R.</strong><span>GEMS · JEWELLERY</span></div>:<div className="coffee-art"><span>BALANCE</span><strong>coffee.</strong><small>FIND YOUR PAUSE</small></div>}</div><div className="work-art-bottom"><span>{p.type.toUpperCase()}</span><span>VIEW CASE STUDY <ArrowUpRight size={15}/></span></div></div>
          <div className="work-content"><div className="work-heading"><div><span className="work-number">PROJECT {p.id}</span><h3>{p.title}</h3></div><span className="work-arrow"><ArrowUpRight size={20}/></span></div><p className="work-tagline">{p.tagline}</p><p className="work-description">{p.description}</p><div className="work-tags">{p.stack.slice(0,4).map(t=><span key={t}>{t}</span>)}</div>{p.live&&<a className="live-link" href={p.live} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><span className="live-dot"/> LIVE PROJECT <ExternalLink size={13}/></a>}{p.repo&&<a className="live-link" href={p.repo} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><Github size={13}/> GITHUB REPOSITORY <ExternalLink size={13}/></a>}</div>
        </article>)}</div>
        <div className="work-footnote reveal"><span>NOTE / TRANSPARENCY</span><p>Team contributions are identified as collaborative work. Individual project details describe my own learning and implementation. Repository links will be added when the correct public URLs are confirmed.</p></div>
      </section>

      <section className="section toolkit-section" id="toolkit">
        <div className="section-index reveal"><span>03</span><span>THE TOOLKIT</span></div>
        <div className="section-title-row reveal"><div><p className="eyebrow">SKILLS THAT KEEP EVOLVING</p><h2>What I'm learning<br/><em>to work with.</em></h2></div><p className="section-aside">A practical snapshot of the technologies and concepts I've studied or used. Not a claim of mastery — a map of my current learning.</p></div>
        <div className="toolkit-grid">{skillGroups.map((g,i)=>{const Icon=g.icon;return <div className="toolkit-card reveal" key={g.title}><div className="toolkit-card-head"><span className="toolkit-icon"><Icon size={20}/></span><span>0{i+1}</span></div><h3>{g.title}</h3><p>{g.level}</p><div className="toolkit-tags">{g.skills.map(s=><span key={s}>{s}</span>)}</div></div>})}</div>
        <div className="learning-banner reveal"><div className="learning-symbol"><Zap size={23}/></div><div><span>CURRENT LEARNING MINDSET</span><strong>Understand the fundamentals. Build a small thing. Improve it. Repeat.</strong></div><div className="learning-stamp">IN<br/>PROGRESS <i>↗</i></div></div>
      </section>

      <section className="impact-section" id="impact">
        <div className="impact-inner">
          <div className="section-index reveal"><span>04</span><span>LEADERSHIP / COMMUNITY / PARTICIPATION</span></div>
          <div className="impact-heading reveal"><p className="eyebrow">THE WORK OUTSIDE THE SCREEN</p><h2>Good technology<br/>starts with <em>people.</em></h2><p>Learning to contribute, collaborate and lead is part of my development too. These experiences have helped me grow beyond the classroom.</p></div>
          <div className="summit-feature">
            <div className="summit-copy reveal"><span className="feature-label"><Award size={15}/> NATIONAL YOUNG LEADERSHIP</span><p className="summit-kicker">SELECTED PARTICIPANT · 2026</p><h3>My Sri Lanka<br/><em>Leaders Summit.</em></h3><p>Selected among Sri Lanka's top 200 young leaders from nearly 800 applicants and awarded a full scholarship to take part in the My Sri Lanka Leaders Summit 2026 — a national initiative centred on stronger communities and a united future.</p><div className="summit-metrics"><div><strong>200</strong><span>YOUNG LEADERS<br/>SELECTED</span></div><div><strong>~800</strong><span>APPLICANTS<br/>CONSIDERED</span></div></div><a className="text-link" href="#proof">Explore the certificate <ArrowUpRight size={15}/></a></div>
            <button className="summit-image reveal" onClick={()=>setPhoto({image:'/images/my-sri-lanka-summit-group.jpg',title:'My Sri Lanka Leaders Summit 2026'})}><img src="/images/my-sri-lanka-summit-group.jpg" alt="Group photograph from the My Sri Lanka Summit 2026"/><span className="image-label">MY SRI LANKA SUMMIT / 2026 <ArrowUpRight size={15}/></span></button>
          </div>
          <div className="impact-cards">
            <article className="impact-card reveal"><div className="impact-card-icon"><Users size={20}/></div><span className="impact-overline">MENTORING · SRI LANKA UNITES</span><h3>Helping juniors find their feet.</h3><p>Mentored one junior team during a three-day orientation programme. The team placed third among eight participating groups.</p><div className="impact-numbers"><div><strong>03</strong><small>DAYS</small></div><div><strong>08</strong><small>TEAMS</small></div><div><strong>03<sup>RD</sup></strong><small>PLACE</small></div></div></article>
            <article className="impact-card impact-card-accent reveal"><div className="impact-card-icon"><Code2 size={20}/></div><span className="impact-overline">DEVELOPER COMMUNITY</span><h3>Hacktoberfest Meetup<br/>Oluvil × SEUSL.</h3><p>Attended the Hacktoberfest 2026 meetup in person, connecting with the developer community and learning more about open-source culture.</p><div className="impact-card-bottom"><span>21 OCTOBER 2026</span><span>COMMUNITY PARTICIPATION ↗</span></div></article>
          </div>
          <div className="mentoring-heading reveal">
            <div><p className="eyebrow">PEER MENTORING / GROWING TOGETHER</p><h3>Progress is better<br/>when <em>we grow together.</em></h3></div>
            <p>Some of the most meaningful learning happens when we make space for others to learn alongside us. These moments are from my Sri Lanka Unites orientation experience.</p>
          </div>
          <div className="mentoring-gallery">
            <button className="mentoring-photo mentoring-photo-main reveal" onClick={()=>setPhoto({image:'/images/sri-lanka-unites-mentoring.jpg',title:'Peer mentoring · Sri Lanka Unites orientation'})}>
              <img src="/images/sri-lanka-unites-mentoring.jpg" alt="Sri Lanka Unites orientation programme group gathered for a peer mentoring session" loading="lazy"/>
              <span className="mentoring-photo-tag">01 / PEER MENTORING</span><span className="mentoring-photo-caption"><small>LISTEN · SUPPORT · ENCOURAGE</small><strong>Learning is a team effort.</strong></span><span className="mentoring-photo-open"><ScanLine size={18}/></span>
            </button>
            <button className="mentoring-photo mentoring-photo-together reveal" onClick={()=>setPhoto({image:'/images/sri-lanka-unites-group.jpg',title:'Growing together · Sri Lanka Unites community'})}>
              <img src="/images/sri-lanka-unites-group.jpg" alt="Sri Lanka Unites participants standing together after the orientation programme" loading="lazy"/>
              <span className="mentoring-photo-tag">02 / GROWING TOGETHER</span><span className="mentoring-photo-caption"><small>ONE COMMUNITY · MANY PERSPECTIVES</small><strong>Better, together.</strong></span><span className="mentoring-photo-open"><ScanLine size={18}/></span>
            </button>
            <button className="mentoring-photo mentoring-photo-award reveal" onClick={()=>setPhoto({image:'/images/sabra-award-milestone.jpg',title:'A milestone worth remembering · Personal recognition'})} aria-label="View personal recognition photograph in full size">
              <span className="award-photo-frame">
                <img src="/images/sabra-award-milestone.jpg" alt="Sabra smiling in a red hijab, wearing her medal and holding her recognition certificate; full portrait photograph" loading="lazy"/>
                <span className="mentoring-photo-tag">03 / PERSONAL MILESTONE</span>
              </span>
              <span className="mentoring-photo-caption">
                <small>EFFORT · GROWTH · GRATITUDE</small>
                <strong>A milestone worth remembering.</strong>
                <span className="award-story">A personal moment of recognition — celebrating the work behind the achievement, the lessons along the way, and the motivation to keep growing.</span>
                <span className="award-signoff">A reminder to keep showing up, learning and moving forward.</span>
              </span>
              <span className="mentoring-photo-open"><ScanLine size={18}/></span>
            </button>
          </div>
          <div className="mentoring-lab reveal">
            <div className="mentoring-lab-intro"><span>MY PEER-MENTORING NOTES</span><strong>A little knowledge shared can create a lot of confidence.</strong><small>Explore the values I bring to a collaborative learning space.</small></div>
            <div className="mentor-tabs" role="tablist" aria-label="Peer mentoring values">
              <button className={mentorFocus==='listen'?'active':''} onClick={()=>setMentorFocus('listen')} role="tab" aria-selected={mentorFocus==='listen'}>01 / Listen first</button>
              <button className={mentorFocus==='encourage'?'active':''} onClick={()=>setMentorFocus('encourage')} role="tab" aria-selected={mentorFocus==='encourage'}>02 / Encourage</button>
              <button className={mentorFocus==='grow'?'active':''} onClick={()=>setMentorFocus('grow')} role="tab" aria-selected={mentorFocus==='grow'}>03 / Grow together</button>
              <div className="mentor-tab-content" role="tabpanel">
                {mentorFocus==='listen'&&<><span>01 — UNDERSTAND BEFORE ADVISING</span><p>Make room for questions, different perspectives and the confidence to say, “I’m still learning too.”</p></>}
                {mentorFocus==='encourage'&&<><span>02 — PROGRESS OVER PERFECTION</span><p>Celebrate small steps, help teammates stay engaged and remind each other that every contribution matters.</p></>}
                {mentorFocus==='grow'&&<><span>03 — SHARE THE WIN</span><p>When one person improves, the whole group becomes stronger. The best outcomes are the ones we build together.</p></>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section credentials-section" id="proof">
        <div className="section-index reveal"><span>06</span><span>CERTIFICATES / VERIFIED MILESTONES</span></div>
        <div className="section-title-row reveal"><div><p className="eyebrow">PROOF OF CURIOSITY AND CONSISTENT LEARNING</p><h2>Milestones worth<br/><em>keeping.</em></h2></div><p className="section-aside">A rotating certificate showcase. Select any featured document to inspect the original certificate in detail.</p></div>
        <div className="credential-subhead reveal"><div><span>01 / ACADEMIC & PROFESSIONAL LEARNING</span><h3>Certificates & qualifications</h3></div><span>{certificates.length} DOCUMENTED MILESTONES</span></div>
        <div className="certificate-showcase reveal">
          <button className="cert-nav cert-prev" onClick={()=>setCertIndex((certIndex-1+certificates.length)%certificates.length)} aria-label="Previous certificate"><ChevronDown size={22}/></button>
          <div className="cert-stage">
            {[-1,0,1].map(offset=>{const idx=(certIndex+offset+certificates.length)%certificates.length;const c=certificates[idx];return <button key={c.name} className={`cert-feature cert-offset-${offset}`} onClick={()=>offset===0?setCertificate(c):setCertIndex(idx)} aria-label={`${offset===0?'Open':'Show'} ${c.name}`}>
              <div className="cert-feature-image"><img src={c.image} alt={c.name} loading="lazy"/><span className="cert-expand"><ScanLine size={17}/></span></div>
              <div className="cert-feature-info"><span>{String(idx+1).padStart(2,'0')} / {c.year}</span><h4>{c.name}</h4><p>{c.issuer}</p><small>{c.detail}</small></div>
            </button>})}
          </div>
          <button className="cert-nav cert-next" onClick={()=>setCertIndex((certIndex+1)%certificates.length)} aria-label="Next certificate"><ChevronDown size={22}/></button>
          <div className="cert-pagination"><span>{String(certIndex+1).padStart(2,'0')}</span><div><i style={{width:`${(certIndex+1)/certificates.length*100}%`}}/></div><span>{String(certificates.length).padStart(2,'0')}</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit orbit-a"/><div className="contact-orbit orbit-b"/>
        <div className="contact-inner reveal"><div className="section-index"><span>07</span><span>LET'S MAKE A CONNECTION</span></div><p className="eyebrow">GOOD THINGS BEGIN WITH A CONVERSATION</p><h2>Have something<br/>interesting in <em>mind?</em></h2><p className="contact-intro">I'd love to connect with fellow students, developers, mentors and people working on meaningful ideas. Let's exchange knowledge, explore opportunities and build something useful.</p><div className="contact-socials" aria-label="Contact and social profiles">{PROFILE.email&&<a className="contact-social-icon" href={`mailto:${PROFILE.email}`} aria-label={`Email ${PROFILE.email}`} title={`Email ${PROFILE.email}`}><Mail size={21}/></a>}{PROFILE.linkedin.startsWith('https://')?<a className="contact-social-icon" href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile" title="LinkedIn"><Linkedin size={21}/></a>:<span className="contact-social-icon is-unconfigured" role="img" aria-label="Add your LinkedIn profile URL in the PROFILE settings" title="Add your LinkedIn profile URL in PROFILE"><Linkedin size={21}/></span>}{PROFILE.github.startsWith('https://')?<a className="contact-social-icon" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile" title="GitHub"><Github size={21}/></a>:<span className="contact-social-icon is-unconfigured" role="img" aria-label="Add your GitHub profile URL in the PROFILE settings" title="Add your GitHub profile URL in PROFILE"><Github size={21}/></span>}</div><div className="contact-foot"><span><MapPin size={14}/> SRI LANKA</span><span>STUDENT · BUILDER · LIFELONG LEARNER</span></div></div>
      </section>
    </main>

    <footer className="footer"><a className="footer-logo" href="#home">S<span>.</span>S</a><span>DESIGNED WITH CURIOSITY · BUILT BY SABRA SANOOR · 2026</span><a href="#home">BACK TO TOP ↑</a></footer>
    <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18}/></a>

    {project&&<div className="modal-backdrop" onClick={()=>setProject(null)}><div className="case-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setProject(null)} aria-label="Close project details"><X/></button><span className="modal-eyebrow">PROJECT {project.id} / {project.type.toUpperCase()}</span><h2>{project.title}</h2><p className="case-tagline">{project.tagline}</p><p>{project.description}</p><div className="case-insight"><span>WHAT THIS PROJECT EXPLORES</span><p>{project.insight}</p></div><div className="case-contribution"><span>MY CONTRIBUTION / LEARNING</span><p>{project.contribution}</p></div><div className="case-stack">{project.stack.map(s=><span key={s}>{s}</span>)}</div>{project.live&&<a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Open live project <ExternalLink size={16}/></a>}{project.repo&&<a className="button button-primary" href={project.repo} target="_blank" rel="noreferrer">View GitHub repository <Github size={16}/></a>}<button className="modal-done" onClick={()=>setProject(null)}>CLOSE CASE STUDY <X size={14}/></button></div></div>}
    {certificate&&<div className="modal-backdrop" onClick={()=>setCertificate(null)}><div className="certificate-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setCertificate(null)} aria-label="Close certificate"><X/></button><div className="certificate-modal-image">{certificate.pdf?<iframe src={certificate.pdf} title={certificate.name}/>:<img src={certificate.image} alt={certificate.name}/>}</div><div className="certificate-modal-info"><span className="modal-eyebrow">CERTIFICATE / {certificate.year}</span><h2>{certificate.name}</h2><p>{certificate.issuer}</p><small>{certificate.detail}</small><div className="modal-certificate-links">{certificate.pdf&&<a href={certificate.pdf} target="_blank" rel="noreferrer">Open PDF <ExternalLink size={14}/></a>}{certificate.link&&<a href={certificate.link} target="_blank" rel="noreferrer">{certificate.linkLabel} <ExternalLink size={14}/></a>}</div></div></div></div>}
    {photo&&<div className="modal-backdrop photo-backdrop" onClick={()=>setPhoto(null)}><div className="photo-modal" role="dialog" aria-modal="true" aria-label={photo.title} onClick={e=>e.stopPropagation()}><div className="photo-modal-toolbar"><span>PHOTO VIEWER</span><button className="modal-close photo-modal-close" onClick={()=>setPhoto(null)} aria-label="Close photo viewer"><X size={19}/><span>Close</span></button></div><img src={photo.image} alt={photo.title}/><div className="photo-modal-caption"><span>PORTFOLIO MOMENT</span><strong>{photo.title}</strong></div></div></div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
