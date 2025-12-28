import React from "react";
const FleetCard = React.memo(({fleet, onDelete}) =>
     {
        return(
            <div>
                <p> {fleet.reg}</p>
                <p> {fleet.driver}</p>
                <button onClick={() => onDelete(fleet.id)}>Delete</button>
                </div>
        );
    });
    export default FleetCard;