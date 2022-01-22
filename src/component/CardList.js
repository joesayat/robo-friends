import React from 'react';
import Card from './Card';

/**
 * Renders card list.
 * @param {Object} robots 
 * @returns {TemplateResult} card list
 */
const CardList = ({robots}) => {
  // if (true) {
  //   throw new Error('nooo')
  // }
  return(
    <div className='card-list pa1'>
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