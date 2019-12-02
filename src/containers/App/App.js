import React from 'react';
import {connect} from 'react-redux';

import {setSearchText} from '../../components/SearchBox/actions';
import {requestRobotsApi} from './actions';
import MainPage from "../../components/MainPage/MainPage";

const mapStateToProps = state => {
   return {
      searchText: state.searchRobots.searchText,
      isPending: state.requestRobots.isPending,
      robots: state.requestRobots.robots,
      error: state.requestRobots.error
   }
}

const mapDispatchToProps = (dispatch) => {
   return  {
      onSearchChange: (event) => dispatch(setSearchText(event.target.value)),
      onRequestRobots: () => dispatch(requestRobotsApi())
   }
}

class App extends React.Component {
   render() {
      return <MainPage {...this.props}/>
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

