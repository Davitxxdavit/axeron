import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Home } from "./pages/Home"

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
