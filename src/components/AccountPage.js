import React, { useEffect, useState } from "react";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../config/LanguageProvider";
import SelectPublicWinesModal from "./modals/SelectPublicWinesModal";
import { saveWineListInfo } from "../api/saveWineListInfo";
import { useAuth } from "../config/AuthContext";

function AccountPage({ setRoute, user }) {
    const { token } = useAuth();
    const { translations } = useLanguage();
    const [isPublicStatusChanged, setIsPublicStatusChanged] = useState(false);
    const [isWineListPublic, setIsWineListPublic] = useState(user.showWineList);
    const [wineListSettingsSavedMessage, setWineListSettingsSavedMessage] =
        useState("");
    const [wineListName, setWineListName] = useState(
        user.wineListName ? user.wineListName : ""
    );
    const [selectPublicWinesModalOpen, setSelectPublicWinesModalOpen] =
        useState(false);

    const handleToggle = () => {
        setWineListSettingsSavedMessage("");
        setIsWineListPublic(!isWineListPublic);
        setIsPublicStatusChanged(true);
    };

    const handleNameChange = (event) => {
        setWineListSettingsSavedMessage("");
        setWineListName(event.target.value);
        setIsPublicStatusChanged(true);
    };

    const handleSaveChanges = async (e) => {
        console.log("account.handleSaveChanges");
        try {
            const result = await saveWineListInfo(
                token,
                user,
                wineListName,
                isWineListPublic
            );
            if (result) {
                setWineListSettingsSavedMessage(
                    translations &&
                        translations["account.card.wines.info.saved"]
                );
            }
        } catch (error) {
            console.error("Saving wine list settings failed:", error);
        }
    };

    useEffect(() => {
        console.log("Accountpage.user: ", user);
    }, [user]);

    return (
        <div>
            <div className="row ms-5 mt-3">
                {/* <div className="col-4 d-none d-md-block">
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
                </div> */}
                <div className="col">
                    <button
                        className="btn btn-info"
                        onClick={() => setRoute("homepage")}>
                        {<FontAwesomeIcon icon={faLongArrowLeft} />}
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col justify-content-center">
                    <p className="text-center display-6">
                        {translations && translations["account.title"]}
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8 description">
                    {translations && translations["account.description"]}
                </div>
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
                                {isWineListPublic
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
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-11 fs-md-5">
                                        <p>
                                            {translations &&
                                                translations[
                                                    "account.card.wines.toggler"
                                                ]}
                                        </p>
                                    </div>

                                    <div className="col-1">
                                        <div className="form-check form-switch fs-5 fs-md-4">
                                            <input
                                                className="form-check-input"
                                                role="switch"
                                                type="checkbox"
                                                checked={isWineListPublic}
                                                onChange={handleToggle}
                                                id="publicStatusSwitch"
                                                value="option1"
                                                aria-label="publicStatusToggler"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3 fs-md-5">
                                    <label
                                        htmlFor="wineListName"
                                        className="col-sm-6 col-form-label">
                                        <p>
                                            {translations &&
                                                translations[
                                                    "account.card.wines.list.name"
                                                ]}
                                        </p>
                                    </label>
                                    <div className="col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control "
                                            id="wineListName"
                                            value={wineListName}
                                            name="wineListName"
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row p-3">
                                {/* <div className="col">
                                    <SelectPublicWinesModal
                                        wines={user.wines}
                                        isModalOpen={selectPublicWinesModalOpen}
                                        setModalOpen={
                                            setSelectPublicWinesModalOpen
                                        }
                                    />
                                </div> */}
                                <div className="col text-end">
                                    <button
                                        className="btn btn-info"
                                        disabled={!isPublicStatusChanged}
                                        onClick={handleSaveChanges}>
                                        {translations &&
                                            translations[
                                                "account.card.wines.save.button"
                                            ]}
                                    </button>
                                </div>
                            </div>
                            {wineListSettingsSavedMessage && (
                                <div
                                    className="alert alert-success mt-3"
                                    role="alert">
                                    <FontAwesomeIcon
                                        className="me-2"
                                        icon={faCheckCircle}
                                    />{" "}
                                    {wineListSettingsSavedMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
