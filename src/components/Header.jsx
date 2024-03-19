import React from 'react'
import { FaBed , FaCarAlt} from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { PiTaxiFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="bg-[#003580] text-white flex justify-center">
        <div className="w-full max-w-[1024px] mt-5 mb-24 mx-0">
            <div className="flex gap-10">
                <div className="flex gap-2 border border-solid border-white rounded-lg p-2 mb-12">
                <FaBed  className="flex"/>
                <span>Stays</span>
                </div>
                <div className="flex gap-2 p-2 mb-12">
                <MdFlight   className="flex"/>
                <span>Flights</span>
                </div>
                <div className="flex gap-2 p-2 mb-12">
                <FaCarAlt  className="flex"/>
                <span>Car Rentals</span>
                </div>
                <div className="flex gap-2 p-2 mb-12">
                <FaBed  className="flex"/>
                <span>Attractions</span>
                </div>
                <div className="flex gap-2 p-2 mb-12">
                <PiTaxiFill  className="flex"/>
                <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="font-bold text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className="mx-0 my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eum hic quod laudantium, tenetur dolore at.</p>
            <button className="bg-[#0071c2] text-white font-medium p-2 cursor-pointer">Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header