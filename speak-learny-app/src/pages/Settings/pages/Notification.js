import React, { useEffect, useState } from 'react'
import styles from './Settings.module.scss'
import SwitchBox from '../../../components/usedComponents/SwitchBox/SwitchBox'
import { NavLink } from 'react-router-dom'
import arrowBackOutline from '@iconify/icons-ion/arrow-back-outline';
import {InlineIcon } from '@iconify/react';

function Notification() {
    return (
        <>
            <div className={styles.titleBox}>
                    <p className={styles.title}>
                    <NavLink to='/settings/nav' className={styles.backNav} style={{textDecoration: 'none'}}>
                    <InlineIcon icon={arrowBackOutline} />
                    </NavLink>
                    Notification</p>
                    <div className={`${styles.btnBlueLight} ${styles.disabled}`}>Save changes</div>
                </div>
                <div className={styles.containerBox}>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Email me when</p>
                    <div className={styles.containerFlexBox}>
                    <div className={styles.switchBox}>
                    <SwitchBox />
                    <p className={styles.text}>
                    I have new friend
                    </p>
                    </div>
                    <div className={styles.switchBox}>
                    <SwitchBox />
                    <p className={styles.text}>
                    Friend send me message
                    </p>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Notification
