import * as S from './styles'

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description} w</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Dev in front of pc, using it"
    />
  </S.Wrapper>
)

export default Main
