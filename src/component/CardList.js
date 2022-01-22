import React from 'react';
import Card from './Card';

/**
 * Renders card list
 * @param {Object} robots 
 * @returns {TemplateResult} card list
 */
const CardList = ({robots}) => {
  return(
    <div className='card-list'>
      {robots.map(robot => {
        return (
          <Card 
            key={robot.id} 
            id={robot.id} 
            name={robot.name} 
            email={robot.email}
          />
        )
      })}
    </div>
  )
};

export default CardList;