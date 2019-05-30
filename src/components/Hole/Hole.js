import React from "react";
import "./Hole.css";

const hole = ({ children }) => {
    return (
        <div className="hole">
            {children}
        </div>
    )
}

export default hole;