import React from 'react';
import logo from '../../../_assets/images/white-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="position-relative">
      <div className="container py-4">
        <div className="d-flex gap-3 align-items-center">
          <Link href="/"><img src={logo} alt="logo" className="footer-logo" width="210" /></Link>
          <span className="divider-box"></span>
          <p className="mb-0 text-uppercase text-white fw-light">Designed & Develop By Cartoon75</p>
        </div>
      </div>
      <div className="row mx-0 footer-des">
        <div className="col-md-8 footer-box-1"></div>
        <div className="col-md-1 footer-box-2"></div>
        <div className="col-md-3 footer-box-3">
          <div className="icon">
            <a href="#" target='_blank' className="text-white"><i className="fa-brands fa-2x fa-linkedin-in"></i></a>
          </div>
          <div className="icon">
            <a href="#" target='_blank' className="text-white"><i className="fa-brands fa-2x fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;