import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 25px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
