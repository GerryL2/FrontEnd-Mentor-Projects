import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Logo from "./images/logo.svg"
import Devices from "./images/illustration-devices.svg"
import Hamburger from "./images/icon-hamburger.svg"

function App() {

  document.body.className="md:overflow-hidden overflow-hidden"

  const [sidebar, setSideBar] = useState(false)

  function toggleSideBar() {
    setSideBar(prevState => !prevState)
    console.log("clicked")
  }

  return (
    <div className='relative'>
      <div className='bg-Light-Grayish-Blue -right-36 w-5/6 h-96 md:w-1/2 md:h-96 absolute md:right-0 -z-50 mt-0 rounded-bl-3xl'></div>
      {sidebar ?<div className='absolute top-28 bg-White w-full z-10 px-5 py-5 text-center font-semibold font-Barlow text-lg '>
        <ul className='uppercase text-Very-Dark-Blue'>
          <li className='mb-5'>Product</li>
          <li className='mb-5'>Features</li>
          <li className='mb-5'>Pricing</li>
          <hr />
          <li className='text-Grayish-Blue mt-5'>Login</li>
        </ul>
      </div> : ""}
      <Header 
        Logo={Logo}
        Hamburger={Hamburger}
        toggleSideBar={toggleSideBar}
      />
      <MainContent 
        Devices={Devices}
      />
    </div>
  )
}

export default App
