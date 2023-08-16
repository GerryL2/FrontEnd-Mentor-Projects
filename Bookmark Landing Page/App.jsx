import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  const [shown, setShown] = useState(false)

  function toggleSideBar() {
    setShown(prevShown => !prevShown)
    console.log("clicked")
  }

  document.body.className="overflow-x-hidden"
  return (
    <div className='font-Rubik'>
      <Header 
      SideBar={toggleSideBar}
      shown={shown}
      />
      <MainContent 
      />
    </div>
  )
}

export default App
