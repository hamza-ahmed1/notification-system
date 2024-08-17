import React from 'react'

export default function Message({msg,setmsg}) {
    
  return (
    <>
    <div>Enter Message</div>
    <textarea value={msg} onChange={(e)=>{setmsg(e.target.value)}}/>
    </>

  )
}
