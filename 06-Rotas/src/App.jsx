import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contatos"

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contato/>} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}