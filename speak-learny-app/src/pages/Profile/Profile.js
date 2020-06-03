import React, { useContext, useEffect } from 'react'
import { Icon } from '@iconify/react';
import styles from './Profile.module.scss'
import editIcon from '@iconify/icons-feather/edit';
import manOutlined from '@iconify/icons-ant-design/man-outlined';
import locationIcon from '@iconify/icons-gridicons/location';
import bxsPhone from '@iconify/icons-bx/bxs-phone';
import outlineEmail from '@iconify/icons-ic/outline-email';
import addOutline from '@iconify/icons-gridicons/add-outline';
import avatar from '../../images/avatar.jpeg'
import Coins from '../../components/usedComponents/Coins/Coins';

import { Bar } from 'react-chartjs-2';
import { FriendContext } from '../../context/friend/FriendContext';
import TypesBox from '../../components/usedComponents/TypesBox/TypesBox';

const Profile = () => {
    const {fullPage, showFullPage} = useContext(FriendContext)
    useEffect(() => showFullPage(), [])
    useEffect(() => showFullPage(), [fullPage.value])

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [10,12,8,5,13,9,10,4]
          }
        ]
    };

    const types = [
        {id: 1, title: 'Programming', active: true},
        {id: 2, title: 'Languages', active: false},
        {id: 3, title: 'Hacking', active: false},
    ]

    return (
        <>
        <div className={styles.itemsBox}>
                <div className={styles.itemHeader}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>My Account</h1>
                        <div className={styles.titleIconBox}>
                            <p className={styles.titleIcon}>Edit</p>
                            <Icon icon={editIcon} className={styles.icon} />
                        </div>
                    </div>
                </div>
                <div className={styles.itemBody}>
                    <div className={styles.itemBodyTop}>
                        <div className={styles.itemBodyTopLeft}>
                            <div className={styles.itemTop}>
                                <img className={styles.avatar} src={avatar} />
                                <div className={styles.aboutBox}>
                                    <div className={styles.titleBox}>
                                        <div className={styles.name}>Sergiy Nimerovsky</div>
                                        <div className={styles.rightBox}>
                                            <div className={styles.age}>15</div>
                                            <div className={styles.active}></div>
                                        </div>
                                    </div>
                                    <div className={styles.buttonsBox}>
                                        <div className={styles.buttonBox}>
                                            Followers: 155K
                                        </div>
                                        <div className={styles.buttonBox}>
                                            Following: 255K
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.itemBottom}>
                                <p className={styles.title}>Description</p>
                                <div className={styles.description}>Lorem ipsum dolor sit amet, urna, porttitor and maybe it was somewhere and be or not to beLorem ipsum dolor sit amet, urna, porttitor and maybe it was somewhere and be or not to be</div>
                                <div className={styles.iconBox}>
                                    <Icon icon={manOutlined} className={styles.icon} style={{color: '#ffffff', fontSize: '28px', backgroundColor: '#187bcc', borderRadius: '50%',padding: '2px'}}/>
                                    <div className={styles.titleIcon}>Ukrainian</div>
                                </div>
                                <div className={styles.iconBox}>
                                    <Icon icon={locationIcon} className={styles.icon}/>
                                    <div className={styles.titleIcon}>Lviv</div>
                                </div>
                                <div className={styles.iconBox}>
                                    <Icon icon={bxsPhone} className={styles.icon} />
                                    <div className={styles.titleIcon}>+88005553535</div>
                                </div>
                                <div className={styles.iconBox}>
                                <Icon icon={outlineEmail} className={styles.icon} />
                                    <div className={styles.titleIcon}>email.gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemBodyTopRight}>
                            <div className={styles.top}>
                                <p className={styles.title}>Coins</p>
                                <div className={styles.msgBox}>
                                    <Coins />
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <p className={styles.title}>Time on SpeakLearny</p>
                                <div className={styles.timeBox}>
                                    <div className={styles.time}>
                                        <strong>2h 34min</strong> per day
                                    </div>
                                    <div className={styles.progress}>
                                    <Bar
                                            data={data}
                                            width={100}
                                            options={{ maintainAspectRatio: false, legend: {
                                                display: false
                                            }}}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className={styles.itemBodyBottom}>
                        <div className={styles.titleBox}>
                            <p className={styles.title}>Interests</p>
                            <div className={styles.iconBox}>
                                <div className={styles.text}>Add</div>
                                <Icon icon={addOutline} className={styles.icon} />
                            </div>
                        </div>
                        <TypesBox elems={types} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
