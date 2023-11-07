import React, { useState, useEffect } from "react";

function GrapePicker({ grapes, onSelect, inputId, grapeRef }) {
    const [inputValue, setInputValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [filteredGrapes, setFilteredGrapes] = useState([]);
    const [selectedGrapeIndex, setSelectedGrapeIndex] = useState(-1);

    useEffect(() => {
        setIsDropdownOpen(inputValue.length > 0);
    }, [inputValue]);

    useEffect(() => {
        setSelectedGrapeIndex(-1);
    }, [inputValue]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        // if (value.length > 0) {
        //     setIsDropdownOpen(true);
        // }

        // Filter grapes based on the input value
        const filtered = grapes.filter((grape) =>
            grape.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredGrapes(filtered);
    };

    const handleInputFocus = () => {
        if (inputValue.length > 0) {
            setIsDropdownOpen(true);
        }
    };

    const handleInputBlur = () => {
        setTimeout(() => setIsDropdownOpen(false), 300);
    };

    const handleItemClick = (grape) => {
        // console.log("GrapePicker.handleItemClick");
        setInputValue("");
        setIsDropdownOpen(false);
        // setTimeout(() => setIsDropdownOpen(false), 300);
        onSelect(grape); // Pass the selected grape to the parent component
    };

    const handleKeyDown = (e) => {
        if (filteredGrapes.length === 0) {
            return;
        }
        if (
            (e.key === "ArrowDown" || e.key === "ArrowRight") &&
            selectedGrapeIndex < filteredGrapes.length - 1
        ) {
            setSelectedGrapeIndex(selectedGrapeIndex + 1);
        } else if (
            (e.key === "ArrowUp" || e.key === "ArrowLeft") &&
            selectedGrapeIndex > 0
        ) {
            setSelectedGrapeIndex(selectedGrapeIndex - 1);
        } else if (e.key === "Enter") {
            if (
                selectedGrapeIndex >= 0 &&
                selectedGrapeIndex < filteredGrapes.length
            ) {
                const selectedGrape = filteredGrapes[selectedGrapeIndex];

                handleItemClick(selectedGrape);
            }
            e.preventDefault();
        }
    };

    return (
        <div className="GrapePicker">
            <input
                id={inputId}
                className="form-control"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                ref={grapeRef}
            />
            {isDropdownOpen && (
                <div className="card">
                    <div className="card-body grape-dropdown">
                        {filteredGrapes.map((grape, index) => (
                            <div
                                className={`btn p-2 m-1 ${
                                    selectedGrapeIndex === index
                                        ? "btn-info"
                                        : "btn-outline-info"
                                }`}
                                key={index}
                                value={grape.name}
                                onClick={() => handleItemClick(grape)}>
                                {grape.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GrapePicker;
