import React, { useState } from "react";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/images/logo_yrcllrbk.png";
import SignUpModal from "./modals/SignUpModal";
import LoginModal from "./modals/LoginModal";

import WavyBar from "./svg-images/WavyBar";
import { useLanguage } from "../config/LanguageProvider";
import LanguageDropdown from "./dropdowns/LanguageDropdown";

function Navbar({ isLoggedIn, user, onLogin, setRoute, onLogout }) {
    const { translations } = useLanguage();
    const [showModal, setShowModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleLogin = async (token, user) => {
        onLogin(token, user);
        setRoute("homepage");
    };

    const handleSwitchModal = () => {
        if (showModal === true) {
            setShowModal(false);
            setShowSignupModal(true);
        } else {
            setShowSignupModal(false);
            setShowModal(true);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
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
                                <li className="nav-item p-1">
                                    <button
                                        className="btn btn-outline-info"
                                        onClick={() => setRoute("public")}>
                                        {translations &&
                                            translations[
                                                "navbar.button.public"
                                            ]}
                                    </button>
                                </li>
                                <li className="nav-item p-1 order-5">
                                    <LanguageDropdown />
                                </li>
                                {isLoggedIn ? (
                                    <>
                                        <li className="nav-item p-1 order-last">
                                            <button
                                                type="button"
                                                className="btn btn-info btn-outlined"
                                                onClick={() => {
                                                    setRoute("account");
                                                }}>
                                                {
                                                    <FontAwesomeIcon
                                                        icon={faGear}
                                                    />
                                                }
                                            </button>
                                        </li>
                                        <li className="nav-item p-1">
                                            <button
                                                type="button"
                                                className="btn btn-info btn-outlined"
                                                onClick={onLogout}>
                                                {translations &&
                                                    translations[
                                                        "navbar.button.logout"
                                                    ]}
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item p-1">
                                            {showModal && (
                                                <LoginModal
                                                    onLogin={handleLogin}
                                                    setShowModal={setShowModal}
                                                    handleSwitchModal={
                                                        handleSwitchModal
                                                    }
                                                />
                                            )}
                                            <button
                                                type="button"
                                                className="btn btn-info"
                                                onClick={() =>
                                                    setShowModal(true)
                                                }>
                                                {translations &&
                                                    translations[
                                                        "navbar.button.login"
                                                    ]}
                                            </button>
                                        </li>
                                        <li className="nav-item p-1">
                                            {showSignupModal && (
                                                <SignUpModal
                                                    onSignup={handleLogin}
                                                    setShowModal={
                                                        setShowSignupModal
                                                    }
                                                    handleSwitchModal={
                                                        handleSwitchModal
                                                    }
                                                />
                                            )}
                                            <button
                                                type="button"
                                                className="btn btn-info"
                                                onClick={() =>
                                                    setShowSignupModal(true)
                                                }>
                                                {translations &&
                                                    translations[
                                                        "navbar.button.signup"
                                                    ]}
                                            </button>
                                        </li>
                                    </>
                                )}
                                {/* {
                                    <li className="nav-item p-1">
                                        <button
                                            className="btn flag-button"
                                            onClick={() =>
                                                console.log("us")
                                            }></button>
                                    </li>
                                } */}
                            </ul>
                        </div>
                    </div>
                </div>
                {(showModal || showSignupModal) && (
                    <div className="modal-backdrop fade show"></div>
                )}
            </nav>
            <WavyBar />
        </div>
    );
}

export default Navbar;
