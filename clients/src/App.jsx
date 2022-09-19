import { React } from "react";
import { Container } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route  , Navigate  } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag.jsx";

const App = () => {

  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <GoogleOAuthProvider clientId="615348661235-vn7qpsl2ln9arblk1u070bgfgulaqgd1.apps.googleusercontent.com">
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
          
            <Route path="/" element={<Navigate to="/posts" replace />} />

            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" exact element={<PostDetails />} />
          
            <Route path={"/creators/:name"} element={<CreatorOrTag />} />
            <Route path={"/tags/:name"} element={<CreatorOrTag />} />
            {/* <Route path="/auth" exact element={<Auth />} /> */}
            <Route path="/auth" exact element={(!user ? <Auth /> : <Navigate to="/posts" />)} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
