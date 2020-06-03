import React from 'react'
import Slider from "react-slick";
import SliderWrapper from '../Arrows/_SlickSliderStyle'
import styles from './SliderBox.module.scss'

const SliderBox = (props) => {
    return (
        <div className={styles.itemsBox}>
            <div className={styles.itemHeader}>
                <div className={styles.itemHeaderTitle}>{props.title}</div>
                <div className={styles.itemHeaderMore}>More</div>
            </div>
            <div className={styles.sliderBox}>
            <SliderWrapper>
            <Slider {...props.settings} className={styles.sliders}>
                {props.items.map((item) => {
                    return item
                })}
            </Slider>
            </SliderWrapper>
            </div>
        </div>    
    )
}

export default SliderBox
