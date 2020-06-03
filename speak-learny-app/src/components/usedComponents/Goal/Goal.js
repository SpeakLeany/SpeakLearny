import React, {useState, useEffect} from 'react'
import { Icon,InlineIcon } from '@iconify/react';
import roundAdd from '@iconify/icons-ic/round-add';
import addIcon from '@iconify/icons-subway/add-1';
import roundDone from '@iconify/icons-ic/round-done';

import styles from './Goal.module.scss'

const Goal = () => {
    const [openGoal, setOpenGoal] = useState(false)
    const [text, setText] = useState('')
    const [isOpenText, setIsOpenText] = useState(localStorage.getItem('goal'))

    const maxLength = 25;

    const saveGoal = ((e='') => {
        if (e === 'Enter' || e === '')  {
            if (text.length > maxLength) setText(text.substring(0,maxLength))
            localStorage.setItem('goal', text)
            setIsOpenText(localStorage.getItem('goal'))
        }
    })

    const doneGoal = () => {
        localStorage.setItem('goal', '')
        setIsOpenText('')
        setOpenGoal(false)
    }

    return (
        <>
        { isOpenText !== '' ? (
                <div className={styles.goalBoxReady} onKeyPress={(e) => saveGoal(e.key)}>
                    <p className={styles.text}>{localStorage.getItem('goal')}</p>
                    <div className={styles.leftBox}>
                        <Icon icon={roundDone} className={styles.icon} onClick={() => doneGoal()} />
                    </div>
                </div>
        ) : (
            <>
            <div style={ { display: openGoal ? 'none' : 'block' }}>
                    <div className={styles.textMes}>What is your main goal ?
                    <InlineIcon icon={roundAdd} className={styles.icon} onClick={() => setOpenGoal(true)} /></div>
                    </div>
                    <div style={ { display: !openGoal ? 'none' : 'block' }}>
                        <div className={styles.goalBox} onKeyPress={(e) => saveGoal(e.key)}>
                            <input type="text" placeholder="Write your goal..." className={styles.input} autoFocus={true} maxlength={maxLength} onChange={(e) => setText(e.target.value)}  />
                            <div className={styles.leftBox} onClick={() => saveGoal()}>
                                <Icon icon={addIcon} className={styles.icon} />
                            </div>
                    </div>
            </div>
            </>
        )}
        </>
    )
}

export default Goal
