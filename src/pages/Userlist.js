import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Table, Button, Row } from 'reactstrap';
import { Loading, TextFiledGroup } from '../components';
import {LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const Userlist = () => {

    const [users, setUsers] = useState([])

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getUserData = async () => {
        
        try { 
            const {data} = await axios.get('/users')
            // const {data} = await axios.get('http://localhost:8081/users')
            setUsers(data)
            setLoading(false);
        } 
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <Container>
            {loading 
                ? <Loading />
                : (
                    <div>

                    
                    <Row xs='2' className='mt-3'>
                            <div className='col-md mt-3 m-auto'> 
                                <h1>
                                    USER DB
                                </h1>
                            </div>
                            <div className='col-md mt-3 m-auto'>
                                <Button 
                                    block 
                                    color='primary' 
                                    size='md'
                                    onClick={() => navigate('/register/user')}
                                >
                                    신규 유저 등록
                                </Button>
                            </div>
                            
                        </Row>
                        <br />
                        <Table hover>
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">INSTITUE</th>
                                    <th scope="col">AREA</th>
                                    <th scope="col">ROLE</th>
                                    <th scope="col">JOIN DATE</th>
                                    <th scope="col">UPDATE DATE</th>

                                </tr>
                            </thead>

                            <tbody>
                                
                                {users.map(u => (
                                    <LinkContainer to={`/users/${u._id}`}>
                                        <tr>
                                            <td>
                                                {/* <TextFiledGroup 
                                                    placeholder={"ID"}
                                                    name={'ID'}
                                                    value={u._id}
                                                    disabled
                                                /> */}
                                                {u._id.slice(0,6)}
                                            </td>
                                            <td>
                                                {/* <TextFiledGroup 
                                                    placeholder={"이름"}
                                                    name={'name'}
                                                    value={u.name}
                                                    disabled
                                                /> */}
                                                {u.name}
                                            </td>
                                            <td>
                                                {/* <TextFiledGroup 
                                                    placeholder={"이메일"}
                                                    name={'email'}
                                                    value={u.email}
                                                    disabled
                                                /> */}
                                                {u.email}
                                            </td>
                                            <td>
                                                {/* <TextFiledGroup 
                                                    placeholder={"시설"}
                                                    name={'institue'}
                                                    value={u.institue}
                                                    disabled
                                                /> */}
                                                {u.institue}
                                            </td>
                                            <td>
                                                {/* <TextFiledGroup 
                                                    placeholder={"거주지"}
                                                    name={'area'}
                                                    value={u.area}
                                                    disabled
                                                /> */}
                                                {u.area}
                                            </td>
                                            <td>
                                                {/* <TextFiledGroup 
                                                    placeholder={"권한"}
                                                    name={'role'}
                                                    value={u.role}
                                                    disabled
                                                /> */}
                                                {u.role}
                                            </td>
                                            <td>
                                                {/* <TextFiledGroup 
                                                    placeholder={"등록일"}
                                                    name={'createdAt'}
                                                    value={u.createdAt.slice(0,10)}
                                                    disabled
                                                /> */}
                                                {u.createdAt.slice(0,10)}
                                            </td>
                                            <td>
                                                {/* <TextFiledGroup 
                                                    placeholder={"등록일"}
                                                    name={'createdAt'}
                                                    value={u.updatedAt.slice(0,10)}
                                                    disabled
                                                /> */}
                                                {u.updatedAt.slice(0,10)}
                                            </td>
                                        </tr>
                                    </LinkContainer>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )
            }
        </Container>
    );
};

export default Userlist;