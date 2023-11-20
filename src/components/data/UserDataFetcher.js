import React, { useEffect } from "react";
import { useAuth } from "../../config/AuthContext";
import config from "../../config/config";

function UserDataFetcher({ isLoggedIn, user, setData, setHistory }) {
    const { token } = useAuth();
    const processWineData = (data) => {
        const userWines = [];
        const history = [];
        data.map((userWine) => {
            // console.log("UserDataFetcher.process-userWine: ", userWine);
            if (!userWine.isFinished) {
                userWines.push(userWine);
            } else {
                history.push(userWine);
            }
        });
        setData(userWines);
        setHistory(history);
    };

    useEffect(() => {
        if (user && isLoggedIn) {
            fetch(config.production.apiUrl + "/user/wine/" + user["user_id"], {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log("Fetched user wine data: ", data);
                    processWineData(data.result);
                })
                .catch((error) => {
                    console.error("Error fetching data", error);
                });
        }
    }, [isLoggedIn, user, token]);

    return <div className="UserDataFetcher"></div>;
}

export default UserDataFetcher;
