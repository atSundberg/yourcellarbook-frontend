import React, { useEffect, useState } from "react";
import config from "../../config/config";
import { Modal } from "bootstrap/dist/js/bootstrap.esm";

function LoginModal({ onLogin }) {
    const [shouldDismiss, setShouldDismiss] = useState(false);
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Navbar.handleLogin: ", userInfo);
        try {
            const response = await fetch(config.production.apiUrl + "/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });

            if (response.ok) {
                // Successful login logic
                const data = await response.json();
                // Send data back to a callback function
                setShouldDismiss(true);
                onLogin(data.result);

                setUserInfo({ username: "", password: "" });
            } else {
                // Handle authentication errors
                console.error("Something went wrong...", response);
            }
        } catch (error) {
            // Handle network errors
            console.error("Network error: ", error);
        }
    };

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     console.log("inside.HandleLogin");
    //     onLogin(userInfo);
    //     setUserInfo({ username: "", password: "" });
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#loginModal">
                Log in
            </button>
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">
                                Log in
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                // onClick={toggleLoginModal}
                                data-bs-dismiss="modal"
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
                            </div>

                            <div className="modal-footer">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-9">
                                            <button
                                                type="submit"
                                                className="btn btn-warning w-100"
                                                data-bs-dissmiss={
                                                    shouldDismiss ? "modal" : ""
                                                }
                                                {...(shouldDismiss
                                                    ? {
                                                          "data-bs-dismiss":
                                                              "modal",
                                                      }
                                                    : {})}>
                                                Log in
                                            </button>
                                        </div>
                                        <div className="col-3">
                                            <button
                                                type="button"
                                                className="btn btn-secondary w-100"
                                                data-bs-dismiss="modal"
                                                // onClick={toggleLoginModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <p className="text-center">
                        Don't have an account? <button type="button" className="btn btn-link mb-1" onClick={openSignUpModal}>Sign Up</button>
                    </p> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
