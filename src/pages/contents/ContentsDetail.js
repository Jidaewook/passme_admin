import React, {useState, useEffect} from 'react';
import { Container, Table, Row, Button } from 'reactstrap';
import { Loading, TextFiledGroup } from '../../components';
import axios from 'axios';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const ContentsDetail = () => {

    const {pathname} = useLocation();

    const {id} = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [detail, setDetail] = useState({
        title: '',
        desc: '',
        url: '',
        poster: '',
        backdrop: '',
        genres_ids: [],
        comment: 0,
        likes: 0
    });

    const {title, desc, url, poster, backdrop, genres_ids, comment, likes, createdAt, updatedAt} = detail

    const getDetail = async () => {
        try {
            
            const {data} = pathname.includes('ncs') 
                ? await axios.get(`/ncs/${id}`)
                : await axios.get(`/psat/${id}`)
            
            console.log('url', data)
            setDetail(data.results)
            setLoading(false)
            // console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const onChange = async (e) => {
        setDetail({...detail, [e.target.name]: e.target.value})
    }

    const editDetail = async (e) => {
        e.preventDefault();
        const detailInfo = {
            title, desc, url, poster, backdrop, genres_ids
        }
        console.log(detailInfo)
        setLoading(true)

        console.log(pathname.includes('ncs'))

        try {
            const res = pathname.includes('ncs') 
                ? await axios.put(`http://localhost:8081/ncs/${id}`, detailInfo)
                : await axios.put(`http://localhost:8081/psat/${id}`, detailInfo)
            
            setLoading(false)
            console.log('수정완료', res)
            
        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }   
    }

    const deleteDetail = async (e) => {
        e.preventDefault();
        setLoading(true)
        try{
            const res = pathname.includes('ncs')
                ? await axios.delete(`http://localhost:8081/ncs/${id}`)
                : await axios.delete(`http://localhost:8081/psat/${id}`)
            setLoading(false)
            navigate('/contents/ncs')
        } catch (e) {
            console.log(e.message)
            setLoading(false)
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
                        <Row xs="4"> 
                            <div className='col-md mt-3 m-auto'>
                                <button type='button' className='btn btn-light' onClick={() => navigate(-1)}>Go Back</button>
                            </div>
                            <div className='mt-3 flex-end'>
                                <h3>
                                    {detail.title.slice(0, 9)}
                                </h3>
                            </div>
                        </Row>
                        <br/>
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">항목</th>
                                    <th scope="col">내용</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ID</th>
                                    <td>
                                        <TextFiledGroup
                                            placeholder={"ID"}
                                            name={"ID"}
                                            value={detail._id}
                                            disabled
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">제목</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"TITLE"}
                                            name={"title"}
                                            value={title}
                                            onChange={onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">글 내용</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"DESC"}
                                            name={"desc"}
                                            value={desc}
                                            onChange={onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">장르</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"GENRES"}
                                            name={"genres_ids"}
                                            value={genres_ids}
                                            onChange={onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">유튜브 주소</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"YOUTUBE"}
                                            name={"url"}
                                            value={url}
                                            onChange={onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">댓글수</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"COMMENTSCOUNT"}
                                            name={"comment"}
                                            value={comment.length}
                                            disabled
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">좋아요수</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"LIKESCOUNT"}
                                            name={"likecount"}
                                            value={likes.length}
                                            disabled
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">등록일</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"CREATEDAT"}
                                            name={"createdAT"}
                                            // value={createdAt.slice(0,10)}
                                            disabled
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">수정일</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"UPDATEDAt"}
                                            name={"updatedAt"}
                                            // value={updatedAt.slice(0,10)}
                                            disabled
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Row xs='2'>
                            <div>
                                <Button 
                                    block 
                                    color='danger' 
                                    size='lg'
                                    onClick={deleteDetail}
                                >
                                    삭제하기
                                </Button>
                            </div>
                            <div>
                                <Button block color='dark' size='lg'
                                    onClick={editDetail}
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

export default ContentsDetail;