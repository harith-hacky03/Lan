import React from 'react'
import star from '../assests/star.svg'
import './About.css'
import Vector from '../assests/Vector.svg'
const About = () => {
    const ratings=[{'val':"4.84",'nam':'Star Rating'},{'val':"2M+",'nam':'Users'},{'val':"99%",'nam':'Customer Satisfication'}]
    const stars=[1,2,3,4]
   
  return (
    <div className='min-h-screen bg1'>
        <div>
            <div className=''>
                <div className='grid grid-cols-2 mx-24'>
                    <div>
                        <div className=' mt-20'>
                            <div className='who '>Don't believe us?</div>
                            <div className='wh mt-10 w-[70%]'>See what our customers have to say</div>
                            <div className='box flex mt-40'>
                            <div className='or text-center my-3 ml-5 '>User Feedbacks</div>
                            <img className='ml-3' src={Vector} width={24} alt=''/>
                        </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='cont w-[85%]'>
                            <div>
                                {stars.map((re)=>{
                                    return(
                                        <div className=''>
                                            <div className='or mt-5'>Bavan</div>
                                            <div className='flex  mt-1'>
                                                {stars.map((st)=>{
                                                    return(
                                                        <div className='flex mr-3'>
                                                        <img src={star} alt=''/>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className='con'>“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.”</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About