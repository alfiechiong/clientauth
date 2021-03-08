import axios from 'axios'
import { setUser } from '../redux/actions'
import jwt from 'jsonwebtoken'

export interface userDataI {
  username:string,
  password:string
}
const decoded = (token:string):any =>{
  try{
    //hard coded the secret key temporarily 
    const verified =  jwt.verify(token, 'f90f0cd6fd35692e31b025b6a12af07266fbabd846e5fd1e2ab96baee74ed76a90f0f809d971a75741768535a68e003242762ea4ac6dced9925573448660ba72');
    return verified
  }catch(e){
    alert(e)
  }
} 

export const login = (username:string,password:string):void=>{

    //hard coded url temporary
    axios.post('http://localhost:8000/generate-access-token', {
        username: username,
        password:password
      }).then(token=>{
        const verifiedToken = decoded(token.data)
        const userData:userDataI =  {
          username:verifiedToken.username,
          password:verifiedToken.password
        }
        setUser(userData)
      }).catch(e=>{
          alert("wrong email or password")
      })
}
