import React, { useState,useRef,useEffect } from 'react'
import Register from "./Register/Register"
import Login from "./Login/Login"
import { Icon } from '@iconify/react';
import closeSharp from '@iconify/icons-ion/close-sharp';
import styles from './LogBox.module.scss'
import {useOutsideAlerter} from '../../../assets/js/OutBox'

const LogBox = (props) => {
    const [login,setLogin] = useState(props.login)

    const switchAuthLogin = () => {
      if (!login) setLogin(true)
    }
    const switchAuthRegister = () => {
      if (login) setLogin(false)
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,props.close);

    return (
      <>
      <div ref={wrapperRef} className={styles.registerBox}>
            <Icon className={styles.closeIcon} onClick={() => props.close()} icon={closeSharp} />
              
              <div className={styles.createArea}>
                  <div className={`${styles.createType} ${login ? styles.active : ''}`} onClick={() => switchAuthLogin()}>Sign in</div> 
                  <div className={`${styles.createType} ${!login ? styles.active : ''}`} onClick={() => switchAuthRegister()}>Sign up</div>     
              </div>
              {login ? <Login /> : <Register />}
          </div>
      </>
    )
}

export default LogBox
