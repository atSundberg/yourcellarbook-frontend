import React from "react";
import { useLanguage } from "../config/LanguageProvider";

function LanguageSwitcher() {
    const { switchLanguage } = useLanguage();
    const { language } = useLanguage();

    return (
        <div>
            <button onClick={() => switchLanguage("sv")}>English</button>
            <button onClick={() => switchLanguage("en")}>Español</button>
        </div>
    );
}
