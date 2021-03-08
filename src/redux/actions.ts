import store from './store'
import { SET_USER } from './contstants'
import {userDataI} from '../Auth'
export const setUser =  (payload: userDataI | null) =>{
    
    store.dispatch({
        type:SET_USER,
        payload:payload
    })
}