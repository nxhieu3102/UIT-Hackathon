import { Fragment, useState, useContext } from "react"
import styles from './index.module.css'
import clsx from 'clsx';
import { Link, useNavigate } from "react-router-dom";
import { loginStateContext } from '~/provider/LoginProvider'
import axios from 'axios';

const API = 'http://localhost:3001/api/user/login'

const Login = () => {
    const navigate = useNavigate()
    const { loginState, toggleLoginState } = useContext(loginStateContext);
    const [message, setMessage] = useState('temp')

    const [userInfor, setUserInfor] = useState({
        userName: '',
        passWord: '',
    })

    const { userName, passWord } = userInfor;

    const HandleSubmitLoginForm = async (event) => {
        console.log("Dang nhap");
        event.preventDefault();
        const user = {
            email: userInfor.userName,
            password: userInfor.passWord
        }
        console.log(user);
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        response.json().then((result) => {
            console.log(result);

            if (result.success === true) {
                console.log("sucessfully");
                toggleLoginState(result.user.role)
                navigate('/')
            } else {
                setMessage("Dang nhap that bai")
            }
        })
        toggleUserInfor('', '')
    }

    const toggleUserInfor = (userName, passWord) => {
        const newInfor = { userName: userName, passWord: passWord }
        setUserInfor(userInfor => newInfor)
    }

    const HandleChangeName = (event) => {
        event.preventDefault();
        toggleUserInfor(event.target.value, userInfor.passWord)
    }

    const HandleChangePassWord = (event) => {
        event.preventDefault();
        toggleUserInfor(userInfor.userName, event.target.value)
    }

    return (
        <Fragment>
            <div className={clsx(styles["container"])} id="container">
                <div className={clsx(styles["form-container"], styles["sign-in-container"])}>
                    <form onSubmit={HandleSubmitLoginForm}>
                        <h1>Đăng nhập</h1>
                        <input value={userName} spellCheck='false' placeholder="Email" type="Email" onChange={HandleChangeName} name='username' required />
                        <input value={passWord} placeholder="Mật khẩu" type="password" onChange={HandleChangePassWord} name='password' required />
                        <Link to='/'>Quên mật khẩu</Link>
                        {message === 'temp' ? ' ' : <p>message</p>}
                        <button type="submit">Đăng nhập</button>
                    </form>
                </div>
                <div className={clsx(styles["overlay-container"])}>
                    <div className={clsx(styles["overlay"])}>
                        <div className={clsx(styles["overlay-panel"], styles["overlay-right"])}>
                            <h1>Chào bạn,</h1>
                            <p>Cùng CollectMe chung tay tạo nên một trái đất xanh nhé!</p>
                            <Link to='/SignUp'>
                                <button className={clsx(styles["ghost"])} id="signUp">Đăng kí</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Login