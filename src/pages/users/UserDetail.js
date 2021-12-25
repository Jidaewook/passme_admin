import React, {useState, useEffect} from 'react';
import { Container, Table } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loading } from '../../components';

const UserDetail = () => {

    const { id } = useParams();

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            const {data} = await axios.get(`/users/${id}`)
            setUser(data)
            console.log(data)
            setLoading(false);
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Container>
            {loading 
                ? <Loading /> 
                : (
                    <>
                    <br/>
                    <h1>
                        ContentsDetail
                    </h1>
                    <br/>
                    <Table hover>
                        <thead>
                            <tr>
                                <th scope="col">항목</th>
                                <th scope="col">내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">ID</th>
                                <th scope="row">{user._id}</th>
                            </tr>
                            <tr>
                                <th scope="row">이름</th>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">이메일</th>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">가입일</th>
                                <td>{user.createdAt}</td>
                            </tr>
                            <tr>
                                <th scope="row">선호기관</th>
                                <td>{user.institue}</td>
                            </tr>
                            <tr>
                                <th scope="row">거주지역</th>
                                <td>{user.area}</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                    </>
                )
            }
        </Container>
    );
};

export default UserDetail;