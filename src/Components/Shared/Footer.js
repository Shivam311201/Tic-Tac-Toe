import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  GitHub,
  Twitter,
  Facebook,
  Google,
  Instagram,
} from "@material-ui/icons";
import "../../styles.css";

function Footer() {
  return (
    <div class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Facebook fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Twitter fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <GitHub fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Google fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Instagram fontSize="medium" />
          </a>
        </section>
        <div style={{ marginTop: "-10px", marginBottom: "9px" }}>
          <b>Contact us</b>:{" "}
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            GamingsSG@gmail.com{" "}
          </a>
        </div>
      </div>
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a class="text-white" href="index" style={{ textDecoration: "none" }}>
          {" "}
          SG Gamings
        </a>
      </div>
    </div>
  );
}
export default Footer;
