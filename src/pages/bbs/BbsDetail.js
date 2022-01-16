import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { Loading } from '../../components';
import { Container, Table, Row, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const BbsDetail = () => {

    const {id} = useParams();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [bbs, setBbs] = useState({
        title: '',
        desc: '',
        poster: '',
        category: [],
        tag: [],
        comment: 0,
        likes: 0,
        attached: '',
        url: ''
    });
    
    const {title, desc, poster, category, tag, comment, likes, attached, url } = bbs

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

    const onChange = async (e) => {
        setBbs({...bbs, [e.target.name]: e.target.value})
    }

    const editBbs = async (e) => {
        e.preventDefault();
        const bbsInfo = {
            title, desc, poster, category, tag, comment, likes, attached, url
        }
        console.log(bbsInfo)
        setLoading(true)

        try {   
            const res = await axios.put(`/bbs/${id}`)
            setLoading(false)
            console.log('수정완료', res)
        } catch(e) {
            console.log(e.message)
            setLoading(false)
        }
        
    }


    const deleteBbs = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.delete(`/bbs/${id}`)
            setLoading(false)
            navigate('/bbs/bbs')
        } catch (e) {
            console.log(e.message)
            setLoading(false)
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
                    <Row xs="4"> 
                            <div className='col-md mt-3 m-auto'>
                                <button type='button' className='btn btn-light' onClick={() => navigate(-1)}>Go Back</button>
                            </div>
                            <div className='mt-3 flex-end'>
                                <h3>
                                    {bbs.title}
                                </h3>
                            </div>
                        </Row>
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
                                <th scope="row">제목</th>
                                <td>{bbs.results.title}</td>
                            </tr>
                            <tr>
                                <th scope="row">글 내용</th>
                                <td>{bbs.results.desc}</td>
                            </tr>
                            <tr>
                                <th scope="row">카테고리</th>
                                <td>
                                    {bbs.results.category && bbs.results.category.map((cate, index) => (
                                        index === bbs.results.category.length - 1 
                                            ? cate
                                            : `${cate}, `
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">유튜브 주소</th>
                                <td>{bbs.results.url}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Row xs='2'>
                            <div>
                                <Button 
                                    block 
                                    color='danger' 
                                    size='lg'
                                    onClick={deleteBbs}
                                >
                                    삭제하기
                                </Button>
                            </div>
                            <div>
                                <Button block color='dark' size='lg'
                                    onClick={editBbs}
                                >
                                    수정하기
                                </Button>
                            </div>
                        </Row>
                    </>
                )
            }
            
        </Container>
    );
};

export default BbsDetail;