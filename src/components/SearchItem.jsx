import React from 'react'
import { Link } from 'react-router-dom'

const SearchItem = ({item}) => {
  return (
    <>
      <div className="border border-gray-300 border-solid p-2 rounded flex justify-between gap-5 mb-5">
        <img src={item.photos[0]} alt="" className="object-cover"/>
        <div className="flex gap-2 flex-col w-1/2">
            <h1 className="text-[#0071c2] text-xl font-bold">{item.name}</h1>
            <span className="text-xs">{item.distance}m from center</span>
            <span className="bg-[#008009] w-max text-xs p-1 text-white rounded">Free airport taxi</span>
            <span className="text-xs font-bold">
            Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
            {item.desc}
            </span>
            <span className="text-xs text-[#008009] font-bold">Free cancellation </span>
            <span className="text-xs text-[#008009]">
            You can cancel later, so lock in this great price today!
            </span>
        </div>
            <div className="w-1/4 flex flex-col justify-between">
            {item.rating && <div className="flex justify-between ">
            <span className="font-medium">Excellent</span>
            <button className="font-medium bg-[#003580] p-1 text-white border-none">8.9</button>
            </div>}
        <div className="text-right flex gap-1 flex-col">
          <span className="text-2xl">${item.cheapestPrice}</span>
          <span className="text-xs text-gray-500 ">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="bg-[#0071c2] text-white font-bold px-2 py-1 border rounded cursor-pointer">See availability</button>
          </Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default SearchItem