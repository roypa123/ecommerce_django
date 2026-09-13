import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "@/pages/SignupPage";
import App from "@/App";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
