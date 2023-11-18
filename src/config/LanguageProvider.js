import React, { createContext, useContext, useState, useEffect } from "react";
import config from "./config";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("sv");
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        fetchTranslations(language);
    }, [language]);

    const fetchTranslations = async (lang) => {
        try {
            const response = await fetch(
                config.production.apiUrl + `/translations?countryCode=${lang}`
            );
            const data = await response.json();
            setTranslations(data.result);
        } catch (error) {
            console.error("Error fetching translations: ", error);
        }
        // Fetch translations and set the state
    };

    const switchLanguage = (lang) => {
        setLanguage(lang);
    };

    const getLanguage = () => {
        return language;
    };

    return (
        <LanguageContext.Provider
            value={{ language, translations, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

function useLanguage() {
    return useContext(LanguageContext);
}

export { LanguageProvider, useLanguage };
