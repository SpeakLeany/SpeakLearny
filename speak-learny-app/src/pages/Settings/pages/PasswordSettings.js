import React from 'react'
import styles from './Settings.module.scss'
import Search from '../../../components/usedComponents/Search/Search'
import { NavLink } from 'react-router-dom'
import arrowBackOutline from '@iconify/icons-ion/arrow-back-outline';
import {InlineIcon } from '@iconify/react';


function PasswordSettings() {
    return (
        <>
        <div className={styles.titleBox}>
                    <p className={styles.title}>
                    <NavLink to='/settings/nav' className={styles.backNav} style={{textDecoration: 'none'}}>
                    <InlineIcon icon={arrowBackOutline} />
                    </NavLink>
                    Password</p>
                    <div className={`${styles.btnBlueLight} ${styles.disabled}`}>Save changes</div>
                </div>
                <div className={styles.containerBox}>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Current Password</p>
                    <div className={styles.input}>
                    <Search hide={true} placeholder={'Current password'} type={'password'}/>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>New Password</p>
                    <div className={styles.input}>
                    <Search hide={true} placeholder={'New password'} type={'password'}/>
                    </div>
                </div>
                </div>
        </>
    )
}

export default PasswordSettings
