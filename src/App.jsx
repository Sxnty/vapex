import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <ItemListContainer title='Productos recomendados.'/>
    </ChakraProvider>
  )
}

export default App
