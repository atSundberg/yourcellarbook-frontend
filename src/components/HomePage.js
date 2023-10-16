import React, { useState } from "react";
import WineCollection from "./navigation/WineCollection";
import AddWineForm from "./navigation/AddWineForm";

function HomePage({ data, setData, user }) {
    const [activeItem, setActiveItem] = useState("winelist"); // Initialize with "Home" as the active item

    const handleNavItemClick = (itemName) => {
        setActiveItem(itemName);
        console.log("active: ", itemName);
    };

    return (
        <div className="">
            <nav>
                <div
                    className="nav nav-tabs justify-content-center bg-warning"
                    id="nav-tabs"
                    role="tablist">
                    <button
                        className="nav-link "
                        id="nav-history-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-history"
                        type="button"
                        role="tab"
                        aria-controls="nav-history"
                        aria-selected="false"
                        style={{ color: "#283618" }}>
                        History
                    </button>
                    <button
                        className="nav-link active"
                        id="nav-collection-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-collection"
                        type="button"
                        role="tab"
                        aria-controls="nav-collection"
                        aria-selected="false"
                        style={{ color: "#283618" }}>
                        Collection
                    </button>
                    <button
                        className="nav-link"
                        id="nav-add-wine-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-add-wine"
                        type="button"
                        role="tab"
                        aria-controls="nav-add-wine"
                        aria-selected="false"
                        style={{ color: "#283618" }}>
                        Add Wine
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tab-content">
                <div
                    className="tab-pane fade"
                    id="nav-history"
                    role="tabpanel"
                    aria-labelledby="nav-history-tab"
                    tabIndex="0"></div>
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
                    <AddWineForm setData={setData} user={user} />
                </div>
            </div>
        </div>

        // <div>
        //     <ul className="nav nav-tabs justify-content-center">
        //         <li className="nav-item">
        //             <a className={`nav-link ${activeItem === "history" ? "active" : ""}`} aria-current="page" href="#" onClick={() => { handleNavItemClick("history"); }}>
        //                 History
        //             </a>
        //         </li>
        //         <li className="nav-item">
        //             <a className={`nav-link ${activeItem === "winelist" ? "active" : ""}`} href="#" onClick={() => { handleNavItemClick("winelist"); }}>
        //                 Wine List
        //                 <WineList />
        //             </a>
        //         </li>
        //         <li className="nav-item">
        //             <a className={`nav-link ${activeItem === "addwine" ? "active" : ""}`} href="#" onClick={() => { handleNavItemClick("addwine"); }}>
        //                 Add Wine
        //             </a>
        //         </li>
        //         <li className="nav-item">
        //             <a className={`nav-link ${activeItem === "sommelier" ? "active" : "disabled"}`} aria-disabled="true">
        //                 Sommelier
        //             </a>
        //         </li>
        //     </ul>
        // </div>
    );
}

export default HomePage;
