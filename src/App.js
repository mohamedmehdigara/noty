import React from "react";  
import ReactDOM from "react-dom";
import Noty from 'noty';  
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/bootstrap-v4.css";  

import "./index.css";

export default function App() {  
  ["alert", "error", "info", "information", "success", "warning"].forEach(
    (type, i) =>
      setTimeout(function() {
        new Noty({
          text: "This is a " + type + " notification!",
          layout: "bottom",
          theme: "bootstrap-v4",
          type: type
        }).show();
      }, 500 * i)
  );
  return (
    <div className="App">
      <h1>Meaow Meaow</h1>
      <h2>Let's show some beautiful notifications!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");  
ReactDOM.render(<App />, rootElement);  