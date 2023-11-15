import React, { useState } from "react";
import WineCollection from "./navigation/WineCollection";
import AddWineForm from "./navigation/AddWineForm";
import { useLanguage } from "../config/LanguageProvider";
import WineHistory from "./navigation/WineHistory";

function HomePage({ data, setData, user }) {
    const { translations } = useLanguage();
    const [activeItem, setActiveItem] = useState("winelist");

    const handleNavItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div>
            <div>
                <nav>
                    <div
                        className="nav nav-tabs justify-content-center rounded"
                        id="nav-tabs"
                        role="tablist">
                        <button
                            className={`nav-link mt-1 ${
                                activeItem === "history"
                                    ? "bg-primary active"
                                    : "text-info"
                            }`}
                            id="nav-history-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-history"
                            type="button"
                            role="tab"
                            onClick={() => setActiveItem("history")}
                            aria-controls="nav-history"
                            aria-selected="false"
                            style={{ color: "#283618" }}>
                            {translations && translations["wine.history.tab"]}
                        </button>
                        <button
                            className={`nav-link mt-1 ${
                                activeItem === "winelist"
                                    ? "bg-primary active"
                                    : "text-info"
                            }`}
                            id="nav-collection-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-collection"
                            type="button"
                            role="tab"
                            onClick={() => setActiveItem("winelist")}
                            aria-controls="nav-collection"
                            aria-selected="false"
                            style={{ color: "#283618" }}>
                            {translations &&
                                translations["wine.collection.tab"]}
                        </button>
                        <button
                            className={`nav-link mt-1 ${
                                activeItem === "addWine"
                                    ? "bg-primary active"
                                    : "text-info"
                            }`}
                            id="nav-add-wine-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-add-wine"
                            type="button"
                            role="tab"
                            onClick={() => setActiveItem("addWine")}
                            aria-controls="nav-add-wine"
                            aria-selected="false"
                            style={{ color: "#283618" }}>
                            {translations && translations["wine.addition.tab"]}
                        </button>
                    </div>
                </nav>
                <div className="nav-container">
                    <div className="tab-content" id="nav-tab-content">
                        <div
                            className="tab-pane fade"
                            id="nav-history"
                            role="tabpanel"
                            aria-labelledby="nav-history-tab"
                            tabIndex="0">
                            <WineHistory data={data} setData={setData} />
                        </div>
                        <div
                            className="tab-pane fade show active"
                            id="nav-collection"
                            role="tabpanel"
                            aria-labelledby="nav-collection-tab"
                            tabIndex="1">
                            <WineCollection data={data} setData={setData} />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-add-wine"
                            role="tabpanel"
                            aria-labelledby="nav-add-wine-tab"
                            tabIndex="2">
                            <AddWineForm
                                data={data}
                                setData={setData}
                                user={user}
                                // handleNavItemChange={handleNavItemClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
