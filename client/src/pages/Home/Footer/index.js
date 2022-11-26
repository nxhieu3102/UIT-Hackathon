import styles from './index.module.css'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <Footer className={clsx(styles["footer"])}>
            <div className={clsx(styles["about"])}>
                <div className={clsx(styles["about-us"])}>
                    <h1>Về chúng tôi</h1>
                    <p>CollectMe</p>
                </div>
                <div className={clsx(styles["classify"])}>
                    <h1>Phân loại</h1>
                    <Link to='/'>Trang chủ</Link>
                    <Link to='/'>Tin tức</Link>
                </div>
                <div className={clsx(styles["quick-acess"])}>
                    <h1>Truy cập nhanh</h1>
                    <Link to='/'>Về chúng tôi</Link>
                    <Link to='/'>Liên hệ</Link>
                    <Link to='/'>Đóng góp</Link>
                    <Link to='/'>Chính sách</Link>
                </div>
            </div>
        </Footer>
        )
}

export default Footer;