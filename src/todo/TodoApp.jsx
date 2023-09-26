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
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState('false')
    const [showErrorMessage, setShowErrorMessage] = useState('false')

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
        } else {
            console.log('fail')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }
    
    function SuccessMessageComponent() {
    
        if(showSuccessMessage){
            return <div className="successMessage">Authentication Successfully</div>
        } else {
            return null
        }
    }

    function ErrorMessageComponent() {
    
        if(showErrorMessage){
            return <div className="errorMessage">Authentication Failure. Please check your credentials</div>
        } else {
            return null
        }
    }

    return(
        <div className="Login">
            <SuccessMessageComponent />
            <ErrorMessageComponent />
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


function WelcomeComponent() {
    return(
        <div className="Welcome">
            Welcome Compoment
        </div>
    )
}