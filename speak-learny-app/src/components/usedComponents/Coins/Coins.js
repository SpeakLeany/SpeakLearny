import React from 'react'
import styles from './Coins.module.scss'

function Coins() {
    return (
        <>
        <div className={styles.level}></div>
                        <div className={styles.boxProgress}>
                            <div className={styles.text}>64/100 Coins</div>
                            <div className={styles.progress}>
                                <div className={styles.prog}>
                                    
                                </div>
                                <div className={styles.ylwProg}></div>
                            </div>
                        </div>
                        </>
    )
}

export default Coins
