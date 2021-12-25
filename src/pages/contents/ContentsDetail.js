import React, {useState, useEffect} from 'react';
import { Container, Table } from 'reactstrap';
import { Loading } from '../../components';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

const ContentsDetail = () => {

    const {pathname} = useLocation();

    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    const getDetail = async () => {
        try {
            
            const {data} = pathname.includes('ncs') 
                ? (
                    await axios.get(`/ncs/${id}`)
                ) 
                : (
                    await axios.get(`/psat/${id}`)
                )
            setDetail(data)
            setLoading(false)
            // console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <Container>
            {loading 
                ? <Loading /> 
                : (
                    <>
                    <br/>
                    <h1>
                        ContentsDetail
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
                                <th scope="row">{detail.results._id}</th>
                            </tr>
                            <tr>
                                <th scope="row">제목</th>
                                <td>{detail.results.title}</td>
                            </tr>
                            <tr>
                                <th scope="row">글 내용</th>
                                <td>{detail.results.desc}</td>
                            </tr>
                            <tr>
                                <th scope="row">장르</th>
                                <td>{detail.results.genres_ids}</td>
                            </tr>
                            <tr>
                                <th scope="row">유튜브 주소</th>
                                <td>{detail.results.url}</td>
                            </tr>
                            <tr>
                                <th scope="row">댓글수</th>
                                <td>{detail.results.comment.length}</td>
                            </tr>
                            <tr>
                                <th scope="row">좋아요수</th>
                                <td>{detail.results.likes.length}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </>
                )
            } 
        </Container>
    );
};

export default ContentsDetail;