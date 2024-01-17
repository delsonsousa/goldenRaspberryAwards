import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/DashBoard";
import { List } from "./pages/List";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/history" element={<List />} />
    </Routes>
  );
};
