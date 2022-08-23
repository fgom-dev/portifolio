import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { HashLink } from 'react-router-hash-link'

export function Header() {
  return (
    <HeaderContainer>
      <div className="navLogo">
        <a href="/">
          <img
            src="https://readme-typing-svg.herokuapp.com?font=VT323&size=40&duration=2000&pause=1500&color=11F707&center=true&vCenter=true&width=150&lines=Hi%2C+I+am;fgom-dev"
            alt="Typing SVG"
          />
        </a>
      </div>

      <nav>
        <NavLink to="/" title="Home">
          Home
        </NavLink>
        <HashLink to="/#teste" title="Portifólio">
          Portifólio
        </HashLink>
        <NavLink to="/sobre" title="Sobre">
          Sobre
        </NavLink>
        <NavLink to="/curriculo" title="Currículo">
          Currículo
        </NavLink>
        <NavLink to="/contato" title="Contato">
          Contato
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
