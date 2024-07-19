import { useState } from 'react';
import './GeneralInfo.css';
import Button from './Button';

export default function General() {
    const [name, setName] = useState('Joseph Milburn');
    const [phoneNumber, setPhoneNumber] = useState('0412337616');
    const [email, setEmail] = useState('jrmilburn@outlook.com');
    const [submitState, setSubmitState] = useState(0);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleEdit = () => {
        setSubmitState(!submitState);
    };

    return (
        <>
            <div className='general-info'>
                <h2>{submitState ? '' : 'Contact Information'}</h2>
                <div className="container">
                    <Input
                        label='Name'
                        type='text'
                        value={name}
                        onChange={handleName}
                        submitState={submitState}
                        id='name'
                    />
                    <Input
                        label='Phone Number'
                        type='text'
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        submitState={submitState}
                        id='phone'
                    />
                    <Input
                        label='Email'
                        type='text'
                        value={email}
                        onChange={handleEmail}
                        submitState={submitState}
                        id='email'
                    />
                </div>
                <div className="btns">
                    <Button
                        text='Edit'
                        onClick={handleEdit}
                        submitted={submitState}
                    />
                    
                </div>
            </div>
        </>
    );
}

function Input({ label, type, value, onChange, submitState, id }) {
    return !submitState ? (
        <div className="input-group">
            <input
                id={id}
                type={type}
                value={value}
                placeholder={label}
                onChange={onChange}
            />
        </div>
    ) : (
        <h3 className={id}>{value}</h3>
    );
}
