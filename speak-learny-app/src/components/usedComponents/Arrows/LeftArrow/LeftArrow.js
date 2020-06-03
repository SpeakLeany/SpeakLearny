import React from 'react'
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify/icons-simple-line-icons/arrow-left';
import styles from './LeftArrow.module.scss'

function LeftArrow(props) {
    if (props.hideArrow) {
        const {onClick,currentSlide} = props;
        return (
        <div onClick={onClick} className={styles.iconBox} style={ { display: currentSlide===0 ? 'none' : 'block' }}>
            <Icon icon={arrowLeft} className={styles.icon}/>
        </div>
        )
    } else {
        const {onClick} = props;
        return (
        <div onClick={onClick} className={styles.iconBox}>
            <Icon icon={arrowLeft} className={styles.icon}/>
        </div>
        )
    }
}

export default LeftArrow
