import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/NavBar";
import "./components/Landing";
import LandingPage from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import RequireAuth from "./auth/RequireAuth";
import Layout from "./components/Layout";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="home" element={<Welcome />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="unauthorized" element={<Unauthorized />} />

            {/* Product Routes */}
            <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={["USER"]} />}>
              <Route path="home" element={<Welcome />} />
            </Route>
            {/* </Route> */}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
