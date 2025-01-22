import "./AbstractShape.css";
const AbstractShape= () => {
  return (
    <div className={`abstract-shape-container`} >
      {/* Kotak miring pertama */}
      <div className="abstract-box skew-box blue"></div>
      {/* Kotak miring kedua */}
      <div className="abstract-box skew-box green"></div>
      {/* Kotak miring ketiga */}
      <div className="abstract-box skew-box red"></div>
    </div>
  );
};

export default AbstractShape;
