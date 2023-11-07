import React, { useState } from "react";
import Navbar from "./Navbar";
import StartPage from "./StartPage";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDataFetcher from "./data/UserDataFetcher";
import { useAuth } from "../config/AuthContext";
import AccountPage from "./AccountPage";
import PublicWineListsPage from "./PublicWineListsPage";

function App() {
    const [route, setRoute] = useState("startpage");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { token, setToken } = useAuth();
    const [user, setUser] = useState({ userId: -1, username: "" });
    const [data, setData] = useState(null);
    const [history, setHistory] = useState(null);

    const logout = () => {
        setToken(null);
        setIsLoggedIn(false);
        setUser(null);
        setData(null);
        setRoute("startpage");
    };

    const handleLoginState = (token, user) => {
        setToken(token);
        setUser(user);

        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            <Navbar
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                user={user}
                onLogin={handleLoginState}
                setRoute={setRoute}
                onLogout={logout}
            />
            <UserDataFetcher
                isLoggedIn={isLoggedIn}
                user={user}
                setData={setData}
                setHistory={setHistory}
                token={token}
            />
            {route === "startpage" && <StartPage />}
            {route === "public" && (
                <PublicWineListsPage
                    setRoute={setRoute}
                    isLoggedIn={isLoggedIn}
                />
            )}
            {route === "account" && (
                <AccountPage setRoute={setRoute} username={user.username} />
            )}

            {route === "homepage" && (
                <HomePage
                    data={data}
                    setData={setData}
                    user={user}
                    history={history}
                />
            )}

            {/* Add more routes for sub-components if needed */}
        </div>
    );
    // return (
    //     <Router>
    //         <div className="App">
    //             <Navbar
    //                 isLoggedIn={isLoggedIn}
    //                 setIsLoggedIn={setIsLoggedIn}
    //                 user={user}
    //                 onLogin={handleLoginState}
    //             />
    //             <UserDataFetcher
    //                 isLoggedIn={isLoggedIn}
    //                 user={user}
    //                 setData={setData}
    //                 token={token}
    //             />
    //             <Routes>
    //                 <Route exact path="/" element={<StartPage />} />
    //                 <Route
    //                     path="/home"
    //                     element={
    //                         <HomePage
    //                             data={data}
    //                             setData={setData}
    //                             user={user}
    //                         />
    //                     }
    //                 />
    //                 {/* Add more routes for sub-components if needed */}
    //             </Routes>
    //         </div>
    //     </Router>
    // );
}

export default App;
