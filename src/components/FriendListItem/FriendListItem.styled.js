import styled from 'styled-components';

export const Circle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${p => {
    // console.log(p);
    return p.status ? p.theme.colors.green : p.theme.colors.red;
  }};
`;

export const Avatar = styled.img`
  height: 48px;
  /* width: 50px; */
  border-radius: ${p => p.theme.radii.xs};
  /* outline: 1px dotted green; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
