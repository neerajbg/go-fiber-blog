import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <>
      <Container fluid className="container-fluid header">
        <h1 className="text-center text-uppercase">
          React Application with Go fiber Backend
        </h1>
      </Container>
      <Container>
        <div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {loggedIn ? (
                <>
                  Welcome back {user.email}
                  <Link to="/logout">&nbsp; &nbsp; Logout</Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Header;
