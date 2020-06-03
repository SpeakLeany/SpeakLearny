import React from 'react'
import avatar from '../../../images/avatar.jpeg'
import MoreBox from '../MoreBox/MoreBox'
import styles from './FriendBox.module.scss'

function FriendBox() {
    return (
        <div class={styles.itemMainFriendBox}>
            <MoreBox />
            <div className={styles.avatarBox}>
                <img src={avatar} className={styles.avatar} alt='avatar' />
                {avatar.active ? <div className={styles.active}></div> : null}
            </div>
            <div class={styles.descriptionBox}>
                <div class={styles.name}>Bogdan Y.</div>
                <div class={styles.age}>15</div>
            </div>
            <div class={styles.follow}>Follow</div>
        </div>
    )
}

export default FriendBox
