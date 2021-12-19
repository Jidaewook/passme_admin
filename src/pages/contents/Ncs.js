import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table, Spinner } from 'reactstrap';
import { Loading } from '../../components';
import { LinkContainer } from 'react-router-bootstrap';

const Ncs = () => {

    const [ncs, setNcs] = useState([]);

    const [loading, setLoading] = useState(true);

    const getNcs = async () => {
        try {
            const {data} = await axios.get('/ncs')
            // const {data} = await axios.get('http://localhost:8081/ncs')
            console.log(data)
            setNcs(data.results)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        getNcs()
    }, [])

    return (
        <Container>
            {loading 
                ? <Loading />
                : (
                    <div>
                        <br />
                        <h1>
                            NCS DB
                        </h1>
                        <br />
                    <Table hover>
                        <thead>
                            <tr>
                                <th scope="col">NcsId</th>
                                <th scope="col">Title</th>
                                <th scope="col">Desc</th>
                                <th scope="col">URL</th>
                                <th size="5" scope="col">Comments</th>
                                <th scope="col">Likes</th>
                            </tr>
                            </thead>
                            <tbody>
                                {ncs.map(u => (
                                    <LinkContainer to={`${u._id}`}>
                                        <tr>
                                            <th scope="row">{u._id}</th>
                                            <td>{u.title}</td>
                                            <td>{u.desc}</td>
                                            <td>{u.url}</td>
                                            <td>{u.comment.length}</td>
                                            <td>{u.likes.length}</td>
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

export default Ncs;