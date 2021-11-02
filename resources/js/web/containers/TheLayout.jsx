import React from "react";
import TheContent from "./TheContent";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

const TheLayout = () => {
    return (
        <>
            <TheHeader />
            <TheContent />
            <TheFooter />
        </>
    );
};

export default TheLayout;
