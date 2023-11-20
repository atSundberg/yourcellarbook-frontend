import React, { useState } from "react";

import logo from "../assets/images/logo_yrcllrbk.png";
import SignUpModal from "./modals/SignUpModal";
import LoginModal from "./modals/LoginModal";
import { Modal } from "bootstrap/dist/js/bootstrap.esm";

function Navbar({ isLoggedIn, setIsLoggedIn, user, onLogin }) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    // const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    // const doLogin = () => {
    //     const loginSuccessful = true;
    //     console.log("doLogin();")

    //     if (loginSuccessful) {
    //         setIsLoginModalOpen(false);
    //         const modal = new Modal(document.getElementById("loginModal"))
    //         console.log(modal)

    //         modal.toggle();
    //         console.log(modal)

    //         console.log("login successful ", isLoginModalOpen )
    //     } else {

    //     }
    //     console.log(isLoginModalOpen)
    // }

    // const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
    // const openSignUpModal = () => setIsSignUpModalOpen(true);

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ maxHeight: 100 + "px" }}
                        className="d-inline-block align-text-top p-2"
                    />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarToggler">
                    <div className="ml-auto">
                        <ul className="navbar-nav mb-lg-0 align-items-end">
                            {isLoggedIn ? (
                                <li className="nav-item p-1">
                                    <button
                                        type="button"
                                        className="btn btn-info btn-outlined">
                                        Sign Out
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item p-1">
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#loginModal">
                                            Log in
                                        </button>
                                        {/* <button type="button" className="btn btn-info" onClick={toggleLoginModal}>Log in</button> */}
                                    </li>
                                    <li className="nav-item p-1">
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#signUpModal">
                                            Sign up
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <SignUpModal />
            <LoginModal onLogin={onLogin} />
            {/* <LoginModal isModalOpen={isLoginModalOpen} doLogin={doLogin} /> */}
            {/* <SignUpModal openLoginModal={openLoginModal}/>
            <LoginModal openSignUpModal={openSignUpModal}/> */}
        </nav>
    );
}

export default Navbar;
