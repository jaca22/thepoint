import styled from 'styled-components';

const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TableContainerItem = styled.div`
  flex: 1 1 0;
  min-width: 340px;
  overflow-x: auto;
  
  th, th > div, td {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
  }
`;

export const Styled = {
  TableContainer,
  TableContainerItem,
};
