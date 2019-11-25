import React from 'react';
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

import { setSearchText, requestRobotsApi } from '../actions';

const mapStateToProps = state => {
   return {
      searchText: state.searchRobots.searchText,
      isPending: state.requestRobots.isPending,
      robots: state.requestRobots.robots,
      error: state.requestRobots.robots
   }
}

const mapDispatchToProps = (dispatch) => {
   return  {
      onSearchChange: (event) => dispatch(setSearchText(event.target.value)),
      onRequestRobots: () => dispatch(requestRobotsApi())
   }
}

class App extends React.Component {
   componentDidMount() {
      this.props.onRequestRobots();
   }

   render() {
      const { searchText, onSearchChange, robots, isPending } = this.props;
      const filteredRobots = robots.filter((robot) => {
         return robot.name.toLowerCase().includes(searchText.toLowerCase());
      });
      return isPending?
         <p>Loading...</p> :
         (
            <div className='tc'>
               <h1 className='logo'>RoboCool</h1>
               <SearchBox onSearchChange={onSearchChange} />
               <Scroll>
                  <ErrorBoundary>
                     <CardList robots={filteredRobots} />
                  </ErrorBoundary>
               </Scroll>
            </div>
         );
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

