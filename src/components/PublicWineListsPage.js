import React, { useEffect, useState } from "react";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PublicWineListsFetcher from "./data/PublicWineListsFetcher";
import { useLanguage } from "../config/LanguageProvider";

function PublicWineListsPage({ setRoute, isLoggedIn }) {
    const { translations } = useLanguage();
    const [publicLists, setPublicLists] = useState([]);

    return (
        <div className="container">
            <PublicWineListsFetcher setPublicLists={setPublicLists} />
            <div className="row ms-5 mt-1">
                {/* <div className="ms-5 mt-3 d-flex flex-column "> */}
                <div className="col-sm-2 col-1 ">
                    <button
                        className="btn btn-info"
                        onClick={() =>
                            setRoute(isLoggedIn ? "homepage" : "startpage")
                        }>
                        {<FontAwesomeIcon icon={faLongArrowLeft} />}
                    </button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    <p className="text-center display-6">
                        {translations && translations["public.wines.title"]}
                    </p>
                </div>

                {/* </div> */}
            </div>
            <div className="row justify-content-center">
                <div className="col-8 description">
                    {translations && translations["public.wines.description"]}
                </div>
            </div>
            <div className="public-container">
                <div className="row">
                    {publicLists &&
                        publicLists.map((list, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-12 pb-3"
                                key={index}>
                                <div className="card">
                                    {/* <h5 className="card-header">WineList</h5> */}
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">
                                            {list[index].wineListName
                                                ? list[index].wineListName
                                                : "Wine List no." + (index + 1)}
                                        </h5>
                                        <hr />
                                        <div className="card-wine-list-content">
                                            {list.map((data, wineIndex) => (
                                                <div key={wineIndex}>
                                                    <p className="mb-0 text-uppercase">
                                                        {data.wine.vintage},{" "}
                                                        <em>
                                                            {data.wine.name}
                                                        </em>
                                                    </p>
                                                    {/* <p className="mb-0 text-uppercase">
                                                        {" "}
                                                        {data.wine.name}
                                                    </p> */}
                                                    <p className="text-uppercase">
                                                        {
                                                            data.wine.producer
                                                                .name
                                                        }
                                                    </p>
                                                    <hr />
                                                </div>
                                            ))}
                                        </div>

                                        <button className="btn btn-info w-100">
                                            {translations &&
                                                translations[
                                                    "public.wines.button.list"
                                                ]}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default PublicWineListsPage;
