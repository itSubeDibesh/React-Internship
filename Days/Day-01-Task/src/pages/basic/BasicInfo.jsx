import React from 'react';
import { useState } from 'react';
import './basicInfo.css'
export default function OtherInfo() {
    const [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [age, setAge] = useState(1),
        [submit, setSubmit] = useState(false)
        ;
    function SubmitButton(e) {
        e.preventDefault()
        setSubmit(true);

    }
    function ResetButton(e) {
        e.preventDefault()
        setSubmit(false);
        [setFirstName, setLastName].forEach(item => item(""))
        setAge(1)
    }
    return <div className='row'>
        <form className='col-6'>
            <div className='card'>
                <h4>Basic Information</h4>
                <div className='form-group'>
                    <label htmlFor="First Name">First Name :</label>
                    <input type="text" id="firstName" placeholder='Enter First Name' value={firstName !== "" ? firstName : ""} onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="First Name">Last Name :</label>
                    <input type="text" id="lastName" placeholder='Enter Last Name' value={lastName !== "" ? lastName : ""} onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="age">Your Age :</label>
                    <input type="number" id="age" min="1" max="100" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <div className='form-group center'>
                    <button className='btn btn-success m-3' onClick={(e) => SubmitButton(e)}>Submit</button>
                    <button className='btn btn-danger' onClick={(e) => ResetButton(e)}>Reset</button>
                </div>
            </div>
        </form>
        {submit === true &&
            <div className='col-6'>
                <div className='card'>
                    <h4>Confirmation</h4>
                    Hello {firstName} {lastName}, is your birth year {new Date().getFullYear() - age} AD?
                </div>
            </div>}
    </div>
}