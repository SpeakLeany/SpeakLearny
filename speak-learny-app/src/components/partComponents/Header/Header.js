import React, { useEffect,useState, useContext, useRef } from 'react'
import { Icon } from '@iconify/react';
import bxSearchAlt2 from '@iconify/icons-bx/bx-search-alt-2';
import bxUser from '@iconify/icons-bx/bx-user';
import bxLogOut from '@iconify/icons-bx/bx-log-out';
import sharpMenu from '@iconify/icons-ic/sharp-menu';
import searchSharp from '@iconify/icons-ion/search-sharp';
import baselineBugReport from '@iconify/icons-ic/baseline-bug-report';
import language from '@iconify/icons-ion/language';
import donateIcon from '@iconify/icons-fa-solid/donate';
import settingFilled from '@iconify/icons-ant-design/setting-filled';
import logo from '../../../images/logo.png'
import styles from './Header.module.scss';

import Select from '../../usedComponents/Select/Select';
import Search from '../../usedComponents/Search/Search';
import Avatar from '../../usedComponents/Avatar/Avatar';
import Coins from '../../usedComponents/Coins/Coins';
import { FriendContext } from '../../../context/friend/FriendContext';
import { NavLink } from 'react-router-dom';
import {useOutsideAlerter} from '../../../assets/js/OutBox'

const Header = (props) => {
    const {fullPage} = useContext(FriendContext)
    const [isOpen, setIsOpen] = useState(false);
    const [isHide, setIsHide] = useState(true);

    const selectItems = [
        {name: 'ALL', id: 1342},
        {name: 'Programming', id: 431},
        {name: 'Languages', id: 1234},
    ]

    const openProfileMenu = () => {
        if (!isOpen) {
            setIsHide(false)
        }
        setTimeout(() => {
            setIsOpen(!isOpen)
        },0)
    }

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setIsHide(true)
            },250)
        }
    }, [isOpen])

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,() => setIsOpen(false));

    return (
        <div className={`${styles.header} ${fullPage.hide ? '' : styles.show}`}>
            <div className={styles.leftBox}>
                <Icon icon={sharpMenu} className={styles.icon} onClick={() => props.openLeftMenu()} />
                <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.centreBox}>
                <div className={styles.boxInput}>
                <Search placeholder={'Find Courses'} />
                </div>
                <div className={styles.select}>
                    <Select elems={selectItems} />
                </div>
            </div>
            <div className={`${styles.rightBox} ${isOpen ? styles.active : ""}`}>
            <div className={styles.searchMedia}>
                <span className={styles.text}>Search</span>
            <Icon icon={searchSharp} className={styles.icon} />
            </div>
            <Icon icon={bxSearchAlt2} className={styles.iconSearch} />
            <div ref={wrapperRef} className={styles.selectHeaderBox}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div className={styles.boxName} onClick={() => openProfileMenu()}>
                        <div className={styles.icon}></div>
                        <p className={styles.name}>
                            Sergiy Nimerovsky
                        </p>
                    </div>
                    <Avatar open={openProfileMenu} />
                </div>
                <div className={styles.selectItems} style={ { display: isHide ? 'none' : 'block' }}>
                    <div className={styles.boxMessages}>
                        <div className={styles.msgBox}>
                            <Coins />
                        </div>
                        <NavLink to={'/settings/language'} className={styles.textBox}>
                            <Icon icon={language} className={styles.icon}/>
                            <div className={styles.text}>Language:</div>
                            <p className={styles.textMes}>en</p>
                        </NavLink>
                    </div>
                    <NavLink to={'/profile'} exact className={styles.selectText}>
                        <Icon icon={bxUser} className={styles.icon} />
                        <p className={styles.text}>Profile</p>
                    </NavLink>
                    <div className={styles.selectText}>
                        <Icon icon={donateIcon} className={styles.icon} />
                        <p className={styles.text}>Donate</p>
                    </div>
                    <div className={styles.selectText}>
                        <Icon icon={baselineBugReport} className={styles.icon} />
                        <p className={styles.text}>Report a problem</p>
                    </div>
                    <NavLink to={'/settings'} className={styles.selectText}>
                        <Icon icon={settingFilled} className={styles.icon} />
                        <p className={styles.text}>Settings</p>
                    </NavLink>
                    <div className={styles.selectText}>
                        <Icon icon={bxLogOut} className={styles.icon} />
                        <p className={styles.text}>Log out</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header