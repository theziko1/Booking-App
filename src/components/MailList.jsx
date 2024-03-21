import React from 'react'

const MailList = () => {
  return (
    <>
    <div className="w-full mt-12 bg-[#003580] text-white flex flex-col gap-5 items-center p-12">
        <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet </h1>
        <span>Lorem ipsum dolor sit amet</span>
        <div>
            <input className="w-72 h-8 p-5 border-none rounded mr-2" type="text" placeholder="Your Email" />
            <button className="bg-[#0071c2] text-white h-12 rounded border-none font-medium">Subscribe</button>
        </div>
    </div>
    </>
  )
}

export default MailList