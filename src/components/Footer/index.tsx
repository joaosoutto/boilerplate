import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mailto:joaosoutto@hotmail.com">joaosoutto@hotmail.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://github.com/joaosoutto"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/joaosoutto/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Linkedin
          </a>

          <a
            href="https://www.instagram.com/jsoutto/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Brazil</span>
        <span>Belo Horizonte / MG</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2021 All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
