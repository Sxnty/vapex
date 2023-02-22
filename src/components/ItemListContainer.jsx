import React from "react";
import Cards from "./Card";
import { Flex } from "@chakra-ui/react";
import Data from "../data.json";
import { useParams } from "react-router-dom";
function ItemListContainer({ title }) {
  const { category } = useParams();
  const catFilter = Data.filter((type) => type.category === category);

  return (
    <main className="hero">
      <Flex>
        {category ? <Cards type={catFilter} /> : <Cards type={Data} />}
      </Flex>
    </main>
  );
}

export default ItemListContainer;
