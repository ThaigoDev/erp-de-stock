import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Dashboard from "./pages/DashboardPage/Dashboard";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductPage from "./pages/ProductPage/ProductPage"; 
import SupplierPage from "./pages/SupplierPage/SupplierPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
              <Dashboard />
          }
        />
        <Route
          path="/products"
          element={
              <ProductPage/>
          }
        />
        <Route
          path="/suppliers"
          element={
              <SupplierPage/>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
