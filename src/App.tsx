// templates
import Header from "./templates/Header"
import Footer from "./templates/Footer"

// pages
// import Top from "./pages/Top"

import { BrowserRouter as Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
