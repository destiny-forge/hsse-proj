const Hotspot = ({ visible }) => (
  <div className="hotspot" style={{ display: visible ? 'block' : 'none' }}>
    <div className="hotspot-indicator-wrapper">
      <div className="hotspot-indicator"></div>
    </div>
  </div>
);

export default Hotspot;
