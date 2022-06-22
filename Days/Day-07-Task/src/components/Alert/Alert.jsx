import React, { useContext } from "react";
import { AlertContext } from "../../providers/AlertProvider";

export default function Alert() {
    const { alert, setAlert } = useContext(AlertContext),
        HideAlert = (e) => {
            setAlert(
                {
                    showAlert: false,
                    message: ''
                }
            )
        };
    if (alert.showAlert) {
        return <div className="row">
            <div className="col-6">
                <div className='card'>
                    <div className="card-close" onClick={HideAlert}></div>
                    <p className='text-center text-purple header'>Alert 🔔:  <strong className="text-blue">{alert.message}</strong></p>
                </div>
            </div>
        </div>
    }
}