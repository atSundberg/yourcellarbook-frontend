import React, { useState } from "react";
import Navbar from "./Navbar";
import StartPage from "./StartPage";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDataFetcher from "./data/UserDataFetcher";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ userId: 1 });
    const [data, setData] = useState(null);

    const handleLoginState = (value) => {
        console.log("inside handleLoginState");
        console.log(value);
        setIsLoggedIn(value);
    };

    return (
        <Router>
            <div className="App">
                <Navbar
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    user={user}
                    onLogin={handleLoginState}
                />
                <UserDataFetcher
                    isLoggedIn={isLoggedIn}
                    user={user}
                    setData={setData}
                />
                <Routes>
                    <Route exact path="/" element={<StartPage />} />
                    <Route
                        path="/home"
                        element={
                            <HomePage
                                data={data}
                                setData={setData}
                                user={user}
                            />
                        }
                    />
                    {/* Add more routes for sub-components if needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
