import React from 'react'
import styles from './Avatar.module.scss';
import avatar from '../../../images/avatar.jpeg'

const Avatar = (props) => {
    return (
        <div className={styles.avatarBox} onClick={() => props.open()}>
             <img src={avatar} className={styles.avatar} />
            <div className={styles.active}></div>
        </div>
    )
}

export default Avatar
