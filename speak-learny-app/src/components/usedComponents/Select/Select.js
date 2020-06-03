import React, {useState,useEffect, useRef} from 'react'
import styles from './Select.module.scss';
import {useOutsideAlerter} from '../../../assets/js/OutBox'

const Select = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHide, setIsHide] = useState(true);
    const [selectName, setSelectName] = useState(props.elems[0].name)

    const elemItems = props.elems.map((elem) =>
        <div className={styles.selectText} key={elem.id} onClick={() => chooseSelect(elem.id)}>{elem.name}</div>
    )

    const chooseSelect = (id) => {
        {props.elems.filter(elem => elem.id === id).map(filteredElems => (
            setSelectName(filteredElems.name)
        ))}
    }

    const openSelect = () => {
        if (!isOpen) {
            setIsHide(false)
        }
        setTimeout(() => {
            setIsOpen(!isOpen)
        },0)
    }

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setIsHide(true)
            },250)
        }
    }, [isOpen])

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,() => setIsOpen(false));

    return (
        <div ref={wrapperRef} className={`${styles.selectBox} ${isOpen ? styles.active : ""}`} onClick={() => openSelect()}>
            <div className={styles.defaultSelect}>
                <div className={styles.defaultText}>{selectName}</div>
                <div className={styles.defaultIcon}></div>
            </div>
            <div className={styles.selectItems} style={ { display: isHide ? 'none' : 'block' }}>
                {elemItems}
            </div>
        </div>
    )
}

export default Select;
