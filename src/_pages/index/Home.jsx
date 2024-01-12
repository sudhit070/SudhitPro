import React, { useEffect } from 'react';
import { Loader } from '../../_components/common/Loader';

import rightArrow from '../../_assets/images/rightArrow.png';
import aboutMe from '../../_assets/images/about-me.png';
import serv1 from '../../_assets/images/serv-1.png';
import serv2 from '../../_assets/images/serv-2.png';

import { Link } from 'react-router-dom';

const Home = () => {

  const [loader, setLoader] = React.useState(false);

  return (
    <>
      {
        loader ? <Loader /> : <>
          <section className="section Hero">
            <div className="text-hero">
              <h1 className="maintext">I’m <span className="text-red">Sudhit Chauhan</span>,</h1>
              <h2 className="subtext">a Software Developer & Professional Sketcher experience with JavaScript, React,
                Django to deliver exceptional customer experiences.</h2>
              <Link to="/collections" className="btn btn-primary">Check Out My Work <img src={rightArrow} width="35"
                alt="arrow-icon" /></Link>
            </div>
          </section>
          <section className="section Services py-4 py-lg-5">
            <div className="container-fluid service-container">
              <div className="col-md-6 serv-left-patt"></div>
              <div className="col-md-6 serv-right-patt"></div>
            </div>
            <div className="container pt-lg-4">
              <div className="row g-3">
                <div className="col-md-6 px-3 px-lg-5">
                  <Link to="/collections" className="website">
                    <img src={serv2} className="img-fluid service-box" />
                  </Link>
                </div>
                <div className="col-md-6 px-3 px-lg-5">
                  <Link to="/collections" className="sketch">
                    <img src={serv1} className="img-fluid service-box" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="About">
            <div className="container upper-box">
              <div className="row mx-0">
                <div className="col-lg-6 section text-end about-parent-img">
                  <img src={aboutMe} alt="about me" className="img-fluid about-me-img" />
                </div>
                <div className="col-lg-6 section about-right">
                  <h2 className=""><span className="second-heading b-black">About Me</span></h2>
                  <p className="text-dark mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam,</p>
                  <p className="text-dark mb-5"> quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.</p>
                  <a href="#" className="btn btn-primary">See More <img src={rightArrow} width="35"
                    alt="arrow-icon" /></a>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5 d-none d-lg-block">
              <div className="container">
                <div className="row mx-0 justify-content-end">
                  <div className="col-lg-10 px-0">
                    <p className="mb-0 text-end pe-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="section Gallery">
        <div className="container">
          <div className="row mx-0">
            <div className="col-xl-6 align-self-center">
              <h2 className="text-white"><span className="second-heading b-white">My Gallery</span></h2>
              <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam,</p>
              <p className="text-white mb-5"> quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
              <div>
                <a href="#" className="btn btn-primary">See More <img src={rightArrow} width="35"
                  alt="arrow-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section Collections">
        <div className="container">
          <div className="row mx-0">
            <div className="col-xl-6 order-1 order-xl-2 align-self-center">
              <h2 className="text-xl-start"><span className="second-heading b-black">Collections</span></h2>
              <p className="text-dark text-xl-start mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam,</p>
              <p className="text-dark text-xl-start mb-5"> quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
              <a href="#" className="btn btn-primary float-xl-start">See More <img src={rightArrow} width="35"
                alt="arrow-icon" /></a>
            </div>
          </div>
        </div>
      </section> */}
        </>
      }
    </>
  )
}

export default Home;