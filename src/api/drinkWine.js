import config from "../config/config";

export const drinkWine = async (token, userWine, drinkWineData) => {
    try {
        const wineToDrink = userWine;
        wineToDrink.thoughts = drinkWineData.thoughts;
        wineToDrink.rating = drinkWineData.rating;
        wineToDrink.quantity =
            wineToDrink.quantity - drinkWineData.quantity <= 0
                ? 0
                : drinkWineData.quantity;
        // console.log("drinkWine: ", wineToDrink);

        const response = await fetch(
            config.production.apiUrl + "/user/wine/drink",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(wineToDrink),
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data.result;
        } else {
            throw new Error("Could not handle 'drink wine'");
        }
    } catch (error) {
        throw error;
    }
};
