import { Fragment } from "react"
import styles from './index.module.css'
import clsx from 'clsx'
import search from '~/assets/images/Dashboard/search.png'
import plastic from '~/assets/images/Dashboard/Plastic.png'
const DashboardUser = () => {
    const display = ()=>{
        const element = document.getElementById('campaign-list')
        element.style.display = 'block'
    }
    const ndisplay = ()=>{
        const element = document.getElementById('campaign-list')
        element.style.display = 'none'
    }
    return (
        <Fragment>
            <div className={clsx(styles["dashboard"])}>
                <div className={clsx(styles["content"])}>
                    <p className={clsx(styles["content-name"])}>Nguyễn Văn An</p>
                </div>
                <div className={clsx(styles["details"])}>
                    <div className={clsx(styles["details-header"])}>
                        <div className={clsx(styles["add-donations"])}>
                            <p className={clsx(styles["add-donations-plus"])}>+</p>
                            <p className={clsx(styles["add-donations-text"])}>Tạo quyên góp mới</p>
                        </div>
                        <div className={clsx(styles["details-filter"])}>
                            <div className={clsx(styles["filter-by"])}>Approved</div>
                            <div className={clsx(styles["filter-by"])}>Pending</div>
                            <div className={clsx(styles["filter-by"])}>Denied</div>
                        </div>
                    </div>
                    <div className={clsx(styles["details-content"])}>
                        <div className={clsx(styles["campaign-form"])}>
                            <div className={clsx(styles["form-search"])}>
                                <img className={clsx(styles["form-search-icon"])} src={search} />
                                <input onFocus={display} onBlur = {ndisplay}className={clsx(styles["form-search-input"])} placeholder="Tìm kiếm chiến dịch" />
                            </div>
                            <ul className={clsx(styles["campaign-list"])} id='campaign-list'>
                                <li className={clsx(styles["campaign-item"])}>
                                    <div className={clsx(styles["campaign-item__location"])}>
                                        <img src={plastic} className={clsx(styles["campaign-item__icon"])} alt='' />
                                        <div className={clsx(styles["campaign-item__text"])}>
                                            <p className={clsx(styles["campaign-item__title"])}>Compain title </p>
                                            <p className={clsx(styles["campaign-item__title"])}>227 Nguyen Van Cu </p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["campaign-item__date"])}>
                                        <p className={clsx(styles["campaign-item__date-start"])}>7:15 10/10/2002</p>
                                        <p className={clsx(styles["campaign-item__date-end"])}>23:15 10/11/2002</p>
                                    </div>
                                </li>
                                <li className={clsx(styles["campaign-item"])}>
                                    <div className={clsx(styles["campaign-item__location"])}>
                                        <img src={plastic} className={clsx(styles["campaign-item__icon"])} alt='' />
                                        <div className={clsx(styles["campaign-item__text"])}>
                                            <p className={clsx(styles["campaign-item__title"])}>Compain title </p>
                                            <p className={clsx(styles["campaign-item__title"])}>227 Nguyen Van Cu </p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["campaign-item__date"])}>
                                        <p className={clsx(styles["campaign-item__date-start"])}>7:15 10/10/2002</p>
                                        <p className={clsx(styles["campaign-item__date-end"])}>23:15 10/11/2002</p>
                                    </div>
                                </li>
                                <li className={clsx(styles["campaign-item"])}>
                                    <div className={clsx(styles["campaign-item__location"])}>
                                        <img src={plastic} className={clsx(styles["campaign-item__icon"])} alt='' />
                                        <div className={clsx(styles["campaign-item__text"])}>
                                            <p className={clsx(styles["campaign-item__title"])}>Compain title </p>
                                            <p className={clsx(styles["campaign-item__title"])}>227 Nguyen Van Cu </p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["campaign-item__date"])}>
                                        <p className={clsx(styles["campaign-item__date-start"])}>7:15 10/10/2002</p>
                                        <p className={clsx(styles["campaign-item__date-end"])}>23:15 10/11/2002</p>
                                    </div>
                                </li>
                                <li className={clsx(styles["campaign-item"])}>
                                    <div className={clsx(styles["campaign-item__location"])}>
                                        <img src={plastic} className={clsx(styles["campaign-item__icon"])} alt='' />
                                        <div className={clsx(styles["campaign-item__text"])}>
                                            <p className={clsx(styles["campaign-item__title"])}>Compain title </p>
                                            <p className={clsx(styles["campaign-item__title"])}>227 Nguyen Van Cu </p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["campaign-item__date"])}>
                                        <p className={clsx(styles["campaign-item__date-start"])}>7:15 10/10/2002</p>
                                        <p className={clsx(styles["campaign-item__date-end"])}>23:15 10/11/2002</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DashboardUser