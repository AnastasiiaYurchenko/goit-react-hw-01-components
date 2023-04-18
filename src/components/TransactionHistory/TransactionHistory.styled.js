import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 50%;
  margin: 20px auto;
`;

export const TableHead = styled.th`
  border-collapse: collapse;
  border: 1px solid #ddd;
  padding-top: 12px;
  padding-bottom: 12px;
  /* text-align: left; */
  background-color: #04aa6d;
  color: white;
  text-transform: uppercase;
`;

export const Data = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;

  :first-letter {
    text-transform: uppercase;
  }
`;

export const Row = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;
