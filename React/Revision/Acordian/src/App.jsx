// import './App.css'
import Box from './components/AcordianCompo/Box'
// import Slider from './components/ImageSlider/Slider'
import Index from './components/SearchAutocomplete/Index'
import Ratings from './components/RatingsCompo/Ratings'
import menu from './components/TreeViewCompo/data'
import TabTest from './components/TabChange/TabTest'

function App() {
  return (
   <>
      {/* <Box/> */}
      {/* <Index/> */}
      {/* <Ratings totalStar={7}/> */}
     
      {/* <Slider url={"https://api.unsplash.com/search/photos?"} page={1} limit={6}/> */}
      {/* <Index url='https://dummyjson.com/products?limit=100'/> */}
      {/* <TabTest/> */}
      <Index/>
   </>
  )
}

export default App
