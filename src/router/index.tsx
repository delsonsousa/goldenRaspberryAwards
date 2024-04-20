import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
