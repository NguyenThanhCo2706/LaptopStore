import { useEffect, useState } from 'react';
import userApi from '../../api/userApi';

const Users = () => {
    const [users, setUsers] = useState()
    let [a, b] = useState('0')
    useEffect(() => {
        userApi.getAll().then((data) => {
            setUsers(data.list)
        })
    }, [b])
    const handleUserClick = () => {
        b(!a)
    }
    return (
        <>
            {console.log(users)}
            {console.log(a)}
            <button onClick={handleUserClick}>ClickAAa</button>
        </>
    );
}

export default Users;