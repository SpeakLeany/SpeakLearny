import React from 'react'
import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-fa/close';
import smileIcon from '@iconify/icons-feather/smile';
import cameraIcon from '@iconify/icons-feather/camera';
import microphoneIcon from '@iconify/icons-uil/microphone';
import styles from './MessageBox.module.scss'
import avatar from '../../../images/avatar.jpeg'


function MessageBox(props) {
    return (
        <div className={`${styles.messageBox} ${props.openChat ? styles.active: ""}`} style={ { display: props.isHide ? 'none' : 'block' }}>
                <div className={styles.messageHeader}>
                    <div>
                        <p className={styles.name}>Bogdan Yarish</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.moreBox}>
                            <div className={styles.moreTop}></div>
                            <div className={styles.more}></div>
                            <div className={styles.moreBottom}></div>
                        </div>
                        <Icon icon={closeIcon} style={{cursor: 'pointer'}} onClick={() => props.close()} />
                    </div>
                    </div>
                <div className={styles.messageChat}>
                    <div className={styles.past}>Yesterday</div>
                    <div className={styles.friendBox}>
                        <img className={styles.avatar} src={avatar} />
                        <div className={styles.textBox}>
                            <div className={styles.box}>
                                <p className={styles.text}>Коли пишем ?</p>
                                <p className={styles.time}>14:20</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.myBox}>
                        <div className={styles.textBox}>
                            <div className={styles.box}>
                                <div className={styles.text}>Десь в цінці квітня</div>
                                <p className={styles.time}>14:21</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.myBox}>
                        <div className={styles.textBox}>
                            <div className={styles.box}>
                                <div className={styles.text}>Десь в цінці квітня</div>
                                <p className={styles.time}>14:21</p>
                            </div>
                        </div>
                        <div className={styles.seen}>Seen</div>
                    </div>
                </div>
                <div className={styles.messageIn}>
                    <textarea className={styles.inputMessage} placeholder="Write a message"></textarea>
                    <div className={styles.messBox}>
                        <div className={styles.iconDiv}><Icon icon={smileIcon} className={styles.icon} /></div>
                        <div className={styles.iconDiv}><Icon icon={cameraIcon} className={styles.icon} /></div>
                        <div className={styles.iconDiv}><Icon icon={microphoneIcon} className={styles.icon} /></div>
                    </div>
                </div>
            </div>
    )
}

export default MessageBox
