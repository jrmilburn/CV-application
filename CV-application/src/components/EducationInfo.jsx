import { useState } from "react";
import Button from "./Button";
import './Button.css'
import './EducationInfo.css'

export default function Education() {

    const handleAdd = (e) => {

    }

    const handleEdit = (e) => {
        
    }

    const handleSubmit = (e) => {
        
    }

    return (

        <div className="education-info">
            <h2>Education</h2>

            <div className="btns">

                <Button 
                    text='Add'
                    onClick={handleAdd}/>
                <Button 
                    text='Edit'
                    onClick={handleEdit}/>
                <Button 
                    text='Submit'
                    onClick={handleSubmit}/>

            </div>

        </div>

    )

}