import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Table } from 'reactstrap';


const Userlist = () => {

    const [users, setUsers] = useState([])

    const getUserData = async () => {
        
        try { 
            const {data} = await axios.get('http://localhost:8081/users')
            setUsers(data)
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
                    <>
                      <tr>
                        <th scope="row">{u._id}</th>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.role}</td>
                      </tr>
                    </>
                ))}
                                    </tbody>

                </Table>

        </Container>
    );
};

export default Userlist;