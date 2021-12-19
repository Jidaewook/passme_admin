import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Table } from 'reactstrap';

const Notice = () => {
    const [notice, setNotice] = useState([]);

    const getNotice = async () => {
        try {
            const {data} = await axios.get('http://passmebackend-env.eba-vtsbabpw.us-east-2.elasticbeanstalk.com/notice')
            // const {data} = await axios.get('http://localhost:8081/ncs')
            console.log(data)
            setNotice(data.results)
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
                        <>
                            <tr>
                                <th scope="row">{u._id}</th>
                                <td>{u.title}</td>
                                <td>{u.desc}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Notice;