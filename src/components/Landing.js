import axios from 'axios';
import React, {useState} from 'react';

const Landing = () => {


    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    })


    const {email, password} = formdata
    
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('http://passmebackend-env.eba-vtsbabpw.us-east-2.elasticbeanstalk.com/users/login', formdata)
            console.log(data)
            
        }
        catch (e) {
            console.log(e)
        }
    }

    const changeHandler = (e) => {
        setFormdata({...formdata, [e.target.name]: e.target.value})
    }

    return (
        <div className='login'>
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