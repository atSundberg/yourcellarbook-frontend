// PostRequest.js (Separate component for post request)
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// function AddUserWine({ wineData, user, restoreWineData, handleNavItemChange }) {
function AddUserWine({ wineData, user, restoreWineData }) {
    console.log("AddUserWine.wineData: ", wineData);
    const [successResponse, setSuccessResponse] = useState(null);
    const [errorResponse, setErrorResponse] = useState(null);

    // const handleViewWines = () => {
    //     handleNavItemChange("wineList");
    // };

    const handlePostRequest = async () => {
        try {
            const wine = {
                name: wineData.name,
                producer: wineData.producer,
                region: wineData.region,
                grapes: wineData.grapes,
                vintage: wineData.vintage,
                category: wineData.category,
            };

            // Implement your post request logic here using the wineData
            const wineResponse = await fetch("http://localhost:8080/wines", {
                method: "POST",
                body: JSON.stringify(wine),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (wineResponse.ok) {
                const wineResult = await wineResponse.json();
                console.log("wineResult: ", wineResult);
                const userWine = {
                    user_wine_id: {
                        userId: user.userId,
                        wineId: wineResult.result.wine_id,
                    },
                    quantity: wineData.quantity,
                    information: wineData.information,
                    storing_location: wineData.storingLocation,
                    price: wineData.price,
                };

                const userWineResponse = await fetch(
                    "http://localhost:8080/user/wine",
                    {
                        method: "POST",
                        body: JSON.stringify(userWine),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                    .then((res) => res.json())
                    .then((result) => {
                        console.log(result);
                        restoreWineData();
                        setSuccessResponse(result.message);
                    });
                // Handle success
            } else {
                setErrorResponse("Could not add wine");
                // Handle error
            }
        } catch (error) {
            console.log("Error adding wine: ", error);
            // Handle any exceptions
        }
    };

    return (
        <div className="row mt-5 mb-3 mx-3">
            <button
                type="submit"
                className="btn btn-info p-2"
                onClick={handlePostRequest}>
                Add Wine
            </button>
            {successResponse && (
                <div className="alert alert-success mt-3" role="alert">
                    <FontAwesomeIcon className="me-2" icon={faCheckCircle} />{" "}
                    {successResponse}
                    <button
                        className="btn btn-outline-success ms-5"
                        // onClick={handleViewWines()}
                    >
                        View Wines
                    </button>
                </div>
            )}
        </div>
    );
}

export default AddUserWine;
