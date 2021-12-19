import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ContentsList = () => {

    const [ncs, setNcs] = useState([]);

    const getNcs = async () => {
        try {
            const {data} = await axios.get('/ncs')
            // const {data} = await axios.get('http://localhost:8081/ncs')
            console.log(data)
            setNcs(data.results)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        getNcs()
    }, [])

    return (
        <div>
            <h1>ContentsList</h1>
            {ncs.length}
        </div>
    );
};

export default ContentsList;