const INITIAL_STATE = {
    username: "ghousahmed",
    email: "ghous@gmail.com"
}

export default (state = INITIAL_STATE,action)=>{
    console.log("auth-reducer=>",action)
    return state
}