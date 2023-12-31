import {useParams, Link} from 'react-router-dom'

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

export default WelcomeComponent