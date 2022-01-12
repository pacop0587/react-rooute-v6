import { useNavigate, Routes, Route, Link } from "react-router-dom"

const Dashboard = () => {

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/')

    }     

    return (
        <div className='container'>
            <h1>Dashboard</h1>
            <Link to = 'welcome' className="btn btn-dark">Push</Link>
            <Routes>
                <Route path = 'welcome' element = {<h2>Welcome to the Jungle</h2>} />
            </Routes>
            <button 
                className="btn btn-primary"
                onClick={handleClick}>
                    Salir
            </button>
        </div>
    )
}

export default Dashboard
