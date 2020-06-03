import React from 'react'
import styles from '../Settings.module.scss'
import { NavLink } from 'react-router-dom'

function NavSettings() {
    return (
        <div className={`${styles.rightBlock} ${styles.navSettingsPhone}`}>
                <NavLink to='/settings/account' className={styles.title} style={{textDecoration: 'none'}} exact activeClassName={styles.active}>
                Account
                </NavLink>
                <NavLink to='/settings/password' style={{textDecoration: 'none'}} className={styles.title} activeClassName={styles.active}>
                  Password
                </NavLink>
                <NavLink to='/settings/notification' style={{textDecoration: 'none'}} className={styles.title} activeClassName={styles.active}>
                Notificaion
                </NavLink>
                <NavLink to='/settings/language' style={{textDecoration: 'none'}} className={styles.title} activeClassName={styles.active}>
                Language
                </NavLink>
                <NavLink to='/settings/privacy' style={{textDecoration: 'none'}} className={styles.title} activeClassName={styles.active}>
                Privacy
                </NavLink>
                <NavLink to='/settings/blocking' style={{textDecoration: 'none'}} className={styles.title} activeClassName={styles.active}>
                Blocking users
                </NavLink>
        </div>
    )
}

export default NavSettings
