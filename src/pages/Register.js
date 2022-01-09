import React, {useState} from 'react';
import axios from 'axios';
import { Container, Row, Button, Form, Input } from 'reactstrap';
import { Loading, TextFiledGroup, TextAreaFiledGroup } from '../components';
import { useNavigate, useParams } from 'react-router-dom';

const Register = () => {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        genre: [],
        poster: '',
        backdrop: '',
        url: ''
    })
    
    const {category} = useParams();
    console.log('++++++', category)
    // const contentsTitle = contents

    const {title, desc, genre, poster, backdrop, url} = formData

    const navigate = useNavigate();


    const onChange = async (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const userInput = {
            title, desc, genre, poster, backdrop, url
        }
        console.log(userInput)
        setLoading(true)
        try {
            const {data} = await axios.post(`/${category}`, userInput)
            console.log("POST ++++", data)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
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
                        <Button color='light' onClick={() => navigate(-1)}>
                            GO BACK
                        </Button>
                        <h1 className='display-4 text-center'>
                            REGISTER
                        </h1>
                    </div>
                    <p className='lead text-center'>
                        콘텐츠를 등록하세요.
                    </p>
                    <small className='d-block pb-3'>* = required fields</small>
                    <Form onSubmit={onSubmit}>
                        <TextFiledGroup 
                            placeholder={"* TITLE"}
                            name={"title"}
                            value={title}
                            onChange={onChange}
                        />
                        <TextAreaFiledGroup 
                            placeholder={"* DESCRIPTION"}
                            name={"desc"}
                            value={desc}
                            onChange={onChange}
                        />
                        {/* <Input
                            type="textarea"
                            placeholder={"* DESCRIPTION"}
                            name={"desc"}
                            value={desc}
                            onChange={onChange}
                        /> */}
                        <TextFiledGroup 
                            placeholder={"GENRE"}
                            name={"genre"}
                            value={genre}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"POSTER"}
                            name={"poster"}
                            value={poster}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"BACKDROP"}
                            name={"backdrop"}
                            value={backdrop}
                            onChange={onChange}
                        />
                        <TextFiledGroup 
                            placeholder={"URL"}
                            name={"url"}
                            value={url}
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

export default Register;