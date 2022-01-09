import React, {useState, useEffect} from 'react';
import { Button, Container, Table, Row } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Loading, TextFiledGroup } from '../../components';

const UserDetail = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        name: '',
        institue: '',
        area: '',
        role: ''
    })

    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem('jwtToken')

    const config = {
        headers : {
            Authorization: token
        }
    }

    const onChange = async (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const {name, institue, introduce, area, role} = user

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

    const editUser = async (e) => {
        e.preventDefault();
        const userInfo = {
            name, institue, introduce, area, role
        }
        console.log(userInfo)
        setLoading(true)
        try {
            const res = await axios.put(`http://localhost:8081/users/${id}`, userInfo, config)
            console.log('++++res', res.status)
            setLoading(false)
        }
        catch (e) {
            console.log(e)
            setLoading(false)
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
                                                onChange={onChange}
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
                                                disabled
                                            />                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">가입일</th>
                                        <td>
                                            <TextFiledGroup 
                                                placeholder={"가입일"}
                                                name={"createdAt"}
                                                value={user.createdAt}
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
                                                onChange={onChange}
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
                                                onChange={onChange}
                                            />
                                            {/* <SelectListGroup 
                                                placeholder={"거주지역"}
                                                name={'area'}
                                                value={user.area}
                                                options={regionOptions}
                                            /> */}
                                        </td>                                
                                    </tr>
                                    <tr>
                                        <th scope="row">자기소개</th>
                                        <td>
                                            <TextFiledGroup 
                                                placeholder={"자기소개"}
                                                name={"introduce"}
                                                value={user.introduce}
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
                                <Button 
                                    block 
                                    color='dark' 
                                    size='lg'
                                    onClick={editUser}
                                
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

export default UserDetail;