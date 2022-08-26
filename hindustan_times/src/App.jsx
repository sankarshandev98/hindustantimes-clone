import AllRoutes from './Routes/AllRoutes'
import './App.css'
import Footer from './Footer_component/Footer'
import Navbar from './Navbar_Component/navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App

const MyContext=React.createContext(default)

<MyContext.Provider value={dark}></>
