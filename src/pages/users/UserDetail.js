import React, {useState, useEffect} from 'react';
import { Button, Container, Table, Row } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Loading, TextFiledGroup } from '../../components';

const UserDetail = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            const {data} = await axios.get(`/users/${id}`)
            setUser(data)
            console.log(data)
            setLoading(false);
        }
        catch (e) {
            console.log(e)
        }
    }

    const deleteUser = async () => {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const regionOptions = [
        {label: '거주지역 선택', value: 0},
        {label: '서울', value: 'seoul'},
        {label: '부산', value: 'busan'},
        {label: '인천', value: 'incheon'},
        {label: '대구', value: 'daegu'},
        {label: '광주', value: 'gwangju'},
        {label: '대전', value: 'daejeon'},
        {label: '울산', value: 'Intern'},
        {label: '세종', value: 'Other'}
    ]

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
                                    {user.name}
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
                                        <th scope="row">
                                            <TextFiledGroup 
                                                placeholder={"ID"}
                                                name={'ID'}
                                                value={user._id}
                                                disabled
                                            />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="row">이름</th>
                                        <td>
                                            <TextFiledGroup 
                                                placeholder={"이름"}
                                                name={'name'}
                                                value={user.name}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">이메일</th>
                                        <td>
                                            <TextFiledGroup 
                                                placeholder={"이메일"}
                                                name={"email"}
                                                value={user.email}
                                            />                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">가입일</th>
                                        <td>
                                            <TextFiledGroup 
                                                placeholder={"가입일"}
                                                name={"createdAt"}
                                                value={user.createdAt.slice(0,10)}
                                                disabled
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">선호기관</th>
                                        <td>
                                            <TextFiledGroup 
                                                placeholder={"선호기관"}
                                                name={"institue"}
                                                value={user.institue}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">거주지역</th>
                                        <td>
                                            <TextFiledGroup 
                                                placeholder={"거주지역"}
                                                name={"area"}
                                                value={user.area}
                                            />
                                            {/* <SelectListGroup 
                                                placeholder={"거주지역"}
                                                name={'area'}
                                                value={user.area}
                                                options={regionOptions}
                                            /> */}
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

export default UserDetail;