import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import CartContext from "./Context/CartContext";
import OffcanvasContext from "./Context/OffcanvasContext";
import ManageAllOrders from "./Pages/Account/LoginModal/ManageAllOrders/ManageAllOrders";
import OrderHistory from "./Pages/Account/LoginModal/OrderHistory.js/OrderHistory";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDetail";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";
import Tips from "./Pages/Tips/Tips";

function App() {
  return (
  <AuthProvider>
    <CartContext>
       <OffcanvasContext>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/tips" element={<Tips/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
       
        <Route path="/dashboard/*" element={<Dashboard/>} />
        
         

       


      </Routes>
    </Router>
   </OffcanvasContext>
  </CartContext>
  </AuthProvider>
  );
}

export default App;
