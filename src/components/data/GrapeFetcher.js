import React, { useEffect } from "react";
import config from "../../config/config";
import { useAuth } from "../../config/AuthContext";

function GrapeFetcher({ setGrapes }) {
    const { token } = useAuth();
    const processGrapeData = (data) => {
        const grapes = [];
        data.map((grape) => {
            grapes.push(grape);
        });
        setGrapes(grapes);
    };

    useEffect(() => {
        fetch(config.production.apiUrl + "/grapes", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Fetched grapes: ", data);
                processGrapeData(data.result);
            })
            .catch((error) => {
                // console.error("Error fetching data", error);
            });
    }, [setGrapes]);

    return <div className="GrapeFetcher"></div>;
}

export default GrapeFetcher;
