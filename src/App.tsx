

import AddUser from './features/user/addUser';
import Users from './features/user/users';
import UpdateUser from './features/user/updateUser';
import Product from './components/product/product';
import Header from './components/base/header';
import Navigation from './components/base/navigation';
import Footer from './components/base/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
