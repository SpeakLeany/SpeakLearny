import React from 'react'
import { Icon } from '@iconify/react';
import roundRemoveRedEye from '@iconify/icons-ic/round-remove-red-eye';
import bxTimeFive from '@iconify/icons-bx/bx-time-five';
import styles from './BlogBox.module.scss'

function BlogBox(props) {
    return (
        <div class={styles.articleBox} style={{margin: props.margin}}>
            <div class={styles.articleBoxHeader}></div>
                <div class={styles.articleBoxMain}>
                    <div class={styles.mainHeader}>
                        <p class={styles.title}>How to become a hacker ?</p>
                        <p class={styles.description}>Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                    <div class={styles.mainBottom}>
                        <div class={styles.iconsBox}>
                            <div class={styles.iconBox}>
                                <Icon icon={roundRemoveRedEye} className={styles.icon} />
                                <p class={styles.text}>46K</p>
                            </div>
                        <div class={styles.iconBox}>
                            <Icon icon={bxTimeFive} className={styles.icon} />
                            <p class={styles.text}>March 20, 2020</p>
                        </div>
                    </div>
                    <div class={styles.typesBox}>
                        <div class={styles.typeBox}>Programming</div>
                        <div class={styles.typeBox}>Hacking</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogBox
