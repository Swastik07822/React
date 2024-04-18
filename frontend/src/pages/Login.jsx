import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { useDataContext } from '../globalContext';

function LoginForm() {
    const { login } = useDataContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        // Remove spaces from the password
        const cleanedPassword = e.target.value.replace(/\s/g, '');
        setPassword(cleanedPassword);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login({
            email: email,
            password: password
        })

        // window.location.href = "/";

        // Reset form fields if needed
        setEmail('');
        setPassword('');
    };



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <div className="password-input">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <button type="submit">Login</button>
            </form>

            <h1>
                Go to Blogs or Create Blog after Login
            </h1>
        </div>
    );
}

export default LoginForm;
