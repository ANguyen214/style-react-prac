import React from "react";
import "./App.css"

function App() {
  const divStyle = {
    textAlign: "center",
  };
  const h1Style = {
    fontFamily: "cursive",
  };
  const h4Style = {
    fontFamily: "monospace",
  }
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>Hello!</h1>
      <h4 style={h4Style}>How are you?</h4>
      <h5 className="App-weather-message">Today is a nice day!</h5>
    </div>
  );
}

export default App;
