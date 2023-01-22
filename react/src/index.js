import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  return (
    <div>
      <h1>Webpack test</h1>
      <br />
      <img src="../images/volvo.jpg" alt="volvo" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
