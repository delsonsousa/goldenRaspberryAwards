import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  background-color: #d9d9d9;
  border: 1px solid #7d7d7d;
  border-top: none;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: 8px;
    user-select: none;

    &.active {
     background-color: #486284;
     color: #fafafa;
    }
  }
`