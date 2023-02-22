import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import Home from "./components/Home";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<>
            <Home title='Vapex'/> <ItemListContainer/>
          </>}/>
          <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
