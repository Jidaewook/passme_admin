import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table } from 'reactstrap';
import { Loading } from '../../components';
import { LinkContainer } from 'react-router-bootstrap';
import { Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Bbs = () => {

    const {pathname} = useLocation();
    console.log(pathname)


    const [bbs, setBbs] = useState([]);
    const [free, setFree] = useState([]);
    const [qna, setQna] = useState([]);
    const [pass, setPass] = useState([]);

    const [loading, setLoading] = useState(true);

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
            <h1>
                BBS DB
            </h1>
            <br />
            {loading 
                ? <Loading /> 
                : (
                    <Table hover>
                        <thead>
                            <tr>
                                <th scope="col">BBSId</th>
                                <th scope="col">Category</th>
                                <th scope="col">Title</th>
                                <th scope="col">Desc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bbs.map(u => (
                                <LinkContainer to={`${u._id}`}>
                                    <tr>
                                        <th scope="row">{u._id}</th>
                                        <td>{u.category}</td>
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

export default Bbs;