import React, { useContext, useEffect } from 'react'
import { Icon } from '@iconify/react';
import styles from './Friends.module.scss'
import FriendBoxChat from '../../components/usedComponents/FriendBoxChat/FriendBoxChat'
import Search from '../../components/usedComponents/Search/Search'
import smileIcon from '@iconify/icons-feather/smile';
import cameraIcon from '@iconify/icons-feather/camera';
import microphoneIcon from '@iconify/icons-uil/microphone';
import { FriendContext } from '../../context/friend/FriendContext';
import avatar from '../../images/avatar.jpeg'

function Friends() {
    const {fullPage, hideFullPage} = useContext(FriendContext)
    useEffect(() => hideFullPage(), [fullPage.value])

    return (
        <div className={styles.main}>
            <div className={styles.mainLeft}>
                <div className={styles.title}>Friends</div>
                <div className={styles.boxInputSearch}>
                    <Search placeholder="Search"/>
                </div>
                <div className={styles.friendsBox}>
                    <FriendBoxChat />
                    <FriendBoxChat />
                    <FriendBoxChat />
                    <FriendBoxChat />
                    <FriendBoxChat />
                </div>
                <div className={styles.btnMore}>Find more Friends</div>
            </div>
            <div className={styles.mainRight}>
                <div className={styles.title}>
                    <h1 className={styles.name}>Bogdan</h1>
                    <p className={styles.time}>23min ago</p>
                </div>
                <div className={styles.messageChat}>
                    <div className={styles.past}>Yesterday</div>
                    <div className={styles.friendBox}>
                        <img src={avatar} className={styles.avatar} />
                        <div className={styles.textBox}>
                            <div className={styles.box}>
                                <div className={styles.text}>Коли пишем ?</div>
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
                    <div className={styles.friendBox}>
                        <img src={avatar} className={styles.avatar} />
                        <div className={styles.textBox}>
                            <div className={styles.box}>
                                <div className={styles.text}>Ок</div>
                                <p className={styles.time}>14:23</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.myBox}>
                        <div className={styles.textBox}>
                            <div className={styles.box}>
                                <div className={styles.text}>Ок;)</div>
                                <p className={styles.time}>14:41</p>
                            </div>
                        </div>
                        <div className={styles.seen}>Seen</div>
                    </div>
                </div>
                <div className={styles.messageIn}>
                    <textarea className={styles.inputMessage} placeholder="Write a message"></textarea>
                    <div className={styles.messBox}>
                        <div className={styles.iconDiv}>
                            <Icon icon={smileIcon} className={styles.icon} />
                        </div>
                        <div className={styles.iconDiv}>
                            <Icon icon={cameraIcon} className={styles.icon} />
                        </div>
                        <div className={styles.iconDiv}>
                            <Icon icon={microphoneIcon} className={styles.icon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friends
