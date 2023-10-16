import React from "react";

function SignUpModal() {
    return (
        <div
            className="modal fade"
            id="signUpModal"
            tabIndex="-1"
            aria-labelledby="signUpModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signUpModalLabel">
                            Sign Up
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {/* Add your sign-up form or content here */}
                        <form>
                            {/* <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        <label
                                            
                                            className="col-form-label"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="col-5">
                                        <div className="mb-3 w-100">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="First"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="mb-3 w-100">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Last"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        <label
                                            htmlFor="emailSignup"
                                            className="col-form-label"
                                        >
                                            Email
                                        </label>
                                    </div>
                                    <div className="col-10 mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailSignup"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <label
                                            htmlFor="passwordSignup"
                                            className="col-form-label"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="col-10 mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="passwordSignup"
                                            placeholder="Enter your password"
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
                                            placeholder="Confirm password"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-9">
                                    <button
                                        type="button"
                                        className="btn btn-warning w-100"
                                    >
                                        Sign up
                                    </button>
                                </div>
                                <div className="col-3">
                                    <button
                                        type="button"
                                        className="btn btn-secondary w-100"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <p className="text-center">
                        Already a member? <button type="button" className="btn btn-link mb-1" onClick={openLoginModal}>Log in</button>
                    </p> */}
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;
