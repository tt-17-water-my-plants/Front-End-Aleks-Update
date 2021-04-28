import React from "react";
import { Link } from "react-router-dom";
import { Container } from './Styles/HomeStyles';
import homeImg from './Styles/images/home-image.png';

const Home = () => {
  return (
    <Container>
      <div className='imageContainer'>
        <img className='image' src={homeImg} />
      </div>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/createaccount">
        <button>Create Account</button>
      </Link>
    </Container>
  );
};

export default Home;
