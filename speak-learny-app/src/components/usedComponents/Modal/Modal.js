import React from 'react'
import styles from './Modal.module.scss'

function Modal(props) {
    
    return (
        <div className={styles.modal} style={{display: props.close ? 'none' : 'block'}}>
            {props.children}
        </div>
    )
}

export default Modal
