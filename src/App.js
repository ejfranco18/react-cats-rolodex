import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters: data}))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1>Cats Rolodex</h1>
        <SearchField 
          placeHolder = 'Search cats'
          eventHandler = { e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters= {filterMonsters} />
      </div>
    );
  }
}

export default App;
