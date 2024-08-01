import React, { useState } from 'react';

const RandomPass = () => {
    const [password, setPassword] = useState('');

    const generatePass = () => {
        const length = 6;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_";
        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }
        setPassword(newPassword);
    };

    return (
        <div>
            <div className="input">
                <input type="text" className='fs-3 text-center' value={password} id='inputBox' style={{ width: "200px", height: "40px" }} />
            </div>
            <div className="button mt-3">
                <button className="btn btn-outline-dark " onClick={generatePass}>Generate Password</button>
            </div>
        </div>
    )
}

export default RandomPass