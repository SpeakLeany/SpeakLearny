import React, { useState } from 'react'
import styles from './Settings.module.scss'
import SwitchBox from '../../../components/usedComponents/SwitchBox/SwitchBox'
import { NavLink } from 'react-router-dom'
import arrowBackOutline from '@iconify/icons-ion/arrow-back-outline';
import {InlineIcon } from '@iconify/react';

function Privacy() {
    return (
        <>
            <div className={styles.titleBox}>
                    <p className={styles.title}>
                    <NavLink to='/settings/nav' className={styles.backNav} style={{textDecoration: 'none'}}>
                    <InlineIcon icon={arrowBackOutline} />
                    </NavLink>
                    Privacy</p>
                    <div className={`${styles.btnBlueLight} ${styles.disabled}`}>Save changes</div>
                </div>
                <div className={styles.containerBox}>
                <div className={styles.inputBox}>
                <div className={styles.containerFlexBox}>
                    <div className={styles.switchBox}>
                        <SwitchBox />
                        <p className={styles.text}>
                        Profile public
                        </p>
                    </div>
                    <div className={styles.switchBox}>
                        <SwitchBox />
                        <p className={styles.text}>
                        Show my status
                        </p>
                    </div>
                    <div className={styles.switchBox}>
                        <SwitchBox />
                        <p className={styles.text}>
                        Show my phone
                        </p>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default Privacy
