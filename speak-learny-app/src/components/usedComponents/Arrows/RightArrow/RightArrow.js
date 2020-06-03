import React from 'react'
import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-simple-line-icons/arrow-right';
import styles from './RightArrow.module.scss'

function RightArrow(props) {
    const {onClick,currentSlide,slideCount} = props;
    console.log(props)
    return (
    <div onClick={onClick} className={`${styles.iconBox}`} style={ { display: slideCount === currentSlide + 2 ? 'none' : 'block' }}>
        <Icon icon={arrowRight} className={styles.icon}/>
    </div>
    )
}

export default RightArrow
