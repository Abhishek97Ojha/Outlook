export function inbox(){
    return{
         type : "INBOX"
         
        }
}
export function spam(){
    return{
        type : "SPAM"
    }
}
export function deleted(){
    return{
        type : "DELETED"
    }
}
export function flagged(){
    return{
        type : "FLAGGED"
    }
}
export function message(id){
    return{
        type : "MESSAGE",
        payload : id
    }
}