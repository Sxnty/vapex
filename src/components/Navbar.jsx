import React from "react";
import CartWidget from "./CartWidget";
import {
  Box,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Flex bg='#16213E'>
      <Box p="4">
        <Heading color='white'>Vapex</Heading>
      </Box>
      <Spacer />
      <Box p="4">
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>Recargables</MenuItem>
              <MenuItem>Descartables</MenuItem>
            </MenuList>
          </Menu>
            <CartWidget number='1'/>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
