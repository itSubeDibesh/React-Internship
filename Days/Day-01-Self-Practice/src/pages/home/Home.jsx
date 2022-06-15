import React from "react";
import './home.css'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <p>
                    Welcome To React Application <strong>{new Date().toDateString()}</strong>
                    <br />
                    This is a dummy project created to understand React Application
                </p>
            </div>
        </div>
    );
}

export default Home;
