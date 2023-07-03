import { Container, LinkDiv, Links, NoHoverLink, TextDiv } from './FooterStyles'

function Footer() {
  return (
    <Container id="footer">
      {<Links>
        <LinkDiv href="/impressum" aria-current="page">Impressum</LinkDiv>
        <LinkDiv href="/datenschutz" aria-current="page">Datenschutz</LinkDiv>
      </Links>}
      <TextDiv>
        <p>© Copyright 2023</p>
        <p> Mihai Mazareanu, Windloh 30A, 22589 Hamburg</p>
        <NoHoverLink href="tel:+491622490129">Telefon: +49 (0) 162 249 01 29</NoHoverLink>
        <NoHoverLink href="mailto:mihai@digitalhub-hamburg.de">Email: mihai@digitalhub-hamburg.de</NoHoverLink>
      </TextDiv>
    </Container>
  )
}

export default Footer
