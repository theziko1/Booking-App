import React from 'react'

const Navbar = () => {
  return (
    <div className="h-[50px] bg-[#003580] flex justify-center">
        <div className="w-full max-w-[1024px] flex items-center justify-between text-white">
            <span className="font-medium">Nights Rest</span>
            <div>
                <button className="ml-5 border-none px-2 py-1 bg-white cursor-pointer text-[#003580]">Register</button>
                <button className="ml-5 border-none py-1 px-2 bg-white cursor-pointer text-[#003580]">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar