import React from 'react'
import useFetch from '../hooks/useFetch'

const FeaturedProperties = () => {
    const {data,loading,error} = useFetch("http://localhost:8080/api/hotels?featured=true")
  return (
    <>
    <div className=" w-full max-w-[1024px] flex justify-center gap-5">
        { loading ? "Loading ... ": (
            <>
            {data.map((item) => (
             <div className="flex-1 gap-2 flex flex-col" key={item._id}>
            <img className="w-full" src={item.photos[0]} alt="" />
            <span className="font-bold">{item.name}</span>
            <span className="font-light">{item.city}</span>
            <span className="font-medium">Starting from {item.cheapestPrice} MAD</span>
            {item.rating &&<div className="relative">
                <span className="text-yellow-400 text-4xl relative">★</span>
                <span className="absolute top-[18px] left-2.5 text-[8px] font-semibold">{item.rating}</span>
                <span className="font-bold">Excellent</span>
                
            </div>}
        </div>
            ))}

            </>
        )}
     
        
    </div>
    </>
  )
}

export default FeaturedProperties