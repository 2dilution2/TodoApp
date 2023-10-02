import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LonginComponent/>} />
                    <Route path='/login' element={<LonginComponent/>} />
                    <Route path='/welcome/:username' element={<WelcomeComponent/>} />
                    <Route path='/todos' element={<ListTodosComponent/>} />
                    <Route path='/logout' element={<LogoutComponent/>} />
                    
                    <Route path='*' element={<ErrorComponent/>} />
                </Routes>
                <FooterComponent/>
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
                Your Todos. <Link to='/todos'>Go Here</Link>
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

function ListTodosComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate())
    
    const todo = [
        {id : 1, description : 'Learn AWS', done : false, targetDate : targetDate},
        {id : 2, description : 'Learn Full Stack Dev', done : false, targetDate : targetDate},
        {id : 3, description : 'Learn DevOps', done : false, targetDate : targetDate}
    ]

    return(
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map(
                                todo => (
                                    <tr key="{todo.id}">
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/:username">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

function FooterComponent() {
    return(
        <footer className='footer'>
            <div className='container'>
                Your Footer
            </div>
        </footer>
    )
}

function LogoutComponent() {
    return(
        <div className="LogoutComponent">
            <h1>You are Logged out</h1>
            <div>
                Thank you for using our service.
            </div>
        </div>
    )
}