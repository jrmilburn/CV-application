import { useState } from "react";
import './Button.css'

export default function Button({text, onClick, submitted}) {

    if(text === 'Add' && !submitted){

        return (
            <button onClick={onClick}>{text}</button>
        )

    } else if (text === 'Add' && submitted) {
        return null
    }

    if(submitted){

        return (
            <button onClick={onClick}>Edit</button>
        )

    } else {

        return (
            <button onClick={onClick}>Submit</button>
        )

    }

}