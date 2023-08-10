import React from 'react'
import './About.css'
const About = () => {
    const ratings=[{'val':"4.84",'nam':'Star Rating'},{'val':"2M+",'nam':'Users'},{'val':"99%",'nam':'Customer Satisfication'}]
  return (
    <div className=''>
        <div>
            <div className='bg'>
                <div className='grid grid-cols-2 mx-24'>
                    <div>
                        <div className=' mt-20'>
                            <div className='who '>Who are we</div>
                            <div className='wh mt-10 w-[70%]'>Reliable experts, transforming your space.</div>
                        </div>
                    </div>
                    <div className='mt-32'>
                        <div className='cont w-[85%]'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                        <div className='grid grid-cols-3 ml-[-12%]'>
                            {ratings.map((r)=>{
                                return(
                                    <div className='mt-16 w-[80%] mx-auto'>
                                        <div className='val text-center'>{r.val}</div>
                                        <div className='nam text-center'>{r.nam}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About