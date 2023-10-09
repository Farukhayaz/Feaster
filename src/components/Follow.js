import React from 'react';
import CardContainer from './CardContainer';
import "./Follow.css"

const Follow = () => {
  const cardsData = [
    { id: 1, imgUrl: '/images/girl.png' },
    { id: 2, imgUrl: '/images/girl.png' },
    { id: 3, imgUrl: '/images/girl.png' },
    { id: 4, imgUrl: '/images/girl.png' },
    { id: 5, imgUrl: '/images/girl.png' },
    { id: 6, imgUrl: '/images/girl.png' },

    // ... (rest of the data)
  ];

  return (
    <div className="container mx-auto w-[75%]" style={{overflow:"hidden"}} >
      <h2 className='text-[40px] font-bold mt-3 mb-3'>Follow the Feast...</h2>
      <div className="container">
      <CardContainer cards={cardsData} />
    </div>
    </div>
  );
};

export default Follow;
