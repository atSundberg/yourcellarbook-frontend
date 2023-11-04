import React, { useState } from "react";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../config/LanguageProvider";

function AccountPage({ setRoute, username }) {
    const { translations } = useLanguage();
    const [info, setInfo] = useState({ isToggled: false });

    const handleToggle = () => {
        setInfo({ isToggled: !info.isToggled });
    };
    return (
        <div>
            <div className="row ms-5 mt-3">
                {/* <div className="ms-5 mt-3 d-flex flex-column "> */}
                <div className="col-4 d-none d-md-block">
                    <button
                        className="btn btn-info"
                        onClick={() => setRoute("homepage")}>
                        {<FontAwesomeIcon icon={faLongArrowLeft} />}{" "}
                        {translations && translations["account.back.button"]}
                    </button>
                </div>
                <div className="col-2 d-md-none">
                    <button
                        className="btn btn-info"
                        onClick={() => setRoute("homepage")}>
                        {<FontAwesomeIcon icon={faLongArrowLeft} />}
                    </button>
                </div>
                <div className="col d-flex">
                    <p className="text-center display-6">
                        {translations && translations["account.title"]}
                    </p>
                </div>
                {/* </div> */}
            </div>
            <div className="account-container">
                <div className="card bg-transparent border border-info mb-3">
                    <div className="card-header">
                        <h6 className="display-9">
                            {translations &&
                                translations["account.card.personal.title"]}
                        </h6>
                        <div className="card-content">
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
                <div className="card bg-transparent border border-info">
                    <div className="card-header">
                        <h6 className="display-9">
                            {translations &&
                                translations["account.card.wines.title"]}{" "}
                            <span className="fst-italic fw-light">
                                {"\u2013 "}
                                {info.isToggled
                                    ? translations &&
                                      translations[
                                          "account.card.wines.title.public"
                                      ]
                                    : translations[
                                          "account.card.wines.title.private"
                                      ]}
                            </span>
                        </h6>
                        <div className="card-content">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-10 fs-5">
                                        <p>
                                            {translations &&
                                                translations[
                                                    "account.card.wines.toggler"
                                                ]}
                                        </p>
                                    </div>

                                    <div className="col-1">
                                        <div class="form-check form-switch fs-4">
                                            <input
                                                class="form-check-input"
                                                role="switch"
                                                type="checkbox"
                                                checked={info.isToggled}
                                                onChange={handleToggle}
                                                id="publicStatusSwitch"
                                                value="option1"
                                                aria-label="publicStatusToggler"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
