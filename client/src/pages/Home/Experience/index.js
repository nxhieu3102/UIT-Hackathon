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
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt'/>
                        <h2 className={clsx(styles["experience-item__name"])}>Đỗ Khải Hưng</h2>
                        <p className={clsx(styles["experince-item__des"])}>Tôi rất cảm kích với hoạt động thu gom rác thải và thực sự hy vọng sẽ có nhiều hơn những chiến dịch bảo vệ môi trường như vậy để giúp giảm thiểu tác động của rác thải đến môi trường. </p>
                    </div>
                    <div className={clsx(styles["experience-item"])}>
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt'/>
                        <h2 className={clsx(styles["experience-item__name"])}>Nguyễn Hải Chấn</h2>
                        <p className={clsx(styles["experince-item__des"])}>Tôi rất cảm kích với hoạt động thu gom rác thải và thực sự hy vọng sẽ có nhiều hơn những chiến dịch bảo vệ môi trường như vậy để giúp giảm thiểu tác động của rác thải đến môi trường. </p>
                    </div>
                    <div className={clsx(styles["experience-item"])}>
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt'/>
                        <h2 className={clsx(styles["experience-item__name"])}>Nguyễn Xuân Hiếu</h2>
                        <p className={clsx(styles["experince-item__des"])}>Tôi rất cảm kích với hoạt động thu gom rác thải và thực sự hy vọng sẽ có nhiều hơn những chiến dịch bảo vệ môi trường như vậy để giúp giảm thiểu tác động của rác thải đến môi trường. </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience;