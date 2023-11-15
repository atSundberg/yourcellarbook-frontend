import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function UserWineTableCard({ filteredWines, cardStates, toggleCardState }) {
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
                            <table className="table table-striped table-sm table-bordered">
                                <tr>
                                    <td>Producer</td>
                                    <td className="text-end">
                                        {userWine.wine.producer.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vintage</td>
                                    <td className="text-end">
                                        {userWine.wine.vintage}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Region</td>
                                    <td className="text-end">
                                        {userWine.wine.region.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td className="text-end">
                                        {userWine.wine.region.country}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Grapes</td>
                                    <td className="text-end">
                                        {userWine.wine.grapes
                                            .map((grape) => grape.name)
                                            .join(", ")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td className="text-end text-capitalize">
                                        {userWine.wine.category}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td className="text-end">
                                        {userWine.quantity}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Storing Location</td>
                                    <td className="text-end">
                                        {userWine.storing_location}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="card-footer bg-transparent">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-info  w-100">
                                            Drink Wine
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-outline-info w-100">
                                            Edit
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
