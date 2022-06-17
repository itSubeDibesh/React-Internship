import React, { useState, useEffect } from 'react';
import './basicInfo.css'
import Loader from '../../components/Loader/Loader';
import API from '../../backend/api';


export default function BasicInfo() {
    const
        [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [age, setAge] = useState(null),
        [showMessage, setShowMessage] = useState({
            message: "",
            show: false
        }),
        [initialLoad, setInitialLoad] = useState(true),
        [isLoading, setIsLoading] = useState(true);
    ;

    // Fetch Data from API
    function fetchData() {
        API()
            .get()
            .then(response => {
                console.log("GET API RESPONSE");
                setFirstName(response.firstName)
                setLastName(response.lastName)
                setAge(response.age)
            })
    }

    // Call the Get Method to get the data from the backend
    useEffect(() => {
        // Fetch Data on Initial Load
        if (initialLoad) {
            console.log(new Date().toUTCString(), "Effects Inside", `Initial Load: ${initialLoad}`);
            fetchData();
            setInitialLoad(false);
        }
        // Auto Hide Alert
        if (showMessage.show) {
            setTimeout(() => {
                setShowMessage({
                    message: "",
                    show: false
                })
            }, 2e3);
        }
        // Auto Hide Loading
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false)
            }, 2e3);
        }
    }, [initialLoad, showMessage.show, isLoading]);

    // Reset The Form
    function resetForm() {
        [setFirstName, setLastName].forEach(item => item(""))
        setAge(null)
    }

    // Delete the data from the backend
    function DeleteButton(e) {
        e.preventDefault()
        API()
            .delete()
            .then(response => {
                console.log("Delete API RESPONSE");
                setShowMessage({
                    message: `Data delete ${response}`,
                    show: true
                })
                resetForm();
            })
    }

    function SubmitButton(e) {
        e.preventDefault()
        // Call API to Store Data
        if (firstName !== "" && lastName !== "" && age !== null) {
            API()
                .save(firstName, lastName, age)
                .then(response => {
                    console.log("Save API RESPONSE");
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
        <Loader isLoading={isLoading} title="Basic Information" />
        {!isLoading &&
            <div className='row'>
                <form className='col-6'>
                    <div className='card'>
                        <h4>Basic Information</h4>
                        <div className='form-group'>
                            <label htmlFor="First Name">First Name :</label>
                            <input type="text" id="firstName" placeholder='Enter First Name' value={firstName ? firstName : ""} onChange={(e) => setFirstName(e.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="First Name">Last Name :</label>
                            <input type="text" id="lastName" placeholder='Enter Last Name' value={lastName ? lastName : ""} onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="age">Your Age :</label>
                            <input type="number" id="age" min="1" max="100" placeholder='Enter Age' value={age !== null ? age : ""} onChange={(e) => setAge(e.target.value)}></input>
                        </div>
                        <div className='form-group center'>
                            <button className='btn btn-success m-3' onClick={(e) => SubmitButton(e)}>Submit</button>
                            <button className='btn btn-danger' onClick={(e) => DeleteButton(e)}>Delete</button>
                        </div>
                    </div>
                </form>
                {showMessage.show &&
                    <div className='col-6'>
                        <div className='card'>
                            <h4 className='text-center'>Alert 🔔:</h4>
                            <strong>{showMessage.message}</strong>
                        </div>
                    </div>}
            </div>
        }
    </>
}