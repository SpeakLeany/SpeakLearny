import React from 'react'
import Select from 'react-select'
import styles from './Settings.module.scss'
import Search from '../../../components/usedComponents/Search/Search'
import Textarea from '../../../components/usedComponents/Textarea/Textarea'
import {countryStyles} from '../../../assets/css/selectStyles'
import AgeSelectBox from '../../../components/usedComponents/AgeSelectBox/AgeSelectBox'
import PhoneBox from '../../../components/usedComponents/PhoneBox/PhoneBox'
import MultiSelect from '../../../components/usedComponents/MultiSelect/MultiSelect'
import { NavLink } from 'react-router-dom'
import arrowBackOutline from '@iconify/icons-ion/arrow-back-outline';
import {InlineIcon } from '@iconify/react';


function AccountSettings() {
    const options = [
        { value: 'month', label: 'Month' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '2020', label: '2020' },
    ]
    return (
        <>
        <div className={styles.titleBox}>
                <p className={styles.title}>
                    <NavLink to='/settings/nav' className={styles.backNav} style={{textDecoration: 'none'}}>
                    <InlineIcon icon={arrowBackOutline} />
                    </NavLink>
                    Account
                </p>
                <div className={`${styles.btnBlueLight} ${styles.disabled}`}>Save changes</div>
                </div>
                <div className={styles.containerBox}>
                <div className={styles.inputBox}>
                    <p className={styles.title}>First name</p>
                    <div className={styles.input}>
                    <Search hide={true} placeholder={'First name'}/>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Last name</p>
                    <div className={styles.input}>
                    <Search hide={true} placeholder={'Last name'}/>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Email</p>
                    <div className={styles.input}>
                    <Search hide={true} placeholder={'Email'}/>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Description</p>
                    <div className={styles.input}>
                    <Textarea placeholder={'Description'} />
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Phone</p>
                    <div className={styles.selectBox}>
                    <PhoneBox className={styles.phoneBox} />
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Age</p>
                    <div className={styles.selectBox}>
                    <AgeSelectBox />
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Country</p>
                    <div className={styles.selectBox}>
                    <Select 
                    options={options} 
                    styles={countryStyles}
                    defaultValue={{ label: 'Country', value: 'country' }}
                    components={{
                        IndicatorSeparator: () => null
                      }}
                    />
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>City</p>
                    <div className={styles.input}>
                    <Search hide={true} placeholder={'City'}/>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <p className={styles.title}>Interests</p>
                    <div className={styles.selectBox}>
                    <MultiSelect />
                    </div>
                </div>
                </div>
                </>
    )
}

export default AccountSettings
