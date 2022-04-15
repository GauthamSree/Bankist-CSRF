import './Home.css'

// import useForm from '../useForm'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='land-container'>
        <div className='card'>
            <p>If you are a New User ?</p>

            <Link to="/signup" className="btn">Sign up</Link>
        </div>
        <div className='card'>
            <p>If you are an Existing User ?</p>
            <Link to="/login" className="btn">Login</Link>
        </div>
    </div>
    )
}

export default Home;

