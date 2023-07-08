import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogDetails from "./pages/BlogDetails";
import Protected from "./pages/Protected";
import BlogAdd from "./pages/BlogAdd";
import Profile from "./pages/Profile";
import MyBlog from "./components/MyBlog";
import ChangePassword from "./components/ChangePassword";

function App() {
    const isAuthenticate = true;
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/addblog" element={<BlogAdd />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/myblog" element={<MyBlog />} />
                <Route path="/changepassword" element={<ChangePassword />} />
                <Route
                    path="/details/:id"
                    element={
                        <Protected isAuthenticate={isAuthenticate}>
                            <BlogDetails />
                        </Protected>
                    }
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
