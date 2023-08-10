import React from 'react'
import './Provide.css'
import img1 from '../assests/img1.png'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.png'
import img4 from '../assests/img4.png'
import img5 from '../assests/img5.png'
import img6 from '../assests/img6.png'
import img7 from '../assests/img7.png'
import Vector from '../assests/Vector.svg'
const Provide = () => {
    const img=[{'im':img1,'title':"Vaccum"},{'im':img2,'title':"Vaccum"},{'im':img3,'title':"Vaccum"},{'im':img4,'title':"Vaccum"}]
    const imgs=[{'im':img5,'title':"Vaccum"},{'im':img6,'title':"Vaccum"},{'im':img7,'title':"Vaccum"}]
  return (
    <div>
        <div className='min-h-screen mb-8'>
            <div className='mt-8'>
                <div className='or text-center'>What we provide</div>
                <div className='big w-[50%] mx-auto mt-10'>
                Got a problem? Name it, we'll claim it
                </div>
                <div>
                    <div className='grid grid-cols-4 mx-24 mt-12'>
                        {img.map((i)=>{
                            return(
                                <div className='mx-20'>
                                    <img className='mx-auto' src={i.im} alt=''/>
                                    <div className='text-center title'>{i.title}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='grid grid-cols-3  mt-12 w-[70%] mx-auto'>
                        {imgs.map((ik)=>{
                            return(
                                <div className='mx-12'>
                                    <img className='mx-auto' src={ik.im} alt=''/>
                                    <div className='text-center title'>{ik.title}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-[10%] mx-auto'>
                        <div className='box flex mt-3'>
                            <div className='or text-center my-3 ml-5'>Explore services</div>
                            <img className='ml-3' src={Vector} width={24} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Provide