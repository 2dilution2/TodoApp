export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application
            <LonginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}

function LonginComponent() {
    return(
        <div className="Login">
            Login Compoment
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