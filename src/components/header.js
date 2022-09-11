import { 
  Container, 
  Navbar, 
  NavbarBrand,
  Nav
} from 'react-bootstrap';

import mainlogo from '../assets/img/logo.png'

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      varient="dark"
      fixed='top'
    >
      <Container
      >
        <NavbarBrand
          href="/"
          className='text-white'
        >
          <img
            src={mainlogo}
            alt='logo'
            width="40"
            height="40"
            className="bg-light rounded-circle d-inline-block align-top"
          />
          {' '}
          <h2 
            className='ml-5 d-inline'
            style={{
              marginLeft: "10px"
            }}
          >
            The Sparks Foundation
          </h2>
        </NavbarBrand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          className="border-0"           
        />
        <Navbar.Collapse 
          id="responsive-navbar-nav"
          className='justify-content-end'
        >
          <Nav
            className='align-items-end'
            style={{
              fontSize: "20px"
            }}
          >
            <Nav.Link
              href="https://www.thesparksfoundationsingapore.org/"
              target='_blank'
              className="text-white"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="https://help.unicef.org/in/reimagine?campaignID=7011i000000kqRfAAI"
              target='_blank'
              className="text-white"
            >
              Cause
            </Nav.Link>
            <Nav.Link
              href="https://mercuryhg007.github.io/home/"
              target='_blank'
              className="text-white"
            >
              Developer
            </Nav.Link>
            {/* <Nav.Link
              href="/contact"
              className="text-white"
            >
              Contact
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}