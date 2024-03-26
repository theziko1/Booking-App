import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { FaCircleArrowLeft, FaCircleArrowRight, FaCircleXmark, FaLocationDot } from "react-icons/fa6";
import MailList from '../components/MailList'
import Footer from '../components/Footer'
import useFetch from '../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';
import Reserve from '../components/Reserve.jsx';


const Hotel = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  
  
  
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {data,loading,error,reFetch} = useFetch(`http://localhost:8080/api/hotels/${id}`)


  const { user } = useContext(AuthContext)
  const navigate = useNavigate()


  const {dates , options } = useContext(SearchContext)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
   
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate , dates[0].startDate)

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      <Navbar/>
      <Header type="list"/>
     { loading ? ("Loading ...") : (<> 
     <div className="flex  flex-col items-center mt-5">
      {open && (
          <div className="sticky top-0 left-0 w-screen h-screen bg-black/65 z-10 flex justify-center">
            <FaCircleXmark
              className="absolute top-5 right-5 text-[30px] text-gray-200 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <FaCircleArrowLeft
              className="cursor-pointer  absolute top-[50%] left-0 text-[50px] m-5 text-gray-200"
              onClick={() => handleMove("l")}
            />
            <div className="w-full h-full flex items-center justify-center">
              <img src={data.photos[slideNumber]} alt="" className="w-[80%] h-[80vh]" />
            </div>
            <FaCircleArrowRight
              className="cursor-pointer absolute top-[50%] right-0 text-[50px] m-5 text-gray-200"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
          <div className="w-full max-w-[1024px] flex flex-col gap-2 relative"> 
             <button className="absolute top-[10px] right-0 bg-[#0071c2] font-bold text-white border-none px-3 py-2 rounded">Reserve or Book Now!</button>
             <h1 className="text-3xl font-bold">{data.name}</h1>
             <div className="text-xs flex items-center gap-2">
             <FaLocationDot className="inline"/>
             <span>{data.address}</span>
             </div>
             <span className="text-[#0071c2] font-medium">
            Excellent location – {data.distance}m from center
          </span>
          <span className="text-[#008005] font-medium">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="flex flex-wrap justify-between">
            {data.photos?.map((photo, i) => (
              <div className="w-[33%]" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-5 mt-5">
              <div className="w-3/4">
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <p className="text-[14px] mt-5">
                {data.desc}
              </p>
            </div>
            <div className="w-1/4 bg-[#ebf3ff] flex p-5 flex-col gap-5">
              <h1 className="text-[18px] text-[#555] font-bold">Perfect for a - {days} night stay!</h1>
              <span className="text-[14px]">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2 className="font-light">
                <b className="text-xl">${days * data.cheapestPrice * options.room }</b> ({days}{" "} nights)
              </h2>
              <button onClick={handleClick} className="bg-[#0071c2] font-bold text-white border-none px-3 py-2 rounded">Reserve or Book Now!</button>
            </div>
          </div>
          </div>
          <MailList />
          <Footer />
      </div> 
      </>)}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </>
  )
}

export default Hotel