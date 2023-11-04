import React, { useEffect } from "react";
import WineGlass from "./svg-images/WineGlass";
import { useLanguage } from "../config/LanguageProvider";

function StartPage() {
    const { translations } = useLanguage();

    useEffect(() => {
        console.log("FULL:", translations);
    }, [translations]);

    return (
        <div>
            <div className="shape-divider-bottom">
                <div className="row mt-0">
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

                    <div className="col-3 d-md-block me-3 ">
                        <WineGlass />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
