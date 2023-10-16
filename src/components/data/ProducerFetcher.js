import React, { useEffect } from "react";

function ProducerFetcher({ setProducers }) {
    const processProducerData = (data) => {
        const producers = [];
        data.map((producer) => {
            producers.push(producer);
        });
        setProducers(producers);
    };

    useEffect(() => {
        fetch("http://localhost:8080/producers")
            .then((response) => response.json())
            .then((data) => {
                // console.log("Fetched data: ", data);
                processProducerData(data.result);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
            });
    }, [setProducers]);

    return <div className="ProducerFetcher"></div>;
}

export default ProducerFetcher;
