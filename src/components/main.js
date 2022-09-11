import { Routes, Route } from "react-router";

import Home from "./home";
import Contact from "./contact";
import { Container } from "react-bootstrap";


export default function Main(){
    return(

        <Container
            className="d-flex justify-content-center align-items-center"
            style={{
                height: "83vh", 
                minWidth: "100%", 
                margin: "0",
                padding:"0", 
                marginTop: "65px", 
                // background:"#192e3a"
                background:"#A5C9CA"
                // background: "#E7F6F2"
            }}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Container>
    )
}