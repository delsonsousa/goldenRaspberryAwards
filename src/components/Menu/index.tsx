import { NavLink } from "react-router-dom";
import { Menu, Nav } from "./styled";

export default function () {
  const active = (navData: any) => (navData.isActive ? "active" : "");

  return (
    <Menu>
      <Nav>
        <NavLink className={active} to="/">
          Dashboard
        </NavLink>
        <NavLink className={active} to="/list?page=1">
          List
        </NavLink>
      </Nav>
    </Menu>
  );
}
