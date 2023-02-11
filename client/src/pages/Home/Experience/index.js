import styles from './index.module.css'
import clsx from 'clsx';
import { Fragment } from 'react';
import avt from '~/assets/images/Home/Event/event1.jpg'

const Experience = () => {
    return (
        <Fragment>
            <div className={clsx(styles["experience"])}>
                <div className={clsx(styles["experience-list"])}>
                    <div className={clsx(styles["experience-item"])}>
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt' />
                        <h2 className={clsx(styles["experience-item__name"])}>Đỗ Khải Hưng</h2>
                        <p className={clsx(styles["experince-item__des"])}>Việc dọn rác khiến tôi hài lòng và tự hào. Góp phần giữ gìn môi trường xanh. Ngoài ra, tình nguyện dọn rác còn mang lại sự tổng hợp và trách nhiệm cho cộng đồng. Hỗ trợ tạo môi trường sạch và đẹp hơn cho tất cả mọi người sống.
                        </p>
                    </div>
                    <div className={clsx(styles["experience-item"])}>
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt' />
                        <h2 className={clsx(styles["experience-item__name"])}>Nguyễn Hải Chấn</h2>
                        <p className={clsx(styles["experince-item__des"])}>Tình nguyện dọn rác là một hành động tốt đẹp và có ý nghĩa rất cao. Nó góp phần tạo nên môi trường sạch, trong và tự hào cho cộng đồng, tạo sự tổng hợp và trách nhiệm cho mỗi cá nhân trong xã hội. Tình nguyện dọn rác còn là cơ hội để chúng ta giúp đỡ môi trường và xây dựng một thế giới tốt đẹp hơn cho tương lai. </p>
                    </div>
                    <div className={clsx(styles["experience-item"])}>
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt' />
                        <h2 className={clsx(styles["experience-item__name"])}>Nguyễn Xuân Hiếu</h2>
                        <p className={clsx(styles["experince-item__des"])}>Tham gia hoạt động dọn rác là một cơ hội tuyệt vời để góp phần giữ gìn môi trường. Tạo cảm giác tự hào và trách nhiệm của sinh viên trong cộng đồng. Kết nối với mọi người và tạo nên mối quan hệ tốt đẹp. </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience;