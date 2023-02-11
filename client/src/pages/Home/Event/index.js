import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.css'
import clsx from 'clsx';
import event1 from '~/assets/images/Home/Event/event1.jpg'
import location from '~/assets/images/Home/Event/location.png'
import people from '~/assets/images/Home/Event/people.png'
import trash from '~/assets/images/Home/Event/trash.png'
import { Fragment } from 'react';

const slides = [
    {
        image: event1,
        title: "Mùa Hè Xanh",
        location: "227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh",
        people: "123",
        trash: "123 Kg",
        summary: "Tôi rất cảm kích và thấy tự hào về chiến dịch dọn rác do các sinh viên Đại học Khoa Học Tự Nhiên tổ chức. Nhờ những nỗ lực của các bạn, khu vực quanh trường đã trở nên sạch đẹp hơn rất nhiều. Đây là một hành động đẹp, đáng khích lệ và góp phần tích cực vào việc bảo vệ môi trường sống của chúng ta. Tôi hy vọng sẽ có nhiều chiến dịch tương tự được tổ chức và nhận được sự ủng hộ của cộng đồng.",
    },
    {
        image: event1,
        title: "Mùa Hè Xanh",
        location: "227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh",
        people: "123",
        trash: "123 Kg",
        summary: "Tôi rất cảm kích và thấy tự hào về chiến dịch dọn rác do các sinh viên Đại học Khoa Học Tự Nhiên tổ chức. Nhờ những nỗ lực của các bạn, khu vực quanh trường đã trở nên sạch đẹp hơn rất nhiều. Đây là một hành động đẹp, đáng khích lệ và góp phần tích cực vào việc bảo vệ môi trường sống của chúng ta. Tôi hy vọng sẽ có nhiều chiến dịch tương tự được tổ chức và nhận được sự ủng hộ của cộng đồng.",
    },
    {
        image: event1,
        title: "Mùa Hè Xanh",
        location: "227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh",
        people: "123",
        trash: "123 Kg",
        summary: "Tôi rất cảm kích và thấy tự hào về chiến dịch dọn rác do các sinh viên Đại học Khoa Học Tự Nhiên tổ chức. Nhờ những nỗ lực của các bạn, khu vực quanh trường đã trở nên sạch đẹp hơn rất nhiều. Đây là một hành động đẹp, đáng khích lệ và góp phần tích cực vào việc bảo vệ môi trường sống của chúng ta. Tôi hy vọng sẽ có nhiều chiến dịch tương tự được tổ chức và nhận được sự ủng hộ của cộng đồng.",
    }
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Add autoplay option here
    autoplaySpeed: 2000,  // Set autoplay speed (in milliseconds)
};

const Event = () => {
    return (
        <Fragment>
            <Slider {...settings} >
                {slides.map((slide, index) => (
                    <div key={1} className={clsx(styles["event"])}>
                        <img src={event1} className={clsx(styles["event-img"])} alt='event' />
                        <div className={clsx(styles["event-infor"])}>
                            <h1 className={clsx(styles["event-infor__title"])}>{slide.title}</h1>
                            <div className={clsx(styles["event-infor__stat"])}>
                                <div className={clsx(styles["event-infor__stat-element"])}>
                                    <img src={people} alt='logo' />
                                    <span>{slide.people} Người tham gia</span>
                                </div>
                                <div className={clsx(styles["event-infor__stat-element"])}>
                                    <img src={trash} alt='logo' />
                                    <span>{slide.trash} rác</span>
                                </div>
                                <div className={clsx(styles["event-infor__stat-element"])}>
                                    <img src={location} alt='logo' />
                                    <span>{slide.location}</span>
                                </div>
                            </div>
                            <div className={clsx(styles["event-summary"])}>
                                <p className={clsx(styles["event-summary__title"])}>Tóm tắt</p>
                                <p className={clsx(styles["event-summary__des"])}>{slide.summary}</p>
                            </div>
                        </div>
                    </div>
                ))}


            </Slider>

        </Fragment>
    );
}

export default Event;