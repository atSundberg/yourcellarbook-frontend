import React, { useState, useEffect } from "react";

function RegionPicker({ regions, onSelect, regionRef, nextRef }) {
    const [inputValue, setInputValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [filteredRegions, setFilteredRegions] = useState([]);
    const [selectedRegionIndex, setSelectedRegionIndex] = useState(-1);

    useEffect(() => {
        setIsDropdownOpen(inputValue.length > 0);
    }, [inputValue]);

    useEffect(() => {
        setSelectedRegionIndex(-1);
    }, [inputValue]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        setIsDropdownOpen(value.length > 0);

        // Filter grapes based on the input value
        const filtered = regions.filter((region) =>
            getNormalizedText(region.name).includes(getNormalizedText(value))
        );

        const limitedFiltered = filtered.slice(0, 10);
        setFilteredRegions(limitedFiltered);
    };

    const getNormalizedText = (text) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    };

    const handleInputFocus = () => {
        if (inputValue.length > 0) {
            setIsDropdownOpen(true);
        }
    };

    const handleInputBlur = () => {
        // Delay closing the dropdown to allow time for item clicks
        setTimeout(() => setIsDropdownOpen(false), 300);
    };

    const handleItemClick = (region) => {
        console.log("RegionPicker.handleItemClick.region", region);
        setInputValue(region.name);
        setIsDropdownOpen(false);
        onSelect(region); // Pass the selected grape to the parent component
    };

    const handleKeyDown = (e) => {
        if (filteredRegions.length === 0) {
            return;
        }
        if (
            (e.key === "ArrowDown" || e.key === "ArrowRight") &&
            selectedRegionIndex < filteredRegions.length - 1
        ) {
            setSelectedRegionIndex(selectedRegionIndex + 1);
        } else if (
            (e.key === "ArrowUp" || e.key === "ArrowLeft") &&
            selectedRegionIndex > 0
        ) {
            setSelectedRegionIndex(selectedRegionIndex - 1);
        } else if (e.key === "Enter") {
            if (
                selectedRegionIndex >= 0 &&
                selectedRegionIndex < filteredRegions.length
            ) {
                const selectedRegion = filteredRegions[selectedRegionIndex];

                handleItemClick(selectedRegion);
                nextRef.current.focus();
            }
            e.preventDefault();
        }
    };

    return (
        <div className="mb-3">
            <label htmlFor="region" className="form-label">
                Region
            </label>

            <input
                className="form-control"
                id="region"
                name="region"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                ref={regionRef}
            />
            {isDropdownOpen && (
                <div className="card">
                    <div className="card-body region-dropdown">
                        {filteredRegions.map((region, index) => (
                            <div
                                className={`btn p-2 m-1 ${
                                    selectedRegionIndex === index
                                        ? "btn-info"
                                        : "btn-outline-info"
                                }`}
                                key={index}
                                value={region.name}
                                onClick={() => handleItemClick(region)}>
                                {region.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegionPicker;
