import { breakpoints as defaultBreakpoints } from 'styles/breakpoints';

import { useWindowSize } from './useWindowSize';

const useBreakpoint = (breakpoints = defaultBreakpoints) => {
  const windowSize = useWindowSize();

  const sortedBreakpoints = Object.keys(breakpoints)
    .map((k) => [k, breakpoints[k]])
    .sort((a, b) => b[1] - a[1]);

  const getCurrentBreakpoint = () => {
    // eslint-disable-next-line consistent-return, no-plusplus
    for (let i = 0; i < sortedBreakpoints.length; i++) {
      const b = sortedBreakpoints[i];
      if (windowSize.innerWidth >= b[1]) {
        return b[0];
      }
    }
    return breakpoints[breakpoints.length - 1][0];
  };

  return {
    breakpoint: getCurrentBreakpoint(),
  };
};

export { useBreakpoint };
