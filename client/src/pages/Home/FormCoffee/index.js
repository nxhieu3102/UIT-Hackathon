import styles from './index.module.css'
import clsx from 'clsx';
import google_logo from '~/assets/images/google.png'
import facebook_logo from '~/assets/images/facebook.png'
import logo from '~/assets/images/logo_black.png'
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const FormCoffee = () =>{
    const getAllCoffee = async() =>{
        const url = "http://localhost:3002/api/coffee/"
        const response = await fetch(url,{
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })

        response.json().then((location) => {
            console.log(location);
        })
    }
    
    return(
        <Fragment>
            <div>
                
            </div>
        </Fragment>
    )
}   

export default FormCoffee