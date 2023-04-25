import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inbox, spam , message} from '../Redux/action'
const MailList = () => {
    const dispatch = useDispatch()
  const myState = useSelector((state)=> state.reducer.displayData)
  return (
    <div className='mail-list'>
        {Array.isArray(myState) && myState.map((ele)=>{
            return (
                <div className="mailListData" onClick={()=>{
                    dispatch(message(ele.mId))
                }}>
                    <h1>{ele.mId}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default MailList