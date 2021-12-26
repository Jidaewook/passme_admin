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
                        <Row xs="4"> 
                            <div className='col-md mt-3 m-auto'>
                                <button type='button' className='btn btn-light' onClick={() => navigate(-1)}>Go Back</button>
                            </div>
                            <div className='mt-3 flex-end'>
                                <h3>
                                    {detail.results.title.slice(0, 9)}
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
                                            value={detail.results._id}
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
                                            value={detail.results.title}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">글 내용</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"DESC"}
                                            name={"desc"}
                                            value={detail.results.desc}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">장르</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"GENRES"}
                                            name={"genre"}
                                            value={detail.results.genres_ids}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">유튜브 주소</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"YOUTUBE"}
                                            name={"youtube"}
                                            value={detail.results.url}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">댓글수</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"COMMENTSCOUNT"}
                                            name={"commcount"}
                                            value={detail.results.comment.length}
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
                                            value={detail.results.likes.length}
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
                                            value={detail.results.createdAt.slice(0,10)}
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
                                            value={detail.results.updatedAt.slice(0,10)}
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
                                    onClick={console.log("jjjjjjj")}
                                >
                                    삭제하기
                                </Button>
                            </div>
                            <div>
                                <Button block color='dark' size='lg'>
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