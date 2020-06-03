import React, { useContext, useEffect } from 'react'
import styles from './Languages.module.scss'
import Select from '../../../components/usedComponents/Select/Select'
import { Switch,Route,Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import StoriesBox from '../../../components/usedComponents/StoriesBox/StoriesBox';
import CoursesBox from '../../../components/usedComponents/CoursesBox/CoursesBox';
import { FriendContext } from '../../../context/friend/FriendContext';


const Languages = () => {

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
                <NavLink to='/edu/languages/courses' exact className={styles.title} activeClassName={styles.active}>
                <p>Courses</p>
                </NavLink>
                <NavLink to='/edu/languages/stories' className={styles.title} activeClassName={styles.active}>
                <p>Stories</p>
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
                <Redirect exact from={'/edu/languages/'} to={'/edu/languages/courses'} />
                <Route path={'/edu/languages/courses'} exact component={CoursesBox} />
                <Route path={'/edu/languages/stories'} component={StoriesBox} />
            </Switch>
        </>
    )
}

export default Languages