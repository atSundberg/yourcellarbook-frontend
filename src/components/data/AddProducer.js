// PostRequest.js (Separate component for post request)
import React, { useState } from "react";

function AddProducer({
    producers,
    setProducers,
    producerName,
    setAddedProducer,
}) {
    console.log("AddProducer.producer: ", producerName);
    const handlePostRequest = async () => {
        try {
            const producer = {
                name: producerName,
            };

            console.log("producer:::", producer);
            const producerResponse = await fetch(
                "http://localhost:8080/producers",
                {
                    method: "POST",
                    body: JSON.stringify(producer),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (producerResponse.ok) {
                const producerResult = await producerResponse.json();
                console.log("producerResult: ", producerResult.result);
                setAddedProducer(producerResult.result);
                setProducers([...producers, producerResult.result]);

                // Handle success
            } else {
                // Handle error
            }
        } catch (error) {
            console.log("Error adding producer: ", error);
            // Handle any exceptions
        }
    };

    return (
        // <div className="row mt-5 mb-3 mx-3">
        <button
            type="submit"
            className="btn btn-outline-info p-2"
            onClick={handlePostRequest}>
            Add Producer
        </button>
        // </div>
    );
}

export default AddProducer;
