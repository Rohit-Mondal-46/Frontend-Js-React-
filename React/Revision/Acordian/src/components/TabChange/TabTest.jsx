import React from 'react'
import Tabs from './Tabs'



function TabTest() {
    const content = [
        {
            label: 'tab 1',
            content:<h2>Hello this is tab 1</h2>
        },
        {
            label: 'tab 2',
            content:<h2>Hello this is tab 2</h2>
        },
        {
            label: 'tab 3',
            content:<h2>Hello this is tab 3</h2>
        },
    ]
  return (
    <Tabs tabsContent={content}/>
  )
}

export default TabTest