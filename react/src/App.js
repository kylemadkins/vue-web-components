import React from "react";
import { render } from "react-dom";

const App = () => {
  return <a-button label="Click me"></a-button>;
};

render(<App />, document.getElementById("root"));
