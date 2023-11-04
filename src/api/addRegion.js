import config from "../config/config";

export const addRegion = async (token, region) => {
    try {
        const response = await fetch(config.production.apiUrl + "/regions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(region),
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
