import React, { Component } from 'react'

export class Starters extends Component {
  render() {
    return (
      <div>
         <div className='flex flex-col  items-center h-[80vh] w-full bg-black '>
            <div className='w-full h-12 flex flex-col justify-center items-center mt-64'>
            <h1 className='text-orange-300 font-Font tracking-wider text-xl'>
                GETTING STARTERS
            </h1>
            <h1 className='text-white font-logo tracking-wider text-3xl'>
                PLAN  A TRIP
            </h1>
            </div>
            <div className='mt-16'>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-32  text-gray-400  justify-center font-logo text-2xl">
                <div className='flex flex-col justify-center items-center '>
               
                <img width="80" height="80" src="https://img.icons8.com/dotty/80/FAB005/time.png" alt="time"/>
                <a className=" text-orange-300 hover:text-3xl hover:font-bold hover:cursor-pointer">First Time?</a>
                </div>
             
                <div className='flex flex-col justify-center items-center '>
               
                <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/FAB005/rocket.png" alt="rocket"/> <a className=" text-orange-300 hover:text-3xl hover:font-bold hover:cursor-pointer">Book a Trip</a>
               </div>
               <div className='flex flex-col justify-center items-center '>
               
               <img width="80" height="80" src="https://img.icons8.com/dotty/80/FAB005/car.png" alt="car"/> <a className=" text-orange-300 hover:text-3xl hover:font-bold hover:cursor-pointer">BOOK A ROOM</a>
               </div>
               <div className='flex flex-col justify-center items-center '>
               
               <img width="50" height="50" src="https://img.icons8.com/ios/50/FAB005/helicopter.png" alt="helicopter"/> <a className=" text-orange-300 hover:text-3xl hover:font-bold hover:cursor-pointer">ACTIVITIES</a>
               </div>
            </nav>
            </div>
          
           
        </div>
      </div>
    )
  }
}

export default Starters
