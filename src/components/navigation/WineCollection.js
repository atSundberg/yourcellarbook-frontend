import React, { useState, useEffect } from "react";

import UserWineCardDesktop from "../cards/UserWineCardDesktop";
import UserWineCardMobile from "../cards/UserWineCardMobile";
import UserWineTableCard from "../cards/UserWineTableCard";
import { useLanguage } from "../../config/LanguageProvider";

function WineCollection({ data, setData }) {
    const { translations } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredWines, setFilteredWines] = useState(data ? data : []);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [cardStates, setCardStates] = useState(
        data ? data.map(() => false) : []
    );

    useEffect(() => {
        // Function to filter wines based on the search input
        const filterWines = () => {
            console.log("inside.filterWines.data: ", data);
            if (searchQuery === "") {
                // If the search input is empty, show all wines
                return data.filter((userWine) => {
                    return !userWine.is_finished;
                });
            } else {
                // Filter the wines based on the search input
                return data.filter((userWine) => {
                    if (!userWine.is_finished) {
                        const wineInfo =
                            getNormalizedText(userWine.wine.name) +
                            getNormalizedText(userWine.wine.producer.name) +
                            getNormalizedText(userWine.wine.region.name) +
                            getNormalizedText(userWine.wine.region.country);
                        return wineInfo.includes(
                            getNormalizedText(searchQuery)
                        );
                    }
                });
            }
        };

        // Update the filtered wines state
        if (data) {
            setFilteredWines(filterWines());
        }
    }, [searchQuery, data]);

    const getNormalizedText = (text) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };

    useEffect(() => {
        // Check screen size when the component mounts and on window resize
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Adjust the threshold as needed
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check screen size initially

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleWineConsumed = (wineConsumed) => {
        console.log("wineCollection.handleWineConsumed, ", wineConsumed);
        setData((prevData) => {
            console.log(prevData);
            return prevData.map((wine) => {
                console.log(
                    "Equality check",
                    wine.user_wine_id === wineConsumed.user_wine_id
                );
                if (wine.user_wine_id === wineConsumed.user_wine_id) {
                    console.log("ARE EQUAL", wineConsumed);
                    return wineConsumed; // Replace the matched wine with wineConsumed
                } else {
                    return wine; // Keep other wines unchanged
                }
            });
        });
    };

    const toggleCardState = (index) => {
        const newCardStates = [...cardStates];
        newCardStates[index] = !newCardStates[index];
        setCardStates(newCardStates);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="container pt-5">
            <div className="search-container">
                <form className="d-flex mb-3 rounded" role="search">
                    <input
                        className="form-control me-2 bg-white"
                        type="search"
                        placeholder={
                            translations &&
                            translations["wine.collection.search.placeholder"]
                        }
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </form>
            </div>
            <div className="row justify-content-center ">
                {filteredWines && (
                    // <>
                    //     {isSmallScreen ? (
                    //         <UserWineCardMobile
                    //             filteredWines={filteredWines}
                    //             cardStates={cardStates}
                    //             toggleCardState={toggleCardState}
                    //         />
                    //     ) : (
                    //         <UserWineTableCard
                    //             filteredWines={filteredWines}
                    //             cardStates={cardStates}
                    //             toggleCardState={toggleCardState}
                    //         />
                    //     )}
                    // </>

                    <UserWineTableCard
                        filteredWines={filteredWines}
                        cardStates={cardStates}
                        toggleCardState={toggleCardState}
                        handleWineConsumed={handleWineConsumed}
                    />

                    // <UserWineCardDesktop
                    //             filteredWines={filteredWines}
                    //             cardStates={cardStates}
                    //             toggleCardState={toggleCardState}
                    //         />
                )}
            </div>
        </div>
    );
}

export default WineCollection;
