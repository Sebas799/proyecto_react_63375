import React from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

function ItemList({ products }) {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      {products.map((product) => (
        <div 
          key={product.id} 
          className="col-12 col-sm-7 col-md-6 col-lg-4 col-xl-3 mb-3"
          onClick={() => handleItemClick(product.id)}
        >
          <Item product={product} />
        </div>
      ))}
    </>
  );
}

export default ItemList;
