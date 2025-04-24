const WaveBackground = ({ flip = false, color = '#f3f4ff' }) => (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: flip ? 'auto' : 0,
          bottom: flip ? 0 : 'auto',
          transform: flip ? 'rotate(180deg)' : 'none',
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,160L60,165.3C120,170,240,180,360,165.3C480,150,600,110,720,96C840,82,960,86,1080,101.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
  
  export default WaveBackground;
  