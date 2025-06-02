import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import Navbar from "./components/Navbar";

export default function AppRouter() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}
