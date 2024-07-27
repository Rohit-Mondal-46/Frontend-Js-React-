import React, { useState } from 'react'
import MenuList from './MenuList'

function MenuItem({item ={}}) {
    const [displayCurrChildren,setDisplayCurrChildren] = useState({});
    function handleNesting(label){
        setDisplayCurrChildren(
            {
                ...displayCurrChildren,
                [label]:!displayCurrChildren[label]
            }
        )
    }
    return (
     <li > 
     <div>
      {item.label}
      {
        (item && item.children && item.children.length > 0)? 
        <span onClick={()=>handleNesting(item.label)}>
        {
            (item && item.children && item.children.length > 0 && displayCurrChildren[item.label])?`-`:`+`
        }

      </span>
        
        :null
      }
     </div>
        {(item && item.children && item.children.length> 0 && displayCurrChildren[item.label]) ? 
         (<MenuList list={item.children}/>)
        : null }
     </li>   
        
    )
}

export default MenuItem