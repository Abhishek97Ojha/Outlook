import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const MailData = () => {
  // const dispatch = useDispatch()
    const myState = useSelector((state)=> state.reducer.displayMail)
  return (
    <div className='mail-data'>
        <div className="top">
          <div className="left">
          <AccountCircleIcon style={{fontSize: "4rem",color :"#e6e6e6" }}/>
          </div>
          <div className="right">
            <p style={{fontSize: "1.2rem"}}>{myState.mId}</p>
            <p style={{fontSize: "1.5rem", fontWeight : "700" }}>{myState.subject}</p>
          </div>
        </div>
        <div className="bottom">
          <p>{myState.content}</p>
        </div>
    </div>
  )
}

export default MailData