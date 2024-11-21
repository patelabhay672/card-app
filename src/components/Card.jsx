import React from 'react';

function Card({ values, handleClick, index }) {
  const { id, image, name, auther, itemAdd } = values;

  return (
   <>
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-sky-600'>
        <img className='h-full w-full object-cover' src={image} alt={name} />
      </div>
      <div className='w-full p-3'>
        <h3>{id}</h3>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{auther}</h5>
        <button
          onClick={() => handleClick(index)}
          className={`mt-4 px-3 py-1 text-xs text-white font-semibold rounded-md ${
            itemAdd ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {itemAdd ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
    
  </>
  );
}

export default Card;
