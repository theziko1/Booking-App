import React from 'react'

const PropertyList = () => {
  return (
    <>
     <div className=" w-full max-w-[1024px] flex justify-center gap-5 z-10">
        <div className="rounded overflow-hidden cursor-pointer flex-1">
            <img className="object-cover w-full h-36" src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o" alt="" />
            <div >
                <h1 className="text-xl font-semibold">Hotels</h1>
                <h2 className="text-sm">233 hotels</h2>
            </div>
        </div>  
        <div className="rounded overflow-hidden cursor-pointer flex-1">
            <img className="object-cover w-full h-36" src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" />
            <div >
                <h1 className="text-xl font-semibold">Apartments</h1>
                <h2 className="text-sm">2331 hotels</h2>
            </div>
        </div> 
        <div className="rounded overflow-hidden cursor-pointer flex-1">
            <img className="object-cover w-full h-36" src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" />
            <div >
                <h1 className="text-xl font-semibold">Resorts</h1>
                <h2 className="text-sm">2331 hotels</h2>
            </div>
        </div> 
        <div className="rounded overflow-hidden cursor-pointer flex-1">
            <img className="object-cover w-full h-36" src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" />
            <div >
                <h1 className="text-xl font-semibold">Villas</h1>
                <h2 className="text-sm">2331 hotels</h2>
            </div>
        </div> 
        <div className="rounded overflow-hidden cursor-pointer flex-1">
            <img className="object-cover w-full h-36" src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" />
            <div >
                <h1 className="text-xl font-semibold">Cabins</h1>
                <h2 className="text-sm">2331 hotels</h2>
            </div>
        </div>  
     </div>    
    </>
  )
}

export default PropertyList