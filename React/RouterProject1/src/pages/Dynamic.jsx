import React from 'react'
import { useParams } from 'react-router-dom'
function Dynamic() {
    let {user46} = useParams()
  return (
    <>
        <h1>{user46}</h1>
    </>
  )
}

export default Dynamic