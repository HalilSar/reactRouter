import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Farklı() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("http://localhost:3000/categories");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      <h1>Kategoriler</h1>
      {items.map((item) => (
        <h2 key={item.id}><Link to={`/farklı/${item.id}`}>{item.categoryName}</Link></h2>
      ))}
    </div>
  );
}

export default Farklı;
