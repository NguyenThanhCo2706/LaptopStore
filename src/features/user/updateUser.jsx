import { useEffect, useState } from 'react';
import userApi from '../../api/userApi';
import { User } from '../../models'
const UpdateUser = (props) => {
    const { id } = props
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [avatar, setAvatar] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [note, setNote] = useState('')
    const handleUserClick = () => {
        const user = {
            id: id,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            birthday: birthday,
            avatar: avatar,
            phone: phone,
            address: address,
            note: note
        }
        userApi.updateUser(user)
    }
    return (
        <>
            username<input onChange={(e) => setUsername(e.target.value)} value={username} /><br />
            email<input onChange={(e) => setEmail(e.target.value)} value={email} /><br />
            password<input onChange={(e) => setPassword(e.target.value)} value={password} /><br />
            confirmPassword<input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} /><br />
            firstName<input onChange={(e) => setFirstName(e.target.value)} value={firstName} /><br />
            lastName<input onChange={(e) => setLastName(e.target.value)} value={lastName} /><br />
            gender<input onChange={(e) => setGender(e.target.value)} value={gender} /><br />
            birthday<input onChange={(e) => setBirthday(e.target.value)} value={birthday} /><br />
            avatar<input onChange={(e) => setAvatar(e.target.value)} value={avatar} /><br />
            phone<input onChange={(e) => setPhone(e.target.value)} value={phone} /><br />
            address<input onChange={(e) => setAddress(e.target.value)} value={address} /><br />
            note<input onChange={(e) => setNote(e.target.value)} value={note} /><br />
            <button onClick={handleUserClick}>Click</button>
        </>
    );
}

export default UpdateUser;