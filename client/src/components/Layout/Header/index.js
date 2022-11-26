import { Link } from 'react-router-dom';
import styles from './header.module.css'
import logo from '~/assets/images/logo_white.png'
import clsx from 'clsx';
import { Fragment, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import google_logo from '~/assets/images/google.png'
import facebook_logo from '~/assets/images/facebook.png'
import logo_black from '~/assets/images/logo_black.png'
import { loginStateContext } from '~/provider/LoginProvide'

const LoginForm = () => {
    const { loginState, toggleLoginState } = useContext(loginStateContext);
    const [message, setMessage] = useState('temp')
    const [userInfor, setUserInfor] = useState({
        userName: '',
        passWord: '',
    })
    const { userName, passWord } = userInfor;

    const API = 'http://localhost:3002/api/user/login'

    const HandleSubmitSignUp = async (event) => {
        event.preventDefault();
        const response = await fetch(API, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(userInfor)
        });

        response.json().then((result) => {
            console.log(result);
            if (result.message.localeCompare("Sucessfully") === 0) {
                setMessage("Dang nhap thanh cong")
                toggleLoginState(true)
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
            {(loginState === true) && <div className={clsx(styles["form-login"])}>
                <img className={clsx(styles['logo'])} src={logo_black} alt="logo" />
                <div onClick={() => { toggleLoginState(false) }} className={clsx(styles['close-form'])}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
                <div className={clsx(styles["form-login-social"])}>
                    <div className={clsx(styles["form-login-social-item"])}>
                        <img src={google_logo} className={clsx(styles["form-login-logo"])} alt="login by google" />
                        <p>Đăng nhập với Google</p>
                    </div>
                    <div className={clsx(styles["form-login-social-item"])}>
                        <img src={facebook_logo} className={clsx(styles["form-login-logo"])} alt="login by google" />
                        <p>Đăng nhập với Facebook</p>
                    </div>
                </div>
                <div className={clsx(styles["line-cross"])}>Hoặc</div>
                <form onSubmit={HandleSubmitSignUp}>
                    <div className={clsx(styles["form-login-default"])}>
                        <input value={userName} spellCheck='false' placeholder="Tên tài khoản" type="text" onChange={HandleChangeName} name='username' />
                        <input value={passWord} placeholder="Mật khẩu" type="password" onChange={HandleChangePassWord} name='password' />
                    </div>
                    <input type='submit' className={clsx(styles['signup-btn'])} />
                    {message !== "temp" && <p> {message} </p>}
                </form>
            </div>}
        </Fragment>
    );
}

const Header = () => {
    const { loginState, toggleLoginState } = useContext(loginStateContext);
    return (
        <Fragment>
            <div className={clsx(styles["header-wrapper"])}>
                <div className={clsx(styles['menu'])}>
                    <Link to='/' className={clsx(styles['menu-item'], styles['header-logo'])}>
                        <img className={styles['logo-img']} src={logo} alt='logo'></img>
                        <p>Smthland</p>
                    </Link>
                    <Link to='/' className={clsx(styles['menu-item'])}>
                        <p>Hỗ trợ</p>
                    </Link>
                    <Link to='/' className={clsx(styles['menu-item'])}>
                        <p>Điều khoản</p>
                    </Link>
                </div>
                <div className={clsx(styles['header-action'])}>
                    {loginState === false && <div className={clsx(styles['login-button'])} onClick={() => { toggleLoginState(true) }}>Đăng nhập</div>}
                </div>
            </div>
            <LoginForm/>
        </Fragment>
    );
}

export default Header;