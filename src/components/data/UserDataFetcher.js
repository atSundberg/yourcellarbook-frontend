import React, { useEffect } from "react";

function UserDataFetcher({ isLoggedIn, user, setData }) {
    const processWineData = (data) => {
        const userWines = [];
        data.map((userWine) => {
            userWines.push(userWine);
        });
        setData(userWines);
    };

    useEffect(() => {
        if (user && isLoggedIn) {
            console.log(user);

            fetch("http://localhost:8080/user/wine/" + user["userId"])
                .then((response) => response.json())
                .then((data) => {
                    // console.log("Fetched data: ", data);
                    processWineData(data.result);
                })
                .catch((error) => {
                    console.error("Error fetching data", error);
                });
        }
    }, [isLoggedIn, user, setData]);

    return <div className="UserDataFetcher"></div>;
}

export default UserDataFetcher;
