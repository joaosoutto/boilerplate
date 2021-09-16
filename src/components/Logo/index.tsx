import Image from 'next/image'
import * as S from './styles'

import logo from '../../../public/img/logoH.png'
import logoMobile from '../../../public/img/logo.png'

export type LogoProps = {
  hideOnMobile?: boolean
}

const Logo = ({ hideOnMobile = false }: LogoProps) => (
  <S.Wrapper hideOnMobile={hideOnMobile}>
    {hideOnMobile ? (
      <Image width={60} height={60} src={logoMobile} alt="soutto" />
    ) : (
      <Image width={190} height={40} src={logo} alt="soutto" />
    )}
  </S.Wrapper>
)
export default Logo
