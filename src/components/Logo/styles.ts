import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 20px;
      height: 20px;
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ hideOnMobile }) => css`
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
