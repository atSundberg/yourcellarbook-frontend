import React, { useEffect, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

// const LoginModal = forwardRef(({ isModalOpen, doLogin }, ref) => {
// useEffect(() => {
//     const modal = new Modal(document.getElementById("loginModal"))

//     if (ref && ref.current) {
//         if (isModalOpen) {
//             // Use Bootstrap's modal show method to open the modal
//             ref.current.show();
//         } else {
//             // Use Bootstrap's modal hide method to close the modal
//             ref.current.hide();
//         }
//     }
// }, [isModalOpen, ref]);

// const navigate = useNavigate();

// const handleLogin = () => {
//     console.log("inside.HandleLogin");
//     // Perform your login logic here
//     const loginModal = document.getElementById("loginModal");
//     // isModalOpen(false);

//     console.log(loginModal);

//     // Redirect to the HomePage after successful login
//     navigate("/home");
// };

function LoginModal({ onLogin }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("inside.HandleLogin");
        onLogin(true);

        // Redirect to the HomePage after successful login
        navigate("/home");
    };

    return (
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
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* Add your sign-up form or content here */}
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
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
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-9">
                                    <button
                                        onClick={() => {
                                            handleLogin();
                                        }}
                                        type="button"
                                        className="btn btn-warning w-100"
                                        data-bs-dismiss="modal">
                                        Log in
                                    </button>
                                </div>
                                <div className="col-3">
                                    <button
                                        type="button"
                                        className="btn btn-secondary w-100"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <p className="text-center">
                        Don't have an account? <button type="button" className="btn btn-link mb-1" onClick={openSignUpModal}>Sign Up</button>
                    </p> */}
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
