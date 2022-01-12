import { useParams } from "react-router-dom"

const UserPage = () => {

    const params = useParams();
    
    const{id} = params

    return (
        <div className='container'>
            User <h1>{id}</h1>
        </div>
    )
}

export default UserPage
