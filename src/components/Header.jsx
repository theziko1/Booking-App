import React, { useContext, useState } from 'react'
import { FaBed , FaCarAlt} from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { PiTaxiFill } from "react-icons/pi";
import { FaCalendarDays , FaPerson  } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

const Header = ({type}) => {
  const { user } = useContext(AuthContext);

    const [destination, setDestination] = useState("");
    const [open , setOpen] = useState(false)
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOpt , setOpenOpt] = useState(false)
      const [opt , setOpt] = useState({
        adult : 1,
        children : 0,
        room : 1,
      })

      const handleOption = (name, operation) => {
        setOpt((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? opt[name] + 1 : opt[name] - 1,
          };
        });
      };

      const navigate = useNavigate()

      const {dispatch} = useContext(SearchContext)

      const handleSearch = () => {
         dispatch({type: "NEW_SEARCH",payload : {destination,dates,opt}})
         navigate("/hotels",{state :{ destination,dates,opt}})
      }

  return (
    <div className="bg-[#003580] text-white flex justify-center relative">
        <div className={`w-full max-w-[1024px] mt-5 ${type !== "list" ? "mb-24" : "mb-0"} mx-0`}>
            <div className="flex gap-10">
                <div className="flex gap-2 border border-solid border-white rounded-lg p-2 mb-12">
                <FaBed  />
                <span>Stays</span>
                </div>
                <div className="flex gap-2 p-2 mb-12">
                <MdFlight   />
                <span>Flights</span>
                </div>
                <div className="flex gap-2 p-2 mb-12">
                <FaCarAlt  />
                <span>Car Rentals</span>
                </div>
                <div className="flex gap-2 p-2 mb-12">
                <FaBed  />
                <span>Attractions</span>
                </div>
                <div className="flex gap-2 p-2 mb-12">
                <PiTaxiFill />
                <span>Airport taxis</span>
                </div>
            </div>
            { type !== "list" &&
              <><h1 className="font-bold text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className="mx-0 my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eum hic quod laudantium, tenetur dolore at.</p>
            {!user && <button className="bg-[#0071c2] text-white font-medium p-2 cursor-pointer">Sign in / Register</button>}
            <div className="h-[50px] bg-white border-4 border-yellow-300 flex items-center justify-around -bottom-5 absolute py-3 px-0 rounded w-full max-w-[1024px]">
                <div className="text-black flex items-center gap-2">
                <FaBed className="inline text-gray-300"/>
                <input type="text" placeholder="Where are you going ?" onChange={(e) => setDestination(e.target.value)} className="border-none outline-none"/>
                </div>
                <div className="text-gray-300 flex items-center gap-2">
                <FaCalendarDays className="inline" />
                <span onClick={()=> setOpen(!open)} className="cursor-pointer">{`${format(dates[0].startDate,"dd-MM-yyyy")} to ${format(dates[0].endDate,"dd-MM-yyyy")}`}</span>
                {open && <DateRange editableDateInputs={true} onChange={item => setDates([item.selection])} moveRangeOnFirstSelection={false} minDate={new Date()} ranges={dates} className="absolute top-10 z-20"/>}
                </div>
                <div className="text-gray-300 flex items-center gap-2">
                <FaPerson className="inline" />
                <span onClick={()=> setOpenOpt(!openOpt)} className="cursor-pointer">{`${opt.adult} adult . ${opt.children} children . ${opt.room} room`}</span>
                    { openOpt && <div className="absolute top-12 bg-white text-gray-500 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                       <div className="w-[200px] flex justify-between m-2">
                        <span>Adult</span>
                            <div className="flex items-center gap-2 text-black">
                                <button disabled={opt.adult <= 1} onClick={() => handleOption("adult", "d")} className="border border-[#0071c2] w-7 h-7 cursor-pointer disabled:cursor-not-allowed"> -</button>
                                <span>{opt.adult}</span>
                                <button  onClick={() => handleOption("adult", "i")} className="border border-[#0071c2] w-7 h-7 cursor-pointer">+</button>
                            </div>
                        
                        </div> 
                        <div className="w-[200px] flex justify-between m-2">
                        <span>Children</span>
                            <div className="flex items-center gap-2 text-black">
                                <button disabled={opt.children <= 0} onClick={() => handleOption("children", "d")} className="border border-[#0071c2] w-7 h-7 cursor-pointer disabled:cursor-not-allowed">-</button>
                                <span>{opt.children}</span>
                                <button onClick={() => handleOption("children", "i")} className="border border-[#0071c2] w-7 h-7 cursor-pointer">+</button>
                            </div>    
                        </div> 
                        <div className="w-[200px] flex justify-between m-2">
                        <span>Room</span>
                            <div className="flex items-center gap-2 text-black">
                                <button disabled={opt.room <= 1} onClick={() => handleOption("room", "d")} className="border border-[#0071c2] w-7 h-7 cursor-pointer disabled:cursor-not-allowed">-</button>
                                <span>{opt.room}</span>
                                <button onClick={() => handleOption("room", "i")} className="border border-[#0071c2] w-7 h-7 cursor-pointer">+</button>
                            </div>   
                        </div> 
                    </div>}
                </div>
                <div className="">
                <button className="bg-[#0071c2] p-2 rounded px-4" onClick={handleSearch}>Search</button>
                </div>
            </div></>}
        </div>
    </div>
  )
}

export default Header