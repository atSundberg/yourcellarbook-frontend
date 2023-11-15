// PostRequest.js (Separate component for post request)
import React, { useState } from "react";
import config from "../../config/config";
import { useAuth } from "../../config/AuthContext";
import { useLanguage } from "../../config/LanguageProvider";

function AddProducer({
    producers,
    setProducers,
    producerName,
    setAddedProducer,
}) {
    const { token } = useAuth();
    const { translations } = useLanguage();
    // console.log("AddProducer.producer: ", producerName);
    const handlePostRequest = async () => {
        try {
            const producer = {
                name: producerName,
            };

            // console.log("producer:::", producer);
            const producerResponse = await fetch(
                config.production.apiUrl + "/producers",
                {
                    method: "POST",
                    body: JSON.stringify(producer),
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (producerResponse.ok) {
                const producerResult = await producerResponse.json();
                // console.log("producerResult: ", producerResult.result);
                setAddedProducer(producerResult.result);
                setProducers([...producers, producerResult.result]);

                // Handle success
            } else {
                // Handle error
            }
        } catch (error) {
            // console.log("Error adding producer: ", error);
            // Handle any exceptions
        }
    };

    return (
        // <div className="row mt-5 mb-3 mx-3">
        <button
            type="submit"
            className="btn btn-outline-info p-2"
            onClick={handlePostRequest}>
            {translations && translations["wine.addition.producer.add"]}
        </button>
        // </div>
    );
}

export default AddProducer;
