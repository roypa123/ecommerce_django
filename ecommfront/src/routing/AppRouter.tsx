import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "@/pages/SignupPage";
// import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import App from "@/App";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
