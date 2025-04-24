const WaveOverlay = ({ position = 'top', color = '#f3f4ff' }) => (
    <div style={{
      position: 'absolute',
      top: position === 'top' ? 0 : 'auto',
      bottom: position === 'bottom' ? 0 : 'auto',
      left: 0,
      width: '100%',
      overflow: 'hidden',
      zIndex: 0
    }}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '140px',
          transform: position === 'bottom' ? 'rotate(180deg)' : 'none'
        }}
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,224L60,229.3C120,235,240,245,360,218.7C480,192,600,128,720,128C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
  export default WaveOverlay;