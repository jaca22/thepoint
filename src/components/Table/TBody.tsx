import React, { CSSProperties } from 'react';

import { Styled } from './Table.styles';

type TBodyProps = {
  children: React.ReactNode;
  style?: CSSProperties;
};

function TBody({ children, style = {} }: TBodyProps) {
  return (
    <Styled.TBody style={style}>
      {children}
    </Styled.TBody>
  );
}

export {
  TBody,
};
