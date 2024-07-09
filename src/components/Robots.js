import React, { Component } from 'react'

export class Robots extends Component {
  render() {
    return (
      <div>
         <section className='w-screen h-screen bg-black'>
        <div className='w-[100%] h-[100%] flex '>
            <div className='w-[100%] h-full flex justify-center items-center'>
            <img className='w-[40%]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMqAL7gfGFHukXtVD5Uc9LCC2nFOaLiII1w&s'/>
            <img className='w-[40%] h-[60%]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zB7RTJgJcW3zk7JLv4YXR3i6zNgWl7PzAtGI5lKoPpcsjPxrafiN7Na9viOJ2GM-hLc&usqp=CAU'/>
            </div>
            <div className='w-[100%] h-full flex flex-col justify-center items-start'>
            <h1 className='font-Font tracking-widest text-white'>TRACKING LUXURY</h1>
            <div className='flex justify-between gap-44'>
            <h1 className='font-logo tracking-tighter text-white text-4xl'>DOGLAS QUAD</h1>
            </div>
            <div className='w-[75%] h-1 bg-orange-600 mt-7'></div>
            <div className='w-[75%] mt-10 text-lg tracking-wider font-Font mb-20'>
                <p className='text-white'>
                Space exhibitions showcase humanity's journey into the cosmos, featuring artifacts like spacecraft, astronaut gear, and lunar samples. They offer immersive experiences, inspiring curiosity and educating the public about space exploration's history and future.
                </p>
            </div>
             </div>
           
        </div>
        <div className='flex justify-center items-center w-full h-[30%] bg-black -mt-64 '>
        <img className='w-[20%] h-[100%]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCc0II58abY24oILIQfNfuwcLHDzjBHoQug&s'/>
            <img className='w-[20%] h-[150%]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-mRu0gTny_v6jyKpPQPgcwbyvAgOoRzebQ&s'/>
            <img className='w-[50%] h-[100%]' src='https://t3.ftcdn.net/jpg/01/89/50/34/360_F_189503495_Xu1itt1SLG9FnKwzYK2YaYRpfSvRWcLu.jpg'/>
        </div>
        </section>
      </div>
    )
  }
}

export default Robots
