import React, {useReducer} from 'react'
import { FriendContext } from './FriendContext'
import { friendReducer } from './FriendReducer'
import { SHOW_FULL_PAGE, HIDE_FULL_PAGE } from '../types'

export const FriendState = ({children}) => {
    const [state,dispatch] = useReducer(friendReducer, {hide: false})
    
    const showFullPage = () => dispatch({type: SHOW_FULL_PAGE})
    const hideFullPage = () => dispatch({type: HIDE_FULL_PAGE})
    
    return (
        <FriendContext.Provider value={{showFullPage,hideFullPage,fullPage:state}}>
            {children}
        </FriendContext.Provider>
    )
}