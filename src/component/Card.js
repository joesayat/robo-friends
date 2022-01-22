import React from 'react';

/**
 * Renders card.
 * @param {Object} id, name, email
 * @returns {TempalteResult} card
 */
const Card = ({id, name, email}) => {
  return (
    <div className='card dib tc bg-white br3 pa3 mv2 mh2 ba b--black-10 grow'>
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <h2 className='f3 mb2'>{name}</h2>
      <p className='f5 light-silver mt0'>{email}</p>
    </div>
  )
};

export default Card;