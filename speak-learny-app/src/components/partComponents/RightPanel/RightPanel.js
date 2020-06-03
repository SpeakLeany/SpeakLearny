import React, {useState, useEffect, useContext} from 'react'
import styles from './RightPanel.module.scss'
import avatar from '../../../images/avatar.jpeg'
import MessageBox from '../../usedComponents/MessageBox/MessageBox'
import { FriendContext } from '../../../context/friend/FriendContext'


const RightPanel = () => {
    const {fullPage} = useContext(FriendContext)

    const account = [
        {id: 0, avatarImg: avatar, countMessages:1,active: true, hide: false},
        {id: 1, avatarImg: avatar, countMessages:2,active: true, hide: false},
        {id: 2, avatarImg: avatar, countMessages:3,active: true, hide: false},
    ]

    const [avatars, setAvatars] = useState(account)
    const [openChat, setOpenChat] = useState(false)
    const [isHide, setIsHide] = useState(true)

    const toggleChat = () => {
        if (openChat) {
            setOpenChat(false)
            setTimeout(() => {
                setIsHide(true)
            },300)
        } else {
            setIsHide(false)
            setTimeout(() => {
                setOpenChat(true)
            },0)
        }
    }

    const avatarItems = avatars.map(avatar => (
        <div key={avatar.id} className={`${styles.avatarBox} ${avatar.hide ? styles.hide : ""}`} onClick={() => toggleChat()}>
            <img src={avatar.avatarImg} className={styles.avatar}  />
            <div className={styles.cntMsg}>{avatar.countMessages}</div>
            {avatar.active ? <div className={styles.active}></div> : null}
        </div>
    ))

    useEffect(() => {
        if (avatars.length > 3) {
            // avatars[avatars.length-1].hide = true
            // setTimeout(() => {
            //     setAvatars(avatars.filter(item => item.id !== avatars[avatars.length-1].id));
            // },1000)
            setAvatars(avatars.filter(item => item.id !== avatars[avatars.length-1].id));
        }
    }, [avatars])

    return (
        <div className={`${styles.right} ${fullPage.hide ? styles.hide : styles.show}`}>
            {avatarItems}
            <MessageBox openChat={openChat} isHide={isHide} close={toggleChat} />
        </div>
    )
}

export default RightPanel
