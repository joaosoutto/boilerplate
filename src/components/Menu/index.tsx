import Logo from 'components/Logo'

import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

const Menu = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default Menu
