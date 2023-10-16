// PostRequest.js (Separate component for post request)
import React from "react";

function AddUserWine({ wineData, user }) {
    console.log("AddUserWine.wineData: ", wineData);
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
            console.log("Json.stringify: ", JSON.stringify(wine));
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
                    wine_id: wineResult.wineId,
                    user_id: user.userId,
                    quantity: wineData.quantity,
                    information: wineData.information,
                    storing_location: wineData.storing_location,
                };
                console.log(
                    "Json.stringify userWine: ",
                    JSON.stringify(userWine)
                );

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
                    .then((result) => console.log(result));
                // Handle success
            } else {
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
        </div>
    );
}

export default AddUserWine;
