import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Section } from "../components/Section/styled";

export default function Index() {
  return (
    <>
      <Header />
      <Section>
        <Menu />
        <Outlet />
      </Section>
    </>
  );
}
