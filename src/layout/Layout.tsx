import React from 'react';
import { Outlet } from 'react-router-dom';

import { Styled } from './Layout.styles';

function Layout() {
  return (
    <Styled.Container>
      <Outlet />
    </Styled.Container>
  );
}

export {
  Layout,
};
