import { useState } from 'react';
import { products } from './products';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const [category, setCategory] = useState("Todos");

  const categories = ["Todos", ...new Set(products.map(p => p.category))];
  const filtered = category === "Todos" ? products : products.filter(p => p.category === category);

  return (
    <div style={{ padding: 20 }}>
      <h1>Catálogo de Videojuegos</h1>
      <div style={{ marginBottom: 20 }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} style={{ marginRight: 10 }}>
            {cat}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
