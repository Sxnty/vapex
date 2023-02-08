import React from 'react'
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
function Cards({product, price, imagen}) {
  return (
    <>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={imagen}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      w='50%'
      m='auto'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product}</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente odio repellendus maxime molestias explicabo nobis.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>
    </Stack>
  </CardBody>
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
</Card>
    </>
  )
}

export default Cards