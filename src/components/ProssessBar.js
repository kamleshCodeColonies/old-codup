const ProssessBar = () => {
  return (
    <div className="prossess-ber-plugin pt-20">
      <span className="prosses-bar">
        25% Surge in Talent Acquisition and Retention
      </span>
      <div id="bar1" className="barfiller">
        <div className="tipWrap" style={{ display: "inline" }}>
          <span
            className="tip"
            style={{
              left: "25%",
              transition: "left 7s ease-in-out 0s",
            }}
          ></span>
        </div>
        <span
          className="fill"
          data-percentage={25}
          style={{
            background: "rgb(22, 181, 151)",
            width: "25%",
            transition: "width 7s ease-in-out 0s",
          }}
        />
      </div>
      <span className="prosses-bar">
        30% Growth in Client Acquisition and Retention
      </span>
      <div id="bar2" className="barfiller">
        <div className="tipWrap" style={{ display: "inline" }}>
          <span
            className="tip"
            style={{
              left: "30%",
              transition: "left 7s ease-in-out 0s",
            }}
          ></span>
        </div>
        <span
          className="fill my-class"
          data-percentage={30}
          style={{
            background: "rgb(22, 181, 151)",
            width: "30%",
            transition: "width 7s ease-in-out 0s",
          }}
        />
      </div>
      <span className="prosses-bar">
        20% Reduction in CAPEX for Optimized Investments
      </span>
      <div id="bar3" className="barfiller">
        <div className="tipWrap" style={{ display: "inline" }}>
          <span
            className="tip"
            style={{
              left: "20%",
              transition: "left 7s ease-in-out 0s",
            }}
          ></span>
        </div>
        <span
          className="fill my-class2"
          data-percentage={20}
          style={{
            background: "rgb(22, 181, 151)",
            width: "20%",
            transition: "width 7s ease-in-out 0s",
          }}
        />
      </div>
      <span className="prosses-bar">30% Decrease in OPEX for Cost Savings</span>
      <div id="bar2" className="barfiller">
        <div className="tipWrap" style={{ display: "inline" }}>
          <span
            className="tip"
            style={{
              left: "30%",
              transition: "left 7s ease-in-out 0s",
            }}
          ></span>
        </div>
        <span
          className="fill my-class"
          data-percentage={30}
          style={{
            background: "rgb(22, 181, 151)",
            width: "30%",
            transition: "width 7s ease-in-out 0s",
          }}
        />
      </div>
    </div>
  );
};
export default ProssessBar;
