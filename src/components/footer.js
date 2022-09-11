import { Container, Nav, Navbar } from "react-bootstrap";


export default function Footer(){
    return(
        <Navbar
            fixed="bottom"
            bg="dark"
            variant="dark"
            className="align-items-center text-white"
        >
            <Container
                className="flex-column"
            >
                <p
                    className="mb-0"
                >
                    A Project for The Sparks Foundation
                </p>
                <Nav>
                    <Nav.Link
                        href="https://www.linkedin.com/in/harshitgarg-mercuryhg007/"
                        target='_blank'
                        className="text-white "
                    >
                        Made by <bold>HARSHIT GARG</bold>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}