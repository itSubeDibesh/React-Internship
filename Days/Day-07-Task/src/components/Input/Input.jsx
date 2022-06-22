import React from "react";

export default function Input({ type, label, id, placeholder, value, min, max, onChange, disabled, required }) {
    return <div className='form-group'>
        <label htmlFor={label}>{label} :</label>
        <input required={required ? required : false} type={type ? type : ""} id={id ? id : ""} placeholder={placeholder ? placeholder : ""} value={value ? value : ""} min={min ? min : ""} disabled={disabled ? disabled : false} max={max ? max : ""} onChange={onChange ? onChange : void (0)}></input>
    </div>
}