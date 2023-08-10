import React from 'react'
import './Landing_page.css'
import home from '../assests/home.png'
const options=["Carrers","Login","SignUp"]
const Landing_page = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
        <div className=' mx-24'>
            <div>
            <div className='grid-cols-2 grid gap-20 mt-2 cursor-pointer'>
                <div>
                    <div className='nav'>Logo</div>
                </div>
                <div className='flex w-[40%] ml-auto'>
                    {options.map((op)=>{
                        return(
                            <div className='nav mr-12'>{op}</div>
                        )
                    })}
                </div>
            </div>
            </div>
                <div className='head mt-6 leading-[113%] w-[50%]'>Relax, we've got it all under control</div>
                <div className='sub w-[45%] mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                <div className='w-[70%] m-auto mt-8'>
                    <img src={home} alt='' />
                </div>
        </div>
    </div>
  )
}

export default Landing_page