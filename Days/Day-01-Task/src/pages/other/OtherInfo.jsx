import React from 'react';
import { useState } from 'react';
export default function OtherInfo() {
    const
        [email, setEmail] = useState(""),
        [address, setAddress] = useState(""),
        [contact, setContact] = useState(""),
        [submit, setSubmit] = useState(false);
    ;
    function SubmitClick(e) {
        e.preventDefault()
        setSubmit(true)

    }
    function ResetClick(e) {
        e.preventDefault()
        setSubmit(false);
        [setEmail, setAddress, setContact].forEach(item => item(""))
    }
    return <div className='row'>
        <form className='col-6'>
            <div className='card'>
                <h4>Other Information</h4>
                <div className='form-group'>
                    <label htmlFor="Contact">Contact :</label>
                    <input type="tel" id="contact" placeholder='Enter contact' value={contact ? contact : ""} onChange={(e) => setContact(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="Email">Email :</label>
                    <input type="email" id="email" placeholder='Enter email' value={email ? email : ""} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="address">Address :</label>
                    <input type="text" id="address" min="1" max="100" placeholder='Enter address' value={address ? address : ""} onChange={(e) => setAddress(e.target.value)}></input>
                </div>
                <div className='form-group center'>
                    <button className='btn btn-success m-3' onClick={(e) => SubmitClick(e)} >Submit</button>
                    <button className='btn btn-danger' onClick={(e) => ResetClick(e)}>Reset</button>
                </div>
            </div>
        </form>
        {submit === true &&
            <div className='col-6'>
                <div className='card'>
                    <h4>Confirmation</h4>
                    Should I contact you in,<br />Email:{email}, <br />Phone:{contact} <br />Or Meet You at {address}
                </div>
            </div>
        }
    </div>
}