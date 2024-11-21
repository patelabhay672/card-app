import React, { useState } from 'react';
import MenuData from './CardData';
import Card from './Card';

const Home = ({ handleItem }) => {
  const [realdata, setRealdata] = useState(MenuData);

  const handleButton = (cardindex) => {
    setRealdata((previous) => {
      return previous.map((item, index) => {
        if (index === cardindex) {
          return { ...item, itemAdd: !item.itemAdd };
        }
        return item;
      });
    });
    handleItem(realdata[cardindex]); // Add item to cart when button is clicked
  };

  return (
    <>
    <div className='flex justify-start items-start gap-4 p-4'>
    {realdata.map((item, index) => (
      <Card key={index} index={index} handleClick={handleButton} values={item} />
    ))}
  </div>
  </>
  );
};

export default Home;
