import React from 'react'

const ProprietaryCard = ({ data }) => {
  return (
    <div className='card card-compact bg-white-bg border-none outline-none shadow-md tablet:w-96'>
        <figure>
            <img src={data.image} alt="" className='w-full'/>
        </figure>
        <div className="card-body flex flex-col gap-y-7 justify-between">
            <h2 className="font-bold font-Montserrat text-[24px] leading-8">
                {data.title}
            </h2>
            <div className="">
                <button className='bg-white-bg shadow-none font-Montserrat font-semibold text-skyblue'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default ProprietaryCard