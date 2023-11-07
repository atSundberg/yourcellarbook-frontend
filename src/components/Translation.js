import React, { useState } from "react";

function Translation() {
    const [translationValue, setTranslationValue] = useState(null);

    return <span>{translationValue}</span>;
}

export default Translation;
