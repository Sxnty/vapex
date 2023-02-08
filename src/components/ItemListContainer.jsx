import React from "react";
import Cards from "./Card";
import { Box, Flex, Heading, Center } from "@chakra-ui/react";
function ItemListContainer({ title }) {
  return (
    <main className="hero">
      <Flex>
        <Center w="100%" m="5rem">
          <Heading>{title}</Heading>
        </Center>
      </Flex>
      <Flex>
        <Center w="100%">
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
        </Center>
      </Flex>
    </main>
  );
}

export default ItemListContainer;
