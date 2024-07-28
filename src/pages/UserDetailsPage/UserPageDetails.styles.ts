import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
`;

const UserDetails = styled.div`
  display: flex;
  flex-grow: 1;
`;

const UserDetailsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemLabel = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const ItemValue = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Styled = {
  Container,
  UserDetails,
  UserDetailsGrid,
  Item,
  ItemLabel,
  ItemValue,
};
