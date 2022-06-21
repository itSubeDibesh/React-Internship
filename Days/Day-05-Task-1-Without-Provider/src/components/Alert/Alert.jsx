import React from "react";

export default function Alert({ showAlert, message }) {
    if (showAlert) {
        return <div className="row">
            <div className="col-6">
                <div className='card'>
                    <p className='text-center text-purple header'>Alert 🔔:  <strong className="text-blue">{message}</strong></p>
                </div>
            </div>
        </div>
    }
}