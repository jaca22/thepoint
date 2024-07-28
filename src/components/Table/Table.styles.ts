import styled from 'styled-components';

const Th = styled.th`
  padding: 0.65rem;
  text-align: inherit;
  position: relative;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dee2e6;
`;

const Td = styled.td`
  padding: 0.65rem;
  text-align: inherit;
  min-width: 50px;
`;

const THead = styled.thead`
  ${Th} {
    font-weight: bold;
    border-top: 1px solid #dee2e6;
  }
`;

const TBody = styled.tbody`
  ${Td} {
    font-weight: normal;
  }
`;

const Resizeable = styled.div`
  resize: horizontal;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  border-collapse: collapse;

  @media screen and (max-width: 600px) {
      table {
          border: 0;
      }

      ${THead} {
          border: none;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
      }

      ${Tr} {
          display: block;
          margin-bottom: .625rem;
      }

      ${Td} {
          border-bottom: 1px solid #dee2e6;
          display: block;
          font-size: 0.8rem;
          text-align: right;
        
          &::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
          }
      }
      
      ${Td}:last-child {
          border-bottom: 0;
      }
  }
`;

export const Styled = {
  Resizeable,
  THead,
  TBody,
  Table,
  Th,
  Tr,
  Td,
};
