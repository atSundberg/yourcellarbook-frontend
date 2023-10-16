import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleDroplet } from "@fortawesome/free-solid-svg-icons";

function UserWineCardMobile({ filteredWines, cardStates, toggleCardState }) {
    // const [activeTab, setActiveTab] = useState("wineTab"); // Set the default active tab

    // const handleTabClick = (tabId) => {
    //     setActiveTab(tabId);
    // };

    return filteredWines.map((userWine, index) => (
        <div className="card px-0 my-2" key={index}>
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <button
                            className="nav-link active"
                            id="nav-wine-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#wineTab"
                            type="button"
                            role="tab"
                            aria-controls="wineTab"
                            aria-selected="false"
                            style={{ color: "#283618" }}>
                            Wine
                        </button>
                        {/* <a
                            className={`nav-link ${
                                activeTab === "wineTab" ? "active" : ""
                            }`}
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#wineTab"
                            onClick={() => handleTabClick("wineTab")}>
                            Wine
                        </a> */}
                    </li>
                    <li className="nav-item">
                        {/* <a
                            className={`nav-link ${
                                activeTab === "specificationTab" ? "active" : ""
                            }`}
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#specificationTab"
                            onClick={() => handleTabClick("specificationTab")}>
                            Specification
                        </a> */}
                        <button
                            className="nav-link"
                            id="nav-specification-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#specificationTab"
                            type="button"
                            role="tab"
                            aria-controls="specificationTab"
                            aria-selected="false"
                            style={{ color: "#283618" }}>
                            Specification
                        </button>
                    </li>
                    <li className="nav-item">
                        {/* <a
                            className={`nav-link ${
                                activeTab === "aboutTab" ? "active" : ""
                            }`}
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#aboutTab"
                            onClick={() => handleTabClick("aboutTab")}>
                            About
                        </a> */}
                        <button
                            className="nav-link"
                            id="nav-about-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#aboutTab"
                            type="button"
                            role="tab"
                            aria-controls="aboutTab"
                            aria-selected="false"
                            style={{ color: "#283618" }}>
                            About
                        </button>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="wineTab"
                        role="tabpanel"
                        aria-labelledby="nav-wine-tab"
                        tabIndex="0">
                        <div className="row">
                            <div className="col-8">
                                <h5 className="card-title">
                                    {userWine.wine.name}
                                </h5>
                                <h6 className="h6.">
                                    {userWine.wine.producer.name}
                                </h6>
                                <div className="row">
                                    <div className="col-5 ">Vintage:</div>
                                    <div className="col-auto ">
                                        {userWine.wine.vintage}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-5 ">Region:</div>
                                    <div className="col-auto ">
                                        {userWine.wine.region.name}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-5 ">Country:</div>
                                    <div className="col-auto ">
                                        {userWine.wine.region.country}
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <FontAwesomeIcon
                                    icon={faBottleDroplet}
                                    size="2xl"
                                    style={{
                                        fontSize:
                                            6 +
                                            "rem" /* Adjust the font size as needed */,
                                        color: "#131313" /* Customize the color */,
                                        marginBottom: 1 + "rem",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="specificationTab"
                        role="tabpanel"
                        aria-labelledby="nav-specification-tab"
                        tabIndex="0">
                        Spec
                    </div>
                    <div
                        className="tab-pane fade"
                        id="aboutTab"
                        role="tabpanel"
                        aria-labelledby="nav-about-tab"
                        tabIndex="0">
                        about
                    </div>
                </div>
                {/* <div
                    className={`tab-content ${
                        activeTab === "wineTab" ? "active" : ""
                    }`}
                    id="wineTab">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                    </p>
                </div> */}
                {/* <div
                    className={`tab-content ${
                        activeTab === "specificationTab" ? "active" : ""
                    }`}
                    id="specificationTab">
                    <h5 className="card-title">Specialt</h5>
                    <p className="card-text">With .</p>
                </div>
                <div
                    className={`tab-content ${
                        activeTab === "aboutTab" ? "active" : ""
                    }`}
                    id="aboutTab">
                    <h5 className="card-title">About</h5>
                    <p className="card-text">Witash .</p>
                </div> */}
            </div>
        </div>
    ));
}

export default UserWineCardMobile;
