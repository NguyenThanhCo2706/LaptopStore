
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './components/product/product';
import Header from './components/base/header';
import Navigation from './components/base/navigation';
import Footer from './components/base/footer';
import AddProduct from "./components/product/addProduct";
import Login from "./components/user/login";
import DetailProduct from "./components/product/detailProduct";


function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>

        <Route path="/" element={<Product />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/detail" element={<DetailProduct />} />

        <Route path="/user/login" element={<Login />} />

        {/* <Route path="/login" element={<Login setUser={setUsername} />} />
          <Route path="/viewstudent/:id" element={<Student />} />
          <Route path="/updatestudent/:id" element={<UpdateStudent setStudents={setStudents} />} />
          <Route path="/createstudent" element={<CreateStudent setStudents={setStudents} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listsearch" element={<SearchPage listSearch={listSearch} />} /> */}

      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
