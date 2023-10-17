import React, { useEffect, useRef, useState } from "react";
import GrapeFetcher from "../data/GrapeFetcher";
import GrapePicker from "../pickers/GrapePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import RegionPicker from "../pickers/RegionPicker";
import RegionFetcher from "../data/RegionFetcher";
import AddUserWine from "../data/AddUserWine";
import ProducerPicker from "../pickers/ProducerPicker";
import ProducerFetcher from "../data/ProducerFetcher";

// function AddWineForm({ setData, user, handleNavItemChange }) {
function AddWineForm({ setData, user }) {
    const producerRef = useRef(null);
    const regionRef = useRef(null);
    const grapeRef = useRef(null);

    const [grapes, setGrapes] = useState([]);
    const [regions, setRegions] = useState([]);
    const [producers, setProducers] = useState([]);

    const [wineData, setWineData] = useState({
        name: "",
        producer: {
            id: "",
            name: "",
        },
        region: {
            id: "",
            name: "",
            country: "",
        },
        vintage: 2020,
        grapes: [],
        quantity: 1,
        category: "RED",
        information: "",
        price: 0,
        storingLocation: "",
    });

    useEffect(() => {}, []);

    const restoreWineData = () => {
        setWineData({
            name: "",
            producer: {
                id: "",
                name: "",
            },
            region: {
                id: "",
                name: "",
                country: "",
            },
            vintage: 2020,
            grapes: [],
            quantity: 1,
            category: "RED",
            information: "",
            price: 0,
            storingLocation: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "country") {
            setWineData({
                ...wineData,
                region: {
                    ...wineData.region,
                    country: value,
                },
            });
        } else {
            setWineData({
                ...wineData,
                [name]: value,
            });
        }
    };

    const handleGrapeSelection = (selectedGrape) => {
        console.log("handleGrapeSelection.selected: ", selectedGrape);

        const newGrapes = [...wineData.grapes];

        if (
            !newGrapes.some((grape) => grape.grapeId === selectedGrape.grapeId)
        ) {
            newGrapes.push(selectedGrape);

            setWineData({
                ...wineData,
                grapes: newGrapes,
            });
        }
    };

    const handleRegionSelection = (selectedRegion) => {
        setWineData({
            ...wineData,
            region: selectedRegion,
        });
    };

    const handleProducerSelection = (selectedProducer) => {
        setWineData({
            ...wineData,
            producer: selectedProducer,
        });
    };

    const handleRemoveGrape = (grapeIdToRemove) => {
        const updatedGrapes = wineData.grapes.filter(
            (grape) => grape.grapeId !== grapeIdToRemove
        );

        setWineData({
            ...wineData,
            grapes: updatedGrapes,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container w-75 mt-3 p-3 mb-3 bg-warning-subtle rounded">
            <GrapeFetcher setGrapes={setGrapes} />
            <RegionFetcher setRegions={setRegions} />
            <ProducerFetcher setProducers={setProducers} />

            <h2>Add a New Wine</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Wine Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={wineData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <ProducerPicker
                        producers={producers}
                        setProducers={setProducers}
                        onSelect={handleProducerSelection}
                        nextRef={regionRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="vintage" className="form-label">
                        Vintage
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="vintage"
                        name="vintage"
                        value={wineData.vintage}
                        onChange={handleChange}
                        min="1800"
                        max="2030"
                        required
                    />
                </div>

                <div className="mb-3">
                    <RegionPicker
                        regions={regions}
                        onSelect={handleRegionSelection}
                        regionRef={regionRef}
                        nextRef={grapeRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        value={wineData.region.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row row-cols-auto">
                    {wineData.grapes &&
                        wineData.grapes.map((grape) => (
                            <div className="col mb-3" key={grape.grapeId}>
                                <button
                                    className="btn btn-sm mt-3 btn-info rounded"
                                    onClick={() =>
                                        handleRemoveGrape(grape.grapeId)
                                    }>
                                    {grape.name}{" "}
                                    <FontAwesomeIcon
                                        className="ps-1 pb-1"
                                        icon={faXmark}
                                    />
                                </button>
                            </div>
                        ))}
                </div>

                <div className="mb-3">
                    <div className="form-group">
                        <label htmlFor="grapeInput">Grape</label>

                        <GrapePicker
                            grapes={grapes}
                            onSelect={handleGrapeSelection}
                            inputId="grapeInput"
                            grapeRef={grapeRef}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                        Quantity
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={wineData.quantity}
                        onChange={handleChange}
                        min="0"
                        max="720"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select
                        className="form-select"
                        id="category"
                        name="category"
                        value={wineData.category}
                        onChange={handleChange}
                        required>
                        <option value="RED">Red</option>
                        <option value="WHITE">White</option>
                        <option value="ROSÉ">Rosé</option>
                        <option value="SPARKLING">Sparkling</option>
                        <option value="ORANGE">Orange</option>
                        <option value="SWEET">Sweet</option>
                        <option value="FORTIFIED">Fortified</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="information" className="form-label">
                        Information
                    </label>
                    <textarea
                        className="form-control"
                        id="information"
                        name="information"
                        value={wineData.information}
                        onChange={handleChange}
                        rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="storingLocation" className="form-label">
                        Storing Location
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="storingLocation"
                        name="storingLocation"
                        value={wineData.storingLocation}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={wineData.price}
                        onChange={handleChange}
                        min="0"
                    />
                </div>
                <AddUserWine
                    wineData={wineData}
                    user={user}
                    restoreWineData={restoreWineData}
                    // handleNavItemChange={handleNavItemChange}
                />
            </form>
        </div>
    );
}

export default AddWineForm;
