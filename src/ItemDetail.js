import React, { useState, useEffect } from "react";

function Item({match}) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
  const [item, setItem ]= useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(`http://localhost:3000/products/${match.params.id}`);//
    const item= await fetchItem.json();
    setItem(item);
    console.log(item);
   
  };
  return (
  <h1>{item.productName}</h1>
  );
}

export default Item;