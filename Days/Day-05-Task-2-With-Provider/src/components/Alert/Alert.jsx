import React, { useContext } from "react";
import { AlertContext } from "../../providers/AlertProvider";

export default function Alert() {
    const { alert } = useContext(AlertContext);
    if (alert.showAlert) {
        return <div className="row">
            <div className="col-6">
                <div className='card'>
                    <p className='text-center text-purple header'>Alert 🔔:  <strong className="text-blue">{alert.message}</strong></p>
                </div>
            </div>
        </div>
    }
}