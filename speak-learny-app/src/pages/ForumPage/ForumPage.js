import React from 'react'
import avatar from '../../images/avatar.jpeg'
import styles from './ForumPage.module.scss'
import arrowRightAlt2 from '@iconify/icons-dashicons/arrow-right-alt2';
import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';
import arrowUpAlt2 from '@iconify/icons-dashicons/arrow-up-alt2';
import bxTimeFive from '@iconify/icons-bx/bx-time-five';
import Icon from '@iconify/react';
import CommentBox from '../../components/usedComponents/CommentBox/CommentBox';


function ForumPage() {
    return (
        <div>
            <div className={styles.navLinks}>
                <p className={styles.prev}>Forum</p>
                <Icon icon={arrowRightAlt2} className={styles.arrow}/>
                <p className={styles.prev}>Programming</p>
                  <Icon icon={arrowRightAlt2} className={styles.arrow}/>
                  <p className={styles.active}>Some topic</p>
            </div>
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <img src={avatar} className={styles.avatar} />
                    <div className={styles.titleBox}>
                        <p className={styles.title}>This is some topic problem and this topic can be long</p>
                        <p className={styles.name}>by Liza Scott</p>
                    </div>
                </div>
                <div className={styles.postBody}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse sem maecenas sit cras. Velit 
vitae pellentesque sit accumsan nibh egestas leo. Vulputate at mus eleifend dictum pretium 
dictum. Blandit integer semper placerat risus. Amet vehicula elit justo sed maecenas. Quis amet
 id auctor vulputate aliquam nunc urna. Amet, varius integer donec massa pulvinar ornare. Quam 
ornare non iaculis adipiscing in. Velit egestas viverra vitae est vitae facilisis ac.
                    </p>
                </div>
                <div className={styles.postFooter}>
                    <div className={styles.likeBox}>
                        <div className={styles.like}>203</div>
                        <div className={styles.iconBox}>
                            <Icon icon={arrowUpAlt2} className={`${styles.icon} ${styles.iconLeft}`} />
                            <Icon icon={arrowDownAlt2} className={`${styles.icon} ${styles.iconRight}`} />
                        </div>
                    </div>
                    <div className={styles.timeBox}>
                        <Icon icon={bxTimeFive} style={{fontSize: '24px'}}/>
                        <p className={styles.time}>2 days ago</p>
                    </div>
                </div>
            </div>
            <div className={styles.writeComment}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
                <div className={styles.textareaBox}>
                    <textarea className={styles.textarea} placeholder="Write your comment"></textarea>
                    <div className={styles.itemHeaderBlue}>Post</div>
                </div>
            </div>
            <div class={styles.line}></div>
            <div class={styles.commentsBox}>
                <div class={styles.title}>302 Comments</div>
                <CommentBox />
            </div>
        </div>
    )
}

export default ForumPage
