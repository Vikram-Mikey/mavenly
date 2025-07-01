import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";

const PROGRAMS = [
  { name: 'Full Stack Development', img: '/Full Stack Development.jpg' },
  { name: 'Data Analytics', img: '/Data Analytics.jpg' },
  { name: 'Cybersecurity', img: '/Cybersecurity.jpg' },
  { name: 'Digital Marketing', img: '/Digital Marketing.jpg' },
  { name: 'Finance Program', img: '/Finance Program.jpg' },
  { name: 'UI/UX Designing', img: '/UI Designing.jpg' },
  { name: 'AI', img: '/ai.jpg' },
  { name: 'Cloud Computing', img: '/cloud computing.jpeg' },
  { name: 'App Development', img: '/app development.webp' },
  { name: 'Embedded System', img: '/embedded system.jpeg' },
  { name: 'Auto Cad', img: '/AutoCAD.webp' },
  { name: 'Human Resource Management', img: '/mhr.webp' },
  { name: 'Medical Coding', img: '/medical coding.jpeg' },
  { name: 'Psychology', img: '/psychology.jpeg' },
  { name: 'Python', img: '/python.png' },
  { name: 'Java', img: '/java.png' },
  { name: 'C', img: '/c.png' },
  { name: 'Cpp', img: '/cpp.png' },
  { name: 'PowerBI', img: '/powerbi.png' },
  { name: 'Excel', img: '/excel.png' }
];

function Home() {
  const navigate = useNavigate();
  const logosRef = useRef(null);
   
  useEffect(() => {
    const logos = logosRef.current;
    if (logos) {
      logos.style.transition = 'transform 8s linear';
      logos.style.transform = 'translateX(-60%)';
      // Reset after animation for infinite effect (optional)
      // setTimeout(() => {
      //   logos.style.transition = 'none';
      //   logos.style.transform = 'translateX(0)';
      // }, 8000);
    }
  }, []);
  const [selectedType, setSelectedType] = useState('Technology');
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const scrollRef = useRef(null);
   useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const typePrograms = {
    Technology: [
      { src: '/ai.jpg', alt: 'AI', label: 'Artificial Intelligence', onClick: () => navigate('/ai') },
      { src: '/cloud computing.jpeg', alt: 'Cloud Computing', label: 'Cloud Computing', onClick: () => navigate('/cloud-computing') },
      { src: '/Cybersecurity.jpg', alt: 'Cybersecurity', label: 'Cybersecurity', onClick: () => navigate('/cybersecurity') },
      { src: '/Data Analytics.jpg', alt: 'Data Analytics', label: 'Data Analytics', onClick: () => navigate('/data-analytics') },
      { src: '/app development.webp', alt: 'App Development', label: 'App Development', onClick: () => navigate('/app-development') },
      { src: '/embedded system.jpeg', alt: 'Embedded System', label: 'Embedded System', onClick: () => navigate('/embedded-system') },
      { src: '/Full Stack Development.jpg', alt: 'Full Stack Development', label: 'Full Stack Development', onClick: () => navigate('/full-stack-development') },
    ],
    'Programming Language': [
      { src: '/python.png', alt: 'Python', label: 'Python', onClick: () => navigate('/python') },
      { src: '/java.png', alt: 'Java', label: 'Java', onClick: () => navigate('/java') },
      { src: '/c.png', alt: 'C', label: 'C', onClick: () => navigate('/c') },
      { src: '/cpp.png', alt: 'C++', label: 'C++', onClick: () => navigate('/cpp') },
      { src: '/powerbi.png', alt: 'Power BI', label: 'Power BI', onClick: () => navigate('/powerbi') },
      { src: '/excel.png', alt: 'Excel', label: 'Excel', onClick: () => navigate('/excel') },
    ],
    Business: [
      { src: '/Finance Program.jpg', alt: 'Finance Program', label: 'Finance Program', onClick: () => navigate('/finance-program') },
      { src: '/mhr.webp', alt: 'Human Resource Management', label: 'Human Resource', onClick: () => navigate('/human-resource-management') },
      { src: '/Digital Marketing.jpg', alt: 'Digital Marketing', label: 'Digital Marketing', onClick: () => navigate('/digital-marketing') },
    ],
    Medical: [
  { src: '/medical coding.jpeg', alt: 'Medical Coding', label: 'Medical Coding', onClick: () => navigate('/medical-coding') },
  { src: '/psychology.jpeg', alt: 'Psychology', label: 'Psychology', onClick: () => navigate('/psychology') },
],
    Design: [
  { src: '/UI Designing.jpg', alt: 'UI/UX Designing', label: 'UI/UX Design', onClick: () => navigate('/ui-designing') },
    ],
    Mechanics: [
      { src: '/AutoCAD.webp', alt: 'Auto Cad', label: 'Auto CAD', onClick: () => navigate('/auto-cad') },
    ],
    Freelancing: [
      { src: '/Digital Marketing.jpg', alt: 'freelancing Digital Marketing', label: 'Digital Marketing', onClick: () => navigate('/freelancing/Digital-Marketing') },
      { src: '/Finance Program.jpg', alt: 'freelancing Finance Program', label: 'Finance Program', onClick: () => navigate('/freelancing/Finance-Program') },
      { src: '/UI Designing.jpg', alt: 'freelancing UI/UX Designing', label: 'UI/UX Design', onClick: () => navigate('/freelancing/UI-Designing') },
      { src: '/Full Stack Development.jpg', alt: 'freelancing Full Stack Development', label: 'Full Stack Development', onClick: () => navigate('/freelancing/Full-Stack-Development') },
    ]
  };
  return (
    <>
      <div className="home-text-container with-image">
        <div className="home-text-content">
          <div style={{width: '15rem', margin: '0 auto 1.5rem auto', fontWeight: 'bold', fontSize: '0.7rem', color: '#4998da', background: '#fff', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1rem 0'}}>
            Empowering Your Career
          </div>
          <h1 className="highlight">
            Upskill to the <span style={{ fontWeight: 'bold', color: '#ff5757' }}>top 1%</span> Professional by Learning from Expert-Led Mentorship Program
          </h1>
          <p>Ready to learn new skills, switch careers, or level up? You’re in the right place! We empower learners with job-ready skills in technology, design, business, and marketing.</p>
          <div
            className="discover-more-btn"
            style={{marginTop: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#ff5757', background: '#fff', padding: '0.7rem 1.5rem', borderRadius: '8px', display: 'inline-block', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: '20rem', textAlign: 'center', cursor: 'pointer', marginBottom: 0}}
            onClick={() => navigate('/programs')}
          >
            Discover more
          </div>
        </div>
        <img src="/Brain-image.jpg" alt="Brain" className="home-brain-image" />
      </div>
      <section className="featured-programs-section" style={{marginTop: 0, textAlign: 'center', background: '#181818', padding: '2rem 0', boxShadow: '0 2px 16px rgba(0,0,0,0.04)'}}>
        <h2 style={{fontWeight: 'bold', color: '#4998da', fontSize: '2rem', marginBottom: '1rem', background: '#181818', border: 'none'}}>Featured Online Programs</h2>
        <p style={{fontSize: '1.1rem', color: '#fff', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>Master in-demand skills with our expert-led, hands-on programs designed to help you grow, earn, and succeed in the digital world!</p>
        <div style={{
          display: isMobile ? 'block' : 'flex',
          flexDirection: isMobile ? undefined : 'row',
          gap: '2rem',
          alignItems: 'stretch',
          justifyContent: 'center',
          width: '100%'
        }}>
          <div
            className="select-type-dev"
            style={{
              background: '#000',
              color: '#fff',
              borderRadius: '10px',
              padding: '2rem 1.5rem',
              minWidth: '260px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              marginRight: isMobile ? 0 : '1.5rem',
              marginLeft: isMobile ? 0 : '12rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '3px solid #4998da',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.2rem',
              height: isMobile ? 'auto' : '100%'
            }}
          >
            <div style={{
              fontSize: '1.2rem',
              marginBottom: '1.2rem',
              borderBottom: '2px solid #4998da',
              width: '100%',
              textAlign: 'center',
              paddingBottom: '0.7rem'
            }}>Select Type</div>
            {['Technology', 'Programming Language', 'Business', 'Medical', 'Design', 'Mechanics', 'Freelancing'].map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  border: '2px solid #4998da',
                  borderRadius: '8px',
                  padding: '0.7rem 0',
                  background: selectedType === type ? '#ff5757' : '#4998da',
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border 0.2s'
                }}
              >
                {type}
              </button>
            ))}
          </div>
        <div
            className="programs-container"
            style={{
              display: isMobile ? 'flex' : 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              gap: '2rem',
              alignItems: 'center',
              marginBottom: '2rem',
              background: '#181818',
              flex: 1,
              overflowX: isMobile ? 'auto' : 'visible',
              scrollBehavior: 'smooth',
              width: isMobile ? '100vw' : undefined,
              paddingBottom: isMobile ? '1rem' : 0
            }}
            ref={scrollRef}
          >{isMobile ? (
  <div
    className="mobile-programs-scroll"
    style={{
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      marginTop: '1.5rem',
      width: '100vw',
      padding: '0 1rem'
    }}
  >
     <div style={{ display: 'inline-flex', gap: '1rem' }}>
      {(typePrograms[selectedType] || []).map((program, idx) => (
        <div
          key={program.alt + '-scroll'}
          className="program-card"
          style={{
            width: isMobile ? '30rem' : '40rem', // Set width to 20rem for mobile
            minWidth: isMobile ? '30rem' : '40rem',
            maxWidth: isMobile ? '30rem' : '40rem',
            background: '#181818',
            border: '2px solid #4998da',
            borderRadius: '12px',
            transition: 'border-color 0.2s',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            marginRight: '1rem'
          }}
          onClick={program.onClick}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#ff5757'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#4998da'}
        >
          <img
            src={program.src}
            alt={program.alt}
            style={{
              width: '100%',
              height: '120px', // Set a fixed height for all images
              objectFit: 'cover',
              borderRadius: '12px 12px 0 0',
              marginBottom: '0.5rem'
            }}
          />
          <span style={{marginTop: '0.5rem', fontWeight: 'bold', color: '#fff'}}>{program.label}</span>
          <button
            className="enroll-now-btn"
            style={{
              marginTop: '1rem',
              width: '100%',
              padding: '0.6rem 0',
              background: '#4998da',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#ff5757'}
            onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
            onClick={e => { e.stopPropagation(); program.onClick(); }}
          >
            Enroll now
          </button>
        </div>
      ))}
    </div>
  </div>
) : (
  // Desktop view: grid/column
  (() => {
    const featured = typePrograms[selectedType] || [];
    const rows = [];
    for (let i = 0; i < featured.length; i += 3) {
      rows.push(featured.slice(i, i + 3));
    }
    return rows.map((row, rowIdx) => (
      <div key={rowIdx} style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
        {row.map((program) => (
          
// Example for both mobile and desktop:// 
<div
  key={program.alt + '-scroll'}
  className="program-card"
  style={{
    width: '15rem',
    minWidth: '15rem',
    maxWidth: '15rem',
    background: '#181818',
    border: '2px solid #4998da',
    borderRadius: '12px',
    transition: 'border-color 0.2s',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    marginRight: '1rem'
  }}
  onClick={program.onClick}
  onMouseEnter={e => e.currentTarget.style.borderColor = '#ff5757'}
  onMouseLeave={e => e.currentTarget.style.borderColor = '#4998da'}
>
  <img
    src={program.src}
    alt={program.alt}
    style={{
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '12px 12px 0 0',
      marginBottom: '0.5rem'
    }}
  />
  <span style={{marginTop: '0.5rem', fontWeight: 'bold', color: '#fff'}}>{program.label}</span>
  <button
    className="enroll-now-btn"
    style={{
      marginTop: '1rem',
      width: '100%',
      padding: '0.6rem 0',
      background: '#4998da',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.2s'
    }}
    onMouseEnter={e => e.currentTarget.style.background = '#ff5757'}
    onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
    onClick={e => { e.stopPropagation(); program.onClick(); }}
  >
    Enroll now
  </button>
</div>
        ))}
      </div>
    ));
  })()
)}
          </div>
          
        </div>
      </section>
    
      <section className="learners-info-section" style={{width: '100vw', minHeight: '100vh', margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw'}}>
  <div className="learners-info-content" style={{background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)', borderRadius: '12px', padding: '2rem 1.5rem', maxWidth: '1920px', margin: '0 auto', width: '95vw', color: '#fff'}}>
    <h2 style={{fontWeight: 'bold', color: '#fff', fontSize: '1.7rem', marginBottom: '1rem', textAlign: 'center'}}>Learners from 100+ Colleges have taken our mentorship program</h2>
    <p style={{fontSize: '1.1rem', color: '#fff', margin: 0, textAlign: 'center'}}>
      Learn from industry experts, work on real-world projects, earn valuable certifications, and take your career to the next level—all at your own pace!
    </p>
  </div>
  <div className="learners-college-marquee" style={{width: '95vw', overflow: 'hidden', marginTop: '2rem', background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)', borderRadius: '12px', padding: '0.5rem 0', marginBottom: '0.5rem'}}>
    <marquee behavior="scroll" direction="left" scrollamount="8" style={{height: '90px', background: 'transparent'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '2.5rem'}}>
        {Array.from({length: 10}).flatMap((_, repeatIdx) => ([
          'college Bh.webp',
          'college GR.webp',
          'college KG.webp',
          'college kpr.webp',
          'college Kumaraguru.webp',
          'college psg icon.webp',
          'college psgrkcw.webp',
          'college rathinam.webp',
          'college sns.webp',
          'college srikrishna.webp',
          'college vit.webp',
          'karpagam icon.jpeg',
        ].map((img, idx) => (
          <img key={repeatIdx + '-' + idx} src={`/college image/${img}`} alt={img.replace('.webp', '').replace('.jpeg', '')} style={{height: '80px', width: 'auto', borderRadius: '10px', background: '#fff', padding: '0.5rem', border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
        ))))}
      </div>
    </marquee>
  </div>
  <section className="start-learning-section" style={{width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000', padding: '1.2rem 0 2.5rem 0', margin: 0, marginBottom: 0}}>
    <div className="start-learning-content" style={{color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', maxWidth: '900px', textAlign: 'center', lineHeight: 1.5}}>
      <span style={{color: '#4998da'}}>Start your learning journey today! Enroll now in our online Program.</span><br/>
      Whether you’re a beginner, a working professional, or an entrepreneur, our Programs are designed to help you learn, grow, and stay ahead in your career!
      <div
        className="discover-more-btn"
        style={{marginTop: '2rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#ff5757', background: '#fff', padding: '0.7rem 1.5rem', borderRadius: '8px', display: 'inline-block', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: '20rem', textAlign: 'center', cursor: 'pointer'}}
        onClick={() => window.location.href='/programs'}
      >
        Discover more
      </div>
    </div>
  </section>

</section>
<section className="about-popular-classes-section" style={{width: '100vw', maxWidth: '100%', minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0, borderRadius: 0}}>
  <div className="about-popular-classes-content" style={{width: '95%', background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)', borderRadius: '16px', padding: '2rem 0'}}>
    <h2 style={{color: '#fff', fontWeight: 'bold', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem'}}>
      Our Popular Classes
    </h2>
<div
  className="popular-class-dev"
  style={{
    display: isMobile ? 'block' : 'flex',
    flexDirection: isMobile ? undefined : 'column',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    width: '100%',
  }}
>
  {isMobile ? (
    <div
      className="popular-programs-scroll"
      style={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        width: '100vw',
        padding: '0 1rem',
      }}
    >
      <div style={{ display: 'inline-flex', gap: '1rem' }}>
        {/* Place all your .program-card divs here for mobile scroll */}
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/Cybersecurity.jpg" alt="Cybersecurity" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Cybersecurity</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/Data Analytics.jpg" alt="Data Analytics" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Data Analytics</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/ai.jpg" alt="Artificial Intelligence" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Artificial Intelligence</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/embedded system.jpeg" alt="Embedded System" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Embedded System</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/app development.webp" alt="App Development" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>App Development</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/medical coding.jpeg" alt="Medical Coding" className="program-img" style={{ width: '100%', maxWidth: 180, borderRadius: 12, marginBottom: 16 }} />
          <div className="program-rating" style={{ marginBottom: 8 }}></div>
          Medical Coding
        </div>
      </div>
    </div>
  ) : (
    // Desktop view: keep your original layout
    <>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/Cybersecurity.jpg" alt="Cybersecurity" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Cybersecurity</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/Data Analytics.jpg" alt="Data Analytics" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Data Analytics</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/ai.jpg" alt="Artificial Intelligence" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Artificial Intelligence</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/embedded system.jpeg" alt="Embedded System" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>Embedded System</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/app development.webp" alt="App Development" style={{ width: '100%', borderRadius: '12px 12px 0 0', marginBottom: '0.5rem' }} />
          <span style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#fff' }}>App Development</span>
        </div>
        <div className="program-card" style={{ width: '15rem', minWidth: '15rem', maxWidth: '15rem', background: '#181818', border: '2px solid #fff', borderRadius: '12px', transition: 'border-color 0.2s', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <img src="/medical coding.jpeg" alt="Medical Coding" className="program-img" style={{ width: '100%', maxWidth: 180, borderRadius: 12, marginBottom: 16 }} />
          <div className="program-rating" style={{ marginBottom: 8 }}></div>
          Medical Coding
        </div>
      </div>
    </>
  )}
</div>
  </div>
</section>
<section className="why-choose-us-section" style={{width: '100vw', background: '#181818', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem 0'}}>
  <div className="why-choose-us-content" style={{width: '95vw', maxWidth: '900px', background: '#000', borderRadius: '16px', padding: '2.5rem 2rem', color: '#fff', textAlign: 'center'}}>
    <h2 style={{fontWeight: 'bold', fontSize: '2rem', marginBottom: '1.2rem', color: '#4998da'}}>Why Choose Us</h2>
    <p style={{fontSize: '1.3rem', fontWeight: 500, marginBottom: '1.2rem'}}>
      It's the bright one, it's the right one, that's education.
    </p>
    <p style={{fontSize: '1.1rem', margin: 0}}>
      Learn from industry experts, work on real projects, earn valuable certifications, and take your career to the next level—all at your own pace!
    </p>
    <div className="why-choose-us-features" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem'}}>
      <div className="why-feature live-sessions" style={{flex: '1 1 200px', minWidth: '200px', background: '#181818', borderRadius: '12px', padding: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
        <h3 style={{fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.7rem', color: '#4998da'}}>Engaging Live Sessions</h3>
        <p style={{margin: 0}}>Learn in real-time with interactive classes designed to keep you involved and inspired.</p>
      </div>
      <div className="why-feature certifications" style={{flex: '1 1 200px', minWidth: '200px', background: '#181818', borderRadius: '12px', padding: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
        <h3 style={{fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.7rem', color: '#4998da'}}>Industry-Recognized Certifications</h3>
        <p style={{margin: 0}}>Earn credentials that matter — valued by top recruiters and recognized across industries.</p>
      </div>
      <div className="why-feature mentorship" style={{flex: '1 1 200px', minWidth: '200px', background: '#181818', borderRadius: '12px', padding: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
        <h3 style={{fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.7rem', color: '#4998da'}}>Mentorship by Experts</h3>
        <p style={{margin: 0}}>Get guided by seasoned professionals who’ve been there, done that — and are here to help you grow.</p>
      </div>
      <div className="why-feature portfolio" style={{flex: '1 1 200px', minWidth: '200px', background: '#181818', borderRadius: '12px', padding: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
        <h3 style={{fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.7rem', color: '#4998da'}}>Build a Winning Portfolio</h3>
        <p style={{margin: 0}}>Work on real-world projects that showcase your skills and set you apart.</p>
      </div>
    </div>
  </div>
</section>
<section className="testimonial-section" style={{width: '100vw', background: '#000', display: 'flex', 'justify-content': 'center', alignItems: 'center', padding: '3rem 0'}}>
  <div className="testimonial-content" style={{width: '95vw', maxWidth: '1100px', background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)', borderRadius: '16px', padding: '2.5rem 2rem', color: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
    <h2 style={{fontWeight: 'bold', fontSize: '2rem', color: '#fff', marginBottom: '0.5rem', textAlign: 'center'}}>Testimonial</h2>
    <h3 style={{fontWeight: 'bold', fontSize: '1.3rem', color: '#4998da', marginBottom: '2.5rem', textAlign: 'center'}}>What alumni say about us</h3>
    <div className="testimonial-list" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
      <div className="testimonial-card" style={{flex: '1 1 320px', minWidth: '320px', background: '#181818', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
        <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.7rem', color: '#ff5757'}}>"Best Investment in My Career!"</div>
        <div style={{marginBottom: '0.7rem'}}>Review: Choosing Mavenly was the best decision I made for my career. The hands-on projects boosted my confidence, and the certifications helped me land multiple job offers. Worth every penny!</div>
        <div style={{fontWeight: 'bold', color: '#4998da'}}>Emily Rodriguez</div>
        <div style={{fontSize: '0.95rem', color: '#bbb'}}>Maluku</div>
      </div>
      <div className="testimonial-card" style={{flex: '1 1 320px', minWidth: '320px', background: '#181818', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
        <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.7rem', color: '#ff5757'}}>ByteSkill has been a game-changer for me.</div>
        <div style={{marginBottom: '0.7rem'}}>The course selection is fantastic, and the self-paced learning allowed me to balance my studies with work. I gained valuable skills, and now I'm thriving in my new IT job. Thank you, mavenly!</div>
        <div style={{fontWeight: 'bold', color: '#4998da'}}>Sarah Williams</div>
        <div style={{fontSize: '0.95rem', color: '#bbb'}}>Jakarta</div>
      </div>
      <div className="testimonial-card" style={{flex: '1 1 320px', minWidth: '320px', background: '#181818', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
        <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.7rem', color: '#ff5757'}}>Top-Notch Instructors and Supportive Community</div>
        <div style={{marginBottom: '0.7rem'}}>Review: Mavenly's instructors are exceptional, making complex topics easy to understand. The discussion forum helped me connect with fellow learners, and the support team was always responsive. Highly recommended!</div>
        <div style={{fontWeight: 'bold', color: '#4998da'}}>John Smith</div>
        <div style={{fontSize: '0.95rem', color: '#bbb'}}>Bandung</div>
      </div>
      <div className="testimonial-card" style={{flex: '1 1 320px', minWidth: '320px', background: '#181818', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
        <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.7rem', color: '#ff5757'}}>"Best Investment in My Career!"</div>
        <div style={{marginBottom: '0.7rem'}}>Review: Choosing Mavenly was the best decision I made for my career. The hands-on projects boosted my confidence, and the certifications helped me land multiple job offers. Worth every penny!</div>
        <div style={{fontWeight: 'bold', color: '#4998da'}}>Emily Rodriguez</div>
        <div style={{fontSize: '0.95rem', color: '#bbb'}}>Maluku</div>
      </div>
    </div>
  </div>
</section>
<section className="faq-section" style={{width: '100vw', background: '#181818', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem 0'}}>
  <div className="faq-content" style={{width: '95vw', maxWidth: '900px', background: '#000', borderRadius: '16px', padding: '2.5rem 2rem', color: '#fff', textAlign: 'center', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
    <h2 style={{fontWeight: 'bold', fontSize: '2rem', color: '#fff', marginBottom: '0.5rem'}}>Common Questions</h2>
    <h3 style={{fontWeight: 'bold', fontSize: '1.3rem', color: '#4998da', marginBottom: '1.5rem'}}>Frequently Asked Questions</h3>
    <p style={{fontSize: '1.1rem', margin: 0}}>
      Get answers to frequently asked questions about our bootcamps, enrollment, and learning experience.
    </p>
    <div className="faq-questions" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', justifyContent: 'center'}}>
      <div className="faq-col" style={{flex: '1 1 320px', minWidth: '320px', background: '#181818', borderRadius: '12px', padding: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textAlign: 'left'}}>
        <p style={{marginBottom: '1.2rem'}}><strong style={{color: '#4998da'}}>Where will my online classes take place?</strong><br/>All our Programs are 100% online. You can access them through your Mavenly account on any device—laptop, tablet, or mobile—anytime, anywhere! - Mostly on Google Meet or Zoom</p>
        <p style={{marginBottom: '1.2rem'}}><strong style={{color: '#4998da'}}>Do I get lifetime access to my Programs?</strong><br/>Yes! 🎉 Once you enroll in a Program, you get lifetime access, including any future updates to the content.</p>
        <p style={{marginBottom: '1.2rem'}}><strong style={{color: '#49998da'}}>How do I activate my Mavenly Program?</strong><br/>Once you purchase a Program, you’ll receive an email with login details. Just sign in to your Mavenly account, and you’re good to go!</p>
        <p style={{marginBottom: '1.2rem'}}><strong style={{color: '#49998da'}}>Can I retake a Program multiple times?</strong><br/>Absolutely! You can watch lessons as many times as you need and revise at your own pace.</p>
      </div>
      <div className="faq-col" style={{flex: '1 1 320px', minWidth: '320px', background: '#181818', borderRadius: '12px', padding: '1.5rem', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textAlign: 'left'}}>
        <p style={{marginBottom: '1.2rem'}}><strong style={{color: '#4998da'}}>How many Program can I enroll in per month?</strong><br/>There’s no limit! You can enroll in as many Programs as you like and learn at your own pace.</p>
        <p style={{marginBottom: '1.2rem'}}><strong style={{color: '#4998da'}}>What if I’m not available for a particular month?</strong><br/>No worries! Since all Programs are self-paced, you can start, pause, and resume whenever it’s convenient for you.</p>
        <p style={{marginBottom: '1.2rem'}}><strong style={{color: '#4998da'}}>Is my Program access valid for a lifetime?</strong><br/>Yes! Once you’ve enrolled, the Program stays permanently available in your Mavenly account.</p>
        <p style={{marginBottom: '1.2rem'}}><strong style={{color: '#4998da'}}>Will I receive certifications for all Programs?</strong><br/>Yes, after successfully completing a Program, you’ll receive a verified digital certificate, which you can showcase on LinkedIn, your resume, or job applications.</p>
      </div>
    </div>
  </div>
</section>
<section className=''>

</section>
    </>
  );
}

function About() {
  return (
    <div className='about page'>
      <section className="about-page-text" style={{
        width: '95vw',
        minHeight: '30vh',
        background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 0 2rem 0',
        margin: '0 auto',
        position: 'relative',
        top: 0,
        left: 0,
        zIndex: 1
      }}>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px', color: '#fff'}}>About</h2>
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem'}}>
          <p style={{fontSize: '1.3rem', maxWidth: '600px', textAlign: 'center', margin: 0, color: '#fff'}}>
            Join our community of learners and start your journey towards success.
          </p>
        </div>
      </section>
      <section className="about-page-section-content" style={{
        width: '95vw',
        minHeight: '40vh',
        background: '#000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3rem 2rem',
        margin: '2rem auto 0 auto',
        borderRadius: '18px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
      }}>
        <div classname='About-page-content' style={{flex: 1, maxWidth: '100%', color: '#fff'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.2rem', color: '#ff5757'}}>Who we are</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '1.2rem', fontWeight: 500}}>
            Empowering learners with industry-relevant skills for a brighter future.
          </p>
          <p style={{fontSize: '1rem', marginBottom: '1.5rem'}}>
            We are passionate about empowering learners with industry-relevant skills that drive success. Whether you’re a student, professional, or entrepreneur, our expert-led Programs help you learn, grow, and stay ahead in the digital era.
          </p>
          <h3 style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#4998da', marginBottom: '0.7rem'}}>Online Program & Webinar</h3>
          <p style={{fontSize: '1rem', marginBottom: '1.2rem'}}>
            Gain access to high-quality, self-paced Programs and live webinars led by industry experts, designed to provide real-world insights and hands-on learning.
          </p>
          <h3 style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#4998da', marginBottom: '0.7rem'}}>Expert Instructors</h3>
          <p style={{fontSize: '1rem', marginBottom: '1.2rem'}}>
            Our courses are led by seasoned educators and industry professionals who bring practical knowledge and real-world experience to every lesson. Their dedication ensures that students not only reach their learning objectives but also build the skills needed to thrive in their careers.
          </p>
          <h3 style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#4998da', marginBottom: '0.7rem'}}>Certifications & Career Mentorship</h3>
          <p style={{fontSize: '1rem'}}>
            Earn globally recognized certifications and get career guidance from industry professionals to boost your resume and unlock new career opportunities.
          </p>
        </div>
        <div className="about-image-container" style={{flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
          <img src="/about page employe.jpeg" alt="About Employees" style={{maxWidth: '400px', width: '100%', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)'}} />
        </div>
      </section>
      <section className="about-certification-section" style={{
        width: '95vw',
        minHeight: '18vh',
        background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1rem',
        margin: '2rem auto 0 auto',
        borderRadius: '18px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.2rem', textAlign: 'center'}}>
          What advantages does certification from MAVENLY offer ?
        </h2>
        <p style={{fontSize: '1.2rem', color: '#fff', maxWidth: '700px', textAlign: 'center', margin: 0, marginBottom: '2.5rem'}}>
          Learn from industry experts, work on real-world projects, earn valuable certifications, and take your career to the next level—all at your own pace!
        </p>
        <div  className='about-certification-section-dev' style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '2rem'}}>
          <div style={{flex: 1, background: 'rgba(0,0,0,0.10)', borderRadius: '12px', padding: '1.5rem', color: '#fff', minWidth: '220px', maxWidth: '340px'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff'}}>Dynamic interactive education:</h3>
            <ul style={{fontSize: '1.1rem', margin: 0, paddingLeft: '1.2rem'}}>
              <li>Top-tire Educators</li>
              <li>Real-time resolution</li>
              <li>Expert-guided mentoring sessions</li>
            </ul>
          </div>
          <div style={{flex: 1, background: 'rgba(0,0,0,0.10)', borderRadius: '12px', padding: '1.5rem', color: '#fff', minWidth: '220px', maxWidth: '340px'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff'}}>Industry Recognized Certification:</h3>
            <ul style={{fontSize: '1.1rem', margin: 0, paddingLeft: '1.2rem'}}>
              <li>MAVENLY Training Certificate</li>
              <li>Project Completion Certificate</li>
              <li>Letter of Recommendation</li>
            </ul>
          </div>
          <div  style={{flex: 1, background: 'rgba(0,0,0,0.10)', borderRadius: '12px', padding: '1.5rem', color: '#fff', minWidth: '220px', maxWidth: '340px'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff'}}>Why MAVENLY :</h3>
            <ul style={{fontSize: '1.1rem', margin: 0, paddingLeft: '1.2rem'}}>
              <li>Be Certified Professional</li>
              <li>Personalized Learning</li>
              <li>Community and Collaboration</li>
              <li>Excellence in Education</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about-values-section" style={{
         width: '95vw',
        minHeight: '40vh',
        background: '#000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3rem 2rem',
        margin: '2rem auto 0 auto',
        borderRadius: '18px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
      }}>
        <div classname='About-page-content-second-dev' style={{flex: 1, maxWidth: '100%', color: '#fff', display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
          <div>
            <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#ff5757', marginBottom: '0.7rem'}}>Our Value</h2>
            <p style={{fontSize: '1.1rem', margin: 0}}>
              Empowerment, collaboration, and lifelong learning-helping you grow, innovate, and succeed with education.
            </p>
          </div>
          <div>
            <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#4998da', marginBottom: '0.7rem'}}>Our Vision</h2>
            <p style={{fontSize: '1.1rem', margin: 0}}>
              At Mavenly, Our vision is to make education accessible, engaging, and transformative by offering flexible, relevant, and high-quality learning experiences that empower every learner.
            </p>
          </div>
          <div>
            <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#ff5757', marginBottom: '0.7rem'}}>Our Mission</h2>
            <p style={{fontSize: '1.1rem', margin: 0}}>
              Our mission is to inspire learners to unlock their full potential through personalized learning powered by cutting-edge technology.
            </p>
          </div>
          <div>
            <h2 style={{fontSize: '2rem', fontWeight: 'bold', color: '#4998da', marginBottom: '0.7rem'}}>Our Motto</h2>
            <p style={{fontSize: '1.1rem', margin: 0}}>
              “Building Skills for Tomorrow’s World.”
            </p>
          </div>
        </div>
        <div classname='About-page-image-second-dev' style={{flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
          <img src="/cloud computing.jpeg" alt="Cloud Computing" style={{maxWidth: '400px', width: '100%', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)'}} />
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <>
      <section className="contact-hero-section" style={{textAlign: 'center', padding: 0, background: '#000'}}>
        <div style={{
          background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)',
          borderRadius: 0,
          width: '95%',
          height: '25rem',
          minHeight: '25rem',
          margin: '0 auto',
          padding: '4rem 0',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <h2 style={{fontWeight: 'bold', color: '#fff', fontSize: '2.5rem', marginBottom: '1.5rem'}}>Contact</h2>
          <p style={{fontSize: '2rem', color: '#fff', margin: 0}}>
            Start the conversation to established good relationship and business.
          </p>
        </div>
      </section>
      <section className="contact-details-section">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Get in touch and let us know how we can help.<br />Whether it’s about courses, enrollment, or support, feel free to reach out—we’re here to help!</p>
          <div className="office">
            <span>Office</span><br />
            Come Say hello at our office:<br />
            451, Kamarajar Road, Peelamedu, Lakshmi Ammal Layout, Hopes College, Coimbatore- 641014, Tamil Nadu
          </div>
          <div className="email">
            <span style={{fontWeight: 'bold', color: '#4998da'}}>Email us</span><br />
            hr@mavenly.in
          </div>
          <div className="talk">
            <span>Let's Talk</span><br />
             +91 63808 06142
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <p>Have a question or need assistance? Fill out the form below, and our team will get back to you soon!</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Company" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

function Login() {
  return (
    <section className="page login">
      <div className="login-container">
        <h1 className="highlight">Hi, Welcome back!</h1>
        <form className="auth-form">
          <input type="email" placeholder="Email or Username" required />
          <input type="password" placeholder="Password" required />
          <div className="remember-row" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="rememberMe" style={{ marginRight: '0.5rem' }} />
              <label htmlFor="rememberMe" style={{ color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>Remember</label>
            </div>
            <span className="forgot-password" style={{ color: '#4998da', fontSize: '1rem', cursor: 'pointer', marginLeft: '1.5rem' }} onClick={() => alert('Forgot password functionality coming soon!')}>Forgot password?</span>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <span>Don't have an account? </span>
          <span className="signup-text" style={{color: '#981de8', cursor: 'pointer'}} onClick={() => window.location.href='/signup'}>Signup</span>
        </div>
      </div>
    </section>
  );
}

function Signup() {
  return (
    <section className="page signup">
      <div className="login-container">
        <h2 className="highlight" style={{marginBottom: '0.5rem'}}>SIGNUP</h2>
        <h1 className="highlight">Please Enter the Details.</h1>
        <form className="auth-form">
          <input type="text" placeholder="Fullname" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Contact Number" required />
          <input type="password" placeholder="Set Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Signup</button>
        </form>
        <div className="signup-link">
          <span>Already have an account? </span>
          <span className="signup-text" style={{color: '#981de8', cursor: 'pointer'}} onClick={() => window.location.href='/login'}>Login</span>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const navigate = useNavigate();
  // All programs to display, each with name, image, and navigation route
  const allPrograms = [
    { name: 'Full Stack Development', img: '/Full Stack Development.jpg', route: '/full-stack-development', rating: 5 },
    { name: 'Data Analytics', img: '/Data Analytics.jpg', route: '/data-analytics', rating: 4.5 },
    { name: 'Cybersecurity', img: '/Cybersecurity.jpg', route: '/cybersecurity', rating: 4.7 },
    { name: 'Digital Marketing', img: '/Digital Marketing.jpg', route: '/digital-marketing', rating: 4.8 },
    { name: 'Finance Program', img: '/Finance Program.jpg', route: '/finance-program', rating: 4.6 },
    { name: 'UI/UX Designing', img: '/UI Designing.jpg', route: '/ui-designing', rating: 4.9 },
    { name: 'Artificial Intelligence', img: '/ai.jpg', route: '/ai', rating: 4.7 },
    { name: 'Cloud Computing', img: '/cloud computing.jpeg', route: '/cloud-computing', rating: 4.7 },
    { name: 'App Development', img: '/app development.webp', route: '/app-development', rating: 4.8 },
    { name: 'Embedded System', img: '/embedded system.jpeg', route: '/embedded-system', rating: 4.7 },
    { name: 'Auto Cad', img: '/AutoCAD.webp', route: '/auto-cad', rating: 4.7 },
    { name: 'Human Resource Management', img: '/mhr.webp', route: '/human-resource-management', rating: 4.7 },
    { name: 'Medical Coding', img: '/medical coding.jpeg', route: '/medical-coding', rating: 4.7 },
    { name: 'Psychology', img: '/psychology.jpeg', route: '/psychology', rating: 4.7 },
    { name: 'Python', img: '/python.png', route: '/Python', rating: 4.7 },
    { name: 'Java', img: '/java.png', route: '/Java', rating: 4.7 },
    { name: 'C', img: '/c.png', route: '/C', rating: 4.7 },
    { name: 'Cpp', img: '/cpp.png', route: '/Cpp', rating: 4.7 },
    { name: 'PowerBI', img: '/powerbi.png', route: '/PowerBI', rating: 4.7 },
    { name: 'Excel', img: '/excel.png', route: '/Excel', rating: 4.7 }
  ];
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={{color:'#ffb400', fontSize:'1.3rem'}}>★</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" style={{color:'#ffb400', fontSize:'1.3rem'}}>☆</span>);
    }
    while (stars.length < 5) {
      stars.push(<span key={stars.length+100} style={{color:'#bbb', fontSize:'1.3rem'}}>★</span>);
    }
    return stars;
  };
  // Group programs into rows of 3
  const rows = [];
  for (let i = 0; i < allPrograms.length; i += 3) {
    rows.push(allPrograms.slice(i, i + 3));
  }
  return (
    <section className="page programs">
      <div className="programs-container" style={{display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center'}}>
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} style={{display: 'flex', gap: '2.5rem', justifyContent: 'center'}}>
            {row.map((program) => (
              <div
                className="program-card"
                key={program.name}
                onClick={() => navigate(program.route)}
                style={{ cursor: 'pointer', width: '180px', background: '#181818', border: '2px solid #4998da', borderRadius: '12px', transition: 'border-color 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#ff5757'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#4998da'}
              >
                {program.img && (
                  <img src={program.img} alt={program.name} className="program-img" style={{ width: '100%', maxWidth: 180, borderRadius: 12, marginBottom: 16 }} />
                )}
                <div className="program-rating" style={{marginBottom: 8}}>{renderStars(program.rating)}</div>
                {program.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FreelancingProgramDevSection({ className, imgSrc, imgAlt }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section
      className={className}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#181818',
        padding: '2.5rem 0',
        margin: '2rem 0',
        borderRadius: '18px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      }}
    >
      <div
        className="dev"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          width: isMobile ? '95vw' : '80%',
          maxWidth: 900,
          background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          padding: isMobile ? '1.2rem' : '2rem',
        }}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: isMobile ? '100%' : 250,
            height: isMobile ? 'auto' : 250,
            objectFit: 'cover',
            borderRadius: '12px',
            marginRight: isMobile ? 0 : '2.5rem',
            marginBottom: isMobile ? '1.5rem' : 0,
            background: '#eee',
            maxWidth: isMobile ? 350 : undefined,
            alignSelf: isMobile ? 'center' : 'flex-start',
          }}
        />
        <form
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            width: isMobile ? '100%' : undefined,
            maxWidth: isMobile ? 400 : undefined,
          }}
        >
          <input type="text" placeholder="Name" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="email" placeholder="Email" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="tel" placeholder="Phone Number" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="text" placeholder="Company Name" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="text" placeholder="Office Motive" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="text" placeholder="Preference" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <button type="submit" style={{ padding: '0.8rem', borderRadius: '8px', background: '#4998da', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}>Enquiry</button>
        </form>
      </div>
    </section>
  );
}

function FreelancingUIDesigning() {     
  return (
    <section className="page freelancing-UI-Designing">
      <FreelancingProgramDevSection className="freelancingUIDesigning-dev-section" imgSrc="/UI Designing.jpg" imgAlt="freelancingUIDesigning" />
    </section>
  );
}

function FreelancingDigitalMarketing() {
  return (
    <section className="page freelancing-Digital-Marketing">
      <FreelancingProgramDevSection className="freelancingDigitalMarketing-dev-section" imgSrc="/Digital Marketing.jpg" imgAlt="freelancingDigitalMarketing" />
    </section>
  );
}

function FreelancingFinanceProgram() {
  return (
    <section className="page freelancing-Finance-Program">
      <FreelancingProgramDevSection className="freelancingFinanceProgram-dev-section" imgSrc="/Finance Program.jpg" imgAlt="freelancingFinanceProgram" />
    </section>
  );
}

function FreelancingFullStackDevelopment() {
  return (
    <section className="page freelancing-Full-Stack-Development">
      <FreelancingProgramDevSection className="freelancingFullStackDevelopment-dev-section" imgSrc="/Full Stack Development.jpg" imgAlt="freelancingFullStackDevelopment" />
    </section>
  );
}

function ProgramDevSection({ className, imgSrc, imgAlt }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [cartMessage, setCartMessage] = useState('');
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section
      className={className}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#181818',
        padding: '2.5rem 0',
        margin: '2rem 0',
        borderRadius: '18px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      }}
    >
      <div
        className="dev"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          width: isMobile ? '95vw' : '80%',
          maxWidth: 900,
          background: 'linear-gradient(90deg, #ff5757 0%, #4998da 100%)',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          padding: isMobile ? '1.2rem' : '2rem',
        }}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: isMobile ? '100%' : 250,
            height: isMobile ? 'auto' : 250,
            objectFit: 'cover',
            borderRadius: '12px',
            marginRight: isMobile ? 0 : '2.5rem',
            marginBottom: isMobile ? '1.5rem' : 0,
            background: '#eee',
            maxWidth: isMobile ? 350 : undefined,
            alignSelf: isMobile ? 'center' : 'flex-start',
          }}
        />
        <form
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            width: isMobile ? '100%' : undefined,
            maxWidth: isMobile ? 400 : undefined,
          }}
        >
          <input type="text" placeholder="Name" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="email" placeholder="Email" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="tel" placeholder="Phone Number" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input type="text" placeholder="College/Company Name" required style={{ padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <button type="submit" style={{ padding: '0.8rem', borderRadius: '8px', background: '#4998da', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}>Enquiry</button>
        </form>
      </div>
  {/* Syllabus Section */}
  <section style={{ width: '80%', maxWidth: 900, background: '#000', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '2rem', marginTop: '2rem', marginBottom: '2rem' , flexDirection: 'column', alignItems: 'center',textAlign: 'center'}}>
    <h2 style={{ color: '#ff5757', fontWeight: 'bold', marginBottom: '1rem' }}>Syllabus</h2>
    
  </section>
  {/* Certify Your Success Section */}
  <section style={{ width: '80%', maxWidth: 900, background: '#000', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '2rem', marginBottom: '2rem',flexDirection: 'column', alignItems: 'center',textAlign: 'center'}}>
    <h2 style={{ color: '#4998da', fontWeight: 'bold', marginBottom: '1rem' }}>Certify your Success</h2>
   
  </section>
  {/* Pick Your Plan Section */}
  <section style={{ width: '80%', maxWidth: 900, background: '#000', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '2rem', marginBottom: '2rem' }}>
    <h2 style={{ color: '#ff5757', fontWeight: 'bold', marginBottom: '1rem',textAlign: 'center' }}>Pick Your Plan and Join 50k+ Happy Learners Today!</h2>
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div
  style={{
    flex: 1,
    minWidth: 220,
    maxWidth: 320,
    background: '#000',
    borderRadius: '12px',
    padding: '1.5rem',
    color: '#333',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    border: '2px solid transparent',
    transition: 'border 0.2s, box-shadow 0.2s'
  }}
  onMouseEnter={e => e.currentTarget.style.border = '2px solid #ff5757'}
  onMouseLeave={e => e.currentTarget.style.border = '2px solid #4998da'}
>
        <h3 style={{ color: '#4998da', fontWeight: 'bold', marginBottom: '0.7rem', textAlign: 'center' }}>Basic Plan</h3>
        <ul style={{ fontSize: '1rem', margin: 0, paddingLeft: '1.2rem',color: '#fff',listStyleType: 'none' }}>
          <li>Access to all modules</li>
          <li>Community support</li>
          <li>Certificate on completion</li>
          <li>$4,999.00</li>
        </ul>
        
        <button
  style={{
    marginTop: '1rem',
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    background: '#4998da',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s'
  }}
  onMouseDown={e => e.currentTarget.style.background = '#ff5757'}
  onMouseUp={e => e.currentTarget.style.background = '#4998da'}
  onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
  onClick={() => {
  const programName = imgAlt;
  const programObj = PROGRAMS.find(p => p.name === programName);
  if (!programObj) {
    setCartMessage('Program not found! Check the PROGRAMS array and imgAlt value.');
    return;
  }
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (cart.some(item => item.program === programObj.name && item.plan === 'Basic Plan')) {
    setCartMessage('The cart is already added');
    return;
  }
  cart.push({ program: programObj.name, plan: 'Basic Plan', img: programObj.img });
  localStorage.setItem('cart', JSON.stringify(cart));
  setCartMessage('Added to cart!');
  window.location.href = '/addcart';
}}
>
  Add Cart
</button>
      </div>
      <div
  style={{
    flex: 1,
    minWidth: 220,
    maxWidth: 320,
    background: '#000',
    borderRadius: '12px',
    padding: '1.5rem',
    color: '#333',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    border: '2px solid transparent',
    transition: 'border 0.2s, box-shadow 0.2s'
  }}
  onMouseEnter={e => e.currentTarget.style.border = '2px solid #ff5757'}
  onMouseLeave={e => e.currentTarget.style.border = '2px solid #4998da'}
>
        <h3 style={{ color: '#ff5757', fontWeight: 'bold', marginBottom: '0.7rem', textAlign: 'center' }}>Pro Plan</h3>
        <ul style={{ fontSize: '1rem', margin: 0, paddingLeft: '1.2rem',color: '#fff',listStyleType: 'none' }}>
          <li>Everything in Basic</li>
          <li>1:1 Mentorship</li>
          <li>Project feedback</li>
          <li>$9,999.00</li>
        </ul>
        
       <button
  style={{
    marginTop: '1rem',
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    background: '#ff5757',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s'
  }}
  onMouseDown={e => e.currentTarget.style.background = '#ff5757'}
  onMouseUp={e => e.currentTarget.style.background = '#4998da'}
  onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
  onClick={() => {
  const programName = imgAlt;
  const programObj = PROGRAMS.find(p => p.name === programName);
  if (!programObj) {
    setCartMessage('Program not found! Check the PROGRAMS array and imgAlt value.');
    return;
  }
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (cart.some(item => item.program === programObj.name && item.plan === 'Pro Plan')) {
    setCartMessage('The cart is already added');
    return;
  }
  cart.push({ program: programObj.name, plan: 'Pro Plan', img: programObj.img });
  localStorage.setItem('cart', JSON.stringify(cart));
  setCartMessage('Added to cart!');
  window.location.href = '/addcart';
}}
>
  Add Cart
</button>
      </div>
      <div
  style={{
    flex: 1,
    minWidth: 220,
    maxWidth: 320,
    background: '#000',
    borderRadius: '12px',
    padding: '1.5rem',
    color: '#333',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    border: '2px solid transparent',
    transition: 'border 0.2s, box-shadow 0.2s'
  }}
  onMouseEnter={e => e.currentTarget.style.border = '2px solid #ff5757'}
  onMouseLeave={e => e.currentTarget.style.border = '2px solid #4998da'}
>
        <h3 style={{ color: '#4998da', fontWeight: 'bold', marginBottom: '0.7rem', textAlign: 'center' }}>Premium Plan</h3>
        <ul style={{ fontSize: '1rem', margin: 0, paddingLeft: '1.2rem',color: '#fff',listStyleType: 'none' }}>
          <li>Everything in Pro</li>
          <li>Career guidance</li>
          <li>Exclusive webinars</li>
          <li>$14,999.00</li>
        </ul>
        
       <button
  style={{
    marginTop: '1rem',
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    background: '#4998da',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s'
  }}
  onMouseDown={e => e.currentTarget.style.background = '#ff5757'}
  onMouseUp={e => e.currentTarget.style.background = '#4998da'}
  onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
  onClick={() => {
  const programName = imgAlt;
  const programObj = PROGRAMS.find(p => p.name === programName);
  if (!programObj) {
    setCartMessage('Program not found! Check the PROGRAMS array and imgAlt value.');
    return;
  }
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (cart.some(item => item.program === programObj.name && item.plan === 'Premium Plan')) {
    setCartMessage('The cart is already added');
    return;
  }
  cart.push({ program: programObj.name, plan: 'Premium Plan', img: programObj.img });
  localStorage.setItem('cart', JSON.stringify(cart));
  setCartMessage('Added to cart!');
  window.location.href = '/addcart';
}}
>
  Add Cart
</button>
      </div>
    </div>
  </section>
</section>
  );
}

function Cybersecurity() {
  return (
    <section className="page cybersecurity">
      <ProgramDevSection className="cybersecurity-dev-section" imgSrc="/Cybersecurity.jpg" imgAlt="Cybersecurity" />
    </section>
  );
}
function DataAnalytics() {
  return (
    <section className="page data-analytics">
      <ProgramDevSection className="data-analytics-dev-section" imgSrc="/Data Analytics.jpg" imgAlt="Data Analytics" />
    </section>
  );
}
function DigitalMarketing() {
  return (
    <section className="page digital-marketing">
      <ProgramDevSection className="digital-marketing-dev-section" imgSrc="/Digital Marketing.jpg" imgAlt="Digital Marketing" />
    </section>
  );
}
function FinanceProgram() {
  return (
    <section className="page finance-program">
      <ProgramDevSection className="finance-program-dev-section" imgSrc="/Finance Program.jpg" imgAlt="Finance Program" />
    </section>
  );
}
function FullStackDevelopment() {
  return (
    <section className="page full-stack-development">
      <ProgramDevSection className="full-stack-development-dev-section" imgSrc="/Full Stack Development.jpg" imgAlt="Full Stack Development" />
    </section>
  );
}
function UIDesigning() {
  return (
    <section className="page ui-designing">
      <ProgramDevSection className="ui-designing-dev-section" imgSrc="/UI Designing.jpg" imgAlt="UI/UX Designing" />
    </section>
  );
}
function AI() {
  return (
    <section className="page ai">
      <ProgramDevSection className="ai-dev-section" imgSrc="/ai.jpg" imgAlt="AI" />
    </section>
  );
}
function CloudComputing() {
  return (
    <section className="page cloud-computing">
      <ProgramDevSection className="cloud-computing-dev-section" imgSrc="/cloud computing.jpeg" imgAlt="Cloud Computing" />
    </section>
  );
}
function AppDevelopment() {
  return (
    <section className="page app-development">
      <ProgramDevSection className="app-development-dev-section" imgSrc="/app development.webp" imgAlt="App Development" />
    </section>
  );
}
function EmbeddedSystem() {
  return (
    <section className="page embedded-system">
      <ProgramDevSection className="embedded-system-dev-section" imgSrc="/embedded system.jpeg" imgAlt="Embedded System" />
    </section>
  );
}
function AutoCAD() {
  return (
    <section className="page auto-cad">
      <ProgramDevSection className="auto-cad-dev-section" imgSrc="/AutoCAD.webp" imgAlt="Auto Cad" />
    </section>
  );
}
function HumanResourceManagement() {
  return (
    <section className="page human-resource-management">
      <ProgramDevSection className="human-resource-management-dev-section" imgSrc="/mhr.webp" imgAlt="Human Resource Management" />
    </section>
  );
}
function MedicalCoding() {
  return (
    <section className="page medical-coding">
      <ProgramDevSection className="medical-coding-dev-section" imgSrc="/medical coding.jpeg" imgAlt="Medical Coding" />
    </section>
  );
}
function Psychology() {
  return (
    <section className="page psychology">
      <ProgramDevSection className="psychology-dev-section" imgSrc="/psychology.jpeg" imgAlt="Psychology" />
    </section>
  );
}

function ArtificialIntelligence() {
  return (
    <section className="page ai">
      <ProgramDevSection className="ai-dev-section" imgSrc="/ai.jpg" imgAlt="Artificial Intelligence" />
    </section>
  );
}

function HumanResource() {
  return (
    <section className="page human-resource">
      <ProgramDevSection className="human-resource-dev-section" imgSrc="/mhr.webp" imgAlt="Human Resource" />
    </section>
  );
}

function Python() {
  return (
    <section className="page Python">
      <ProgramDevSection className="Python-dev-section" imgSrc="/python.png" imgAlt="Python" />
    </section>
  );
}

function Java() {
  return (
    <section className="page Java">
      <ProgramDevSection className="Java-dev-section" imgSrc="/java.png" imgAlt="Java" />
    </section>
  );
}

function C() {
  return (
    <section className="page C">
      <ProgramDevSection className="C-dev-section" imgSrc="/c.png" imgAlt="C" />
    </section>
  );
}

function Cpp() {
  return (
    <section className="page Cpp">
      <ProgramDevSection className="Cpp-dev-section" imgSrc="/cpp.png" imgAlt="cpp" />
    </section>
  );
}

function PowerBI() {
  return (
    <section className="page PowerBI">
      <ProgramDevSection className="PowerBI-dev-section" imgSrc="/powerbi.png" imgAlt="PowerBI" />
    </section>
  );
}

function Excel() {
  return (
    <section className="page Excel">
      <ProgramDevSection className="Excel-dev-section" imgSrc="/excel.png" imgAlt="Excel" />
    </section>
  );
}

function Navbar() {
  const [showPrograms, setShowPrograms] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null); // 'tech', 'business', etc.
  const [activeList, setActiveList] = useState({});
  const [programsActive, setProgramsActive] = useState(false);
  const [cartHasItems, setCartHasItems] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const typePrograms = {
  Technology: [
    { label: 'Artificial Intelligence', onClick: () => navigate('/ai') },
    { label: 'Cloud Computing', onClick: () => navigate('/cloud-computing') },
    { label: 'Cybersecurity', onClick: () => navigate('/cybersecurity') },
    { label: 'Data Analytics', onClick: () => navigate('/data-analytics') },
    { label: 'App Development', onClick: () => navigate('/app-development') },
    { label: 'Embedded System', onClick: () => navigate('/embedded-system') },
    { label: 'Full Stack Development', onClick: () => navigate('/full-stack-development') },
  ],
  'Programming Language': [
    { label: 'Python', onClick: () => navigate('/python') },
    { label: 'Java', onClick: () => navigate('/java') },
    { label: 'C', onClick: () => navigate('/c') },
    { label: 'C++', onClick: () => navigate('/cpp') },
    { label: 'Power BI', onClick: () => navigate('/powerbi') },
    { label: 'Excel', onClick: () => navigate('/excel') },
  ],
  Business: [
    { label: 'Finance Program', onClick: () => navigate('/finance-program') },
    { label: 'Human Resource', onClick: () => navigate('/human-resource-management') },
    { label: 'Digital Marketing', onClick: () => navigate('/digital-marketing') },
  ],
  Medical: [
    { label: 'Medical Coding', onClick: () => navigate('/medical-coding') },
    { label: 'Psychology', onClick: () => navigate('/psychology') },
  ],
  Design: [
    { label: 'UI/UX Design', onClick: () => navigate('/ui-designing') },
  ],
  Mechanics: [
    { label: 'Auto CAD', onClick: () => navigate('/auto-cad') },
  ],
  Freelancing: [
    { label: 'Digital Marketing', onClick: () => navigate('/freelancing/Digital-Marketing') },
    { label: 'Finance Program', onClick: () => navigate('/freelancing/Finance-Program') },
    { label: 'UI/UX Design', onClick: () => navigate('/freelancing/UI-Designing') },
    { label: 'Full Stack Development', onClick: () => navigate('/freelancing/Full-Stack-Development') },
  ]
};

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartHasItems(Array.isArray(cart) && cart.length > 0);
    // Listen for cart changes in other tabs/windows
    const handleStorage = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartHasItems(Array.isArray(updatedCart) && updatedCart.length > 0);
    };
    window.addEventListener('storage', handleStorage);
    // Listen for resize to detect mobile/desktop
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show dropdown when mouse enters, hide when leaves
  const handleProgramsMouseEnter = () => setShowPrograms(true);
  const handleProgramsMouseLeave = () => setShowPrograms(false);

  // Sidebar menu links for mobile
  const sidebarLinks = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
    <span
      style={{ color: '#4998da', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}
      onClick={() => { setSidebarOpen(false); navigate('/'); }}
    >Home</span>
    <span
      style={{ color: '#4998da', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}
      onClick={() => setProgramsActive(!programsActive)}
    >
      Programs
      <span style={{ float: 'right', color: '#4998da', fontWeight: 'normal', marginLeft: 8 }}>
        {programsActive ? '▲' : '▼'}
      </span>
    </span>
    {programsActive && (
      <div style={{ marginLeft: '1rem', marginTop: '0.5rem', marginBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {[
          'Technology',
          'Programming Language',
          'Business',
          'Medical',
          'Design',
          'Mechanics',
          'Freelancing'
        ].map(category => (
          <div key={category}>
            <span
              style={{
                color: '#4998da',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'block'
              }}
              onClick={() =>
                setActiveList(prev => ({
                  ...prev,
                  [category]: !prev[category]
                }))
              }
            >
              {category}
              <span style={{ float: 'right', color: '#4998da', fontWeight: 'normal' }}>
                {activeList[category] ? '▲' : '▼'}
              </span>
            </span>
            {activeList[category] && (
  <div style={{ marginTop: '0.3rem', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
    {(typePrograms[category] || []).map(program => (
  <span
    key={program.label}
    style={{
      color: '#4998da',
      fontSize: '1rem',
      cursor: 'pointer'
    }}
    onClick={() => {
  program.onClick();
  setSidebarOpen(false); // Close sidebar after click
  setProgramsActive(false); // Collapse Programs list after click
  setActiveList({}); // Collapse all categories after click
}}
  >
    {program.label}
  </span>
))}
  </div>
)}
          </div>
        ))}
      </div>
    )}
    <span style={{ color: '#4998da', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => { setSidebarOpen(false); navigate('/about'); }}>About</span>
    <span style={{ color: '#4998da', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => { setSidebarOpen(false); navigate('/contact'); }}>Contact</span>
    <span style={{ color: '#4998da', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => { setSidebarOpen(false); navigate('/login'); }}>Login/Signup</span>
  </div>
);
  // Sidebar overlay for mobile
  const sidebar = (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '70vw',
      maxWidth: 320,
      height: '100vh',
      background: '#000',
      zIndex: 2000,
      boxShadow: '2px 0 16px rgba(0,0,0,0.18)',
      padding: '2rem 1.5rem',
      transition: 'transform 0.3s',
      transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <span style={{ alignSelf: 'flex-end', fontSize: '2rem', color: '#fff', cursor: 'pointer', marginBottom: '1.5rem' }} onClick={() => setSidebarOpen(false)}>&times;</span>
      {sidebarLinks}
    </div>
  );
  const sidebarBackdrop = (
    <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1999 }} />
  );

  if (isMobile) {
    return (
      <nav className="navbar" style={{ position: 'relative', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <img src="/mavenly logo.png" alt="Mavenly Logo" className="nav-logo-img" style={{ height: 40 }} />
          <span style={{ fontSize: '2.2rem', color: '#4998da', cursor: 'pointer', padding: '0.5rem 1rem' }} onClick={() => setSidebarOpen(true)}>&#9776;</span>
        </div>
        {sidebarOpen && sidebarBackdrop}
        {sidebar}
        {/* Programs submenu for mobile sidebar */}
        {cartHasItems && (
  <img
    src="/Addcart.jpg"
    alt="Add to Cart"
    style={{
      position: 'fixed',
      top: 24,
      right: 24,
      width: 20,
      height: 20,
      zIndex: 3000,
      background: '#fff',
      borderRadius: '50%',
      boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
      cursor: 'pointer'
    }}
    onClick={() => navigate('/addcart')}
  />
)}
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <img src="/mavenly logo.png" alt="Mavenly Logo" className="nav-logo-img" />
      <div className="nav-links" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link
          to="/"
          onClick={e => location.pathname === '/' && e.preventDefault()}
          style={{
            color: '#4998da',
            cursor: 'pointer',
            padding: '0.5rem 1.5rem',
            border: '2px solid #4998da',
            borderRadius: '8px',
            background: '#000',
            display: 'inline-block',
            transition: 'color 0.2s'
          }}
          onMouseDown={e => e.currentTarget.style.color = '#ff5757'}
          onMouseUp={e => e.currentTarget.style.color = '#4998da'}
          onMouseLeave={e => e.currentTarget.style.color = '#4998da'}
        >
          Home
        </Link>
        <div
          className="nav-programs-dropdown"
          style={{ position: 'relative', display: 'inline-block' }}
          onMouseEnter={handleProgramsMouseEnter}
          onMouseLeave={handleProgramsMouseLeave}
        >
          <span
  style={{
    color: programsActive ? '#fff' : '#ff5757',
    cursor: 'pointer',
    padding: '0.5rem 1.5rem',
    border: '1px solid #4998da',
    borderRadius: '8px',
    background: '#000',
    display: 'inline-block',
    transition: 'color 0.2s'
  }}
  onClick={() => setProgramsActive(true)}
>
  Programs
</span>
          {showPrograms && (
            <ul style={{
              position: 'absolute',
              top: '110%',
              left: 0,
              background: '#000',
              border: '1.5px solid #4998da',
              borderRadius: '8px',
              minWidth: '170px',
              zIndex: 1000,
              padding: '0.5rem 0',
              margin: 0,
              listStyle: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
            }}>
              <li
                style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer', borderBottom: '1px solid #4998da', position: 'relative' }}
                onMouseEnter={() => setHoveredSubmenu('tech')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Technology
                {hoveredSubmenu === 'tech' && (
                  <ul style={{
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    background: '#000',
                    border: '1.5px solid #4998da',
                    borderRadius: '8px',
                    minWidth: '220px',
                    zIndex: 1100,
                    padding: '0.5rem 0',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                  }}>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/ai')}>Artificial Intelligence</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/cloud-computing')}>Cloud Computing</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/cybersecurity')}>Cybersecurity</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/data-analytics')}>Data Analytics</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/app-development')}>App Development</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/embedded-system')}>Embedded System</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/full-stack-development')}>Full Stack Development</li>
                  </ul>
                )}
              </li>
              <li
                style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer', borderBottom: '1px solid #4998da', position: 'relative' }}
                onMouseEnter={() => setHoveredSubmenu('programming')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Programming Language
                {hoveredSubmenu === 'programming' && (
                  <ul style={{
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    background: '#000',
                    border: '1.5px solid #4998da',
                    borderRadius: '8px',
                    minWidth: '220px',
                    zIndex: 1100,
                    padding: '0.5rem 0',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                  }}>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/python')}>Python</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/java')}>Java</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/c')}>C</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/cpp')}>C++</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/powerbi')}>Power BI</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/excel')}>Excel</li>
                  </ul>
                )}
              </li>
              <li
                style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer', borderBottom: '1px solid #4998da', position: 'relative' }}
                onMouseEnter={() => setHoveredSubmenu('business')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Business
                {hoveredSubmenu === 'business' && (
                  <ul style={{
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    background: '#000',
                    border: '1.5px solid #4998da',
                    borderRadius: '8px',
                    minWidth: '220px',
                    zIndex: 1100,
                    padding: '0.5rem 0',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                  }}>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/finance-program')}>Finance Program</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/human-resource-management')}>Human Resource</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/digital-marketing')}>Digital Marketing</li>
                  </ul>
                )}
              </li>
              <li
                style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer', borderBottom: '1px solid #4998da', position: 'relative' }}
                onMouseEnter={() => setHoveredSubmenu('medical')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Medical
                {hoveredSubmenu === 'medical' && (
                  <ul style={{
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    background: '#000',
                    border: '1.5px solid #4998da',
                    borderRadius: '8px',
                    minWidth: '220px',
                    zIndex: 1100,
                    padding: '0.5rem 0',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                  }}>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/medical-coding')}>Medical Coding</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/psychology')}>Psychology</li>
                  </ul>
                )}
              </li>
              <li
                style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer', borderBottom: '1px solid #4998da', position: 'relative' }}
                onMouseEnter={() => setHoveredSubmenu('design')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Design
                {hoveredSubmenu === 'design' && (
                  <ul style={{
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    background: '#000',
                    border: '1.5px solid #4998da',
                    borderRadius: '8px',
                    minWidth: '220px',
                    zIndex: 1100,
                    padding: '0.5rem 0',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                  }}>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/ui-designing')}>UI/UX Design</li>
                  </ul>
                )}
              </li>
              <li
                style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer', borderBottom: '1px solid #4998da', position: 'relative' }}
                onMouseEnter={() => setHoveredSubmenu('mechanics')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Mechanics
                {hoveredSubmenu === 'mechanics' && (
                  <ul style={{
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    background: '#000',
                    border: '1.5px solid #4998da',
                    borderRadius: '8px',
                    minWidth: '220px',
                    zIndex: 1100,
                    padding: '0.5rem 0',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                  }}>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/auto-cad')}>Auto CAD</li>
                  </ul>
                )}
              </li>
              <li
                style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer', borderBottom: '1px solid #4998da', position: 'relative' }}
                onMouseEnter={() => setHoveredSubmenu('freelancing')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Freelancing
                {hoveredSubmenu === 'freelancing' && (
                  <ul style={{
                    position: 'absolute',
                    top: 0,
                    left: '100%',
                    background: '#000',
                    border: '1.5px solid #4998da',
                    borderRadius: '8px',
                    minWidth: '220px',
                    zIndex: 1100,
                    padding: '0.5rem 0',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                  }}>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/freelancing/Digital-Marketing')}>Digital Marketing</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/freelancing/Finance-Program')}>Finance Program</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/freelancing/UI-Designing')}>UI/UX Design</li>
                    <li style={{ padding: '0.7rem 1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => navigate('/freelancing/Full-Stack-Development')}>Full Stack Development</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
               </div>
        <Link to="/about" onClick={e => location.pathname === '/about' && e.preventDefault() } style={{
          color:  '#4998da',
          cursor: 'pointer',
          padding: '0.5rem 1.5rem',
          border: '2px solid #4998da',
          borderRadius: '8px',
          background: '#000',
          display: 'inline-block'
        }}>About</Link>
        <Link style={{
          color:  '#4998da',
          cursor: 'pointer',
          padding: '0.5rem 1.5rem',
          border: '2px solid #4998da',
          borderRadius: '8px',
          background: '#000',
          display: 'inline-block'
        }} to="/contact" onClick={e => location.pathname === '/contact' && e.preventDefault()} >Contact</Link>
        <Link to="/login" style={{
          color:  '#4998da',
          cursor: 'pointer',
          padding: '0.5rem 1.5rem',
          border: '2px solid #4998da',
          borderRadius: '8px',
          background: '#000',
          display: 'inline-block'
        }} onClick={e => location.pathname === '/login' && e.preventDefault()} >Login/Signup</Link>
        {cartHasItems && (
          <img
            src="/Addcart.jpg"
            alt="Add to Cart"
            style={{ width: 30, height: 30, marginLeft: '1.5rem', cursor: 'pointer', verticalAlign: 'middle' }}
            onClick={() => navigate('/addcart')}
          />
        )}
      </div>
    </nav>
  );
}

function RefundCancellationPolicy() {
  return (
    <section className="refund-cancellation-section" style={{
      width: '100%',
      minHeight: '60vh',
      background: '#000',
      padding: '3rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      margin: ' 0'
    }}>
      <div className="refund-title-dev" style={{
        width: '90%',
        maxWidth: 700,
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#4998da',
          fontWeight: 'bold',
          fontSize: '2.2rem',
          marginBottom: '1.2rem'
        }}>
          Refund/Cancellation Policy
        </h2>
      </div>
      <div className="refund-content-dev" style={{
        width: '90%',
        maxWidth: 700,
        background: '#000',
        borderRadius: '12px',
        padding: '2rem',
        color: '#fff',
        fontSize: '1.1rem',
        lineHeight: 1.7,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Please read the following terms carefully as they govern our refund policy.<br /><br />
        <strong style={{ color: '#4998da' }}>Workshops:</strong><br />
        No refunds or credits will be granted against payments related to workshops.<br /><br />
        <strong style={{ color: '#4998da' }}>Courses:</strong><br />
        We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling.<br />
        You may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers.
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-dev">
          <img src="/admin-ajax.png" alt="Dev" className="footer-dev-img" />
          <div className="footer-dev-content">
            <div className="footer-help-title">Need help?</div>
            <div className="footer-help-text">Learn. Grow. Succeed. Your future starts here with Mavenly!</div>
            <div className="footer-help-contact">Have any questions or need assistance? Our team is always here to help—reach out to us</div>
          </div>
          <div className="footer-dev-contact-button">
            <span className="footer-contactus-label" style={{cursor: 'pointer'}} onClick={() => window.location.href='/contact'}>Contact Us</span>
          </div>
        </div>
        <section className="footer-contact-section" style={{
    width: '100%',
    background: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '2.5rem 4vw',
    borderTop: '1px solid #eee',
    flexWrap: 'wrap',
    gap: '2rem',
    boxSizing: 'border-box'
  }}>
    <div className="footer-contact-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '2.5rem', minWidth: 220 }}>
      <img src="/mavenly logo.png" alt="Mavenly Logo" style={{ display: 'block', width: '100px', height: '100px', objectFit: 'contain' }} />
      <div style={{ marginTop: '1.5rem', fontWeight: 'bold', fontSize: '1.1rem', color: '#4998da', textAlign: 'center' }}>
        Come say hello at our office:
      </div>
      <div style={{ marginTop: '0.7rem', color: '#fff', textAlign: 'center', fontSize: '1rem', lineHeight: 1.6 }}>
        451, Kamarajar Road, Peelamedu,<br/> Lakshmi Ammal Layout, Hopes College,<br/> Coimbatore- 641014, Tamil Nadu<br />
        hr@mavenly.in<br />
        +91 63808 06142
      </div>
    </div>
    <div className="footer-contact-center" style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '3rem', color: '#fff', justifyContent: 'center', flexWrap: 'wrap', minWidth: 300 }}>
      <div style={{ minWidth: 150 }}>
        <div style={{ color: '#4998da',fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'left' }}>Services</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>E-Learning</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Bootcamp</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Webinar</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Certifications</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Mentoring</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Corporate Services</div>
      </div>
      <div style={{ minWidth: 150 }}>
        <div style={{color: '#4998da', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'left' }}>Company</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>About us</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Leadership</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Careers</div>
        <div style={{ marginBottom: '0.5rem', textAlign: 'left', cursor: 'pointer' }} onClick={() => window.location.href='/refund-cancellation-policy'}>Refund/Cancellation Policy</div>
      </div>
    </div>
    <div className="footer-contact-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 220, maxWidth: 320, width: '100%' }}>
  <img
    src="/we-are-registered.webp"
    alt="We are registered"
    style={{
      width: 120,
      height: 120,
      objectFit: 'contain',
      marginBottom: '1rem',
      borderRadius: '12px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}
  />
  <div style={{ color: '#4778da', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem', textAlign: 'left', width: '100%' }}>
    Mavenly Edutech Pvt. Ltd.
  </div>
  <div style={{ color: '#fff', fontSize: '1rem', marginBottom: '1.2rem', textAlign: 'left', maxWidth: 320, width: '100%' }}>
    Sign up our newsletter to get update information, news and free insight.
  </div>
  <form style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', maxWidth: 320 }} onSubmit={e => e.preventDefault()}>
    <input
      type="email"
      placeholder="Your email"
      required
      style={{
        flex: 1,
        padding: '0.6rem',
        borderRadius: '8px 0 0  8px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        outline: 'none',
        minWidth: 0
      }}
    />
    <button
      type="submit"
      style={{
        padding: '0.6rem 1.1rem',
        borderRadius: '0 8px 8px 0',
        background: '#ff5757',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }}
    >
      Signup
    </button>
  </form>
</div>
</section>
        <p>&copy; {new Date().getFullYear()} Mavenly. All rights reserved.</p>
      </footer>
    </>
  );
}
function WhatsAppButton() {
  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 2000 }}>
      <img
        src="/WhatsApp.svg.png"
        alt="WhatsApp Chat"
        style={{ width: 60, height: 60, cursor: 'pointer', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
        onClick={() => window.open('https://wa.me/916380806142', '_blank')}
      />
    </div>
  );
}


function AddCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Helper to get price by plan
  const getPlanPrice = (plan) => {
    if (plan === 'Basic Plan') return 4999;
    if (plan === 'Pro Plan' ) return 9999;
    if (plan === 'Premium Plan' || plan === 'Primum Plan') return 14999;
    return 0;
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);
    // Calculate total
    let sum = 0;
    cartData.forEach(item => {
      sum += getPlanPrice(item.plan);
    });
    setTotal(sum);
  }, []);

  const removeFromCart = idxToRemove => {
    const updatedCart = cart.filter((_, idx) => idx !== idxToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Recalculate total
    let sum = 0;
    updatedCart.forEach(item => {
      sum += getPlanPrice(item.plan);
    });
    setTotal(sum);
  };

  return (
    <section className="addcart-section" style={{ width: '100%', minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '3rem 0',background: '#000'  }}>
      <div  className="addcart-dev-left" style={{width: '50%', marginBottom: '1rem' ,border: '2px solid #4998da', borderRadius: '12px', padding: '1rem'}}>
        <div style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
          <div style={{fontWeight: 'bold', fontSize: '1.3rem', color: '#4998da'}}>Product</div>
          <div style={{fontWeight: 'bold', fontSize: '1.3rem', color: '#4998da'}}>Total</div>
        </div>
        <hr style={{border: 'none', borderTop: '2px solid #4998da', margin: 0, marginBottom: '1rem'}} />
        {cart && cart.length > 0 ? (
  cart.map((item, idx) => (
    <div key={idx} style={{
       width: '100%' ,
      display: 'flex',
      alignItems: 'center',
      background: '#181818',
      border: '1px solid #4998da',
      borderRadius: '12px',
      margin: '0.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      padding: '1rem',
      gap: '1.2rem',
      minWidth: 280
    }}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src={item.img} alt={item.program} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: '10px', background: '#eee', marginBottom: 8 }} />
        <button
          style={{ background: '#181818', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1rem', cursor: 'pointer', marginTop: 8 }}
          onClick={() => removeFromCart(idx)}
        >
          Remove
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.1rem', marginBottom: 4 }}>{item.program}</div>
        <div style={{ color: '#ff5757', fontWeight: 500, fontSize: '1rem' }}>{item.plan}</div>
      </div>
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', minWidth: 90, textAlign: 'right' }}>₹{getPlanPrice(item.plan).toLocaleString()}</div>
    </div>
  ))
) : (
  <div style={{ color: '#fff', fontSize: '1.1rem', textAlign: 'center' }}>No items in cart.</div>
)}
      </div>
      <div className="addcart-dev-right" style={{ flex: 1, background: '#000', borderRadius: '16px', padding: '2rem', minHeight: '300px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ color: '#ff5757', marginBottom: '1.5rem' }}>Cart Totals</h2>
        <div style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#fff' }}>Total Programs: {cart.length}</div>
        <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4998da', marginBottom: '2rem' }}>Total: ₹{total.toLocaleString()}</div>
        <button
          style={{
            width: '100%',
            padding: '1rem',
            borderRadius: '8px',
            background: '#4998da',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseDown={e => e.currentTarget.style.background = '#ff5757'}
          onMouseUp={e => e.currentTarget.style.background = '#4998da'}
          onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
          onClick={() => alert('Proceeding to checkout...')}
        >
          Checkout
        </button>
      </div>
    </section>
  );
}



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            {/* <ContactInfoSection /> Removed so contact info only appears on Contact page */}
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/finance-program" element={<FinanceProgram />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/ui-designing" element={<UIDesigning />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/embedded-system" element={<EmbeddedSystem />} />
        <Route path="/auto-cad" element={<AutoCAD />} />
        <Route path="/human-resource-management" element={<HumanResourceManagement />} />
        <Route path="/medical-coding" element={<MedicalCoding />} />
        <Route path="/psychology" element={<Psychology />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/human-resource" element={<HumanResource />} />
        <Route path="/Python" element={<Python />} />
        <Route path="/Java" element={<Java />} />
        <Route path="/C"  element={<C />} />
        <Route path="/Cpp" element={<Cpp />} />
        <Route path="/PowerBI"  element={<PowerBI />} />
        <Route path="/Excel" element={<Excel />} />
        <Route path="/freelancing/Digital-Marketing" element={<FreelancingDigitalMarketing />} />
        <Route path="/freelancing/Finance-Program" element={<FreelancingFinanceProgram />} />
        <Route path="/freelancing/UI-Designing" element={<FreelancingUIDesigning />} />
        <Route path="/freelancing/Full-Stack-Development" element={<FreelancingFullStackDevelopment />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <SpeedInsights/>
    </Router>
  );
}

export default App;
