import styled from 'styled-components';

const TableContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const TableContainerItem = styled.div`
  flex: 1 1 0;
  min-width: 340px;
  overflow-x: auto;
`;

export const Styled = {
  TableContainer,
  TableContainerItem,
};
