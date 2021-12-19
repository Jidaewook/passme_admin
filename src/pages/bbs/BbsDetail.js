import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { Loading } from '../../components';
import { Container } from 'reactstrap';

const BbsDetail = () => {

    const {id} = useParams();
    const {pathname} = useLocation();
    // console.log(pathname)

    const [bbs, setBbs] = useState({});
    const [loading, setLoading] = useState(true);

    const getBbs = async () => {
        try{
            const {data} = pathname.includes('notice')
                ? (
                    await axios.get(`/notice/${id}`)
                )
                : (
                    await axios.get(`/alarm/${id}`)
                )
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
                    <h2>
                        {bbs.results.title}
                    </h2>
                    </>
                )
            }
            
        </Container>
    );
};

export default BbsDetail;