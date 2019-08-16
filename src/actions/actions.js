export const increment = (data) =>{
    return {
        type : 'INCREMENT',
        data     
    }
}

export const fetchData = () =>{
    return(dispatch) =>{
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
               .then(response => response.json())
               .then(json => dispatch(
                   {
                       type : "FETCHDATA",
                       data : json
                   }
               ))
               .catch(err => dispatch(
                   {
                       type : "ERROR",
                       msg : err
                   }
               ))
    }
}