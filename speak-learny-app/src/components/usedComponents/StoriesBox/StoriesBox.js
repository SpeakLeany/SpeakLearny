import React from 'react'
import StoryBox from '../StoryBox/StoryBox'
import styles from './StoriesBox.module.scss'

function StoriesBox() {
    return (
        <div className={styles.storiesBox}>
                <StoryBox /> 
                <StoryBox /> 
                <StoryBox />    
            </div>
    )
}

export default StoriesBox
