import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Orks } from "./pages/Orks"
import { DeathGuard } from "./pages/DeathGuard"
import { Navbar } from "./components/Navbar"


function App() {
  return ( 
  <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/orks" element={<Orks />}></Route>
        <Route path="/deathguard" element={<DeathGuard />}></Route>
      </Routes>
    </Container>
  </>
  )
}

export default App
