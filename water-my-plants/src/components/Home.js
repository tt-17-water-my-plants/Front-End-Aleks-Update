import React from "react";
import { Link } from "react-router-dom";
import { Container } from './Styles/HomeStyles';
import { RiPlantLine } from "react-icons/ri";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Container>
        <div className='icon'><RiPlantLine /></div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/createaccount">
          <button>Create Account</button>
        </Link>
      </Container>
    </>
  );
};

export default Home;
