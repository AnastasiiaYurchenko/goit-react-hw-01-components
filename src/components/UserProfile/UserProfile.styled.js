import styled from 'styled-components';

export const UserCard = styled.div`
  height: auto;
  width: 400px;
  margin: 20px auto;
  /* padding-top: 20px; */
  border-radius: ${p => p.theme.radii.xs};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* justify-content: center; */
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  width: 150px;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const UserInfo = styled.p`
  color: grey;
  font-size: 18px;
`;

export const StatsList = styled.ul`
  display: flex;
  /* justify-content: space-around; */
  background-color: #f2f2f2;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: calc(100% / 3);
  border: 1px solid #ddd; ;
`;

export const Label = styled.span`
  color: grey;
  font-size: 18px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
