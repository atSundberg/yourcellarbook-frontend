import React, { useEffect } from "react";
import config from "../../config/config";
import { useAuth } from "../../config/AuthContext";

function PublicWineListsFetcher({ setPublicLists }) {
    // const { token } = useAuth();
    const processWineLists = (data) => {
        setPublicLists(data);
    };

    useEffect(() => {
        fetch(config.development.apiUrl + "/user/wine/public", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                processWineLists(data.result);
            })
            .catch((error) => {
                // console.error("Error fetching data", error);
            });
    }, [setPublicLists]);

    return <div className="PublicWineListFetcher"></div>;
}

export default PublicWineListsFetcher;
