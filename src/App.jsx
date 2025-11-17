import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Main } from "./pages/Main.jsx";
import { Calendary } from "./pages/Calendary.jsx";
import {User}  from "./pages/User.jsx";
import {Configuration} from "./pages/Configuration.jsx";
import { Map } from "./pages/Map";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Calendary" element={<Calendary />} />
          <Route path="/User" element={<User />} />
          <Route path="/Configuration" element={<Configuration />} />
        <Route
          path="/map"
          element={
            <PrivateRoute>
              <Map />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
