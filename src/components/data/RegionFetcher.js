import React, { useEffect } from "react";
import config from "../../config/config";
import { useAuth } from "../../config/AuthContext";

function RegionFetcher({ setRegions }) {
    const { token } = useAuth();
    const processRegionData = (data) => {
        const regions = [];
        data.map((region) => {
            regions.push(region);
        });
        setRegions(regions);
    };

    useEffect(() => {
        fetch(config.production.apiUrl + "/regions", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
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
