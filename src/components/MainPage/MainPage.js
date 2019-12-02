import React from 'react';

import CardList from "../../components/CardList/CardList";
import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from "../../components/Scroll/Scroll";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Header from "../../components/Header/Header";
import CounterButton from "../../components/CounterButton/CounterButton";

class MainPage extends React.Component {
   componentDidMount() {
      this.props.onRequestRobots();
   }

   filterRobots = () => {
      return this.props.robots.filter((robot) => {
         return robot.name.toLowerCase().includes(this.props.searchText.toLowerCase());
      });
   }

   render() {
      const { onSearchChange, isPending } = this.props;

      return isPending?
         <p>Loading...</p> :
         (
            <div className='tc'>
               <Header />
               <CounterButton />
               <SearchBox onSearchChange={onSearchChange} />
               <Scroll>
                  <ErrorBoundary>
                     <CardList robots={this.filterRobots()} />
                  </ErrorBoundary>
               </Scroll>
            </div>
         );
   }
};

export default MainPage;

