import React from "react";
import Cards from "./Card";
import { Box, Flex, Heading, Center } from "@chakra-ui/react";
import Data from '../data.json'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function ItemListContainer({ title }) {
  const { category } = useParams();
/*   useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../data.json')
      const data = await res.json()
      console.log(data)
    }
    fetchData()
  }, []) */
  

  const catFilter = Data.filter((type) => type.category === category);
  return (
    <main className="hero">
      <Flex>
      <Cards type={catFilter}/>

{/*         <Center w="100%">
          <Cards
            price="100"
            product="Vape 1"
            imagen="https://cdn.discordapp.com/attachments/576208504226971648/1073011163874467901/pngaaa.com-529206.png"
          />
          <Cards
            price="200"
            product="Vape 2"
            imagen="https://cdn.discordapp.com/attachments/576208504226971648/1073011163874467901/pngaaa.com-529206.png"
          />
          <Cards
            price="300"
            product="Vape 3"
            imagen="https://cdn.discordapp.com/attachments/576208504226971648/1073011163874467901/pngaaa.com-529206.png"
          />
        </Center> */}
      </Flex>
    </main>
  );
}

export default ItemListContainer;
