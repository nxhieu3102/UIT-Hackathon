import styles from './index.module.css'
import clsx from 'clsx';
import { Fragment } from 'react';
import Clothes from '~/assets/images/Home/Target/Clothes.png'
import Money from '~/assets/images/Home/Target/Money.png'
import Plastic from '~/assets/images/Home/Target/Plastic.png'
const Target = () => {
    return (
        <Fragment>
            <div className={clsx(styles["target"])}>
                <h1 className={clsx(styles["title"])}>
                    Bạn đồng hành cho một &nbsp;
                    <span className={clsx(styles["title--green"])}>
                        Trái Đất Xanh
                    </span>
                </h1>

                <p className={clsx(styles["text"])}>Bạn có thể đóng góp các thứ sau:</p>

                <div className={clsx(styles["targets"])}>
                    <div className={clsx(styles["target-element"])}>
                        <img src={Plastic} className={clsx(styles["target-element__img"])} alt="element" />
                        <p className={clsx(styles["target-element__title"])}>Rác thải nhựa</p>
                        <p className={clsx(styles["target-element__decription"])}>
                            Chúng ta hãy cùng nhau đóng góp vào việc giảm thiểu rác thải nhựa để bảo vệ hành tinh của chúng ta. Hành động nhỏ của chúng ta sẽ mang lại tương lai tươi sáng cho con cháu và các thế hệ tiếp theo. Hãy bắt đầu từ hôm nay!
                        </p>
                    </div>
                    <div className={clsx(styles["target-element"])}>
                        <img src={Clothes} className={clsx(styles["target-element__img"])} alt="element" />
                        <p className={clsx(styles["target-element__title"])}>Quần Áo</p>
                        <p className={clsx(styles["target-element__decription"])}>
                            Hãy ủng hộ chúng tôi trong việc tái sử dụng quần áo cũ, giúp giảm thiểu rác thải và bảo vệ môi trường. Những chiếc quần áo của bạn có thể giúp đem lại niềm vui cho những người khó khăn và cũng giúp chúng tôi thực hiện sứ mệnh của mình. Cảm ơn bạn vì sự đóng góp của mình!
                        </p>
                    </div>
                    <div className={clsx(styles["target-element"])}>
                        <img src={Money} className={clsx(styles["target-element__img"])} alt="element" />
                        <p className={clsx(styles["target-element__title"])}>Tiền</p>
                        <p className={clsx(styles["target-element__decription"])}>
                            Hãy đồng hành cùng chúng tôi trong việc tái chế rác thải để bảo vệ môi trường xanh sạch. Đóng góp của bạn sẽ giúp chúng tôi thực hiện một công việc quan trọng, đồng thời giảm thiểu lượng rác thải phát sinh và bảo vệ tài nguyên thiên nhiên. Hãy hành động ngay để đem lại một tương lai tốt đẹp cho con cháu chúng ta!
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Target;  