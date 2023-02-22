import React from "react";
import Data from "../data.json";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
  return (
    <ItemDetail data={Data}/>
  );
}

export default ItemDetailContainer;
