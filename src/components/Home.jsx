import React from "react";
import {Flex, Heading, Center } from "@chakra-ui/react";
function Home({title}) {
  return (
    <Flex>
      <Center w="100%" m="5rem">
        <Heading>{title}</Heading>
      </Center>
    </Flex>
  );
}

export default Home;
