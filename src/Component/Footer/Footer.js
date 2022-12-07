import React from "react";
import { Link } from "react-router-dom";
import send from "../../assets/send.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral">
        <div className="footer p-10  text-neutral-content">
          <div>
            <span className="footer-title">Services</span>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <span className="footer-title text-center">Brand</span>
            <Link className="link link-hover">Lamborgini</Link>
            <Link className="link link-hover">Tesla</Link>
            <Link className="link link-hover">Ferari</Link>
            <Link className="link link-hover">Honda</Link>
            <Link className="link link-hover">Audi</Link>
            <Link className="link link-hover">Range Rover</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <div className="flex">
              <input
                style={{
                  borderRadius: "50px",
                  height: "40px",
                }}
                type="text"
                placeholder="Your email address"
                className="input input-bordered  w-full max-w-xs"
              />{" "}
              <img
                className="-ml-9 "
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                }}
                src={send}
                alt=""
              />
            </div>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </div>
        </div>
        <h1
          style={{
            borderTop: "1px solid gray",
            width: "full",
          }}
          className="text-xl pb-6 pt-3"
        >
          Copyright © 2022. All Rights Reserved By{" "}
          <span className="text-primary font-bold"> Huntdigitalmedia.com</span>
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
