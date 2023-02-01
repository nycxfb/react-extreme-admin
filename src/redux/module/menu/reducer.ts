import produce from 'immer'
import {AnyAction} from 'redux'

interface menuState {
    isCollapse: boolean
}

const menuState: menuState = {
    isCollapse: false
}


const menu = (state: menuState = menuState, action: AnyAction) =>
    produce(state, draftState => {
        switch (action.type) {
            case 'UPDATE_COLLAPSE':
                draftState.isCollapse = action.isCollapse
        }
    })

export default menu
