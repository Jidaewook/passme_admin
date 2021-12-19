import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table, Spinner } from 'reactstrap';

const Psat = () => {
    const [Psat, setPsat] = useState([]);

    const [loading, setLoading] = useState(true);

    const getPsat = async () => {
        try {
            const {data} = await axios.get('/psat')
            // const {data} = await axios.get('http://localhost:8081/ncs')
            console.log(data)
            setPsat(data.results)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        getPsat()
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
                                <th scope="col">PsatId</th>
                                <th scope="col">Title</th>
                                <th scope="col">Desc</th>
                                <th scope="col">URL</th>
                                <th scope="col">Comments</th>
                                <th scope="col">Likes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Psat.map(u => (
                                <>
                                    <tr>
                                        <th scope="row">{u._id}</th>
                                        <td>{u.title}</td>
                                        <td>{u.desc.slice(0, 50)}</td>
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

export default Psat;