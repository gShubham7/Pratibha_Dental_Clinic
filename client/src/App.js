import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";

import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Quote />
      <Footer />
    </>
  );
}

export default App;
