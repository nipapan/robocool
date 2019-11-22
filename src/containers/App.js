import React from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import './App.css';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         robots: [],
         searchText: ''
      }
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({robots: users}));
   }

   onSearchChange = (event) => {
      this.setState({ searchText: event.target.value });
   }

   render() {
      const { robots, searchText } = this.state;
      const filteredRobots = robots.filter((robot) => {
         return robot.name.toLowerCase().includes(searchText.toLowerCase());
      });
      return !robots.length ?
         <p>Loading...</p> :
         (
            <div className='tc'>
               <h1 className='logo'>RoboFriends</h1>
               <SearchBox onSearchChange={this.onSearchChange} />
               <Scroll>
                  <CardList robots={filteredRobots} />
               </Scroll>
            </div>
         );
   }
};

export default App;

