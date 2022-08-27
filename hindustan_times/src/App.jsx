import AllRoutes from './Routes/AllRoutes'
import './App.css'
import Footer from './Footer_component/Footer'
import Navbar from './Navbar_Component/navbar'
import NewsApi from './Api/NewsApi'

function App() {
  return (
    <div className="App">
      <NewsApi />
      {/* <Navbar />
      <AllRoutes />
      <Footer /> */}
    </div>
  )
}

export default App
