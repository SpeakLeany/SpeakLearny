import React from 'react'
import styles from './Settings.module.scss'
import Select from 'react-select'
import {languageStyles} from '../../../assets/css/selectStyles'
import { NavLink } from 'react-router-dom'
import arrowBackOutline from '@iconify/icons-ion/arrow-back-outline';
import {InlineIcon } from '@iconify/react';


function LanguagesSettings() {
    const options = [
        { value: 'english', label: 'English' },
        { value: 'ukraine', label: 'Українська' },
        { value: 'russian', label: 'Русский' },
    ]
    return (
        <>
            <div className={styles.titleBox}>
                    <p className={styles.title}>
                    <NavLink to='/settings/nav' className={styles.backNav} style={{textDecoration: 'none'}}>
                    <InlineIcon icon={arrowBackOutline} />
                    </NavLink>
                    Language</p>
                    <div className={`${styles.btnBlueLight} ${styles.disabled}`}>Save changes</div>
                </div>
                <div className={styles.containerBox}>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Language</p>
                    <div className={styles.selectBox}>
                    <Select 
                    options={options} 
                    styles={languageStyles}
                    defaultValue={{ label: 'English', value: 'english' }}
                    components={{
                        IndicatorSeparator: () => null
                      }}
                    />
                    </div>
                </div>
                </div>
        </>
    )
}

export default LanguagesSettings
