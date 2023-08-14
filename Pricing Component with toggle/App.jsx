import { useState } from 'react'
import BgBottom from "./images/bg-bottom.svg"
import BgTop from "./images/bg-top.svg"
import "./App.scss"
import PriceCards from './PriceCards'

function App() {

  const [monthYear, setMonthYear] = useState(true)

  function toggle() {
    setMonthYear(prevState => !prevState)
  }

  document.body.className = "bg-Very-Light-Grayish-Blue"

  return (
    <div className="relative font-Monteserrat">
      <img src={BgTop} alt="" className='absolute right-0 md:w-1/5 -z-50 w-'/>
      <img src={BgBottom} alt="" className='absolute inset-x-0 top-96 pt-24 w-1/5 z-1'/>
      <div className='flex flex-col content-center items-center'>
        <h2 className='text-3xl font-bold text-Grayish-Blue text-center pt-12'>Our Pricing</h2>
        <div className='flex gap-4 mt-7 mb-16'>
          <p>Annually</p>
          <input type="checkbox" 
          name='checkbox'
          onChange={toggle}
          />
          <p>Monthly</p>
        </div>
      </div>
      <PriceCards 
      monthYear={monthYear}
      />
    </div>
  )
}

export default App
