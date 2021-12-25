import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { Loading } from '../../components';
import { Container, Table } from 'reactstrap';

const BbsDetail = () => {

    const {id} = useParams();
    const {pathname} = useLocation();
    console.log(pathname)

    const [bbs, setBbs] = useState({});
    const [loading, setLoading] = useState(true);

    const getBbs = async () => {
        try{
            const {data} = await axios.get(`/bbs/${id}`)
            setBbs(data)
            console.log(data)
            setLoading(false)
        }
            
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBbs()
    }, [])

    return (
        <Container>
            {loading 
                ? <Loading /> 
                : (
                    <>
                    <br/>
                    <h1>
                        BbsDetail
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
                                <th scope="row">{bbs.results._id}</th>
                            </tr>
                            <tr>
                                <th scope="row">카테고리</th>
                                <td>{bbs.results.category}</td>
                            </tr>
                            <tr>
                                <th scope="row">제목</th>
                                <td>{bbs.results.title}</td>
                            </tr>
                            <tr>
                                <th scope="row">글 내용</th>
                                <td>{bbs.results.desc}</td>
                            </tr>
                            <tr>
                                <th scope="row">장르</th>
                                <td>{bbs.results.genres_ids}</td>
                            </tr>
                            <tr>
                                <th scope="row">유튜브 주소</th>
                                <td>{bbs.results.url}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </>
                )
            }
            
        </Container>
    );
};

export default BbsDetail;