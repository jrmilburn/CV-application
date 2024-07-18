import { useState } from 'react'
import './GeneralInfo.css'

export default function General() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');
    //0 is edit state and 1 is submit state
    const [submitState, setSubmitState] = useState(0);


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    return (
        <>
            <div className='general-info'>

                <Input
                    label='First Name: '
                    type='text'
                    value={firstName}
                    onChange={handleFirstName}
                    submitState={submitState}
                    id='first-name'/>
                <Input
                    label='Last Name: '
                    type='text'
                    value={lastName}
                    onChange={handleLastName}
                    submitState={submitState}
                    id='last-name'/>

                <div className="contact">
                    <h2>Contact</h2>
                    <Input
                        label='Phone Number:  '
                        type='text'
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        submitState={submitState}
                        id='phone'/>
                    <Input
                        label='Email:  '
                        type='text'
                        value={email}
                        onChange={handleEmail}
                        submitState={submitState}
                        id='email'/>
                </div>

                <div className="btns">
                    <button onClick={() => setSubmitState(0)}>Edit</button>
                    <button onClick={() => setSubmitState(1)}>Submit</button>
                </div>

                </div>
        </>
    )

}

function Input({label, type, value, onChange, submitState, id}) {

    if(!submitState) {

        return (
            <label className={id}>
            {label}
            <input 
                type={type}
                value={value}
                onChange={onChange}
                />
            </label>
        )

    } else {

        if(id === 'first-name' || id === 'last-name') {
            return (
                <h3 className={id}>{value}</h3>
            )
        }
        return (
            <h3 className={id}>{label}{value}</h3>
        )
    }

}