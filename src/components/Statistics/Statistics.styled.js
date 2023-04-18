import styled from 'styled-components';

const RandomHexColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Section = styled.section`
  margin: 20px auto;
  width: 30%;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: calc(100% / 5);
  height: 80px;
  /* background-color: ${RandomHexColor()}; */
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
