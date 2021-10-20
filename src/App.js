import React, { Component} from 'react';
import reactDom from 'react-dom';


import {CardList} from './components/card-list/card-list.components';

import {SearchBox} from './components/search-box/search-box.components';

import './App.css';
class App extends Component {
  constructor(){
    super();

    this.state = {
      monster: [],
      searchField: '',
    }
  }
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monster: users}));
}


  render(){
    const {monster, searchField } = this.state
    const filterMonster = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
     <SearchBox
       placeholder = 'monster search'
       handleChange = {e => this.setState({searchField: e.target.value})}
     />
     <CardList monster= {filterMonster} />
    </div>

    );
  }

}
export default App;
