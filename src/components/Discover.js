import React, { Component } from 'react'

export class Discover extends Component {
  render() {
    return (
      <div>
        <div className='flex flex-col  items-center h-screen w-full bg-black'>
            <div className='w-full h-12 flex flex-col justify-center items-center'>
            <h1 className='text-gray-400 font-Font tracking-wider text-xl'>
                Discover
            </h1>
            <h1 className='text-white font-logo tracking-wider text-3xl'>
                OTHER WORLDS
            </h1>
            </div>
            <div className='mt-16'>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-32  text-gray-400  justify-center font-logo text-2xl">
              <a className="mr-9 hover:text-3xl hover:font-bold hover:cursor-pointer">MOON</a>
              <a className="mr-9 hover:text-3xl hover:font-bold hover:cursor-pointer">MARS</a>
              <a className="mr-9 hover:text-3xl hover:font-bold hover:cursor-pointer">EUROPA</a>
              <a className="mr-9 hover:text-3xl hover:font-bold hover:cursor-pointer">TITAN</a>
              <a className="mr-9 hover:text-3xl hover:font-bold hover:cursor-pointer">NEPTUNE</a>
              <a className="mr-9 hover:text-3xl hover:font-bold hover:cursor-pointer">SATURN</a>
            </nav>
            </div>
            <div className='w-[95%] h-[0.025rem] bg-orange-600 mt-6'></div>
            <div className='w-[90%] h-[100%] flex '>
           
            <div className='w-[100%] h-full flex flex-col justify-center items-start'>
            <h1 className='font-Font tracking-widest text-white'></h1>
            <div className='flex justify-between gap-44'>
            <h1 className='font-logo tracking-tighter text-white text-4xl'>THE RED PLANET</h1>
          <h1 className='font-logo text-orange-600 text-sm tracking-widest'>5 DAY ADVENTURE</h1>
            </div>
            <div className='w-[75%] mt-10  text-lg tracking-wider font-Font'>
                <p className='text-white'>
                Mars, the red planet, intrigues scientists with its potential for past life and future human colonization. Recent missions reveal its rugged terrain, frozen polar caps, and ancient river valleys, sparking renewed interest in understanding our planetary neighbor. As a target for exploration, Mars offers insights into the history of our solar system and the possibility of sustaining human life beyond Earth.</p>
            </div>
             </div>
             <div className='w-[100%] h-full flex justify-center items-center'>
            <img className='object-fit w-[100%] h-[80%] relative top-10 ' src='https://videohive.img.customer.envatousercontent.com/files/42100de3-0906-4472-94d7-fcae47eaa272/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=7baba4ecdd4469657810072d35383639'/>

            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Discover
