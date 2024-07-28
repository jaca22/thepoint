import React from 'react';

import { Styled } from './Table.styles';

type THeadProps = {
  children: React.ReactNode;
};

function THead({ children }: THeadProps) {
  return (
    <Styled.THead>
      {children}
    </Styled.THead>
  );
}

export {
  THead,
};
