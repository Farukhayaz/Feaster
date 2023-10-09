import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={props.alt || 'Image'} />
    </div>
  );
};

export default Card;
