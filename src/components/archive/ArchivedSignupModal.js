import React, { useEffect, useState } from "react";
import { signup } from "../../api/signup";
import { login } from "../../api/login";
import { getUser } from "../../api/getUser";
import config from "../../config/config";

function SignUpModal({ onSignup, setShowModal, handleSwitchModal }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        repeatedPassword: "",
    });

    const isPasswordEqualityVerified = () => {
        if (userDetails.password === userDetails.repeatedPassword) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        console.log(userDetails);
    }, [userDetails]);

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     console.log("Navbar.handleLogin: ", userInfo);
    //     try {
    //         const result = await login(userInfo);

    //         if (result) {
    //             const user = await getUser(userInfo.username, result.token);

    //             if (user) {
    //                 setShowModal(false);
    //                 onLogin(result, user);
    //                 setUserInfo({ username: "", password: "" });
    //             }
    //         }
    //     } catch (error) {
    //         console.error("Login failed:", error);
    //     }
    // };

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log("SignupModal.handleSignup: ", userDetails);

        console.log(
            "isPasswordEqualityVerified: ",
            isPasswordEqualityVerified()
        );
        if (!isPasswordEqualityVerified()) {
            return setErrorMessage("The passwords does not match");
        }

        const userInfo = {
            username: userDetails.username,
            password: userDetails.password,
            enabled: true,
            roles: [{ roleName: "USER" }],
        };

        try {
            const user = await signup(userInfo);

            if (user) {
                const loginDetails = {
                    username: userDetails.username,
                    password: userDetails.password,
                };

                const token = await login(loginDetails);

                if (token) {
                    // Send data back to a callback function
                    setShowModal(false);
                    onSignup(token.token, user.result);

                    setUserDetails({
                        username: "",
                        password: "",
                        repeatedPassword: "",
                    });
                }
            } else {
                // Handle authentication errors
                const errorMessage = user.message;
                setErrorMessage(errorMessage);
                console.error("Something went wrong...", user);
            }
        } catch (error) {
            // Handle network errors
            console.error("Network error: ", error);
        }
    };

    const handleChange = (e) => {
        if (errorMessage) {
            setErrorMessage("");
        }
        console.log("handleChange: ", e.target);
        console.log("handleChange.name: ", e.target);
        console.log("handleChange.value: ", e.target);
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    return (
        <div>
            <div
                className="modal fade show mystyle"
                id="signupModal"
                tabIndex="-1"
                aria-labelledby="signupModalLabel"
                aria-hidden="true"
                style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signUpModalLabel">
                                Sign Up
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSignup}>
                            <div className="modal-body">
                                {/* Add your sign-up form or content here */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            <label
                                                htmlFor="emailSignup"
                                                className="col-form-label">
                                                Email
                                            </label>
                                        </div>
                                        <div className="col-10 mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="emailSignup"
                                                name="username"
                                                value={userDetails.username}
                                                placeholder="Enter your email"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2">
                                            <label
                                                htmlFor="passwordSignup"
                                                className="col-form-label">
                                                Password
                                            </label>
                                        </div>
                                        <div className="col-10 mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="passwordSignup"
                                                name="password"
                                                value={userDetails.password}
                                                placeholder="Enter your password"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2"></div>
                                        <div className="col-10 mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="passwordConfirm"
                                                name="repeatedPassword"
                                                value={
                                                    userDetails.repeatedPassword
                                                }
                                                placeholder="Confirm password"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    {errorMessage && (
                                        <div className="row mb-0">
                                            <div className="col-2"></div>
                                            <div className="col-10 mb-0">
                                                <p className="text-danger">
                                                    {errorMessage}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="modal-footer">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-9">
                                            <button
                                                type="submit"
                                                className="btn btn-warning w-100">
                                                Sign up
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
                        </form>
                        <p className="text-center">
                            Already a member?{" "}
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-info mb-1"
                                onClick={() => handleSwitchModal()}>
                                Log in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;
