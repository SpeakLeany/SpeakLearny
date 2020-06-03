import React from 'react'
import CourseBox from '../CourseBox/CourseBox'
import styles from './CoursesBox.module.scss'

function CoursesBox() {
    return (
        <div className={styles.coursesBox}>
                <CourseBox /> 
                <CourseBox /> 
                <CourseBox />    
            </div>
    )
}

export default CoursesBox
