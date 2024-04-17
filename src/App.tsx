import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}
