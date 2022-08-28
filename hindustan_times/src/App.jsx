import AllRoutes from './Routes/AllRoutes'
import './App.css'
import Footer from './Footer_component/Footer'
import Navbar from './Navbar_Component/navbar'
import Main from './Main/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Main />
      <Footer />
    </div>
  )
}

export default App
