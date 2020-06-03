import React from 'react'
import styles from './TypesBox.module.scss'

function TypesBox(props) {

    const elemItems = props.elems.map((elem) =>
        <div className={`${styles.typeBox} ${elem.active ? styles.active : '' || ''}`} key={elem.id}>{elem.title}</div>
    )

    return (
        <div className={styles.typesBox}>
            {elemItems}
        </div>
    )
}

export default TypesBox
