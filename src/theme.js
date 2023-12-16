const breakpoints = ['320', '834', '1440'];


export const theme = Object.freeze({
  // Colors / Example: background-color: ${p => p.theme.colors.white};
  colors: {
    // Primary
    primaryWhite: '#FFFFFF',
    primaryBlack: '#050505',
    primaryViolet: '#B6C3FF',
    primaryBlack2: '#0F0F0F',
    primaryLiteGreen: '#45FFBC',
    primaryGray: '#B6B6B6',
    primaryGreenLite: '#E3FFA8',
    // Secondary
    secondaryGray1: '#292928',
    secondaryPink: '#FFC4F7',
    secondaryYellow: '#FFF3B7',
    // InputValid
    error: '#E74A3B',
    correct: '#3CBC81',
  },

  // Animation / Example: transition: ${p => p.theme.transition.customTrans};
  transition: {
    customTrans: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Media request / Example: @media (${ p => p.theme.mq.tablet}) {

  mq: {
    mobile: `min-width: ${breakpoints[0]}px`,
    tablet: `min-width: ${breakpoints[1]}px`,
    desktop: `min-width: ${breakpoints[2]}px`,
  },
});
