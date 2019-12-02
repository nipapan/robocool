import React from 'react';

class CounterButton extends React.Component {
   constructor() {
      super();
      this.state = { counter: 1 }
   }

   render() {
      return (
         <button
            id='counter'
            className='f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-gray'
            onClick={() => this.setState(state => ({counter: state.counter+1}) )}>
            Counter: {this.state.counter}
         </button>
      );
   }
}

export default CounterButton;
