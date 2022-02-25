import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillingHeight = "0%";
  if (props.max > 0) {
    barFillingHeight = Math.round((props.value / props.maxvalue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div
          className="chart-bar-fill"
          style={{ height: barFillingHeight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar-label"></div>
    </div>
  );
};
export default ChartBar;
