import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "@/pages/SignupPage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import MainLayout from "@/components/layout/MainLayout";
import CreateCategoryPage from "@/pages/CreateCategoryPage";
import CreateSubcategoryPage from "@/pages/CreateSubcategoryPage";
import CreateProductPage from "@/pages/CreateProductPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
           <Route path="/categories/create" element={<CreateCategoryPage />} />
           <Route path="/subcategories/create" element={<CreateSubcategoryPage />} />
           <Route path="/products/create" element={<CreateProductPage />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
