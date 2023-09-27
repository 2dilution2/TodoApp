import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LonginComponent/>}></Route>
                    <Route path='/login' element={<LonginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

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


function WelcomeComponent() {

    const {username} = useParams()

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return(
        <div className="Error">
            <h1>Hear is not exist</h1>
            <div>
                Apologies for the 404.
                Contect Us 2dilution2@gmail.com
            </div>
        </div>
    )
}