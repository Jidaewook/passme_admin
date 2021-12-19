import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table, Spinner } from 'reactstrap';

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
                ? (
                    <Spinner
                        color="secondary"
                        style={{margin: 'auto', display: 'block', width: '60px', height: '60px', borderWidth: '10px'}}
                    >
                        Loading...
                    </Spinner>
                ) 
                : (
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
                                <>
                                    <tr>
                                        <th scope="row">{u._id}</th>
                                        <td>{u.title}</td>
                                        <td>{u.desc}</td>
                                        <td>{u.url}</td>
                                        <td>{u.comment.length}</td>
                                        <td>{u.likes.length}</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </Table>
                )
            }
        </Container>
    );
};

export default Ncs;