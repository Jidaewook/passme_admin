import React, {useState, useEffect} from 'react';
import { Container, Table, Row, Button } from 'reactstrap';
import { Loading, TextFiledGroup } from '../../components';
import axios from 'axios';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const NoticeDetail = () => {

    const {id} = useParams();
    const {pathname} = useLocation();
    // console.log(pathname)

    const [notice, setNotice] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
                    <Row xs="4"> 
                            <div className='col-md mt-3 m-auto'>
                                <button type='button' className='btn btn-light' onClick={() => navigate(-1)}>Go Back</button>
                            </div>
                            <div className='mt-3 flex-end'>
                                <h3>
                                    {notice.results.title.slice(0, 9)}
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
                                        value={notice.results._id}
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
                                        value={notice.results.title}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">글 내용</th>
                                <td>
                                    <TextFiledGroup
                                        placeholder={"DESC"}
                                        name={"desc"}
                                        value={notice.results.desc}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">장르</th>
                                <td>
                                    <TextFiledGroup 
                                        placeholder={"GENRES"}
                                        name={"genres"}
                                        value={notice.results.genres_ids && notice.results.genres_ids.map((genre, index) => (
                                            index === notice.results.genres_ids.length -1
                                                ? genre
                                                : `${genre}, `
                                        ))}
                                    />
                                    {/* {notice.results.genres_ids.map(g => (
                                        <>
                                            {g},
                                        </>
                                    ))} */}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">유튜브 주소</th>
                                <td>
                                    <TextFiledGroup 
                                        placeholder={"YOUTUBE"}
                                        name={"youtube"}
                                        value={notice.results.url}
                                    />
                                </td>
                            </tr>
                            <tr>
                                    <th scope="row">등록일</th>
                                    <td>
                                        <TextFiledGroup 
                                            placeholder={"CREATEDAT"}
                                            name={"createdAT"}
                                            value={notice.results.createdAt.slice(0,10)}
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
                                            value={notice.results.updatedAt.slice(0,10)}
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

export default NoticeDetail;