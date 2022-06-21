import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
// Custom Component
import Input from '../../components/Input/Input';

export default function BasicInfo({ setAlert, setUserDetails }) {
    let navigate = useNavigate();
    const
        [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [age, setAge] = useState(''),
        isEmpty = () => firstName === '' || lastName === '' || age === '',
        SubmitButton = (event) => {
            event.preventDefault();
            if (!isEmpty()) {
                // Send Data To Conform Info Page
                setUserDetails({
                    firstName,
                    lastName,
                    age
                })
                // Push to Conform Info Page
                navigate("/confirm", { replace: true })
            } else {
                setAlert({
                    showAlert: true,
                    message: 'Please fill all the fields'
                });
            }
        },
        ResetButton = (event) => {
            event.preventDefault();
            [setAge, setFirstName, setLastName].forEach(item => item(''));
            setAlert({
                showAlert: false,
                message: ''
            })
        }

    return <div className='m-2'>
        <div className='row'>
            <form className='col-12'>
                <div className='card'>
                    <h4 className='card-header'>Basic Information</h4>
                    <Input label="First Name" type="text" id="firstName" placeholder='Enter First Name' value={firstName !== '' ? firstName : ""} onChange={(e) => setFirstName(e.target.value)} />
                    <Input label="Last Name" type="text" id="lastName" placeholder='Enter Last Name' value={lastName !== '' ? lastName : ""} onChange={(e) => setLastName(e.target.value)} />
                    <Input label="Age" type="number" id="age" min="1" max="100" placeholder='Enter Age' value={age !== '' ? age : ""} onChange={(e) => setAge(e.target.value)} />
                    <div className='form-group center'>
                        <button className='btn btn-purple' type="button" onClick={SubmitButton}>Submit</button>
                        <button className='btn btn-orange' onClick={ResetButton}>Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}