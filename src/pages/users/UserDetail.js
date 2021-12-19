import React, {useState, useEffect} from 'react';
import { Container, Table } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loading } from '../../components';

const UserDetail = () => {

    const { id } = useParams();

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

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Container>
            {loading 
                ? <Loading /> 
                : (
                    <>
                    <br/>
                    <h1>
                        {id}
                    </h1>
                    <h2>
                        이름{user.name}
                    </h2>
                    <br/>
                    </>
                )
            }
           
        </Container>
    );
};

export default UserDetail;