import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Center, Circle } from "@chakra-ui/react";
function CartWidget({number}) {
  return (
    <Center mx="5">
      <Circle size="40px" bg="white" color="black">
        <FaShoppingCart />
        <span>{number}</span>
      </Circle>
    </Center>
  );
}

export default CartWidget;
