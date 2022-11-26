import { Fragment, useState, useContext } from 'react';
import './index.css'
import SignUp from './SignUp';
import {loginStateContext} from '~/provider/LoginProvide'

function Home() {
    const {loginState} = useContext(loginStateContext);

    const [isSignUp, setSignUp] = useState(false);
    const HandleSignUp = () => {
        setSignUp(!isSignUp)
    }
    return (
        <Fragment>
            {loginState===false && <SignUp isSignUp={isSignUp} HandleSignUp={HandleSignUp} />}
            {
                isSignUp === false && loginState===false  &&
                <div className='home-wrapper'>
                    <p className='home-page-text'>Welcome to Smthland</p>
                    <div onClick={HandleSignUp} className='sign-up'>Đăng ký</div>
                </div>
            }


        </Fragment>
    );
}

export default Home;