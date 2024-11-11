import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-filter d-flex justify-content-center mb-4 mt-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="btn btn-outline-primary mx-2"
        >
          {category}
        </button>
      ))}
      <button
        onClick={() => onSelectCategory('all')}
        className="btn btn-outline-secondary mx-2"
      >
        Todos
      </button>
    </div>
  );
};

export default CategoryFilter;