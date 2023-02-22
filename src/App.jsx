import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path='/' element={<>
            <Home title='Vapex'/> <ItemListContainer/>
          </>}/>
          <Route exact path='/category/:category' element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
