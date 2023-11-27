import React, { useState } from "react";

function Item({ id, name, category }) {

  const [listState, setListState] = useState('')
  const [buttonState, setButtonState] = useState('add')
  const [cartState, setCartState] = useState("Add to Cart")

  function addToCart() {
    if (listState === '') {
      setListState('in-cart');
    } else if (listState === 'in-cart') {
      setListState('');
    };

    if (buttonState === 'add') {
      setButtonState('remove');
    } else if (buttonState === 'remove') {
      setButtonState('add');
    };

    if (cartState === 'Add to Cart') {
      setCartState('Remove From Cart');
    } else if (cartState === 'Remove From Cart') {
      setCartState('Add to Cart');
    };
  };

  return (
    <li className={listState} id={id}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={buttonState}>{cartState}</button>
    </li>
  );
}

export default Item;
