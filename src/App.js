import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./app.css"
import Home from "./components/topbar/pages/home/Home";
import User from "./components/topbar/pages/home/user/User";
import UserList from "./components/topbar/pages/home/userList/UserList";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
