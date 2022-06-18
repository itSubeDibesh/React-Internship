import React, { useState, useEffect } from 'react';
import './basicInfo.css'
import Loader from '../../components/Loader/Loader';
import API from '../../backend/api';
import NavBar from '../../components/NavBar/NavBar';

export default function BasicInfo() {
    const
        [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [age, setAge] = useState(""),
        [showMessage, setShowMessage] = useState(null),
        [initialLoad, setInitialLoad] = useState(true),
        [isLoading, setIsLoading] = useState(true);
    ;

    // Fetch Data from API
    function fetchData() {
        API()
            .get()
            .then(response => {
                console.log("GET API RESPONSE", response);
                setFirstName(response.firstName)
                setLastName(response.lastName)
                setAge(response.age)
            })
    }

    useEffect(() => {
        console.log("useEffect:initialLoad - ", initialLoad);
        if (initialLoad) {
            setInitialLoad(false);
            fetchData();
        }
    }, [initialLoad]);

    useEffect(() => {
        console.log("useEffect:showMessage - ", showMessage);
        // Auto Hide Alert
        if (showMessage != null) {
            setTimeout(() => {
                setShowMessage(null)
            }, 2e3);
        }
    }, [showMessage])

    useEffect(() => {
        console.log("useEffect:isLoading - ", isLoading);
        // Auto Hide Loading
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false)
            }, 2e3);
        }
    }, [isLoading])

    // Reset The Form
    function resetForm() {
        [setFirstName, setLastName, setAge].forEach(item => item(""))
    }

    // Delete the data from the backend
    function DeleteButton(e) {
        e.preventDefault();
        setIsLoading(true)
        API()
            .delete()
            .then(response => {
                console.log("Delete API RESPONSE");
                setIsLoading(false)
                setShowMessage({
                    message: `Data delete ${response}`,
                    show: true
                })
                resetForm();
            })
    }

    function SubmitButton(e) {
        // Call API to Store Data
        if (firstName !== "" && lastName !== "" && age !== "") {
            setIsLoading(true)
            API()
                .save(firstName, lastName, age)
                .then(response => {
                    console.log("Save API RESPONSE");
                    setIsLoading(false)
                    setShowMessage({
                        message: `Data saved ${response}`,
                        show: true
                    })
                })
        } else {
            setShowMessage({
                message: "Please Fill All Fields",
                show: true
            })
        }
    }

    return <>
        <NavBar />
        <Loader isLoading={isLoading} title="Basic Information" />
        {showMessage != null ?
            <div className='row'>
                <div className='card'>
                    <h4 className='text-center'>Alert 🔔:</h4>
                    <strong>{showMessage.message}</strong>
                </div>
            </div> : null}
        {!isLoading ?
            <div className='row'>
                <form className='col-6'>
                    <div className='card'>
                        <h4>Basic Information</h4>
                        <div className='form-group'>
                            <label htmlFor="First Name">First Name :</label>
                            <input type="text" id="firstName" placeholder='Enter First Name' value={firstName !== null ? firstName : ""} onChange={(e) => setFirstName(e.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="First Name">Last Name :</label>
                            <input type="text" id="lastName" placeholder='Enter Last Name' value={lastName !== null ? lastName : ""} onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="age">Your Age :</label>
                            <input type="number" id="age" min="1" max="100" placeholder='Enter Age' value={age !== null ? age : ""} onChange={(e) => setAge(e.target.value)}></input>
                        </div>
                        <div className='form-group center'>
                            <button className='btn btn-success m-3' type="button" onClick={SubmitButton}>Submit</button>
                            <button className='btn btn-danger' onClick={DeleteButton}>Delete</button>
                        </div>
                    </div>
                </form>
            </div> : null
        }
    </>
}