import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Image from "../images/developer.jpg";
import Header from "./header";
import Footer from "./Footer";
function About() {
  return (
    <div>
      <Header />
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <h1>
            <u>About the developer</u>
          </h1>
        </div>
        <img
          src={Image}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "80px",
            marginLeft: "550px",
            marginBottom: "-70px",
            border: "solid #192734 4px",
          }}
        ></img>
        <div
          style={{
            width: "400px",
            height: "250px",
            backgroundColor: "white",
            marginBottom: "20px",
            marginLeft: "435px",
            border: "solid #192734 4px",
            borderRadius: "30px",
          }}
        >
          <br />
          <br />
          <br />
          <div
            class="container"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            Hola!!, myself Shivam Garg, a 2nd year CS student at DTU. Currently,
            I am exploring the field of web development and trying to have a
            hand-on-experience over MERN stack through some projects. I am also
            very passionate about coding.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
