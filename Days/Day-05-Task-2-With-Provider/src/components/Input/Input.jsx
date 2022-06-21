import React from "react";

export default function Input({ type, label, id, placeholder, value, min, max, onChange, disabled }) {
    return <div className='form-group'>
        <label htmlFor={label}>{label} :</label>
        <input type={type} id={id} placeholder={placeholder} value={value} min={min ? min : ""} disabled={disabled ? disabled : false} max={max ? max : ""} onChange={onChange}></input>
    </div>
}