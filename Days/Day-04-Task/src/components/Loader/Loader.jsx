import React from 'react';

export default function Loader(props) {
    if (props.isLoading)
        return <div className='row'>
            <div className="col-6">
                <div className='card text-center'>
                    <strong>Loading ....</strong>
                    {props.title &&
                        <div>
                            <strong>{props.title}</strong>
                        </div>}
                </div>
            </div>
        </div>
}