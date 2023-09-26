import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LonginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}

function LonginComponent() {

    const [username, setUsername] = useState('test')
    const [userpassword, setPassword] = useState('')

    function handleUsernameChange (event) {
        setUsername(event.target.value);
    }

    function handlepasswordChange (event) {
        setPassword(event.target.value);
    }

    return(
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" value={userpassword} onChange={handlepasswordChange} />
                </div>
                <div>
                    <button type="button" name="login">login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return(
        <div className="Welcome">
            Welcome Compoment
        </div>
    )
}