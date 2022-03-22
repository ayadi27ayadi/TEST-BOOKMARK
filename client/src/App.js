import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import NavBar from "./components/navBar/navBar";
import ListPhoto from "./pages/Photo/ListPhoto/listPhoto"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/home";
import UpdatePhoto from "./pages/Photo/updatePhoto";
import AddPhoto from "./pages/Photo/AddPhoto/addPhoto";
const App = () =>{
  return (
     <Provider store={store}>
      <BrowserRouter>
      <NavBar />
      
        <div className="bg-[url('./assert/image.jpg')] h-screen	bg-fixed" >
          <div className="mt-20">
            <div className="container mx-auto px-6">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/listphoto" element={<ListPhoto />} />
              <Route path="/Addphoto" element={<AddPhoto />} />
              <Route path="/update/:id" element={<UpdatePhoto />} />
              </Routes>
            </div>
            {/* <Footer/> */}
          </div>
        </div>
      </BrowserRouter>
     </Provider>
  );
}

export default App;
