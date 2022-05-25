import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20  bg-base-200">
      <div className="footer p-10">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button
                className="btn btn-secondary text-white
              transition-all hover:scale-x-110 duration-300 delay-75 hover:btn-primary hover:ease-in hover:text-white  absolute top-0 right-0 rounded-l-none"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 text-center">&copy; 2022 | All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
