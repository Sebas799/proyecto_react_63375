import React from 'react';
import Counter from '../Counter/Counter';
import "../Item/Item.css"
 
const Item = ({ product }) => {
  const addToCart = (quantity) => {
    alert(`Added ${quantity} of ${product.title} to the cart`);
    //ACA VA LA LOGICA DEL CARRO DESPUES
  };

  return (
    <div className="card shadow-sm my-3" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="card-text fw-bold">${product.price}</p>

        <div className="d-flex justify-content-center">
          <Counter initialQuantity={1} onChange={(newQuantity) => console.log(newQuantity)} />
        </div>

        <button onClick={() => addToCart(1)} className="btn btn-primary w-100">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Item;