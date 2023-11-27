import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //Initialization
  const [selectedCategory, setState] = useState('All')

  let truthToggle

  if (selectedCategory === 'All') {
    truthToggle = true
  } else {
    truthToggle = false
  }

  let filteredItems = items.filter((item) => item.category === selectedCategory)

  let filterHelper = truthToggle ? items : filteredItems
  
  function filterHandler(event) {
    setState(event.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterHelper.map((item) => (
          <Item id={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
