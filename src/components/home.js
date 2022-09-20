import {
    Button, 
    Col,
    Container, 
    Row 
} from "react-bootstrap";

import kids from "../assets/img/larm-rmah-AEaTUnvneik-unsplash.jpg"


export default function Home() {
    return(
        <Container
            className="d-flex justify-content-between"
            style={{
                minHeight:"80%",
                color: "white",
            }}
        >
            <Row xs={1} md={2} lg={2}>
                <Col
                    className="m-10 d-flex flex-column justify-content-center align-items-center "
                >
                    <h1
                        className="gradient-text"
                        style={{
                            fontSize:"60px",
                            fontWeight:"800"
                        }}
                    >
                        Donate For A Cause.
                    </h1>
                    <h2
                        className="gradient-text"
                        style={{
                            fontWeight:"700"
                        }}
                    >
                        CHANGE LIVES. SAVE LIVES.
                    </h2>
                    <h4
                        style={{
                            color:"#212529",
                        }} 
                    >
                        We make a living by what we get, but we make a life by what we give.
                    </h4>
                    <a
                        href="https://pages.razorpay.com/pl_KKJAq4OFRpuV7u/view"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            className="donate-button"
                            style={{
                                color:"white",
                                marginTop:"20px",
                                fontSize:"20px",
                                fontWeight:"600",
                                border:"none"
                            }} 
                        >
                            Donate
                        </Button>
                    </a>
                </Col>
                <Col
                    className="d-flex justify-content-center align-items-center"
                    md={6}
                    lg={6}
                    // md={{span: 3}}
                    // md={{offset:0}}
                >
                    <img
                        height="80%"
                        // height={{sm: "50%", md:"80%"}}
                        width="90%"
                        src={kids}
                        alt="Kids_Image"
                        style={{
                            borderRadius:"20px",
                            boxShadow: "5px 5px 10px 0px black"
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
};
