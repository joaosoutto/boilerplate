import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/nunito-v16-latin-300.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/nunito-v16-latin-regular.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('/fonts/nunito-v16-latin-600.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/nunito-v16-latin-700.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothibg: antialiased;
    -moz-osx-font-smoothing: antialiased;

    &::before,
    &::afeter {
      box-sizing: inherit
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}


`

export default GlobalStyles
