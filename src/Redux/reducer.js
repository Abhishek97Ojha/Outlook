import data from '../Components/data.json'
// let displayData=data;
// let mails = [...data]  // 
let initialState = {
  mail: data, // mail = 25data
  displayData: [...data.filter((ele) => ele.category === "inbox")], // displayData = 4data
  displayMail : {
   ...data.filter((ele)=> ele.category === "inbox")[0]
  }
};
export function reducer(state=initialState,action){
    console.log(state)
    // console.log(state.filter((ele)=> ele.category === "inbox"))
    switch(action.type){
        case "INBOX":
            console.log("inbox")
            let inboxData= state.mail.filter((ele)=> ele.category === "inbox")
            console.log(inboxData)
            return {...state,displayData:inboxData}
            
        case "SPAM":
            console.log("Spam")
            let spamData=state.mail.filter((ele)=> ele.category === "spam")
            return {...state,displayData:spamData}
        case "MESSAGE":
            let messageData=state.mail.filter((ele)=> ele.category === "inbox")[0]
            return {...state,displayMail:messageData}
        default:
            return state;
    }
}
