import React, { useContext, useEffect } from 'react'
import styles from './Forum.module.scss'
import ForumBox from '../../components/usedComponents/ForumBox/ForumBox'
import Search from '../../components/usedComponents/Search/Search'
import { FriendContext } from '../../context/friend/FriendContext'

const Forum = () => {
    const {fullPage, showFullPage} = useContext(FriendContext)
    useEffect(() => showFullPage(), [fullPage.value])

    return (
        <>
        
            <div className={styles.itemsBox}>
                <div className={styles.itemHeader}>
                    <div className={styles.itemHeaderTitleBox}>
                        <div className={styles.itemHeaderTitle}>Forum</div>
                        <div className={styles.boxInput}>
                            <Search placeholder="Search"/>
                        </div>
                    </div>
                    <div className={styles.itemHeaderMore}>New Post</div>
                </div>
                <div className={styles.itemMain}>
                    <div className={styles.boxInput}>
                        <Search placeholder="Search"/>
                    </div>
                    <div className={styles.typesBox}>
                        <div className={`${styles.typeBox} ${styles.active}`}>ALL</div>
                        <div className={`${styles.typeBox}`}>Programming</div>
                        <div className={`${styles.typeBox}`}>Languages</div>
                        <div className={`${styles.typeBox}`}>Other</div>
                    </div>
                </div>
            </div>
            <ForumBox comments="203" comments="203" time="3" name="Bohdan Yarish" problem="I've got some problems with React DOM in course" votes = "12"/>
            <ForumBox comments="346" time="15" name="Serhiy Nimerovskiy" problem="I haven't got any problems in programming" votes = "112"/>
            <ForumBox comments="20" time="8" name="Pasha Dikiy" problem="Arduino has locked me in toilet" votes="12"/>
            <ForumBox comments="8" time="1" name= "Rostyk Senik" problem = "OLOLOLOLO" votes = "123"/>
        </>
    )
}

export default Forum
