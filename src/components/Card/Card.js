import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return (
       <div key={id} className='tc dib br3 pa3 ma2 grow bw2 shadow-5 card-bg'>
          <img alt='robots' src={`https://robohash.org/${name}?size=200x200`} />
          <div>
             <h3 className='card-text'>{name}</h3>
             <p>{email}</p>
          </div>
       </div>
    );
}

export default Card;