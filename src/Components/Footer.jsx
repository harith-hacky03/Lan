import React from 'react'
import './Footer.css'
import Icons from '../assests/Icons.svg'
const Footer = () => {
    const ser=['Explore services','Book a service','Features','Solutions',"FAQ's"]
    const abt=['About Us','Career','Contact Us']
  return (
    <div>
        <div className='bg1 '>
            <div className=' mx-24 grid grid-cols-3'>
                <div className='mt-6'>
                    <div className='or  '>LOGO</div>
                    <img src={Icons} className='mt-8' alt=''/>
                </div>
                <div className='w-[35%] ml-[120%]'>
                    <div className='or mt-6'>Services</div>
                    
                    {ser.map((s)=>{
                        return(
                            
                            <div className='fot my-1'>{s}</div>
                            
                        )
                    })}
                    
                </div>
                <div className='w-[20%] ml-[80%]'>
                    <div className='or mt-6'>Company</div>
                    {abt.map((a)=>{
                        return(
                            
                            <div className='fot my-1'>{a}</div>
                            
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer