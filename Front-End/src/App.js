import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import SigninForm from "./signin";
import SignupForm from "./signup";
import SignoutForm from "./signout";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div class="body">
          <div class="banner">
            <Navbar bg="light" variant="dark">
              <Container className="topnav">
                <Nav active="/">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>
                    Contact Us
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/hotel"}>
                    Hotel
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/mybookings"}>
                    My Bookings
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/signout"}>
                    Sign Out
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <br />
          </div>
        </div>

        <Routes>
          <Route
            path="/signin"
            element={
              <div className="bg_image">
                {" "}
                <SigninForm />{" "}
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="bg_image">
                {" "}
                <SignupForm />{" "}
              </div>
            }
          />
          <Route
            path="/signout"
            element={
              <div className="bg_image">
                {" "}
                <SignoutForm />{" "}
              </div>
            }
          />
          <Route
            path="/signin"
            element={
              <div className="bg_image">
                {" "}
                <SigninForm />{" "}
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="bg_image">
                {" "}
                <SignupForm />{" "}
              </div>
            }
          />
          <Route
            path="/*"
            element={
              <div className="bg_image">
                {" "}
                <SigninForm />{" "}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
