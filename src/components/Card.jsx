import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
function Cards({ type }) {
  const category = useParams;
  console.log(type);
  return (
    <>
      {type.map((e) => {
        return (
          <div key={e.id}>
            <Card maxW="sm">
              <Heading size="md">{category.category}</Heading>
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{e.name}</Heading>
                  <Text>{e.description}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${e.price}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </div>
        );
      })}

      {/* <Card maxW='sm'>

  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Añadir al carrito
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Detalles
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card> */}
    </>
  );
}

export default Cards;
