import React from 'react';
export default function Loader({ isLoading, title }) {
    if (isLoading)
        return <div className='row'>
            <div className="col-6">
                <div className='card text-center'>
                    {title &&
                        <div className='card-header mb-1'>
                            <strong className='p-4'>{title}</strong>
                        </div>}
                    <strong className='text-purple'>Loading ...</strong>
                </div>
            </div>
        </div>
    else return null;
}