import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "@/pages/SignupPage";
// import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import App from "@/App";
import DashboardPage from "@/pages/DashboardPage";
import MainLayout from "@/components/layout/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        
         <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
