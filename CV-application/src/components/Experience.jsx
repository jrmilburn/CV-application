import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Experience.css';
import './Button.css';
import Button from "./Button";

export default function Experience() {

    const [submitted, setSubmitted] = useState(false);
    const [experienceEntries, setExperienceEntries] = useState([
        {
            company: 'Queensland University of Technology',
            position: 'Research Assistant',
            time: '4 days',
            responsibilities: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus pariatur vitae placeat amet aut recusandae, ut doloribus iure quam a, delectus obcaecati qui expedita. Ducimus nihil pariatur dolores laudantium?'
        },
        {
            company: 'Gutteridge Haskins & Davey',
            position: 'Intern Engineer - Water Services',
            time: '3 months',
            responsibilities: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, commodi temporibus. Natus aperiam culpa dolor itaque, earum eligendi. Eaque assumenda quas itaque soluta ullam omnis similique fugiat labore eius dicta.'
        },
        {
            company: 'Burchills Engineering Solutions',
            position: 'Undergraduate Engineer',
            time: '1 year 3 months',
            responsibilities: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt officiis consequatur minus. Tempora praesentium, similique, id reprehenderit blanditiis autem accusantium cupiditate numquam hic eaque quis quos, doloribus neque? Illum, esse.'
        }
    ]);

    const handleAdd = (e) => {

        setExperienceEntries([...experienceEntries, {id: uuidv4(), company:'', position: '', time: '', responsibilities: '' }]);

        return

    }

    const handleEdit = () => {
        
        setSubmitted(!submitted);

    }

    const handleChange = (id, field, value) => {

        const updatedEntries = experienceEntries.map(entry => 
            entry.id === id ? { ...entry, [field]: value} : entry
            );
        setExperienceEntries(updatedEntries);

    }

    return (

        <div className="experience">
            <h2>Experience</h2>

            <ExperienceEntries 
                experienceEntries={experienceEntries}
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

    )

}

function ExperienceEntries({ experienceEntries, submitted, onChange }) {

    if(!submitted) {

        return (

            <>
            
            {experienceEntries.map(entry => (

            <div key={entry.id} className="education-entry">

                <input 
                    type="text"
                    placeholder="Company"
                    value={entry.company}
                    onChange={e => onChange(entry.id, 'company', e.target.value)} />

                <input 
                    type="text"
                    placeholder="Position"
                    value={entry.position}
                    onChange={e => onChange(entry.id, 'position', e.target.value)} />

                <input 
                    type="text"
                    placeholder="Time Worked"
                    value={entry.time}
                    onChange={e => onChange(entry.id, 'time', e.target.value)} />


                <textarea name="responsibilities" id="responsibilities" cols="60" rows="10" placeholder="Main Responsibilities" value={entry.responsibilities} onChange={e => onChange(entry.id, 'responsibilities', e.target.value)}></textarea>

            </div>

            ))}
            
            </>

        )

    } else {

        return (

            <>
                {experienceEntries.map(entry => (

                <div key={entry.id} className="education-entry-submitted">

                    <h2>{entry.position}</h2>
                    <h3>{entry.company}, {entry.time}</h3>
                    <p>{entry.responsibilities}</p>

                </div>

                ))}
            </>

        )
    }

}