import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
// Custom Component
import Input from '../../components/Input/Input';
import { DetailContext } from '../../providers/DetailProvider';

export default function ConfirmInfo() {
    let navigate = useNavigate();
    const
        { userDetails, setUserDetails } = useContext(DetailContext),
        ResetClick = (e) => {
            e.preventDefault();
            setUserDetails(null);
            // Redirect to Basic Info Page
            navigate("/", { replace: true })
        }
    if (userDetails !== null)
        return <div className='m-2'>
            <div className='row'>
                <form className='col-12'>
                    <div className='card'>
                        <h4 className='card-header'>Confirm Details</h4>
                        <strong className='text-center'>Please Confirm Your Details</strong>
                        <Input label="First Name" type="text" id="firstName" placeholder='Enter First Name' disabled={true} value={userDetails.firstName !== '' ? userDetails.firstName : ""} />
                        <Input label="Last Name" type="text" id="lastName" placeholder='Enter Last Name' disabled={true} value={userDetails.lastName !== '' ? userDetails.lastName : ""} />
                        <Input label="Age" type="number" id="age" min="1" max="100" placeholder='Enter Age' disabled={true} value={userDetails.age !== '' ? userDetails.age : ""} />
                        <div className='form-group center'>
                            <button className='btn btn-orange' onClick={ResetClick}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
}