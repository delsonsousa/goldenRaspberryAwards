import styled from "styled-components";

export const Menu = styled.aside`
  padding: 2rem;
  width: 100%;
  max-width: 200px;
  min-height: 100%;
  background-color: #d9d9d9;
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.32);
`
export const Nav = styled.nav`
  a {
    display: block;
    width: fit-content;
    color: #486284;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    &.active {
      font-weight: bold;
    }
  }
`