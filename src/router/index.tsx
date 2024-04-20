import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import Base from "../pages";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index path="" element={<Dashboard />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
