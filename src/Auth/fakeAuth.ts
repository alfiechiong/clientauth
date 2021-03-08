
const fakeAuth = {
    signIn: (cb: () => void) => {
        setTimeout(cb,300)
    },
    signOut : (cb:()=>void)=>{
        setTimeout(cb,300)
    }
}

export default fakeAuth