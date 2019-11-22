import React from 'react';
import './Card.css';

const Card = ({robot}) => {
    return (
       <div key={robot.id} className='tc dib br3 pa3 ma2 grow bw2 shadow-5 card-bg'>
          <img alt='robots' src={`https://robohash.org/${robot.name}?100x100`} />
          <div>
             <h2 className='card-text'>{robot.name}</h2>
             <p>{robot.email}</p>
          </div>
       </div>
    );
}

export default Card;