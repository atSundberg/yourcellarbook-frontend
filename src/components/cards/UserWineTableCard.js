import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DrinkWineModal from "../modals/DrinkWineModal";
import { useLanguage } from "../../config/LanguageProvider";

function UserWineTableCard({ filteredWines, cardStates, toggleCardState }) {
    const { translations } = useLanguage();
    const [drinkWineModalOpen, setDrinkWineModalOpen] = useState(false);
    const [editWineModalOpen, setEditWineModalOpen] = useState(false);

    return filteredWines.map((userWine, index) => (
        <div className="col-12 col-md-10 col-lg-8" key={index}>
            <div className="card px-0 mx-0 my-1 wine-table-card">
                <div
                    className="card-header bg-pale py-1"
                    onClick={() => toggleCardState(index)}
                    style={{ cursor: "pointer" }}>
                    <div className="row">
                        <div className="col d-none d-md-block">
                            {userWine?.wine?.vintage}
                        </div>
                        <div className="col text-truncate">
                            {userWine?.wine?.producer?.name}
                        </div>
                        <div className="col text-truncate">
                            {userWine?.wine?.name}
                        </div>
                        <div className="col-1">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                </div>
                {cardStates[index] && (
                    <>
                        <div className="card-body mx-sm-4 ">
                            <div className="my-display text-center mb-2">
                                {userWine.wine.name}
                            </div>

                            <table className="table table-sm font-mono text-uppercase">
                                <tbody>
                                    <tr>
                                        <td>
                                            {translations &&
                                                translations[
                                                    "wine.collection.open.producer"
                                                ]}
                                        </td>
                                        <td className="text-end">
                                            {userWine.wine.producer.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {translations &&
                                                translations[
                                                    "wine.collection.open.vintage"
                                                ]}
                                        </td>
                                        <td className="text-end">
                                            {userWine.wine.vintage}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {translations &&
                                                translations[
                                                    "wine.collection.open.region"
                                                ]}
                                        </td>
                                        <td className="text-end">
                                            {userWine.wine.region.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {translations &&
                                                translations[
                                                    "wine.collection.open.country"
                                                ]}
                                        </td>
                                        <td className="text-end">
                                            {userWine.wine.region.country}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {translations &&
                                                translations[
                                                    "wine.collection.open.grapes"
                                                ]}
                                        </td>
                                        <td className="text-end">
                                            {userWine.wine.grapes
                                                .map((grape) => grape.name)
                                                .join(", ")}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {translations &&
                                                translations[
                                                    "wine.collection.open.type"
                                                ]}
                                        </td>
                                        <td className="text-end text-capitalize">
                                            {translations &&
                                                translations[
                                                    "wine.types." +
                                                        userWine.wine.category.toLowerCase()
                                                ]}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {translations &&
                                                translations[
                                                    "wine.collection.open.quantity"
                                                ]}
                                        </td>
                                        <td className="text-end">
                                            {userWine.quantity}
                                        </td>
                                    </tr>
                                    {userWine.storing_location && (
                                        <tr>
                                            <td>
                                                {translations &&
                                                    translations[
                                                        "wine.collection.open.storing"
                                                    ]}
                                            </td>
                                            <td className="text-end">
                                                {userWine.storing_location}
                                            </td>
                                        </tr>
                                    )}
                                    {userWine.information && (
                                        <tr>
                                            <td>
                                                {translations &&
                                                    translations[
                                                        "wine.collection.open.information"
                                                    ]}
                                            </td>
                                            <td className="text-end">
                                                {userWine.information}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer bg-transparent">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <DrinkWineModal
                                            userWine={userWine}
                                            isModalOpen={drinkWineModalOpen}
                                            setModalOpen={setDrinkWineModalOpen}
                                        />
                                    </div>
                                    <div className="col">
                                        <button
                                            className="btn btn-outline-info w-100"
                                            onClick={() =>
                                                setEditWineModalOpen(true)
                                            }>
                                            {translations &&
                                                translations[
                                                    "wine.collection.open.edit"
                                                ]}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    ));
}

export default UserWineTableCard;
