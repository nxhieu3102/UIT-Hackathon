import styles from './index.module.css'
import clsx from 'clsx';
import logo from '~/assets/images/Dashboard/logo.png';
const Footer = () => {
    return (
        <footer className={clsx(styles["footer"])}>
            <div className={clsx(styles["about"])}>
                <div className={clsx(styles["about-us"])}>
                    <img src={logo} alt="logo" className={clsx(styles["logo"])}/>
                </div>
                <div className={clsx(styles["classify"])}>
                    <h1>Links</h1>
                    <ul>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                    </ul>
                </div>
                <div className={clsx(styles["quick-access"])}>
                    <h1>Links</h1>
                    <ul>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                        <li> <a href='/'>Trang chủ</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;