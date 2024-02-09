import { Routes, Route } from "react-router-dom";
import { Container } from "./pages/Container";
import { Dashboard } from "./pages/Container/components/DashBoard";
import { List } from "./pages/Container/components/List";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="list" element={<List />} />
      </Route>
    </Routes>
  );
};
