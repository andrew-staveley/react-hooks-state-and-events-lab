import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemList from "../data/items";

function App() {
  const [themeState, setState] = useState(false);

  function appearanceToggle() {
    setState(!themeState);
  };

  const appClass = themeState ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={appearanceToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemList} />
    </div>
  );
};

export default App;
