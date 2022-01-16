import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from '../features/UserSlice';
import { useNavigate } from 'react-router-dom';

const Landing = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isFetching, isSuccess, isError, errorMessage} = useSelector(
        userSelector
    )

    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    })

    const [token, setToken] = useState('')

    const {email, password} = formdata
    
    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(loginUser(formdata))
    }

    const changeHandler = (e) => {
        setFormdata({...formdata, [e.target.name]: e.target.value})
    }

    useEffect(() => (
        dispatch(clearState())
    ), [])

    useEffect(() => {
        if (isError) {
            alert.error(errorMessage);
            dispatch(clearState())

        }
        if (isSuccess) {
            dispatch(clearState())
            navigate('/users')
        }
    }, [isError, isSuccess])

    return (
        <div className='login'>
            {token}
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>PASSME ADMIN LOGIN</h1>
                        <p className='lead text-center'>
                            Sign in to PASSME ADMIN ACCOUNT
                        </p>
                        <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input
                                        type="email"

                                        className='form-control form-control-lg'

                                        placeholder="Email Address"
                                        name="email"
                                        value={email}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="form-group mt-4">
                                    <input
                                        type="password"
                                        className='form-control form-control-lg'
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={changeHandler}
                                    />
                                    
                                </div>
                                <input type="submit" className="btn btn-dark btn-block mt-4" />
                            </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;