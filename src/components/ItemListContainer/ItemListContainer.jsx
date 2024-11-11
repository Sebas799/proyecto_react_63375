import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css";
import { pedirDatos } from "../Functions/Request";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    pedirDatos()
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="item-list-container">
      <CategoryFilter categories={categories} onSelectCategory={setSelectedCategory} />
      <div className="d-flex justify-content-center">
        <div className="container">
          <div className="row g-3">
            <ItemList products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
