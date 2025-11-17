import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedProjects = () => {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate('/projects#p19');
  };
  return (
    <div style={styles.container}>
      <div style={styles.featuredSection}>
        {/* Content Side */}
        <div style={styles.contentSide}>
          <h2 style={styles.heading}>Featured Projects</h2>
        </div>

        {/* Image/Visual Side */}
        <div style={styles.imageSide}>
          <div style={styles.overlay}>
            <div style={styles.glowCircle1}></div>
            <div style={styles.glowCircle2}></div>
            <div style={styles.techPattern}>
              <svg width="100%" height="100%" style={styles.svg}>
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(64,224,208,0.6)" />
                    <stop offset="100%" stopColor="rgba(138,43,226,0.4)" />
                  </linearGradient>
                </defs>
                <path
                  d="M50,150 Q200,50 350,150 T650,150"
                  stroke="url(#lineGrad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M0,200 Q150,100 300,200 T600,200"
                  stroke="rgba(100,200,255,0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="120" r="8" fill="rgba(64,224,208,0.8)">
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="450" cy="180" r="6" fill="rgba(138,43,226,0.7)">
                  <animate
                    attributeName="r"
                    values="6;10;6"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Project Card */}
      <div style={styles.projectCard}>
        <div style={styles.projectContent}>
          <h3 style={styles.projectTitle}>
            Geophysical Survey (ERT Survey) at Brahmadiha Coal Mine (BCM)
          </h3>
          <p style={styles.projectSubtitle}>Giridih District, Jharkhand</p>
          <button onClick={handleViewProject} style={styles.projectBtn}>
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    background: '#f5f5f5',
    paddingBottom: '40px',
  },
  featuredSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '280px',
    overflow: 'hidden',
  },
  contentSide: {
    background: 'linear-gradient(135deg, #0a4d3c 0%, #1a5f4e 50%, #2d7a65 100%)',
    padding: '50px 60px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: 'white',
  },
  heading: {
    fontSize: '42px',
    fontWeight: '700',
    marginBottom: '0',
    letterSpacing: '-0.5px',
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.5',
    opacity: '0.95',
    maxWidth: '450px',
    margin: 0,
  },
  imageSide: {
    background: 'linear-gradient(135deg, rgba(13, 110, 139, 0.95) 0%, rgba(26, 95, 78, 0.9) 30%, rgba(45, 122, 101, 0.85) 60%, rgba(138, 43, 226, 0.7) 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 30% 40%, rgba(64,224,208,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(138,43,226,0.15) 0%, transparent 50%)',
  },
  glowCircle1: {
    position: 'absolute',
    top: '15%',
    left: '20%',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(64,224,208,0.3) 0%, transparent 70%)',
    filter: 'blur(40px)',
    animation: 'float 6s ease-in-out infinite',
  },
  glowCircle2: {
    position: 'absolute',
    bottom: '20%',
    right: '15%',
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(138,43,226,0.3) 0%, transparent 70%)',
    filter: 'blur(50px)',
    animation: 'float 8s ease-in-out infinite reverse',
  },
  techPattern: {
    position: 'absolute',
    inset: 0,
    opacity: 0.6,
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  projectCard: {
    maxWidth: '1200px',
    margin: '-120px auto 0',
    padding: '0 40px',
    position: 'relative',
    zIndex: 10,
  },
  projectContent: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)',
    borderRadius: '12px',
    padding: '28px 45px 35px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    border: '1px solid rgba(45, 122, 101, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '170px',
  },
  projectTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0a4d3c',
    marginBottom: '8px',
    lineHeight: '1.3',
  },
  projectSubtitle: {
    fontSize: '16px',
    color: '#1a5f4e',
    marginBottom: '20px',
    fontWeight: '500',
  },
  projectBtn: {
    display: 'inline-block',
    padding: '12px 30px',
    background: 'linear-gradient(135deg, #0a4d3c 0%, #2d7a65 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    letterSpacing: '0.5px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(10, 77, 60, 0.3)',
  },
};

// Add keyframes animation via style tag
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
  }
  
  .project-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(10, 77, 60, 0.4) !important;
  }
  
  div[style*="projectContent"]:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.12) !important;
  }
`;
document.head.appendChild(styleSheet);

export default FeaturedProjects;