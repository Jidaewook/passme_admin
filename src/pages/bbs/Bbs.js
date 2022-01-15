import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table, Button, Row } from 'reactstrap';
import { Loading, TextFiledGroup } from '../../components';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Bbs = () => {

    const {pathname} = useLocation();
    // console.log(pathname)

    const [bbs, setBbs] = useState([]);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const getBbs = async () => {
        try {
            const {data} = await axios.get(`/bbs`)
            setBbs(data.results);
            setLoading(false)
            console.log(data.results);
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBbs();
    }, [])

    return (
        <Container>
            <br />
            <Row xs='2' className='mt-3'>
                <div className='col-md mt-3 m-auto'> 
                    <h1>
                        BBS DB
                    </h1>
                </div>
                <div className='col-md mt-3 m-auto'>
                    <Button 
                        block 
                        color='primary' 
                        size='md'
                        onClick={() => navigate('/Register', {contents: 'bbs'})}
                    >
                        신규 게시물 등록
                    </Button>
                </div>
                
            </Row>
            <br />
            {loading 
                ? <Loading /> 
                : (
                    <Table hover>
                        <thead>
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Title</th>
                                <th scope="col">Desc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bbs.map(u => (
                                <LinkContainer to={`${u._id}`}>
                                    {/* <tr>
                                        <td>{u.category}</td>
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
                                    </tr> */}
                                    <tr>
                                        <td>
                                            {u.category}
                                        </td>
                                        <td>
                                            {
                                            u.title.length > 15
                                                ? `${u.title.slice(0,15)}...` 
                                                : u.title
                                            }
                                        </td>
                                        <td>    
                                            {
                                                u.desc.length > 25 
                                                    ? `${u.desc.slice(0,25)}...`
                                                    : u.desc
                                            }
                                        </td>
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

export default Bbs;