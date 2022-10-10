import AllRoutes from "./Routes/Allroutes";
import Footer from "./Footer_component/Footer";
import Navbar from "./Navbar_Component/navbar";
import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
