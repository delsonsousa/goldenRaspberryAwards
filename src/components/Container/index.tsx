import { ReactNode } from "react";
import { Container } from "./styled";

type Props = {
  children: ReactNode;
};

export default function (props: Props) {
  return <Container>{props.children}</Container>;
}
