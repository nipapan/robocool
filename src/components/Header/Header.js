import React from 'react';
import './Header.css';

class Header extends React.Component {
   shouldComponentUpdate(nextProps, nextState, nextContext) {
      return false;
   }

   render() {
      return <h1 className='logo'>RoboCool</h1>;
   }
}

export default Header;