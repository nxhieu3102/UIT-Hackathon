import styles from './index.module.css'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { loginStateContext } from '~/provider/LoginProvider'
import { useContext, useState } from 'react';

const SignUp = () => {
    const { loginState } = useContext(loginStateContext);
    const [message, setMessage] = useState('temp')
    const [confirmPassWord, setConfirmPassWord] = useState('')
    const [userInfor, setUserInfor] = useState({
        email: '',
        passWord: '',
    })

    const toggleUserInfor = (email, passWord) => {
        const newInfor = { email: email, passWord: passWord }
        setUserInfor(userInfor => newInfor)
    }

    const HandleChangeName = (event) => {
        event.preventDefault();
        toggleUserInfor(event.target.value, userInfor.passWord)
    }

    const HandleChangePassWord = (event) => {
        event.preventDefault();
        toggleUserInfor(userInfor.email, event.target.value)
    }

    const HandleChangePassConfirmWord = (event) => {
        event.preventDefault();
        setConfirmPassWord(event.target.value);
    }

    const API = 'http://localhost:3001/api/user/signup'
    const { email, passWord } = userInfor;

    const HandleSubmitSignUp = async (event) => {
        const newUser = {
            email: userInfor.email,
            password: userInfor.passWord
        }

        console.log(newUser);

        event.preventDefault();
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        response.json().then((result) => {
            if (result.message.localeCompare("existed") === 0) {
                setMessage("Tai khoan da ton tai")
            } else {
                setMessage("Dang ki thanh cong")
            }
        })

        toggleUserInfor('', '');
    }

    return (
        <div className={clsx(styles["container"])} id="container">
            <div className={clsx(styles["form-container"], styles["sign-in-container"])}>
                <form onSubmit={HandleSubmitSignUp}>
                    <h1>Đăng kí</h1>
                    <input value={email} spellCheck='false' placeholder="Email" type="email" onChange={HandleChangeName} name='email' />
                    <input value={passWord} placeholder="Mật khẩu" type="password" onChange={HandleChangePassWord} name='password' />
                    <input value={confirmPassWord} placeholder="Xác nhận mật khẩu" type="password" onChange={HandleChangePassConfirmWord} name='confirmPassword' />
                    <Link to='/'>Quên mật khẩu</Link>
                    <button type='submit'>Đăng kí</button>
                </form>
            </div>
            <div className={clsx(styles["overlay-container"])}>
                <div className={clsx(styles["overlay"])}>
                    <div className={clsx(styles["overlay-panel"], styles["overlay-right"])}>
                        <h1>Chào bạn,</h1>
                        <p>Cùng CollectMe chung tay tạo nên một trái đất xanh nhé!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp