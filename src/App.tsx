
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './components/product/product';
import Header from './components/base/header';
import Navigation from './components/base/navigation';
import Footer from './components/base/footer';
import AddProduct from "./components/product/addProduct";
import Login from "./components/user/login";
import DetailProduct from "./components/product/detailProduct";
import Register from "./components/user/register";
import UpdateProduct from "./components/product/updateProduct";
import CategoryProducts from "./components/product/categoryProduct";
import CartCustomer from "./components/order/cartCustomer";
import ComfirmOrder from "./components/order/comfirmOrder";
import ViewDetailOrder from "./components/order/viewDetailOrder";
import Page404 from "./components/base/404";
import jwt_decode from "jwt-decode";
import './app.css'
import { useAppSelector } from "./app/hooks";

interface MyToken {
  username: string;
  admin: boolean;
}

function App() {
  const token: string = useAppSelector((state) => state.user.login.token)
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/detail/:id" element={<DetailProduct />} />
        <Route path="/product/category/:id" element={<CategoryProducts />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        {
          token && jwt_decode<MyToken>(token).admin ?
            <>
              <Route path="/product/add" element={<AddProduct />} />
              <Route path="/product/update/:id" element={<UpdateProduct />} />
              <Route path="/comfirmorder" element={<ComfirmOrder />} />
              <Route path="/viewdetail/:orderId" element={<ViewDetailOrder />} />
            </>
            :
            <></>
        }
        {
          token && jwt_decode<MyToken>(token).admin === false ?
            <>
              <Route path="/cart" element={<CartCustomer />} />
            </>
            :
            <></>
        }
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
