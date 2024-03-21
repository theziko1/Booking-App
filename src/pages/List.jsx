import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItem from '../components/SearchItem'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.opt);


  return (
    <>
    <Navbar/>
    <Header type="list"/>
     <div className="flex justify-center mt-5">
      <div className="w-full max-w-[1024px] flex gap-5">
        <div className="w-1/3 bg-yellow-500 sticky top-[10px] h-max rounded-lg p-2">
          <h1 className="text-2xl font-bold text-gray-500 mb-2">Search</h1>
          <div className="flex flex-col mb-5 gap-1">
            <label className="text-xs" htmlFor="">Destination</label>
            <input className="h-7 border-none p-2" type="text" placeholder={destination} />
          </div>
          <div className="flex flex-col mb-5 gap-1">
            <label  className="text-xs" htmlFor="">Check-in Date</label>
            <span onClick={() => setOpenDate(!openDate)} className="h-7 bg-white p-2 flex items-center cursor-pointer">{`${format(date[0].startDate,"dd-MM-yyyy")} to ${format(date[0].endDate,"dd-MM-yyyy")}`}</span>
            {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
          </div>
          <div className="flex flex-col mb-5 gap-1">
            <label htmlFor="">Options</label>
            <div className="p-2">
              <div className="flex justify-between text-xs text-[#555] mb-5">
               <span>Min price <small>Per night</small></span>
               <input type="number" className="w-12"/>
              </div>
              <div className="flex justify-between text-xs text-[#555] mb-5">
               <span>Max price <small>Per night</small></span>
               <input type="number" className="w-12"/>
              </div>
              <div className="flex justify-between text-xs text-[#555] mb-5">
               <span>Adult</span>
               <input type="number" min={1} placeholder={options.adult} className="w-12"/>
              </div>
              <div className="flex justify-between text-xs text-[#555] mb-5">
               <span>Children</span>
               <input type="number" min={0} placeholder={options.children} className="w-12"/>
              </div>
              <div className="flex justify-between text-xs text-[#555] mb-5">
               <span>Room</span>
               <input type="number" min={1} placeholder={options.room} className="w-12"/>
              </div>
            </div> 

          </div>
          <button className="bg-[#0071c2] text-white p-2 w-full rounded-md border-none cursor-pointer font-medium">Search</button>
        </div>
        <div className="w-3/4">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </div>
      </div>
     </div>
    </>
  )
}

export default List