import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
function Cards({ type }) {
  const category = useParams;
  const { id } = useParams();
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
                  <Image
                    src={e.image}
                    alt={e.name}
                    borderRadius="lg"
                    w="50%"
                    m="auto"
                  />
                  <Heading size="md">{e.name}</Heading>
                  <Text>{e.description}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${e.price}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm">
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Añadir al carrito
                  </Button>
                  <Link to={`/item/${e.id}`}>
                    <Button variant="ghost" colorScheme="blue">
                      Detalles
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
