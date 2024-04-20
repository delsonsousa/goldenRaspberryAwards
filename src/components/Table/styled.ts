import styled from "styled-components";

export const Table = styled.table`
  font-family: arial, sans-serif;

  border-collapse: collapse;

  width: 100%;

  th {
    text-align: left;

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

  tr.center {
    th {
      text-align: center;
    }
  }

  td,
  th {
    border: 1px solid #7d7d7d;

    padding: 8px;

    width: 25%;

    font-size: 10px;
  }

  tr:nth-child(odd) {
    background-color: #d9d9d9;
  }
`;
