import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  input {
    display: block;
    width: 100%;
    height: 56px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
    padding: 16px;
    outline: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px solid #bababa;
    transition: border 0.2s ease 0s;
    background-color: transparent;
  }

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 56px;
    padding: 16px;
    background-color: transparent;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #486284;

    svg {
      width: 16px;
      height: 16px;
    }
}
`
