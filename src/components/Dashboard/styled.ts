import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
  padding: 32px;

  > div.list {
    width: 100%;
  }
`;

export const Box = styled.div`
  padding: 32px;
  width: calc((100% * (6 / 12)) - 16px);
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  h3 {
    margin-bottom: 32px;
  }

  h4 {
    margin: 16px 0;
  }

  @media (max-width: 1024px) {
    width: calc(100% * 12 / 12);
  }
`;
