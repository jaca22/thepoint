import React, { CSSProperties } from 'react';

import { THead } from './THead';
import { TBody } from './TBody';
import { Th } from './Th';
import { Tr } from './Tr';
import { Td } from './Td';

import { Styled } from './Table.styles';

type TableProps = {
  children: React.ReactNode;
  style?: CSSProperties;
};

function Table({ children, style = {} }: TableProps) {
  return (
    <Styled.Table style={style}>
      {children}
    </Styled.Table>
  );
}
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
Table.TBody = TBody;
Table.THead = THead;

export {
  Table,
};
