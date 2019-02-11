const theme = {
  colors: {},
  // good ol' Bootstrap-inspired breakpoints
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  // typography styles - for keeping sizes consistent
  typography: {
    // correspond with Google font actual weights for Roboto
    weights: {
      thin: '100',
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900',
    },
  },
}

// helper functions to ease using theme - components can import just the helpers they need and easily access the theme with them
export const getBreakpoint = breakpoint => props =>
  props.theme.breakpoints[breakpoint]

export const getColor = color => props => props.theme.colors[color]

export const getFontWeight = weight => props =>
  props.theme.typography.weights[weight]

export default theme
