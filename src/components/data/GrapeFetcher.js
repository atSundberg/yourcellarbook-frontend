import React, { useEffect } from "react";

function GrapeFetcher({ setGrapes }) {
    const processGrapeData = (data) => {
        const grapes = [];
        data.map((grape) => {
            grapes.push(grape);
        });
        setGrapes(grapes);
    };

    useEffect(() => {
        fetch("http://localhost:8080/grapes")
            .then((response) => response.json())
            .then((data) => {
                // console.log("Fetched data: ", data);
                processGrapeData(data.result);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
            });
    }, [setGrapes]);

    return <div className="GrapeFetcher"></div>;
}

export default GrapeFetcher;
