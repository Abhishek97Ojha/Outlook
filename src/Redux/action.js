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
        type : "DELETED",
        
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
export function del(id,category){
    // console.log("inside del action")
    return{
        type : "DELETE",
        payload : {
            id:id,
            category:category
        }
    }
} 
export function flag(id){
    return{
        type : "FLAG",
        payload : id
    }
}