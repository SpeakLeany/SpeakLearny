import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <h1 className={styles.title}>SpeakLearny - online platform for learning and communication</h1>
            <div className={styles.textBox}>
                <a href='#' className={styles.text}>About us</a>
                <a href='#' className={styles.text}>Contact</a>
                <a href='#' className={styles.text}>Privacy</a>
            </div>
            <div className={styles.border}></div>
            <div className={styles.textBox}>
                <p className={styles.text}>Site language:</p>
            </div>
            <div className={styles.textBox}>
                <p className={styles.textGray}>English</p>
                <p className={styles.textGray}>Russian</p>
                <p className={styles.textGray}>Ukraine</p>
            </div>
            <p className={styles.textEnd}>@ 2020 SpeakLearny</p>
        </div>
    )
}

export default Footer
