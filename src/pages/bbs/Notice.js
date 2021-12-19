import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">NoticeId</th>
                        <th scope="col">Title</th>
                        <th scope="col">Desc</th>
                        <th scope="col">수정</th>
                        <th scope="col">삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {notice.map(u => (
                        <>
                            <tr>
                                <th scope="row">{u._id}</th>
                                <td>{u.title}</td>
                                <td>{u.desc}</td>
                                <td><button type="button" class="btn btn-secondary">수정</button></td>
                                <td><button type="button" class="btn btn-secondary">삭제</button></td>

                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notice;