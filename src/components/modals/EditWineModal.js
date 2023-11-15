import React, { useEffect, useState } from "react";
import { useLanguage } from "../../config/LanguageProvider";
import { useAuth } from "../../config/AuthContext";

function EditWineModal({ userWine, isModalOpen, setModalOpen }) {
    const { token } = useAuth();
    const { translations } = useLanguage();
    const [editedWineData, setEditedWineData] = useState(userWine);

    useEffect(() => {
        console.log("EditWineModal.userWine: ", userWine);
        console.log("EditWineModal.editedData: ", editedWineData);
    }, [userWine, editedWineData]);

    const handleEditWine = async (e) => {
        e.preventDefault();
        console.log("EditWineData.handle: ", editedWineData);
        // try {
        //     const result = await editWine(token, userWine, editedWineData);
        //     if (result) {
        //         setModalOpen(false);
        //     }
        // } catch (error) {
        //     console.error("Confirm edit wine failed:", error);
        // }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedWineData({
            ...editedWineData,
            [name]: value,
        });
    };

    return (
        <div>
            {/* <button
                className="btn btn-info  w-100"
                onClick={() => setModalOpen(true)}>
                {translations && translations["wine.collection.edit."]}
            </button> */}
            <button
                className="btn btn-outline-info w-100"
                onClick={() => setModalOpen(true)}>
                {translations && translations["wine.collection.open.edit"]}
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
                                    {translations &&
                                        translations["modal.edit.wine.title"]}
                                    <em className="ms-2">
                                        {userWine.wine.name}
                                    </em>
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setModalOpen(false)}
                                    aria-label="Close"></button>
                            </div>
                            {/* <form onSubmit={handleAddRegion}> */}
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label
                                        htmlFor="quantity"
                                        className="form-label">
                                        {translations &&
                                            translations[
                                                "modal.drink.quantity"
                                            ]}
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="quantity"
                                        name="quantity"
                                        value={editedWineData.quantity}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="thoughts"
                                        className="form-label">
                                        {translations &&
                                            translations[
                                                "modal.drink.thoughts"
                                            ]}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="thoughts"
                                        name="thoughts"
                                        value={editedWineData.thoughts}
                                        placeholder={
                                            translations &&
                                            translations[
                                                "modal.drink.thoughts.placeholder"
                                            ]
                                        }
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-8">
                                            <button
                                                type="submit"
                                                className="btn btn-warning w-100"
                                                onClick={(e) =>
                                                    handleEditWine(e)
                                                }>
                                                {translations &&
                                                    translations[
                                                        "modal.drink.confirm"
                                                    ]}
                                            </button>
                                        </div>
                                        <div className="col-4">
                                            <button
                                                type="button"
                                                className="btn btn-secondary w-100"
                                                onClick={() =>
                                                    setModalOpen(false)
                                                }>
                                                {translations &&
                                                    translations[
                                                        "modal.drink.close"
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
            )}
            {isModalOpen && <div className="modal-backdrop fade show"></div>}
        </div>
    );
}

export default EditWineModal;
