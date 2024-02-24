import React from 'react'

const Grid = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-7 h-screen">
        <div className="col-span-2 row-span-3 bg-[#E0E5E7] border-black border-2"></div>
        <div className="col-span-3 row-span-4 col-start-3 bg-[#F0CE06] border-black border-2"></div>
        <div className="col-span-2 row-span-4 row-start-4 bg-[#D4121A] border-black border-2"></div>
        <div className="col-span-3 row-span-3 col-start-3 row-start-5 bg-[#E0E5E7] border-black border-2"></div>
    </div>
  )
}

export default Grid