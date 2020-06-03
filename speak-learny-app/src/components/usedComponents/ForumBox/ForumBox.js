import React from 'react'
import styles from './ForumBox.module.scss'
import { Icon } from '@iconify/react';
import arrowUpAlt2 from '@iconify/icons-dashicons/arrow-up-alt2';
import avatar from '../../../images/avatar.jpeg'
import messageIcon from '@iconify/icons-jam/message';
import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';


const ForumBox = (props) => {
    return (
     <>
     <div className={styles.forumPages}>
        <div className={styles.forumPage}>
            <div className={styles.topTitle}>
                <img src={avatar} className={styles.avatar}/>
                <div className={styles.textBox}>
                    <p className={styles.title}>{props.problem}</p>
                    <p className={styles.description}>DEscriptiuonDEscriptiu onDEscriptiuonDEscriptiuon...</p>
                </div>
            </div>
            <div className={styles.bottomTitle}>
                <div className={styles.left}>
                    <div className={styles.voteBox}>
                        <p className={styles.votes}>{props.votes}</p>
                        <div className={styles.icons}>
                            <Icon className={styles.icon} icon={arrowUpAlt2} />
                            <Icon className={styles.icon} icon={arrowDownAlt2} />    
                        </div>
                        <p className={styles.time}>{props.time + " days ago by " + props.name}</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.commentBox}>
                        <Icon className={styles.icon} icon={messageIcon}/>
                        <p className={styles.comments}>{props.comments}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
     </>
    )
}

export default ForumBox
