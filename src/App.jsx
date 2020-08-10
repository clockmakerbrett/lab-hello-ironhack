import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <nav>
            <img src="./images/ironhack-logo.svg" alt="logo" />
            <img src="./images/menu-top.svg" alt="logo" />
          </nav>
          <main>
            <h1>Say Hello to React.js</h1>
            <p>You will learn a frontend framework from scratch to become a Ninja developer</p>
            <div id="link-div">
              <a href="#">Awesome!</a>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default App;
