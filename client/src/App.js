import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
