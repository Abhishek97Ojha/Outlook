import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inbox, spam, message, deleted, flag, del } from "../Redux/action";
import FlagIcon from "@mui/icons-material/Flag";
import DeleteIcon from "@mui/icons-material/Delete";

const MailList = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.reducer.displayData);
//   function handleDel() {
//     console.log("deleted");
//   }
//   function handleFlag() {
//     console.log("flag");
//   }
  return (
    <div className="mail-list">
      {Array.isArray(myState) &&
        myState.map((ele) => {
          return (
            <div
              className="mailListData"
              onClick={() => {
                dispatch(message(ele.mId));
              }}
            >
              <div className="top">
                <div className="left">
                  <p>{ele.mId}</p>
                </div>
                <div className="right">
                  <DeleteIcon
                    onClick={(e) => {
                        e.stopPropagation();
                      dispatch(del(ele.mId,ele.category));
                    }}
                  />{ele.category !=="deleted" && (<FlagIcon
                    onClick={(e) => {
                        e.stopPropagation();
                      dispatch(flag(ele.mId));
                    {ele.flag=== false ? alert(ele.mId + " Flagged"):alert(ele.mId + " Unflagged")}
                    
                    }}
                  />)}
                  
                </div>
              </div>
              <div className="middle">
                <p>{ele.subject}</p>
              </div>
              <div className="down">
                <p>{ele.content}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MailList;
