import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Navbar/>
    </ChakraProvider>
  )
}

export default App
