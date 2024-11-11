import React, { useState } from 'react';

const Counter = ({ initialQuantity = 1, onChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = (e) => {
    e.stopPropagation();
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      if (onChange) onChange(newQuantity); 
      return newQuantity;
    });
  };

  const decreaseQuantity = (e) => {
    e.stopPropagation();
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1;
      if (onChange) onChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <button onClick={decreaseQuantity} className="btn btn-outline-secondary btn-sm">-</button>
      <span className="mx-3">{quantity}</span>
      <button onClick={increaseQuantity} className="btn btn-outline-secondary btn-sm">+</button>
    </div>
  );
};

export default Counter;
