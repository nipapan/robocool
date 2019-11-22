import React from 'react';

const Scroll = (props) => {
   return (
      <div style={{overflowY: 'scroll', border: '1px sold #05386b', height: '800px'}}>
         {props.children}
      </div>
   );
}

export default Scroll;