import React from 'react'
import MenuItem from './MenuItem'

function MenuList({list = []}) {
    // console.log(list);
    // console.log(list.length);
  return (
    <ul className='menu'>
        {
            (list && list.length>0) ? 
            list.map(item => <MenuItem item={item}/>)
            : null
        }

    </ul>

  )
}

export default MenuList