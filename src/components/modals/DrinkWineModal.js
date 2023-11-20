import React, { useEffect, useState } from "react";
import { useLanguage } from "../../config/LanguageProvider";
import { useAuth } from "../../config/AuthContext";
import { drinkWine } from "../../api/drinkWine";

function DrinkWineModal({
    userWine,
    isModalOpen,
    setModalOpen,
    handleWineConsumed,
}) {
    const { token } = useAuth();
    const { translations } = useLanguage();
    const [drinkWineData, setDrinkWineData] = useState({
        thoughts: "",
        rating: null,
        quantity: 1,
    });

    const handleWineConsumption = (result) => {
        // console.log("handleWineConsumption... ", result);

        handleWineConsumed(result);
    };

    // useEffect(() => {
    //     console.log("DrinkWineModal.userWine: ", userWine);
    //     console.log("DrinkWineModal.isModalOpen: ", isModalOpen);
    // }, [userWine]);

    const handleDrinkWine = async (e) => {
        e.preventDefault();
        // console.log("Navbar.handleLogin: ", region);
        try {
            const result = await drinkWine(token, userWine, drinkWineData);
            if (result) {
                handleWineConsumption(result);
                setModalOpen(false);
            }
        } catch (error) {
            console.error("Confirm drink wine failed:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDrinkWineData({
            ...drinkWineData,
            [name]: value,
        });
    };

    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value, 10); // Convert to an integer
        setDrinkWineData({ ...drinkWineData, rating: selectedRating });
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
                                    {translations &&
                                        translations["modal.drink.title"]}
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
                                        value={drinkWineData.quantity}
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
                                        value={drinkWineData.thoughts}
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

                                <div className="mb-3">
                                    <div>
                                        <label
                                            htmlFor="inlineRatingsRadio"
                                            className="form-label">
                                            {translations &&
                                                translations[
                                                    "modal.drink.rating"
                                                ]}
                                        </label>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ratingOptions"
                                                    id="inlineRatingsRadio"
                                                    value="1"
                                                    checked={
                                                        drinkWineData.rating ===
                                                        1
                                                    }
                                                    onChange={
                                                        handleRatingChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="inlineRatingsRadio">
                                                    1
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ratingOptions"
                                                    id="inlineRadio2"
                                                    value="2"
                                                    checked={
                                                        drinkWineData.rating ===
                                                        2
                                                    }
                                                    onChange={
                                                        handleRatingChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="inlineRadio2">
                                                    2
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ratingOptions"
                                                    id="inlineRadio3"
                                                    value="3"
                                                    checked={
                                                        drinkWineData.rating ===
                                                        3
                                                    }
                                                    onChange={
                                                        handleRatingChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="inlineRadio3">
                                                    3
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ratingOptions"
                                                    id="inlineRadio4"
                                                    value="4"
                                                    checked={
                                                        drinkWineData.rating ===
                                                        4
                                                    }
                                                    onChange={
                                                        handleRatingChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="inlineRadio4">
                                                    4
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ratingOptions"
                                                    id="inlineRadio5"
                                                    value="5"
                                                    checked={
                                                        drinkWineData.rating ===
                                                        5
                                                    }
                                                    onChange={
                                                        handleRatingChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="inlineRadio5">
                                                    5
                                                </label>
                                            </div>
                                            {/* Add similar blocks for ratings 4 and 5 */}
                                        </div>
                                    </div>
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
                                                    handleDrinkWine(e)
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

export default DrinkWineModal;
