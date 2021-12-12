import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Userlist = () => {

    const [users, setUsers] = useState([])

    const getUserData = async () => {
        
        try { 
            const {data} = await axios.get('http://localhost:8081/users')
            setUsers(data)
        } 
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div>
            <h1>
                {/* {users.length} */}
                {users.map(u => (
                    <h1>
                        {u.email}
                    </h1>
                ))}
            </h1>
        </div>
    );
};

export default Userlist;