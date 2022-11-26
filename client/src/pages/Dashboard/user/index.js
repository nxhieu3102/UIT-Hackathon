import { Fragment, useEffect, useState, useRef } from "react"
import styles from './index.module.css'
import clsx from 'clsx'
import search from '~/assets/images/Dashboard/search.png'
import plastic from '~/assets/images/Dashboard/Plastic.png'
const DashboardUser = () => {
    const API = 'https://6381f08c53081dd5498bea48.mockapi.io/api/v1/campaign'
    const [inforCampain, setInforCampain] = useState([])
    const [chooseCampain, setChooseCampain] = useState(null)
    const ref = useRef(null)

    const handleSelectCampain = async (ev) => {
        const campainId = ev.currentTarget.getAttribute("data-campain")
        if (chooseCampain == null) {
            console.log(inforCampain[campainId]);
            setChooseCampain(inforCampain[campainId])
        }
        const element = document.getElementById('campaign-list')
        element.style.display = 'none'
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(API, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer'
            })

            return response.json()
        }

        getData().then(data => {
            setInforCampain(data)
        })
    }, [])

    const display = (ev) => {
        console.log(ev);
        const element = document.getElementById('campaign-list')
        element.style.display = 'block'
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
                                <img className={clsx(styles["form-search-icon"])} src={search} alt='' />
                                <input onFocus={display} className={clsx(styles["form-search-input"])} placeholder="Tìm kiếm chiến dịch" />
                            </div>
                            <ul className={clsx(styles["campaign-list"])} id='campaign-list'>
                                {inforCampain.map((item, index) => {
                                    return <li ref={ref} data-campain={index} onClick={handleSelectCampain} key={index} className={clsx(styles["campaign-item"])}>
                                        <div className={clsx(styles["campaign-item__location"])}>
                                            <img src={plastic} className={clsx(styles["campaign-item__icon"])} alt='' />
                                            <div className={clsx(styles["campaign-item__text"])}>
                                                <p className={clsx(styles["campaign-item__title"])}>{item.title} </p>
                                                <p className={clsx(styles["campaign-item__title"])}>{item.location} </p>
                                            </div>
                                        </div>
                                        <div className={clsx(styles["campaign-item__date"])}>
                                            <p className={clsx(styles["campaign-item__date-start"])}>{item["Date start"]}</p>
                                            <p className={clsx(styles["campaign-item__date-end"])}>{item["Date end"]}</p>
                                        </div>
                                    </li>;
                                })}
                            </ul>

                            {chooseCampain != null && <div ref={ref} onClick={handleSelectCampain} className={clsx(styles["campaign-item"])}>
                                <div className={clsx(styles["campaign-item__location"])}>
                                    <img src={plastic} className={clsx(styles["campaign-item__icon"])} alt='' />
                                    <div className={clsx(styles["campaign-item__text"])}>
                                        <p className={clsx(styles["campaign-item__title"])}>{chooseCampain.title} </p>
                                        <p className={clsx(styles["campaign-item__title"])}>{chooseCampain.location} </p>
                                    </div>
                                </div>
                                <div className={clsx(styles["campaign-item__date"])}>
                                    <p className={clsx(styles["campaign-item__date-start"])}>{chooseCampain["Date start"]}</p>
                                    <p className={clsx(styles["campaign-item__date-end"])}>{chooseCampain["Date end"]}</p>
                                </div>
                            </div>}

                        </div>
                        <div className={clsx(styles[""])}></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DashboardUser