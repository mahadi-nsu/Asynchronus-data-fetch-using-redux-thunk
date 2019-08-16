const intialState = {
    num: 0,
    data : null,
    error : ""
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case "INCREMENT":
            return { ...state , num : state.num + action.data }
        case "FETCHDATA":
            return {...state , data : action.data}   
        case "ERROR":
            return {...state , error : action.msg}     
        default:
            return state
    }

}


export default reducer