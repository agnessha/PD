
let defaultState = {
    navbarActive: true
}

const navbarReducer = (state=defaultState , action) => {
    switch (action.type) {
        case 'CHANGE_NAVBAR_CLASS':
            if (state.navbarActive) {
                return {
                    ...state,
                    navbarActive: false
                }
            } else {
                return {
                    ...state,
                    navbarActive: true
                }
            }
        default:
            return {
                ...state
            }
    }
}

export const changeNavbarClass = () => {
    return {
        type: 'CHANGE_NAVBAR_CLASS'
    }
}

export default navbarReducer;