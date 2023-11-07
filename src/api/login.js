import config from "../config/config";

export const login = async (userInfo) => {
    try {
        const response = await fetch(config.production.apiUrl + "/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        });

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
