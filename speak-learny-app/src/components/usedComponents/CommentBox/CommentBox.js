import React from 'react'
import styles from './CommentBox.module.scss'
import avatar from '../../../images/avatar.jpeg'
import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';
import arrowUpAlt2 from '@iconify/icons-dashicons/arrow-up-alt2';
import bxTimeFive from '@iconify/icons-bx/bx-time-five';
import Icon from '@iconify/react';

function CommentBox() {
    return (
        <div className={styles.commentBox}>
            <div className={styles.topBox}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
                <p className={styles.name}>Liza Scott</p>
            </div>
            <div className={styles.centerBox}>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae porttitor sagittis at donec risus, tellus id turpis. Ornare eu, ultrices pellentesque sem faucibus ut amet.</p>
            </div>
            <div className={styles.bottomBox}>
                <div className={styles.iconsBox}>
                    <div className={styles.likeBox}>
                        <div className={styles.like}>203</div>
                        <div className={styles.iconBox}>
                            <Icon icon={arrowUpAlt2} className={`${styles.icon} ${styles.iconLeft}`} />
                            <Icon icon={arrowDownAlt2} className={`${styles.icon} ${styles.iconRight}`} />
                        </div>
                    </div>
                    <div className={styles.reply}>Reply</div>
                    <div className={styles.timeBox}>
                        <Icon icon={bxTimeFive} style={{fontSize: '24px'}}/>
                        <p className={styles.time}>2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentBox
