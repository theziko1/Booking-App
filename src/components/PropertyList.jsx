import React from 'react'

const PropertyList = () => {
  return (
    <>
     <div className=" w-full max-w-[1024px] flex justify-center gap-5 z-10">
        <div className="rounded overflow-hidden cursor-pointer flex-1">
            <img className="object-cover w-full h-36" src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o" alt="" />
            <div >
                <h1 className="text-xl font-semibold">Hotels</h1>
                <h2 className="text-sm">233 hotel</h2>
            </div>
        </div>   
     </div>    
    </>
  )
}

export default PropertyList