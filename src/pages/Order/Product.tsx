import React from 'react';

interface IProduct {
  name: string;
  description?: string;
  imagePath?: string;
}

function Product({ name, description, imagePath }: IProduct) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
        style={{ width: '75%' }}
      />
      <form style={{ marginTop: '10px' }}>
        <label htmlFor="" style={{ textAlign: 'right' }}>
          {name}
        </label>
        <input
          type="number"
          style={{ marginLeft: '7px' }}
          name="quantity"
          min="0"
          defaultValue={0}
        />
      </form>
    </div>
  );
}

export default Product;
