import React from 'react'
import useFetch from '../hooks/useFetch'

const Featured = () => {
    const {data,loading,error,} = useFetch("http://localhost:8080/api/hotels/count/countByCity?cities=marrakech,casablanca,agadir,tanger,fés")
  return (
    <>
    <div className=" w-full max-w-[1024px] flex justify-center gap-5 z-10">
        {loading ? (
            "Loading please wait"
        ) : (
            <>
            <div className="relative text-white rounded overflow-hidden h-64 flex-1">
            <img className="w-full object-cover" src="https://cf.bstatic.com/xdata/images/city/600x600/579739.jpg?k=210a39c70f4d63a2cde9b2cf09cadbf5b9abfebf992fa2efa4f107ccf3cfd815&o=" alt="" />
            <div className="absolute bottom-24 left-2 font-bold">
                <h1>Marrakech</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="relative text-white rounded overflow-hidden h-64 flex-1">
            <img  className="w-full object-cover"src="https://cf.bstatic.com/xdata/images/city/600x600/635812.jpg?k=8bfcb1ba7e1292927454d1719c7cfcca4e149dd89d2ade4edcf2c61e536696f6&o=" alt="" />
            <div className="absolute bottom-24 left-2 font-bold">
                <h1>Casablanca</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="relative text-white rounded overflow-hidden h-64 flex-1">
            <img className="w-full object-cover" src="https://cf.bstatic.com/xdata/images/city/600x600/635820.jpg?k=c1aa40108b8fabb9b1218a9ed610e39d1724a81695a8c7cb7bed4e36e9b70f4d&o=" alt="" />
            <div className="absolute bottom-24 left-2 font-bold">
                <h1>Agadir</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
        <div className="relative text-white rounded overflow-hidden h-64 flex-1">
            <img className="w-full object-cover" src="https://cf.bstatic.com/xdata/images/city/600x600/637056.jpg?k=8f675a0bdc4aebce7fe24ad51119ff00e85d448669d99b1727d855c8f0190b2f&o=" alt="" />
            <div className="absolute bottom-24 left-2 font-bold">
                <h1>Tanger</h1>
                <h2>{data[3]} properties</h2>
            </div>
        </div>
        <div className="relative text-white rounded overflow-hidden h-64 flex-1">
            <img className="w-full object-cover" src="https://cf.bstatic.com/xdata/images/city/600x600/637095.jpg?k=e54118310641635af129f06cca9e1b8c7f00dfd4f6725d5038bc374dc0651ba8&o=" alt="" />
            <div className="absolute bottom-24 left-2 font-bold">
                <h1>Fés</h1>
                <h2>{data[4]} properties</h2>
            </div>
        </div></>
    )}
    </div>
    </>
  )
}

export default Featured