import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNave = () => {
  const { googleProviderLogin } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleProviderLogin(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With GitHub
        </Button>
      </ButtonGroup>

      <div>
        <h5 className="my-3">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>

          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>

      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideNave;
