import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";

const Navbarcmpt = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="mr-5">
                    <img src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700544484/logo_zjepsm.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto mx-auto my-2 my-lg-0" style={{ maxHeight: "100px", gap: "3rem" }} navbarScroll>
                        <Nav.Link className="actionLink" href="#action1" style={{ fontSize: "14px", fontWeight: "400" }}>
                            HOME
                        </Nav.Link>
                        <Nav.Link className="actionLink" href="#action2" style={{ fontSize: "14px", fontWeight: "400" }}>
                            PROFILE
                        </Nav.Link>
                        <Nav.Link className="actionLink" href="#action3" style={{ fontSize: "14px", fontWeight: "400" }}>
                            REPORTS
                        </Nav.Link>
                        <Nav.Link className="actionLink" href="#action4" style={{ fontSize: "14px", fontWeight: "400" }}>
                            INSIGHTS
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" style={{ gap: "2rem" }}>
                        <Button
                            variant="outline-secondary"
                            style={{ width: "100px", height: "48px", fontSize: "14px", fontWeight: "400" }}
                        >
                            LOGIN
                        </Button>
                        <Button
                            variant="outline-secondary"
                            style={{ width: "142px", height: "48px", fontSize: "14px", fontWeight: "400" }}
                        >
                            GET STARTED
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbarcmpt;
