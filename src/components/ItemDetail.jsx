import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Heading, Stack, Text, Image } from "@chakra-ui/react";
import Error404 from "./Error404";
function ItemDetail({ data }) {
  const { id } = useParams();
  const itemFilter = data.filter((e) => e.id == id);
  if (itemFilter.length === 0) {
    return <Error404/>;
  }
  return (
    <>
      {itemFilter.map((e) => {
        return (
          <>
            <Card maxW="sm">
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
            ;
          </>
        );
      })}
    </>
  );
}

export default ItemDetail;
