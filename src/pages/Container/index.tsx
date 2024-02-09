import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { PageContainer } from "./styles";

export const Container = () => {
  return (
    <PageContainer>
      <Header />
      <NavBar />
    </PageContainer>
  );
};
