import { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';
import './Button.css'
import './EducationInfo.css'

export default function Education() {

    const [educationEntries, setEducationEntries] = useState([
        {
            degree: 'Bachelor of Engineering (Honours)',
            institution: 'Queensland University of Technology',
            year: '2024'
        }
    ]);
    const [submitted, setSubmitted] = useState(false);

    const handleAdd = (e) => {

        setEducationEntries([...educationEntries, {id: uuidv4(), degree:'', institution: '', year: '' }]);

        return

    }

    const handleEdit = () => {
        
        setSubmitted(!submitted);

    }

    const handleChange = (id, field, value) => {

        const updatedEntries = educationEntries.map(entry => 
            entry.id === id ? { ...entry, [field]: value} : entry
            );
        setEducationEntries(updatedEntries);

    }

    return (

        <>
            <div className="education-info">
                <h2>Education</h2>

                <EducationEntries 
                    educationEntries={educationEntries}
                    submitted={submitted}
                    onChange={handleChange}/>

                <div className="btns">

                    <Button 
                        text='Add'
                        onClick={handleAdd}
                        submitted={submitted}/>
                    <Button 
                        text='Edit'
                        onClick={handleEdit}
                        submitted={submitted}/>

                </div>

            </div>
        </>

    )

}

function EducationEntries( { educationEntries, submitted, onChange } ) {

    if (!submitted) {

        return (

            <>
                {educationEntries.map(entry => (

                    <div key={entry.id} className="education-entry">

                        <input 
                            type="text"
                            placeholder="Degree"
                            value={entry.degree}
                            onChange={e => onChange(entry.id, 'degree', e.target.value)} />

                        <input 
                            type="text"
                            placeholder="Institution"
                            value={entry.institution}
                            onChange={e => onChange(entry.id, 'institution', e.target.value)} />

                        <input 
                            type="text"
                            placeholder="Year"
                            value={entry.year}
                            onChange={e => onChange(entry.id, 'year', e.target.value)} />

                    </div>

                ))}
            </>

        )

    } else {

        return (

            educationEntries.map(entry => (

                <>
                    <h3>{entry.degree}</h3>
                    <p>{entry.institution}, {entry.year}</p>
                </>

            ))

        )

    }

}