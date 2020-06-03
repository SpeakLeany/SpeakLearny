import React, { useState } from 'react'
import styles from './MainPage.module.scss'
import logoWhite from '../../images/logoTextWhite.svg'
import iconLaptom from '../../images/LaptopIcon.svg'
import iconStudy from '../../images/studyLaptopIcon.svg'
import iconFriends from '../../images/friendsIcon.svg'
import iconForum from '../../images/forumIcon.svg'
import iconBlog from '../../images/blogIcon.svg'
import Modal from '../../components/usedComponents/Modal/Modal'
import LogBox from '../../components/partComponents/LogBox/LogBox'
import Footer from '../../components/partComponents/Footer/Footer'

function MainPage() {
    const [close,setClose] = useState(true)
    const [login,setLogin] = useState(true)

    const openRegister = () => {
        setLogin(false)
        setClose(false)
    }

    const openLogin = () => {
        setLogin(true)
        setClose(false)  
    }

    return (
        <>
        {!close ? (
            <Modal close={close}>
                <LogBox close={() => setClose(true)} login={login} />
            </Modal>
        ) : null}
        <div className={styles.top}>
            <div className={styles.gray}></div>
            <div className={styles.mainBox}>
            <div className={styles.header}>
                <img src={logoWhite} />
            </div>
            <h1 className={styles.mainText}>SpeakLearny lets you effective learning and communicate with your friends</h1>
            <div className={styles.btnBox}>
                <div className={styles.btnBlue} onClick={() => openRegister()}>Get started</div>
                <div className={styles.btnWhiteBorder} onClick={() => openLogin()}>I already have an account</div>
            </div>
            </div>
        </div>
        <div className={styles.main}>
            <h1 className={styles.title}>What gives you SpeakLearny ?</h1>
            <div className={styles.containerBox}>
                <div className={styles.flexBox}>
                    <div className={styles.box}>
                        <img src={iconLaptom} />
                        <p className={styles.text}>Learn programming, languages and more</p>
                    </div>
                    <div className={styles.box}>
                        <img src={iconStudy} />
                        <p className={styles.text}>Study by courses, practicing or invite friends for more fun learning</p>
                    </div>
                </div>
                <div className={styles.flexBox}>
                    <div className={styles.box}>
                        <img src={iconFriends} />
                        <p className={styles.text}>You can also communicate with your friends by online chat or make calls (audio, video) and create groups by interestings</p>
                    </div>
                    <div className={styles.box}>
                        <img src={iconForum} />
                        <p className={styles.text}>If you something misunderstand or have some issues, you can always ask or find answer on our forum</p>
                    </div>
                </div>
            </div>
            <h1 className={styles.title}>Follow our news</h1>
            <div className={styles.containerFlex}>
            <div className={styles.flexBox}>
                    <div className={styles.box}>
                        <img src={iconBlog} />
                        <p className={styles.text}>We also have blog where you can always find something interesting on diffrent topics and solve some common problems</p>
                    </div>
                </div>
            </div>
            <h1 className={styles.titleEnd}>Join to our community of enthusiasts</h1>
            <div className={styles.btnBox}>
                <div className={styles.btnBlue} onClick={() => openRegister()}>Get started</div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default MainPage
