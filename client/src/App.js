import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <>
      <div className="App">
        <Topbar />
        <Navbar />         
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
