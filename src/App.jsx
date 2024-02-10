import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import {
  Outlet,
  ScrollRestoration,
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <Nav />
      <Footer />
    </>
  );
};
function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
