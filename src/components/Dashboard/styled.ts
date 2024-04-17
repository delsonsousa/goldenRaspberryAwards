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
`

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
`

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  th {
    text-align: center;

    input,
    select {
      display: block;
      width: 100%;
      height: 32px;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.2;
      border-radius: 8px;
      padding: 8px;
      outline: none;
      border: none;
      transition: border 0.2s ease 0s;
      background-color: #fafafa;
      margin-top: 4px;
    }
  }

  td, th {
    border: 1px solid #7d7d7d;
    padding: 16px;
    width: 25%;
    font-size: 10px;
  }
  tr:nth-child(odd) {
    background-color: #d9d9d9;
  }
`