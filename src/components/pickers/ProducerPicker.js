import React, { useState, useEffect } from "react";
import AddProducer from "../data/AddProducer";
import { useLanguage } from "../../config/LanguageProvider";

function ProducerPicker({ producers, setProducers, onSelect, nextRef }) {
    const { translations } = useLanguage();
    const [inputValue, setInputValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [filteredProducers, setFilteredProducers] = useState(producers);
    const [addedProducer, setAddedProducer] = useState(null);
    const [selectedProducerIndex, setSelectedProducerIndex] = useState(-1);

    useEffect(() => {
        setFilteredProducers(producers);
    }, [producers]);

    useEffect(() => {
        setIsDropdownOpen(
            inputValue.length > 0 && filteredProducers.length > 0
        );
    }, [inputValue]);

    // Ensure that selectedProducerIndex is reset when the input value changes.
    useEffect(() => {
        setSelectedProducerIndex(-1);
    }, [inputValue]);

    useEffect(() => {
        onSelect(addedProducer);
    }, [addedProducer]);

    const handleInputChange = (e) => {
        if (addedProducer) {
            setAddedProducer(null);
        }
        const value = e.target.value;
        // console.log("event.producer", value);
        setInputValue(value);

        // Filter grapes based on the input value
        const filtered = producers.filter((producer) =>
            getNormalizedText(producer.name).includes(getNormalizedText(value))
        );
        const limitedFiltered = filtered.slice(0, 10);
        setFilteredProducers(limitedFiltered);
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

    const handleItemClick = (producer) => {
        // console.log("handleItemClick", producer);
        setInputValue(producer.name);
        setIsDropdownOpen(false);
        onSelect(producer); // Pass the selected grape to the parent component
    };

    const handleKeyDown = (e) => {
        if (filteredProducers.length === 0) {
            return;
        }

        if (
            (e.key === "ArrowDown" || e.key === "ArrowRight") &&
            selectedProducerIndex < filteredProducers.length - 1
        ) {
            setSelectedProducerIndex(selectedProducerIndex + 1);
        } else if (
            (e.key === "ArrowUp" || e.key === "ArrowLeft") &&
            selectedProducerIndex > 0
        ) {
            setSelectedProducerIndex(selectedProducerIndex - 1);
        } else if (e.key === "Enter") {
            // Handle the selection of the producer based on the selectedProducerIndex.
            if (
                selectedProducerIndex >= 0 &&
                selectedProducerIndex < filteredProducers.length
            ) {
                const selectedProducer =
                    filteredProducers[selectedProducerIndex];
                // Perform the logic to select the producer based on your requirements.
                // For example, you can set the selected producer as the input value.
                // setInputValue(selectedProducer.name);
                handleItemClick(selectedProducer);
                nextRef.current.focus();
            }
            e.preventDefault();
        }
    };

    return (
        <div className="mb-3">
            <label htmlFor="producer" className="form-label">
                {translations && translations["wine.producer"]}
            </label>

            <div className="input-group">
                {" "}
                <input
                    className="form-control"
                    id="producer"
                    name="producer"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                />
                {filteredProducers.length === 0 &&
                    !addedProducer &&
                    inputValue.length > 0 && (
                        <AddProducer
                            producers={producers}
                            setProducers={setProducers}
                            producerName={inputValue}
                            setAddedProducer={setAddedProducer}
                        />
                        // <button className="btn btn-outline-info" type="button" onClick={handleAddProducer}>
                        //     Add Producer
                        // </button>
                    )}
            </div>
            {filteredProducers.length === 0 &&
                !addedProducer &&
                inputValue.length > 0 && (
                    <p className="mx-1">
                        <small className="my-3 py-3">
                            {translations &&
                                translations["wine.addition.producer.add.info"]}
                        </small>
                    </p>
                )}
            {isDropdownOpen && (
                <div className="card">
                    <div className="card-body producer-dropdown">
                        {filteredProducers.map((producer, index) => (
                            <div
                                className={`btn p-2 m-1 ${
                                    selectedProducerIndex === index
                                        ? "btn-info"
                                        : "btn-outline-info"
                                }`}
                                // className="btn btn-outline-info p-2 m-1"
                                key={index}
                                value={producer.name}
                                onClick={() => handleItemClick(producer)}>
                                {producer.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProducerPicker;
