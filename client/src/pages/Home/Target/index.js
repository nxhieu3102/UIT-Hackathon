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
                            Bắt đầu từ việc đóng góp rác thải nhựa một cách chặt chẽ. Hãy chia sẻ và truyền dẫn thói quen tái chế cho những người xung quanh, và giúp tạo một thế giới tươi sáng và xanh hơn cho tương lai của chúng ta. Chúng ta cùng làm một nỗ lực nhỏ nhưng có ý nghĩa lớn để bảo vệ trái đất chúng ta yêu thương.
                        </p>
                    </div>
                    <div className={clsx(styles["target-element"])}>
                        <img src={Clothes} className={clsx(styles["target-element__img"])} alt="element" />
                        <p className={clsx(styles["target-element__title"])}>Quần Áo</p>
                        <p className={clsx(styles["target-element__decription"])}>
                            Từ một cái áo hoặc quần cũ của bạn, chúng ta có thể giúp tạo ra sự khác biệt cho những người cần giúp. Hãy chia sẻ tình yêu và tặng lại sức mạnh cho những ai cần thiết bằng cách góp quần áo cũ của bạn. Hãy là một phần của sức mạnh cộng đồng và hãy góp phần tạo ra một thế giới tốt đẹp hơn
                        </p>
                    </div>
                    <div className={clsx(styles["target-element"])}>
                        <img src={Money} className={clsx(styles["target-element__img"])} alt="element" />
                        <p className={clsx(styles["target-element__title"])}>Tiền</p>
                        <p className={clsx(styles["target-element__decription"])}>
                            Hãy góp sức cho môi trường của chúng ta bằng cách quyên góp tiền cho việc tái chế rác thải. Mỗi khoản quyên góp của bạn sẽ giúp tạo ra một thế giới tươi sáng và xanh hơn. Hãy là một phần của sức mạnh cộng đồng và hãy góp phần tạo ra một tương lai tốt đẹp cho con cháu chúng ta.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Target;  