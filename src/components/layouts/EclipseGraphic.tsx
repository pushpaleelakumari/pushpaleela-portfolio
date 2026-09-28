function EclipseGraphic() {
  return (
    <div className="stage" aria-hidden="true">
      <div className="bh">
        <div className="glow" />
        <div className="bh-inner">
          <div className="disk" />
          <div className="disk b" />
        </div>
        <div className="halo" />
        <div className="core" />
        <div className="bh-inner bh-inner-front">
          <div className="disk" />
          <div className="disk b" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-10 z-20" />
      </div>
    </div>
  )
}

export default EclipseGraphic
