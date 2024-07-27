import React, { useState } from 'react'
const names = [
    "alexander", "alice", "amelia", "andrew", "anna", "arthur", "aiden", "ava", "aubrey", "asher",
    "benjamin", "bella", "blake", "brooke", "brandon", "bryce", "bailey", "brian", "bethany", "bianca",
    "charlotte", "caleb", "chloe", "cameron", "claire", "christopher", "carly", "connor", "caroline", "colin",
    "catherine", "christian", "cassandra", "charles", "caitlyn", "cody", "courtney", "craig", "crystal", "clayton",
    "cindy", "clara", "cedric", "celeste", "cesar", "cassie", "cyrus", "candace", "chelsea", "curtis"
]

function Index() {
    const [data,setData] = useState(names)
    const [query,setQuery] = useState('');
    const [FilteredData,setFilteredData] = useState([])
    function handleAutocomplete(e){
        let newQuery = e.target.value;
        setQuery(newQuery);
        if(newQuery.length > 1){
            const temp = data.filter(item=>item.indexOf(newQuery) > -1)
            console.log(temp);
            setFilteredData(temp)
        }
        else{
            setFilteredData([])
        }
        console.log(FilteredData);
    }
  return (
    <>
        <input type="text" onChange={(e)=>handleAutocomplete(e)} value={query} placeholder='Search here...'/>
        <button>Search</button>
        <ul>
            {
             (FilteredData.length)?   FilteredData.map((item)=><li key={item}>{item}</li>):null
            }
        </ul>
    </>
)
}

export default Index