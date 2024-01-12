import React, { useLayoutEffect, useEffect } from 'react';
import { Outlet } from "react-router-dom";

import rightArrow from '../../../_assets/images/rightArrow.png';
import { SignIn } from '../../Modals/SignIn';

const Header = React.lazy(() => import('./Header'));
const Footer = React.lazy(() => import('./Footer'));

const FontSide = () => {

    const [outlet, setOutlet] = React.useState(true);
    // const mainContent = React.useRef(null);

    useLayoutEffect(() => setOutlet(false), []);

    useEffect(() => setOutlet(true), []);

    return (
        <>
            <Header />
            <main className='main-content'>
                <Outlet />
            </main>
            <section className="Contact position-relative">
                <div className="container">
                    <div className="row mx-0">
                        <div className="col-lg-4 contact-left-box section">
                            <p className="mb-5">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="btn btn-primary">Contact Me <img src={rightArrow} width="35"
                                alt="arrow-icon" /></a>
                        </div>
                        <div className="col-lg-8 section px-3 text-md-end">
                            <h2 className="text-white"><span className="second-heading b-white">Contact Me</span></h2>
                            <div className="d-flex justify-content-md-end gap-3 gap-lg-5 flex-wrap flex-md-nowrap">
                                <div className="d-flex gap-3">
                                    <div className="icon-cu text-white d-flex justify-content-center align-items-center"><i
                                        className="fa-solid fa-xl fa-phone"></i></div>
                                    <h5 className="icon-text mb-0"><a href="tel:+91 9510-589199" className="text-white fw-light">+91 9510-589199</a>
                                    </h5>
                                </div>
                                <div className="d-flex gap-3">
                                    <div className="icon-cu text-white d-flex justify-content-center align-items-center"><i
                                        className="fa-solid fa-xl fa-envelope"></i></div>
                                    <h5 className="icon-text mb-0"><a href="mailto:sudhit71241@gmail.com"
                                        className="text-white fw-light">sudhit71241@gmail.com</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

            <SignIn />
        </>
    )
}

export default FontSide;