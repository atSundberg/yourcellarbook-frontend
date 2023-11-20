import React, { useEffect, useState } from "react";
import { useLanguage } from "../../config/LanguageProvider";
import { useAuth } from "../../config/AuthContext";
import { drinkWine } from "../../api/drinkWine";

function SelectPublicWinesModal({ wines, isModalOpen, setModalOpen }) {
    const { token } = useAuth();
    const { translations } = useLanguage();

    // const handleDrinkWine = async (e) => {
    //     e.preventDefault();
    //     // console.log("Navbar.handleLogin: ", region);
    //     try {
    //         const result = await drinkWine(token, userWine, drinkWineData);
    //         if (result) {
    //             handleWineConsumption(result);
    //             setModalOpen(false);
    //         }
    //     } catch (error) {
    //         console.error("Confirm drink wine failed:", error);
    //     }
    // };

    const handleChange = (e) => {
        // console.log("SelectPublicWinesModal.handleChange: ", e);
        // const { name, value } = e.target;
        // setDrinkWineData({
        //     ...drinkWineData,
        //     [name]: value,
        // });
    };

    return (
        <div>
            <button
                className="btn btn-info  w-100"
                onClick={() => setModalOpen(true)}>
                {translations && translations["wine.collection.open.drink"]}
            </button>
            {isModalOpen && (
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
                                <h5
                                    className="modal-title"
                                    id="loginModalLabel">
                                    Välj publika viner <em>{}</em>
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setModalOpen(false)}
                                    aria-label="Close"></button>
                            </div>
                            {/* <form onSubmit={handleAddRegion}> */}
                            <div className="modal-body">
                                {wines &&
                                    wines.map((wine, index) => (
                                        <div
                                            className="col-12 col-md-10 col-lg-8"
                                            key={index}>
                                            <div className="card px-0 mx-0 my-1 wine-table-card">
                                                <div
                                                    className="card-header bg-pale py-1"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}>
                                                    <div className="row">
                                                        <div className="col d-none d-md-block">
                                                            {wine?.vintage}
                                                        </div>
                                                        <div className="col text-truncate">
                                                            {
                                                                wine?.producer
                                                                    ?.name
                                                            }
                                                        </div>
                                                        <div className="col text-truncate">
                                                            {wine?.name}
                                                        </div>
                                                        <div className="col-1"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className="modal-footer">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-8">
                                            <button
                                                type="submit"
                                                className="btn btn-warning w-100">
                                                Drink
                                            </button>
                                        </div>
                                        <div className="col-4">
                                            <button
                                                type="button"
                                                className="btn btn-secondary w-100"
                                                onClick={() =>
                                                    setModalOpen(false)
                                                }>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            )}
            {isModalOpen && <div className="modal-backdrop fade show"></div>}
        </div>
    );
}

export default SelectPublicWinesModal;
