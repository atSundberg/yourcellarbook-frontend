import React, { useEffect } from "react";

function RegionFetcher({ setRegions }) {
    const processRegionData = (data) => {
        const regions = [];
        data.map((region) => {
            regions.push(region);
        });
        setRegions(regions);
    };

    useEffect(() => {
        fetch("http://localhost:8080/regions")
            .then((response) => response.json())
            .then((data) => {
                // console.log("Fetched data: ", data);
                processRegionData(data.result);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
            });
    }, [setRegions]);

    return <div className="RegionFetcher"></div>;
}

export default RegionFetcher;
