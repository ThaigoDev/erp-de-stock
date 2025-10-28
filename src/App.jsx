import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Dashboard from "./pages/DashboardPage/Dashboard";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { SidebarProvider } from "@/components/ui/sidebar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <SidebarProvider
              style={{
                "--sidebar-width": "15rem",
                "--sidebar-width-mobile": "20rem",
              }}
            >
              <Dashboard />
            </SidebarProvider>
          }
        />
        <Route
          path="/products"
          element={
            <SidebarProvider
              style={{
                "--sidebar-width": "15rem",
                "--sidebar-width-mobile": "20rem",
              }}
            >
              <ProductPage/>
            </SidebarProvider>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
