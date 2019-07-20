import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => this.setState({ monsters: response }));
  }

  render() {
    ///creating a new array and not updating state to preserve the original array as it is.
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    ///input moved into new component to make it reusable if necessary
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
