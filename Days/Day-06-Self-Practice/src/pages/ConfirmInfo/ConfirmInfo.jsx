import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
// Custom Component
import Input from '../../components/Input/Input';
import Loader from '../../components/Loader/Loader';
import { DetailContext } from '../../providers/DetailProvider';
import { AlertContext } from '../../providers/AlertProvider';
import ApiRequest from '../../Backend/api';
const Api = ApiRequest();

export default function ConfirmInfo() {
    let navigate = useNavigate();
    const
        [loading, setLoading] = useState(true),
        { userDetails, setUserDetails } = useContext(DetailContext),
        { setAlert } = useContext(AlertContext),
        // Event Triggers
        ModifyClick = (e) => {
            console.log("Modify Button Triggered");
            // Redirect to Basic Info Page
            navigate("/", { replace: true })
        },
        SubmitClick = (e) => {
            console.log("Submit Button Triggered");
            e.preventDefault();
            saveDetails()
                .then((status) => {
                    console.log("API Save Response")
                    if (status === "success") {
                        setUserDetails({ firstName: '', lastName: '', age: '' });
                        setAlert({
                            showAlert: true,
                            message: "User Added Successfully"
                        })
                        // Redirect to Basic Info Page
                        navigate("/", { replace: true })
                    }
                    else {
                        setAlert({
                            showAlert: true,
                            message: "Problem adding User"
                        })
                    }
                })
        },
        // Api Works
        saveDetails = () => {
            console.log("Save Request Invoked")
            return Api.save(userDetails.firstName, userDetails.lastName, userDetails.age)
        }
    // Effect Handler
    useEffect(() => {
        if (userDetails.firstName === "" || userDetails.lastName === '' || userDetails.age === '')
            navigate("/", { replace: true })
        else setTimeout(() => { setLoading(false) }, 1e3);
    }, [userDetails, navigate, setLoading])
    // Jsx Handler
    if (userDetails.firstName !== "" || userDetails.lastName !== '' || userDetails.age !== '')
        return <div className='m-2'>
            <Loader isLoading={loading} title="Confirm Details" />
            {!loading ? <div className='row'>
                <form className='col-12'>
                    <div className='card'>
                        <h4 className='card-header'>Confirm Details</h4>
                        <strong className='text-center'>Please Confirm Your Details</strong>
                        <Input label="First Name" type="text" id="firstName" placeholder='Enter First Name' disabled={true} value={userDetails.firstName !== '' ? userDetails.firstName : ""} />
                        <Input label="Last Name" type="text" id="lastName" placeholder='Enter Last Name' disabled={true} value={userDetails.lastName !== '' ? userDetails.lastName : ""} />
                        <Input label="Age" type="number" id="age" min="1" max="100" placeholder='Enter Age' disabled={true} value={userDetails.age !== '' ? userDetails.age : ""} />
                        <div className='form-group center'>
                            <button className='btn btn-purple' type='submit' onClick={SubmitClick}>Submit</button>
                            <button className='btn btn-orange' type="button" onClick={ModifyClick}>Modify</button>
                        </div>
                    </div>
                </form>
            </div> : null}
        </div>
}