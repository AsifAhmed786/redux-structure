const set_data = ()=>{    
    return (dispatch)=>{
        console.log("running....")
        dispatch({type:"SETDATA",user:{name:"Umair",email:"umair@gmail.com"}})
        
    }
}

export {
    set_data
}