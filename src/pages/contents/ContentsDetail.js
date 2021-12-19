import React, {useState, useEffect} from 'react';
import { Container } from 'reactstrap';
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
                            NCS Detail
                        </h1>
                        <h2>
                            {detail.results.title}
                        </h2>
                        <br/>
                    </>
                )
            } 
        </Container>
    );
};

export default ContentsDetail;