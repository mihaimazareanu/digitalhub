import { useState } from 'react'
import { BurgerContainer, BurgerMenu, HeaderContainer, LinkDiv, LinksMenu } from './HeaderStyles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const router = useRouter()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src="/images/logo4.svg" alt="logo representing a smaller sign, a forward slash and a bigger sign" width={100} height={100} onClick={() => setToggleMenu(false)} />
      </Link>
      <LinksMenu>
        <LinkDiv href="/dienstleistungen" aria-current="page" className={router.pathname === "/dienstleistungen" ? "active" : ""}>Dienstleistungen</LinkDiv>
        <LinkDiv href="/preise" aria-current="page" className={router.pathname === "/preise" ? "active" : ""}>Preise</LinkDiv>
        <LinkDiv href="/kontakt" aria-current="page" className={router.pathname === "/kontakt" ? "active" : ""}>Kontakt</LinkDiv>
      </LinksMenu>
      <BurgerMenu>
            {toggleMenu ? <RiCloseLine size="3rem" onClick={()=>setToggleMenu(false)} /> : <RiMenu3Line size="3rem" onClick={()=>setToggleMenu(true)} />  }
            {toggleMenu && (
                <BurgerContainer>
                  <LinkDiv href="/dienstleistungen" aria-current="page" className={router.pathname === "/dienstleistungen" ? "active" : ""} onClick={() => setToggleMenu(false)}>Dienstleistungen</LinkDiv>
                  <LinkDiv href="/preise" aria-current="page" className={router.pathname === "/preise" ? "active" : ""} onClick={() => setToggleMenu(false)}>Preise</LinkDiv>
                  <LinkDiv href="/kontakt" aria-current="page" className={router.pathname === "/kontakt" ? "active" : ""} onClick={() => setToggleMenu(false)}>Kontakt</LinkDiv>
                </BurgerContainer>
            )}
        </BurgerMenu>
    </HeaderContainer>
  )
}

export default Header
