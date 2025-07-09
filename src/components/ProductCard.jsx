import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="meta">🎮 {product.console}</p>
        <p className="meta">📅 Lanzamiento: {product.release}</p>
        <p className="meta">🗂️ Género: {product.genre}</p>
        <p className="meta">👥 {product.multiplayer ? 'Multijugador' : 'Individual'}</p>
      </div>
    </div>
  );
};

export default ProductCard;
