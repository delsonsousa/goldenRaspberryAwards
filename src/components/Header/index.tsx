import Container from "../Container";
import { Logo } from "../Logo/styled";
import { Header } from "./styled";

export default function () {
  return (
    <Header>
      <Container>
        <Logo href="/">TEST FRONT-END</Logo>
      </Container>
    </Header>
  );
}
