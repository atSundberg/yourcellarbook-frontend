import config from "../config/config";

export const signup = async (userDetails) => {
    try {
        const response = await fetch(
            config.production.apiUrl + "/users/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails),
            }
        );
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Create user failed");
        }
    } catch (error) {
        throw error;
    }
};
