import "./App.css";
import Header from "./components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/HomePage/Homepage";
import { Route } from "react-router";
import Product from "./pages/product/Product";
import Checkout from "./pages/Checkout/Checkout";
import Blog from "./pages/Blog/Blog";
import Blogdetails from "./pages/Blog-details/Blog-details";
import Cartoverview from "./pages/CartOverview/Cartoverview";
import Error from "./pages/404error/Error";

const App = () => {
  return (
    <div>
      <Header />

      <Route exact path="/">
        <Homepage />
      </Route>

      <Route path="/Error">
        <Error />
      </Route>

      <Route path="/HomePage">
        <Homepage />
      </Route>

      <Route path="/Cart">
        <Cartoverview />
      </Route>

      <Route path="/BlogDetails">
        <Blogdetails />
      </Route>

      <Route path="/Checkout">
        <Checkout />
      </Route>

      <Route path="/product">
        <Product />
      </Route>

      <Route path="/Blog">
        <Blog />
      </Route>

      <Footer />
    </div>
  );
};

export default App;
