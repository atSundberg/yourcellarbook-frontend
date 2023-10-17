import React, { useState, useEffect } from "react";

import UserWineCardDesktop from "../cards/UserWineCardDesktop";
import UserWineCardMobile from "../cards/UserWineCardMobile";
import UserWineTableCard from "../cards/UserWineTableCard";

function WineCollection({ data, setData }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredWines, setFilteredWines] = useState(data ? data : []);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [cardStates, setCardStates] = useState(
        data ? data.map(() => false) : []
    );

    useEffect(() => {
        // Function to filter wines based on the search input
        const filterWines = () => {
            if (searchQuery === "") {
                // If the search input is empty, show all wines
                return data;
            } else {
                // Filter the wines based on the search input
                return data.filter((userWine) => {
                    const wineInfo =
                        userWine.wine.name.toLowerCase() +
                        userWine.wine.producer.name.toLowerCase() +
                        userWine.wine.region.name.toLowerCase() +
                        userWine.wine.region.country.toLowerCase();
                    return wineInfo.includes(searchQuery.toLowerCase());
                });
            }
        };

        // Update the filtered wines state
        setFilteredWines(filterWines());
    }, [searchQuery, data]);

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

    const toggleCardState = (index) => {
        const newCardStates = [...cardStates];
        newCardStates[index] = !newCardStates[index];
        setCardStates(newCardStates);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="container">
            <div className="container">
                <h1 className="display-3 mt-2 text-center">
                    Your Wine Collection
                </h1>
                <p className="lead">
                    {/* Your subtitle or additional content goes here. */}
                </p>

                <form className="d-flex mb-3 rounded" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search wines..."
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </form>
                <div className="row justify-content-center">
                    {filteredWines && (
                        // <>
                        //     {isSmallScreen ? (
                        //         <UserWineCardMobile
                        //             filteredWines={filteredWines}
                        //             cardStates={cardStates}
                        //             toggleCardState={toggleCardState}
                        //         />
                        //     ) : (
                        //         <UserWineCardDesktop
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
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default WineCollection;