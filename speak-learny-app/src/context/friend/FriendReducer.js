import { SHOW_FULL_PAGE, HIDE_FULL_PAGE } from "../types"

const handlers = {
    [SHOW_FULL_PAGE]: () => ({hide: false}),
    [HIDE_FULL_PAGE]: () => ({hide: true}),
    DEFAULT: state => state
}

export const friendReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}