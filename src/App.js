import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogDetails from "./pages/BlogDetails";
import Protected from "./pages/Protected";
import BlogAdd from "./pages/BlogAdd";

function App() {
    const isAuthenticate = false;
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/addblog" element={<BlogAdd />} />
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
