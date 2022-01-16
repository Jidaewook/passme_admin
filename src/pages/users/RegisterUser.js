import React, {useState} from 'react';
import axios from 'axios';
import { Container, Row, Button, Form, Alert } from 'reactstrap';
import { Loading, TextFiledGroup, TextAreaFiledGroup } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';

const RegisterUser = () => {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        avatar: '',
        institue: '',
        introduce: '',
        area: '', 
        role: '',
    })

    const [message, setMessage] = useState(''); 
    
    const {category} = useParams();
    console.log('++++++', category)
    // const contentsTitle = contents

    const {name, email, password, avatar, introduce, institue, area, role} = formData

    const navigate = useNavigate();


    const onChange = async (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const userInput = {
            name, email, password, avatar, introduce, institue, area, role
        }
        console.log(userInput)
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:8081/users/register', userInput)
            console.log("POST ++++", res)
            setLoading(false)
            setMessage('등록 완료')
            

        } catch (e) {
            console.log(e)
            setLoading(false)
            setMessage(e.message)
        }
    }


    return (
        <Container>
            {loading 
                ? (
                    <Loading />
                ) 
                : (<Row>
                    <div className='col-md-8 mt-3 m-auto'> 
                        {message 
                            ? (
                                <Alert color="primary">
                                    {message}
                                </Alert>
                            ) 
                            : null}
                        <Button color='light' onClick={() => navigate(-1)}>
                            GO BACK
                        </Button>
                        <h1 className='display-4 text-center'>
                            REGISTER
                        </h1>
                    </div>
                    <p className='lead text-center'>
                        신규회원을 등록하세요.
                    </p>
                    <small className='d-block pb-3'>* = required fields</small>
                    <Form onSubmit={onSubmit}>
                        <TextFiledGroup 
                            placeholder={"NAME"}
                            name={"name"}
                            value={name}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"EMAIL"}
                            name={"email"}
                            value={email}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"PASSWORD"}
                            name={"password"}
                            value={password}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"AVATAR"}
                            name={"avatar"}
                            value={avatar}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"INSTITUE"}
                            name={"institue"}
                            value={institue}
                            onChange={onChange}
                        />
                        <TextAreaFiledGroup 
                            placeholder={"INTRODUCE"}
                            name={"introduce"}
                            value={introduce}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"AREA"}
                            name={"area"}
                            value={area}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"ROLE"}
                            name={"role"}
                            value={role}
                            onChange={onChange}
                        />
                        <input 
                            type="submit"
                            value="Submit"
                            className="btn btn-dark btn-block mt-4"
                        />
                    </Form>
                </Row>)
            }
            
            
        </Container>
    );
};

export default RegisterUser;