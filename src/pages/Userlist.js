import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Table } from 'reactstrap';
import { Loading } from '../components';
import {LinkContainer } from 'react-router-bootstrap';

const Userlist = () => {

    const [users, setUsers] = useState([])

    const [loading, setLoading] = useState(true);

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
            <br />
            <h1>
                USER DB
            </h1>
            <br />
            {loading 
                ? <Loading />
                : (
                    <Table hover>
                    <thead>
                          <tr>
                            <th scope="col">UserId</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">ROLE</th>
                          </tr>
                        </thead>

                        <tbody>
                            
                            {users.map(u => (
                                <LinkContainer to={`/users/${u._id}`}>
                                    <tr>
                                            <th scope="row">{u._id}</th>
                                            <td>{u.name}</td>
                                            <td>{u.email}</td>
                                            <td>{u.role}</td>
                                    </tr>
                                </LinkContainer>

                            ))}
                        </tbody>
                    </Table>
                )
            }
        </Container>
    );
};

export default Userlist;