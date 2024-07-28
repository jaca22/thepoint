import React, { CSSProperties } from 'react';

import { Styled } from './Table.styles';

type ThProps = {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: (() => void) | undefined;
  resizable?: boolean;
};

function Th({
  children,
  style = {},
  onClick = undefined,
  resizable = false,
}: ThProps) {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Styled.Th onClick={onClickHandler} style={style}>
      {resizable ? (
        <Styled.Resizeable>
          {children}
        </Styled.Resizeable>
      ) : children}
    </Styled.Th>
  );
}

export {
  Th,
};
