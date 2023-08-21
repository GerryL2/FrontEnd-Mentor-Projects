import { useState, useEffect } from 'react'
import Header from './components/Header'
import JobContent from './components/JobContent'
import Data from "./data.json"
import FilterItems from './components/FilterItems'

function App() {

  const [jobListings, setJobListings] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => {
    if(filters.length === 0)
    setJobListings(Data)
  }, [filters])
  

  const filterListings = (filter_by = "") => {
    if(!filters.includes(filter_by) && filter_by !== "")
      setFilters([...filters, filter_by])

      setJobListings(jobListings.filter( listing => [...listing.languages, ...listing.tools].includes(filter_by)))
  }

  function clearFilters() {
    setJobListings(Data)
    setFilters([])
  }

  document.body.className="bg-Light-Grayish-Cyan"
  return (
    <div className='font-Leage-Spartan '> 
      <Header />
      {filters.length > 0 ?<div className='flex py-8 gap-5 items-center h-14 bg-White w-5/6 absolute mb-8 rounded-md shadow-lg left-1/2  transform -translate-x-1/2 -translate-y-1/2'>
        {filters.map( filter => <FilterItems item={filter} clearItems={clearFilters}/>)}
      </div>: ""}
      <div className='flex flex-col gap-5 items-center w-full justify-between mt-14'>
        {jobListings.map(listing => <JobContent listing={listing} key={listing.id} filtering={filterListings} />)}
      </div>
    </div>
  )
}

export default App
