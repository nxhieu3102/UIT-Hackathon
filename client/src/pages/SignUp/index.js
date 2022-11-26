import styles from './index.module.css'
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
    <div className={clsx(styles["container"])} id="container">
        <div className={clsx(styles["form-container"], styles["sign-in-container"])}>
            <form action="#">
                <h1>Đăng nhập</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Mật khẩu" />
                <Link to='/'>Quên mật khẩu</Link>
                <button>Đăng nhập</button>
            </form>
        </div>
        <div className={clsx(styles["overlay-container"])}>
            <div className={clsx(styles["overlay"])}>
                <div className={clsx(styles["overlay-panel"], styles["overlay-right"])}>
                    <h1>Chào bạn,</h1>
                    <p>Cùng CollectMe chung tay tạo nên một trái đất xanh nhé!</p>
                    <button className={clsx(styles["ghost"])} id="signUp">Đăng kí</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp