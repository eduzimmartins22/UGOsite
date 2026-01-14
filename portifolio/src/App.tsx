import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Location from "./components/Location"
import Pagamento from "./components/Pagamento"

import Bicicletas from "./components/Produtos/Bicicletas"
import ScrollToHash from "./components/ScrollToHash"

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Products />
              <Location />
              <Pagamento />
            </>
          }
        />

       
        <Route path="/bicicletas" element={<Bicicletas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
