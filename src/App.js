import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./app.css"
import Home from "./components/topbar/pages/home/Home";
import NewUser from "./components/topbar/pages/home/newUser/NewUser";
import User from "./components/topbar/pages/home/user/User";
import UserList from "./components/topbar/pages/home/userList/UserList";
import ProductList from "./components/topbar/pages/productList/ProductList";
import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newUser" element={<NewUser />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/product/:productId" element={<User />}/>
          <Route path="/newProduct" element={<NewUser />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
