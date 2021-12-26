import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table, Spinner, Row, Button } from 'reactstrap';
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
            <Row>
                <div className='col-md mt-3 m-auto'>
                    <h1>
                        NOTICE DB
                    </h1>
                </div>
                <div className='col-md mt-3 m-auto'>
                    <Button
                        block color='primary' size='md' onClick={console.log('신규 콩지 등록')}
                    >
                        신규 공지 등록
                    </Button>
                </div>
            </Row>
            <br />
            {loading 
                ? <Loading /> 
                : (
                    <div>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">DESC</th>
                                    <th scope="col">CREATE DATE</th>
                                    <th scope="col">UPDATE DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notice.map(u => (
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
                                            <td>{u.createdAt}</td>
                                            <td>{u.updatedAt}</td>
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

export default Notice;