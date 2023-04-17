import styled from 'styled-components';

export const List = styled.ul`
  /* margin: 0 auto; */
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  /* outline: 1px dotted green; */
  padding: 10px 20px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
