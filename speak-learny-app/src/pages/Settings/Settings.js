import React from 'react'
import styles from './Settings.module.scss'
import 'react-phone-input-2/lib/style.css'
import AccountSettings from './pages/AccountSettings'
import PasswordSettings from './pages/PasswordSettings'
import { Switch,Route, Redirect,NavLink } from 'react-router-dom'
import Notificaion from './pages/Notification'
import LanguagesSettings from './pages/LanguagesSettings'
import Privacy from './pages/Privacy'
import Blocking from './pages/Blocking'
import NavSettings from './pages/NavSettings'


const Settings = () => {
    return (
        <div className={styles.box}>
            <div className={styles.leftBlock}>
                <Switch>
                    <Redirect exact from={'/settings'} to={'/settings/account'} />
                    <Route path={'/settings/nav'} component={NavSettings} />
                    <Route path={'/settings/account'} component={AccountSettings} />
                    <Route path={'/settings/password'} component={PasswordSettings} />
                    <Route path={'/settings/notification'} component={Notificaion} />
                    <Route path={'/settings/language'} component={LanguagesSettings} />
                    <Route path={'/settings/privacy'} component={Privacy} />
                    <Route path={'/settings/blocking'} component={Blocking} />
                    <Redirect exact from={'/settings/*'} to={'/settings/account'} />
                    <Redirect exact from={'*'} to={'/settings/account'} />
                </Switch>
            </div>
            <div className={`${styles.rightBlock} ${styles.navSettingsLaptop}`}>
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
        </div>
    )
}

export default Settings
