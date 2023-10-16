import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function UserWineCardDesktop({ filteredWines, cardStates, toggleCardState }) {
    return filteredWines.map((userWine, index) => (
        <div className="col-10" key={index}>
            <div className="card px-0 mx-0 my-1">
                <div
                    className="card-header"
                    onClick={() => toggleCardState(index)}
                    style={{ cursor: "pointer" }}>
                    <div className="row">
                        <div className="col-2">{userWine?.wine?.vintage}</div>
                        <div className="col">
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
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h4 className="h4.">Specification</h4>
                                    <div className="text-body-secondary">
                                        <div className="row">
                                            <div className="col d-flex">
                                                <p className="fw-light mb-0">
                                                    Region:{" "}
                                                </p>
                                            </div>
                                            <div className="col-9">
                                                <span className="fw-medium">
                                                    {userWine.wine.region.name}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex">
                                                <p className="fw-light mb-0">
                                                    Country:{" "}
                                                </p>
                                            </div>
                                            <div className="col-9">
                                                <span className="fw-medium">
                                                    {
                                                        userWine.wine.region
                                                            .country
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex">
                                                <p className="fw-light mb-0">
                                                    Grapes:{" "}
                                                </p>
                                            </div>
                                            <div className="col-9">
                                                <span className="fw-medium">
                                                    {userWine.wine.grapes
                                                        .map(
                                                            (grape) =>
                                                                grape.name
                                                        )
                                                        .join(", ")}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto">
                                                <p className="fw-light mb-0">
                                                    Category:{" "}
                                                </p>
                                            </div>
                                            <div className="col">
                                                <span className="fw-medium">
                                                    {userWine.wine.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex">
                                                <p className="fw-light mb-0">
                                                    Quantity:{" "}
                                                </p>
                                            </div>
                                            <div className="col-9">
                                                <span className="fw-medium">
                                                    {userWine.quantity}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex">
                                                <p className="fw-light mb-0">
                                                    Stored:{" "}
                                                </p>
                                            </div>
                                            <div className="col-9">
                                                <span className="fw-medium text-capitalize fst-italic">
                                                    {userWine.storing_location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <h4 className="h4. text-center">
                                        About the wine{" "}
                                        <span className="fw-light">
                                            {userWine.wine.name}
                                        </span>
                                    </h4>
                                    <div className="row">
                                        <div className="col d-flex">
                                            <div className="text-body-secondary">
                                                <div className="border border-warning p-2 border-opacity-50 rounded">
                                                    {userWine.information
                                                        ? userWine.information
                                                        : "You havn't added any information about this wine. " +
                                                          "Please press the edit button to add information. "}
                                                    {/* {+"or press the generate button to ask our digital sommelier."} */}
                                                </div>

                                                <p className="fw-light mb-0"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default UserWineCardDesktop;
