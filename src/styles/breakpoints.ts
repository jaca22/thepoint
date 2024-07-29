import { css, RuleSet } from 'styled-components';

import { Styles } from 'styled-components/dist/types';

export const breakpoints: any = {
  xs: 320,
  sm: 540,
  md: 960,
  lg: 1280,
  xl: 1440,
};

export const mediaQuery: Record<string, (args: Styles<object>) => RuleSet<object>> = {
  xs: (...args) => css`
    @media (max-width: ${breakpoints.xs}px) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: ${breakpoints.md}px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${breakpoints.lg}px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${breakpoints.xl}px) {
      ${css(...args)};
    }
  `,
};
