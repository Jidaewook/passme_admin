import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { Loading } from '../../components';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Table } from 'reactstrap';

const NoticeDetail = () => {

    const {id} = useParams();
    const {pathname} = useLocation();
    // console.log(pathname)

    const [notice, setNotice] = useState({});
    const [loading, setLoading] = useState(true);

    const getNotice = async () => {
        try{
            const {data} = pathname.includes('notice')
                ? (
                    await axios.get(`/notice/${id}`)
                )
                : (
                    await axios.get(`/alarm/${id}`)
                )
            setNotice(data)
            console.log(data)
            setLoading(false)
        }
            
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getNotice()
    }, [])

    return (
        <Container>
            {loading 
                ? <Loading /> 
                : (
                    <>
                    <br/>
                    <h1>
                        Notice Detail
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
                                <th scope="row">{notice.results._id}</th>
                            </tr>
                            <tr>
                                <th scope="row">제목</th>
                                <td>{notice.results.title}</td>
                            </tr>
                            <tr>
                                <th scope="row">글 내용</th>
                                <td>{notice.results.desc}</td>
                            </tr>
                            <tr>
                                <th scope="row">장르</th>
                                <td>{notice.results.genres_ids}</td>
                            </tr>
                            <tr>
                                <th scope="row">유튜브 주소</th>
                                <td>{notice.results.url}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </>
                )
            }
            
        </Container>
    );
};

export default NoticeDetail;