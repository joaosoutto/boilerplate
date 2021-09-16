import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Heading
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </S.Wrapper>
)

export default Home
