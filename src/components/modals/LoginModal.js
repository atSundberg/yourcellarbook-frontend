import React, { useEffect, useState } from "react";
import { login } from "../../api/login";
import { getUser } from "../../api/getUser";
import config from "../../config/config";

function LoginModal({ onLogin, setShowModal, handleSwitchModal }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        // console.log("Navbar.handleLogin: ", userInfo);
        try {
            const result = await login(userInfo);

            if (result) {
                const user = await getUser(userInfo.username, result.token);

                if (user) {
                    setShowModal(false);
                    onLogin(result.token, user);
                    setUserInfo({ username: "", password: "" });
                }
            } else {
                console.error("Something went wrong...", result);
            }
        } catch (error) {
            setErrorMessage("Login unsuccessful, please try again");

            console.error("Login failed:", error);
        }
    };

    const handleChange = (e) => {
        if (errorMessage) {
            setErrorMessage("");
        }

        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    return (
        <div>
            <div
                className="modal fade show mystyle"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
                style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">
                                Log in
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label
                                        htmlFor="username"
                                        className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        value={userInfo.username}
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={userInfo.password}
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {errorMessage && (
                                    <div className="mb-0">
                                        <div className="col-2"></div>
                                        <div className="col-10 mb-0">
                                            <p className="text-danger">
                                                {errorMessage}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="modal-footer">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-9">
                                            <button
                                                type="submit"
                                                className="btn btn-warning w-100">
                                                Log in
                                            </button>
                                        </div>
                                        <div className="col-3">
                                            <button
                                                type="button"
                                                className="btn btn-secondary w-100"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center">
                                Don't have an account?{" "}
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-info mb-1"
                                    onClick={() => handleSwitchModal()}>
                                    Sign Up
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
