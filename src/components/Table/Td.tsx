import React, { CSSProperties } from 'react';

import { Styled } from './Table.styles';

type TdProps = {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: (() => void) | undefined;
  label?: string;
};

function Td({
  children,
  label = '',
  style = {},
  onClick = undefined,
}: TdProps) {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Styled.Td data-label={label} onClick={onClickHandler} style={style}>
      {children}
    </Styled.Td>
  );
}

export {
  Td,
};
