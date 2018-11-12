import { injectGlobal, css } from 'styled-components'

export const theme = {
  colors: {
    bg: '#f7f7f7',
    text: '#9b9b9b',
    text_darker: '#979797',
    text_dark: '#6d6d6d',
    grey: '#4a4a4a',
    gray: '#b5b5b5',
    palegrey: '#cfcfcf',
    lightgrey: '#a7a7a7',
    bordergrey: '#cdcdcd',
    snow: '#ffffff',
    black: '#333333',
    orange: '#deb93d',
    yellow: '#f7d666',
    yellow_bright: '#e2bf44',
    sky: '#4a90e2',
    lightblue: '#94b7db',
    trademark: '#b3b3b3',
    alert: '#cd5832',
    alertBg: 'rgba(249, 119, 77, 0.1)'
  },
  fontSize: {
    h1: '44px',
    h2: '36px',
    h3: '28px',
    h4: '24px',
    h5: '18px',
    base: '16px',
    medium: '14px',
    small: '10px'
  },
  metrics: {
    marginHorizontal: '24px',
    marginVertical: 10,
    section: 25,
    baseMargin: 10,
    appMargin: 16,
    doubleBaseMargin: 20,
    smallMargin: 5,
    doubleSection: 50,
    horizontalLineHeight: 1,
    buttonRadius: 4,
    inputHeight: 50
  }
}

const sizes = {
  tablet: 768,
  phone: 376
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes)
  .reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
    return acc
  }, {})

injectGlobal`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-weight: normal;
  }
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: sans-serif;
    background: ${theme.colors.bg};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    font-smooth: auto;
    -moz-osx-font-smoothing: auto;
    -webkit-overflow-scrolling: touch;
    * {
      outline: 0;
      box-sizing: border-box;
    }
    textarea {
      resize: none;
    }
    #root {
      height: 100%;
    }
    .scroll-animation {
      opacity: 0;
    }
  }
`
