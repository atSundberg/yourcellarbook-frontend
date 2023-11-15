import React, { useEffect } from "react";
import WineGlass from "./svg-images/WineGlass";
import { useLanguage } from "../config/LanguageProvider";

function StartPage() {
    const { translations } = useLanguage();

    useEffect(() => {
        console.log("FULL:", translations);
    }, [translations]);

    return (
        <div className="">
            <div className="welcome-banner"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card bg-secondary text-white">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {translations &&
                                        translations[
                                            "startpage.card.tracking.title"
                                        ]}
                                </h5>
                                <p className="card-text">
                                    {translations &&
                                        translations[
                                            "startpage.card.tracking.text"
                                        ]}
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {translations &&
                                        translations[
                                            "startpage.card.public.title"
                                        ]}
                                </h5>
                                <p className="card-text">
                                    {translations &&
                                        translations[
                                            "startpage.card.public.text"
                                        ]}
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row mt-0">
                    <div className="col-8 d-none d-md-block ms-3">
                        <div className="container text-center">
                            <h1 className="font-raleway">
                                {translations &&
                                    translations["startpage.title"]}
                            </h1>
                        </div>
                    </div>
                    <div className="col-8 d-md-none ms-3">
                        <div className="container">
                            <h1 className="font-raleway-sm">
                                {translations &&
                                    translations["startpage.title"]}
                            </h1>
                        </div>
                    </div>

                    <div className="col-3 d-none d-md-block me-3 wine-glass-image"></div>
                    <div className="col-3 d-md-none me-3 wine-glass-image-sm"></div>
                </div> */}
            </div>
        </div>
    );
}

export default StartPage;
