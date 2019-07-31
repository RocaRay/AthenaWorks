import React, { Component } from 'react';
import './styles/App.scss';
import Selected from "./Selected"
import Search from './Search';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
      filteredPeople: [],
      gender: '',
      lastName: '',
      selected: {
        name: '',
        id: '',
        phone: '',
        email: ''
      },
    }
    this.selectPerson = this.selectPerson.bind(this)
    this.updateGender = this.updateGender.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.clearFilter = this.clearFilter.bind(this)
    this.filterList = this.filterList.bind(this)
  }

  //get 88 people upon initial render
  componentDidMount(){
    fetch('https://randomuser.me/api/?results=88')
    .then(data => data.json())
    .then(data => {
      this.setState({ people: data.results, filteredPeople: data.results})
    })
  }

  selectPerson(person){
    this.setState({
      ...this.state,
      selected: person
    })
  }

  updateGender(value){
    this.setState({
      ...this.state,
      gender: value
    })
  }

  updateLastName(value){
    this.setState({
      ...this.state,
      lastName: value
    })
  }

  clearFilter(){
    this.setState({
      ...this.state,
      gender: '',
      lastName: '',
      filteredPeople: this.state.people
    })
  }

  filterList(){
    let output = [...this.state.people];
    if (this.state.gender) output = output.filter(person => person.gender === this.state.gender)
    if (this.state.lastName) output = output.filter(person => person.name.last.startsWith(this.state.lastName.toLowerCase()))
    this.setState({
      ...this.state,
      filteredPeople: output
    })
  }
  
  render() {
    return (
    <div className="App">
      <div id="left">
        <Search updateGender={this.updateGender}
          updateLastName={this.updateLastName}
          clearFilter={this.clearFilter}
          filterList={this.filterList}
          gender={this.state.gender}
          lastName={this.state.lastName}
        />
        <List people={this.state.filteredPeople} 
        selectPerson={this.selectPerson}
        selected={this.state.selected}
        />
      </div>
      <Selected person={this.state.selected}/>
    </div>
    )
  };
}

export default App;