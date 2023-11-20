import config from "../config/config";

export const saveWineListInfo = async (
    token,
    user,
    wineListName,
    isWineListPublic
) => {
    try {
        const updatedUser = user;
        updatedUser.wineListName = wineListName;
        updatedUser.showWineList = isWineListPublic;

        // console.log("saveWineListInfo.updated: ", updatedUser);

        const response = await fetch(
            config.production.apiUrl + "/users/winelist",
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            }
        );

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data.result;
        } else {
            throw new Error("Could not save wine list info");
        }
    } catch (error) {
        throw error;
    }
};
