import React, { useContext, useEffect } from 'react'
import styles from './Programming.module.scss'
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CoursesBox from '../../../components/usedComponents/CoursesBox/CoursesBox';
import Select from '../../../components/usedComponents/Select/Select'
import { FriendContext } from '../../../context/friend/FriendContext';

const Programming = () => {
    const {fullPage, showFullPage} = useContext(FriendContext)
    useEffect(() => showFullPage(), [fullPage.value])

    const selectItems = [
        {name: 'ALL', id: 1342},
        {name: 'Programming', id: 431},
        {name: 'Languages', id: 1234},
    ]

    return (
        <>
            <div className={styles.headerBox}>
                <div className={styles.titleBox}>
                <NavLink to='/edu/programming/courses' exact className={styles.title} activeClassName={styles.active}>
                <p>Courses</p>
                </NavLink>
                </div>
                <div className={styles.selectBox}>
                <Select elems={selectItems} />
                </div>
            </div>
            <div className={styles.select}>
                <Select elems={selectItems} />
            </div>
            <Switch>
                <Redirect exact from={"/edu/programming/"} to={"/edu/programming/courses"} />
                <Route path={'/edu/programming/courses'} exact component={CoursesBox} />
            </Switch>
        </>
    )
}

export default Programming
