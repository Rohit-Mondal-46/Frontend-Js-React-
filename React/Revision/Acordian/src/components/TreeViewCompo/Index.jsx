import React from 'react'
import MenuList from './MenuList'

function Index({data=[]}) {
    // console.log(data);
    // console.log(data.length);
  return (
    <MenuList list={data}/>
  )
}

export default Index