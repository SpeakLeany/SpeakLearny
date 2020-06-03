import React from 'react'
import avatar from '../../../images/avatar.jpeg'
import styles from './FriendBoxChat.module.scss'

function FriendBoxChat() {
    return (
        <div class={styles.friendBox}>
            <img src={avatar} class={styles.avatar} />
            <div class={styles.textBox}>
                <div class={styles.messageBox}>
                    <p class={styles.name}>Tiara Gabi</p>
                        <p class={`${styles.message} ${styles.active}`}>Hi! How are you ?</p>
                    </div>
                <p class={styles.time}>7min ago</p>
            </div>
        </div>
    )
}

export default FriendBoxChat
