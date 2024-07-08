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
import Sample from "./pages/Sample";
import Logout from "./pages/Logout";
import useAuth from "./hooks/useAuth";

function App() {
  const { auth } = useAuth();

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="home" element={<Welcome />} /> */}
            {!auth && <Route path="login" element={<Login />} />}
            {!auth && <Route path="signup" element={<Signup />} />}
            {auth && <Route path="logout" element={<Logout />} />}
            <Route path="unauthorized" element={<Unauthorized />} />

            {/* Product Routes */}
            <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
              <Route path="products" element={<Products />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="sample" element={<Sample />} />
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
