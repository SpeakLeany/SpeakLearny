import React from 'react'
import styles from './MoreBox.module.scss'

function MoreBox() {
    return (
        <div class={styles.moreBox}>
            <div class={styles.moreTop}></div>
            <div class={styles.more}></div>
            <div class={styles.moreBottom}></div>
        </div>
    )
}

export default MoreBox
