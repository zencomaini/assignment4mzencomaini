import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Accessories, CarTires, CarVelg, Admin, User, Login } from "./pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inputAccessories" element={<Accessories />} />
        <Route path="/inputCarTires" element={<CarTires />} />
        <Route path="/inputVelg" element={<CarVelg />} />
        <Route path="/inputAdmin" element={<Admin />} />
        <Route path="/inputUser" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;