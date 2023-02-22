import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
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
    <header>
      <Flex bg="#16213E">
        <Box p="4">
          <Link to={"/"}>
            <Heading color="white">Vapex</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box p="4">
          <Flex>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Categorias
              </MenuButton>
              <MenuList>
                <Link to={`/category/${"recargable"}`}>
                  <MenuItem>Recargables</MenuItem>
                </Link>
                <Link to={`/category/${"descartable"}`}>
                  <MenuItem>Descartables</MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <CartWidget number="1" />
          </Flex>
        </Box>
      </Flex>
    </header>
  );
}

export default Navbar;
