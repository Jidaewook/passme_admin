import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table } from 'reactstrap';
import { Loading } from '../../components';
import { LinkContainer } from 'react-router-bootstrap';

const Notice = () => {
    const [notice, setNotice] = useState([]);

    const [loading, setLoading] = useState(true);

    const getNotice = async () => {
        try {
            const {data} = await axios.get('/notice')
            // const {data} = await axios.get('http://localhost:8081/ncs')
            console.log(data)
            setNotice(data.results)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getNotice()
    }, [])

    return (
        <Container>
            <br />
            <h1>
                NOTICE DB
            </h1>
            <br />
            {loading 
                ? <Loading /> 
                : (
                    <Table hover>
                        <thead>
                            <tr>
                                <th scope="col">NoticeId</th>
                                <th scope="col">Title</th>
                                <th scope="col">Desc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notice.map(u => (
                                <LinkContainer to={`${u._id}`}>
                                    <tr>
                                        <th scope="row">{u._id}</th>
                                        <td>{u.title}</td>
                                        <td>{u.desc}</td>
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

export default Notice;