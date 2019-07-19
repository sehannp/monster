import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Sehan"
    };
  }

  runfunc() {
    alert("Poda");
    doit();
    this.setState({
      name: "Ssssss"
    });
  }

  doit() {
    console.log(this.state.name);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Stasrt editing to see some magic happen!</h2>
        <button onClick={this.runfunc}>{this.state.name}</button>
      </div>
    );
  }
}
export default App;
