import React from "react";

function Buttons(props) {
    const log = () => {
        console.log('hai premuto');
    }
    return(
        <button onClick={log}>{props.contenuto}</button>
    )
}


export default Buttons;