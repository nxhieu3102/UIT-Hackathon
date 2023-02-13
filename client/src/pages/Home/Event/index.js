import React from "react";
<<<<<<< HEAD
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
>>>>>>> d33f41e97a14c14385396d6f687e847b4059eafb
import styles from './index.module.css'
import clsx from 'clsx';
import event1 from '~/assets/images/Home/Event/event1.jpg'
import location from '~/assets/images/Home/Event/location.png'
import people from '~/assets/images/Home/Event/people.png'
import trash from '~/assets/images/Home/Event/trash.png'
import { Fragment } from 'react';

<<<<<<< HEAD
const events = [{
    image: event1,
    title: "Mùa hè xanh",
    people: "123",
    trash: "123",
    location: "227 Nguyễn Văn Cừ, Quận 5, thành phố Hồ Chí Minh",
    description: "Trường Đại học Khoa Học Tự Nhiên TP.HCM đã kết hợp với các tổ chức xã hội, cùng triển khai chiến dịch thu gom rác thải trong một nỗ lực nhằm tăng cường nhận thức về vấn đề môi trường và giúp cải thiện tình hình ô nhiễm tại thành phố Hồ Chí Minh. Chiến dịch bao gồm nhiều hoạt động như thu gom rác thải, tuyên truyền giáo dục cộng đồng về các vấn đề liên quan đến môi trường, tạo ra những điểm đến thân thiện với môi trường và đặt biển báo giúp người dân nhận biết được những điểm đó. Ngoài ra, chiến dịch còn hướng tới tạo ra các chương trình giáo dục cộng đồng, giúp tăng cường nhận thức của mọi người về các vấn đề môi trường và tác động của chúng đến cuộc sống hàng ngày. Từ đó, sẽ giúp cộng đồng có thể thực hiện các hành động nhỏ để bảo vệ môi trường và cải thiện chất lượng cuộc sống của mình. Chiến dịch thu hút được sự tham gia tích cực của đông đảo sinh viên và người dân trong khu vực, đã góp phần tạo ra một không khí trong lành và bảo vệ môi trường sống của mọi người."
},
{
    image: event1,
    title: "Mùa hè xanh",
    people: "123",
    trash: "123",
    location: "227 Nguyễn Văn Cừ, Quận 5, thành phố Hồ Chí Minh",
    description: "Trường Đại học Khoa Học Tự Nhiên TP.HCM đã kết hợp với các tổ chức xã hội, cùng triển khai chiến dịch thu gom rác thải trong một nỗ lực nhằm tăng cường nhận thức về vấn đề môi trường và giúp cải thiện tình hình ô nhiễm tại thành phố Hồ Chí Minh. Chiến dịch bao gồm nhiều hoạt động như thu gom rác thải, tuyên truyền giáo dục cộng đồng về các vấn đề liên quan đến môi trường, tạo ra những điểm đến thân thiện với môi trường và đặt biển báo giúp người dân nhận biết được những điểm đó. Ngoài ra, chiến dịch còn hướng tới tạo ra các chương trình giáo dục cộng đồng, giúp tăng cường nhận thức của mọi người về các vấn đề môi trường và tác động của chúng đến cuộc sống hàng ngày. Từ đó, sẽ giúp cộng đồng có thể thực hiện các hành động nhỏ để bảo vệ môi trường và cải thiện chất lượng cuộc sống của mình. Chiến dịch thu hút được sự tham gia tích cực của đông đảo sinh viên và người dân trong khu vực, đã góp phần tạo ra một không khí trong lành và bảo vệ môi trường sống của mọi người."
}]
=======
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
>>>>>>> d33f41e97a14c14385396d6f687e847b4059eafb

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
<<<<<<< HEAD
};

const Event = () => {

    return (
        <Fragment>
            <Slider {...settings}>
                {events.map((event, index) =>
                (
                    <div key={index} className={clsx(styles["event"])}>
                        <img src={event.image} className={clsx(styles["event-img"])} alt='event' />
                        <div className={clsx(styles["event-infor"])}>
                            <h1 className={clsx(styles["event-infor__title"])}>{event.title}</h1>
                            <div className={clsx(styles["event-infor__stat"])}>
                                <div className={clsx(styles["event-infor__stat-element"])}>
                                    <img src={people} alt='logo' />
                                    <span>{event.people} Người tham gia</span>
                                </div>
                                <div className={clsx(styles["event-infor__stat-element"])}>
                                    <img src={trash} alt='logo' />
                                    <span>{event.trash} rác</span>
                                </div>
                                <div className={clsx(styles["event-infor__stat-element"])}>
                                    <img src={location} alt='logo' />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                            <div className={clsx(styles["event-summary"])}>
                                <p className={clsx(styles["event-summary__title"])}>Mô tả</p>
                                <p className={clsx(styles["event-summary__des"])}>{event.description}</p>
                            </div>
                        </div>
                    </div>)
                )}
            </Slider>
=======
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

>>>>>>> d33f41e97a14c14385396d6f687e847b4059eafb
        </Fragment>
    );
}

export default Event;