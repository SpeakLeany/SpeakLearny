import React, { useContext, useEffect } from 'react'
import Search from '../../components/usedComponents/Search/Search'
import styles from './Blog.module.scss'
import BlogBox from '../../components/usedComponents/BlogBox/BlogBox'
import { FriendContext } from '../../context/friend/FriendContext'

function Blog() {
    const {fullPage, showFullPage} = useContext(FriendContext)
    useEffect(() => showFullPage(), [fullPage.value])
    
    return (
        <>
        <div className={styles.itemsBox}>
                <div className={styles.itemHeader}>
                    <div className={styles.itemHeaderTitleBox}>
                        <div className={styles.itemHeaderTitle}>Blog</div>
                        <div className={styles.boxInput}>
                            <Search placeholder="Search"/>
                            <div className={styles.select}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.itemMain}>
                    <div className={styles.typesBox}>
                        <div className={`${styles.typeBox} ${styles.active}`}>ALL</div>
                        <div className={`${styles.typeBox}`}>Programming</div>
                        <div className={`${styles.typeBox}`}>Languages</div>
                        <div className={`${styles.typeBox}`}>Other</div>
                    </div>
                </div>
            </div>
            <div className={styles.blogsBox}>
                <BlogBox /> 
                <BlogBox /> 
                <BlogBox />    
                <BlogBox /> 
                <BlogBox /> 
                <BlogBox /> 
            </div>
        </>
    )
}

export default Blog
