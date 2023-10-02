import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function LonginComponent() {

    const [username, setUsername] = useState('test')
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUsernameChange (event) {
        setUsername(event.target.value);
    }

    function handlepasswordChange (event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if(username === 'test' && password === 'test') {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log('fail')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authentication Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failure. Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name : </label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>password : </label>
                    <input type="password" name="password" value={password} onChange={handlepasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

export default LonginComponent