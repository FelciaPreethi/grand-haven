import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <article className="footer-article">
        <h2 className="article__title">Find US</h2>
        <p className="article__content">
          6258 Selkirk Street
          <br /> Sidney, BC <br /> V8V 5B9
        </p>
        <a href="maps.google.com">Google maps</a>
      </article>
      <article className="footer-article">
        <h2 className="article__title">Talk With US</h2>
        <p className="article__content">
          Toll-Free: 1 (855) 737-2685
          <br /> Phone: (250) 940-7500 <br />
          Email Us : grandhaven@ymail.com
        </p>
      </article>
      <article className="footer-article">
        <h2 className="article__title">Stay With US</h2>
        <Link to="/booking">
          <p>Get the Best Room Rate</p>
        </Link>
      </article>
    </footer>
  );
}

export default Footer;
