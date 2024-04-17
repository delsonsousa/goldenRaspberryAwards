import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Section } from "../components/Section/styled";

export default function () {
  return (
    <>
      <Header />
      <Section>
        <Menu />
        <Dashboard />
      </Section>
    </>
  );
}
