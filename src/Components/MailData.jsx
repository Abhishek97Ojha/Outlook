import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const MailData = () => {
    const myState = useSelector((state)=> state.reducer.displayMail)
  return (
    <div className='mail-data'>
        <h1>{myState.content}</h1>
    </div>
  )
}

export default MailData