import React, { CSSProperties } from 'react';

import { Styled } from './Table.styles';

type TrProps = {
  children: React.ReactNode;
  style?: CSSProperties;
};

function Tr({ children, style = {} }: TrProps) {
  return (
    <Styled.Tr style={style}>
      {children}
    </Styled.Tr>
  );
}

export {
  Tr,
};
