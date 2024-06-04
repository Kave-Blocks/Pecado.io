import React from 'react'
import ProprietaryData from '../../helper/ProprietaryLedger.json'
import ProprietaryCard from '../Card/ProprietaryCard'
import DivFadeIn from '../../animations/DivFadeIn'

const ProprietaryCards = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className="mx-auto max-w-7xl w-full flex flex-col gap-y-5">
            <DivFadeIn>
            <h2 className='text-[48px] font-Montserrat font-bold text-center text-primary-color dark:text-white'>
                <i>Our Proprietary Ledger Technology</i>
            </h2>
            </DivFadeIn>

            <DivFadeIn>
                <div className="grid grid-cols-3">
                    {ProprietaryData.map((data, i) => (
                        <ProprietaryCard key={i} data={data}/>
                    ))}
                </div>
            </DivFadeIn>
        </div>
    </div>
  )
}

export default ProprietaryCards