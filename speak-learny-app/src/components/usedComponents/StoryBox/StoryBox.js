import React from 'react'
import { Icon } from '@iconify/react';
import bxLike from '@iconify/icons-bx/bx-like';
import roundPeopleAlt from '@iconify/icons-ic/round-people-alt';
import yesAlt from '@iconify/icons-dashicons/yes-alt';

import styles from './StoryBox.module.scss'

const StoryBox = () => {
    return (
        <div className={styles.courseBox}>
                        <div className={styles.courseBoxHeader}>
                            <Icon icon={yesAlt} className={styles.icon} />                          
                        </div>
                        <div className={styles.courseBoxContent}>
                            <div className={styles.shortDescription}>
                                Short description about this story
                            </div>
                            <div className={styles.bottomBox}>
                                <div className={styles.iconsBox}>
                                    <div className={styles.iconBox}>
                                        <Icon icon={bxLike} className={styles.icon} />
                                        <p className={styles.text}>4,5</p>
                                    </div>
                                    <div className={styles.iconBox}>
                                        <Icon icon={roundPeopleAlt} className={styles.icon} />
                                        <p className={styles.text}>46K</p>
                                    </div>
                                    <div className={styles.iconBoxLevel}>
                                        <div className={styles.levelIcon}></div>
                                        <p className={styles.text}>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default StoryBox
