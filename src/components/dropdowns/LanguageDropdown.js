import React, { useEffect, useState } from "react";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../../config/LanguageProvider";
import usa from "../../assets/svgs/us.svg";
import swe from "../../assets/svgs/se.svg";

function LanguageDropdown({ isDropdownOpen, setIsDropdownOpen }) {
    const { language } = useLanguage();
    const { switchLanguage } = useLanguage();

    useEffect(() => {
        console.log("LanguageDropdown.language: ", language);
    }, [language]);

    return (
        <div>
            <div className="dropdown language-dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <FontAwesomeIcon icon={faLanguage} />
                </button>
                <ul className="dropdown-menu dropdown-menu-end w-50 bg-primary">
                    <li>
                        <a
                            className={
                                "dropdown-item d-flex align-items-center "
                            }
                            href="#"
                            onClick={() => switchLanguage("sv")}>
                            <span className="me-3">
                                <img
                                    className="flag-logo"
                                    src={swe}
                                    alt="swe-flag"
                                />
                                Swedish
                            </span>
                            <span>
                                {language === "sv" && (
                                    <FontAwesomeIcon icon={faCheck} />
                                )}
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                            onClick={() => switchLanguage("en")}>
                            <span className="me-3">
                                <img
                                    className="flag-logo"
                                    src={usa}
                                    alt="usa-flag"
                                />
                                English
                            </span>
                            <span>
                                {language === "en" && (
                                    <FontAwesomeIcon icon={faCheck} />
                                )}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LanguageDropdown;
