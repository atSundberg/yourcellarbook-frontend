import React, { useEffect, useState } from "react";
import { addRegion } from "../../api/addRegion";
import { getUser } from "../../api/getUser";
import config from "../../config/config";
import { useAuth } from "../../config/AuthContext";
import { useLanguage } from "../../config/LanguageProvider";

function AddRegionModal({ setShowModal, handleRegionAddition }) {
    const { translations } = useLanguage();
    const { token } = useAuth();
    const [region, setRegion] = useState({
        name: "",
        country: "",
    });

    const handleAddRegion = async (e) => {
        e.preventDefault();
        // console.log("Navbar.handleLogin: ", region);
        try {
            const result = await addRegion(token, region);

            if (result) {
                handleRegionAddition(region);
                setShowModal(false);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegion({
            ...region,
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
                                {translations &&
                                    translations["modal.add.region.title"]}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"></button>
                        </div>
                        {/* <form onSubmit={handleAddRegion}> */}
                        <div className="modal-body">
                            <div className="mb-3">
                                <label
                                    htmlFor="regionName"
                                    className="form-label">
                                    {translations &&
                                        translations[
                                            "modal.add.region.field.name"
                                        ]}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="regionName"
                                    name="name"
                                    value={region.name}
                                    placeholder={
                                        translations &&
                                        translations[
                                            "modal.add.region.name.placeholder"
                                        ]
                                    }
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">
                                    {translations &&
                                        translations[
                                            "modal.add.region.field.country"
                                        ]}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    name="country"
                                    value={region.country}
                                    placeholder={
                                        translations &&
                                        translations[
                                            "modal.add.region.country.placeholder"
                                        ]
                                    }
                                    onChange={handleChange}
                                    autoComplete="off"
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
                                            onClick={(e) => handleAddRegion(e)}>
                                            {translations &&
                                                translations[
                                                    "modal.add.region.button"
                                                ]}
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <button
                                            type="button"
                                            className="btn btn-secondary w-100"
                                            onClick={() => setShowModal(false)}>
                                            {translations &&
                                                translations[
                                                    "modal.button.close"
                                                ]}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRegionModal;
