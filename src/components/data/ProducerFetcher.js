import React, { useEffect } from "react";
import { useAuth } from "../../config/AuthContext";
import config from "../../config/config";

function ProducerFetcher({ setProducers }) {
    const { token } = useAuth();
    const processProducerData = (data) => {
        const producers = [];
        data.map((producer) => {
            producers.push(producer);
        });
        setProducers(producers);
        // console.log("ProducerFetcher: ", producers);
    };

    useEffect(() => {
        if (token) {
            // console.log("producerFetcher.token: ", token);
            fetch(config.production.apiUrl + "/producers", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log("Fetched data: ", data);
                    processProducerData(data.result);
                })
                .catch((error) => {
                    console.error("Error fetching data", error);
                });
        }
    }, [setProducers, token]);

    return <div className="ProducerFetcher"></div>;
}

export default ProducerFetcher;
