import React, { Component } from 'react'

export class BodySuits extends Component {
  render() {
    return (
      <div>
        <section className='w-screen h-screen bg-black'>
        <div className='w-[100%] h-[100%] flex '>
            <div className='w-[100%] h-full flex justify-center items-center'>
            <img className='object-contain  relative top-10 ' src='https://img.pikbest.com/wp/202405/outer-space-exploring-the-cosmos-3d-illustration-of-an-astronaut-in-against-a-black-background_9840985.jpg!sw800'/>

            </div>
            <div className='w-[100%] h-full flex flex-col justify-center items-start'>
            <h1 className='font-Font tracking-widest text-white'>TRACKING LUXURY</h1>
            <div className='flex justify-between gap-44'>
            <h1 className='font-logo tracking-tighter text-white text-4xl'>BIO SUITE 2.0</h1>
          <h1 className='font-logo text-orange-600 text-xl tracking-widest'>$100 upgrade</h1>
            </div>
            <div className='w-[75%] h-1 bg-orange-600 mt-10'></div>
            <div className='w-[75%] mt-10 text-lg tracking-wider font-Font'>
                <p className='text-white'>
                Space exploration drives humanity's pursuit of knowledge beyond Earth, revealing celestial mysteries and paving the way for scientific breakthroughs. It inspires innovation, international cooperation, and dreams of interplanetary colonization, marking a testament to human curiosity and ambition.
                </p>
            </div>
             </div>
           
        </div>
        </section>
      </div>
    )
  }
}

export default BodySuits
