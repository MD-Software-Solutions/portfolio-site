import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons1 from '@fortawesome/free-solid-svg-icons'
import * as Icons2 from '@fortawesome/free-brands-svg-icons'
import myLogo from '../../assets/images/ingle lett.svg'
import * as Tooltip from '@radix-ui/react-tooltip'

const SideBar = () => {
  return (
    <div className="nav-bar">
      {/* Logo */}
      <Link className="logo" to="/">
        <img src={myLogo} alt="logo" />
      </Link>

      {/* Navigation Links */}
      <nav>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={Icons1.faHome} color="#4d4d4e" />
              </NavLink>
            </Tooltip.Trigger>
            <Tooltip.Content side="top" align="center" className="tooltip-content">
              Home
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={Icons1.faUser} color="#4d4d4e" />
              </NavLink>
            </Tooltip.Trigger>
            <Tooltip.Content side="top" align="center" className="tooltip-content">
              About Me
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={Icons1.faBriefcase} color="#4d4d4e" />
              </NavLink>
            </Tooltip.Trigger>
            <Tooltip.Content side="top" align="center" className="tooltip-content">
              Portfolio
            </Tooltip.Content>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                <FontAwesomeIcon icon={Icons1.faEnvelope} color="#4d4d4e" />
              </NavLink>
            </Tooltip.Trigger>
            <Tooltip.Content side="top" align="center" className="tooltip-content">
              Contact
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </nav>

      <ul>
        <div className="socials">
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/soham-mutalik-desai-497416328">
              <FontAwesomeIcon icon={Icons2.faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/MD-Software-Solutions">
              <FontAwesomeIcon icon={Icons2.faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=sohamdesai6508@gmail.com">
              <FontAwesomeIcon icon={Icons1.faEnvelope} color="#4d4d4e" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default SideBar;
