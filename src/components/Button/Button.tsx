import React from 'react';

import { Styled } from './Button.styles';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <Styled.Button onClick={onClick}>
      {children}
    </Styled.Button>
  );
}

export {
  Button,
};
