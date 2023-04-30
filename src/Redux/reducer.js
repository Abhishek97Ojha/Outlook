import data from "../Components/data.json";
// let displayData=data;
// let mails = [...data]  //
let initialState = {
  mail: data, // mail = 25data
  displayData: [...data.filter((ele) => ele.category === "inbox")], // displayData = 4data
  displayMail: {
    ...data.filter((ele) => ele.category === "inbox")[0],
  },
};
export function reducer(state = initialState, action) {
  // console.log(state);
  // console.log(state.filter((ele)=> ele.category === "inbox"))
  switch (action.type) {
    case "INBOX":
      console.log("inbox");
      let inboxData = state.mail.filter((ele) => ele.category === "inbox");
      console.log(inboxData);
      return { ...state, displayData: inboxData };

    case "SPAM":
      console.log("Spam");
      let spamData = state.mail.filter((ele) => ele.category === "spam");
      return { ...state, displayData: spamData };
    case "DELETED":
      let deletedData = state.mail.filter((ele) => {
        return ele.category==="deleted"
      });
      return { ...state, displayData: deletedData };
    case "FLAGGED":
      let flaggedData = state.mail.filter((ele) => {
        return ele.flag===true
      });
      return { ...state, displayData: flaggedData };
    case "MESSAGE":
      let messageData = state.mail.find((ele) => ele.mId === action.payload)
      return { ...state, displayMail: messageData };
    case "DELETE":
      let dummyData =[...state.mail.map(e=>e.mId===action.payload.id?{...e,category:"deleted"}:e)]
        return {...state, mail:dummyData,displayData:[...dummyData.filter(e=>e.category===action.payload.category)]}
    case "FLAG":
      let dummy =[...state.mail.map(e=>e.mId===action.payload?{...e,flag:!e.flag}:e)]
      return {...state, mail:dummy}
    default:
      return state;
  }
}

