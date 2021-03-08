import {SET_USER} from '../contstants'

const initial = {
        userData:null,
}

const userReducer = (state = initial, action:any)=>{
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                userData:action.payload
            }
            
            default:return state
    }
}

export default userReducer