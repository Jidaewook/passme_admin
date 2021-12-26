import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table, Spinner, Row, Button } from 'reactstrap';
import { Loading } from '../../components';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const Ncs = () => {

    const [ncs, setNcs] = useState([]);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

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
                        <Row xs='2' className='mt-3'>
                            <div className='col-md mt-3 m-auto'> 
                                <h1>
                                    NCS DB
                                </h1>
                            </div>
                            <div className='col-md mt-3 m-auto'>
                                <Button 
                                    block 
                                    color='primary' 
                                    size='md'
                                    onClick={() => navigate('/Register')}
                                >
                                    신규 콘텐츠 등록
                                </Button>
                            </div>
                            
                        </Row>
                        <br />
                        <Table hover>
                            <thead>
                                <tr>
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
                                            <td>
                                                {u.title.length > 15
                                                    ? `${u.title.slice(0,15)}...` 
                                                    : u.title
                                                }
                                            </td>
                                            <td>
                                                {u.desc.length > 25 
                                                    ? `${u.desc.slice(0,25)}...`
                                                    : u.desc
                                                }
                                            </td>
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