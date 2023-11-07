// api.js
import config from "../config/config";

export const getUser = async (username, token) => {
    try {
        const response = await fetch(
            config.production.apiUrl + "/users/" + username,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            return data.result;
        } else {
            throw new Error("Authentication failed");
        }
    } catch (error) {
        throw error;
    }
};
