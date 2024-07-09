import React, { Component } from "react";
import "../output.css";
export class Header extends Component {
  render() {
    return (
      <div>
        <header className="h-screen  bg-background bg-cover bg-center relative text-white body-font cursor-pointer">
          <div className="absolute inset-0 bg-black opacity-50 filter brightness-50"></div>
          <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center brightness-200">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 brightness-200 ">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/glyph-neue/64/FFFFFF/search--v1.png"
                alt="search--v1"
              />
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center font-Font text-xl">
              <a className="mr-9 hover:text-orange-500">Home</a>
              <a className="mr-9 hover:text-orange-500">Interactives</a>
              <a className="mx-12 font-logo text-3xl font-bold">SpaceO</a>
              <a className="mr-9 hover:text-orange-500">Videos</a>
              <a className="mr-9 hover:text-orange-500">Resources</a>
            </nav>
          </div>
          <div className="w-full h-1 flex item-center justify-center brightness-100 ">
            <div className="w-[40%] h-[50%] auto bg-gray-500"></div>
            <div className="w-[45%] h-[50%] auto bg-gray-500"></div>
          </div>

          <div className=" bg-transparent text-white body-font cursor-pointer bg-cover bg-bottom  w-[95%] m-auto  flex-col justify-center tracking-widest items-center gap-0 brightness-150">
            <h1 className="font-logo text-white text-xl  flex justify-center tracking-widest items-center mt-60 -mb-10">
              THE SAFEST WAY TO{" "}
            </h1>
            <h1 className="font-logo text-[130px] text-white tracking-tighter flex justify-center">
              EXPLORE THE GALAXY
            </h1>
          </div>

          <div className=" w-[100%] h-24 bg-opacity-70 bg-black m-auto mt-52 items-center brightness-105 text-gray-200">
            <div className="flex justify-center items-center w-[85%] m-auto h-20 text-xl text-center">
              <div className="border border-gray-600 w-[30%] h-full tracking-widest flex-col brightness-90 ">
                GEOGRAPHY
                <div className="flex justify-evenly relative focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
                <select class=" w-[100%] h-[100%] bg-transparent rounded appearance-none py-2 focus:ring-2  focus:ring-slate-500 focus:border-orange-400 outline-none text-xl  pl-3 pr-10 text-center">
                <option className="bg-black bg-opacity-55 h-32 text-white ">SEA</option>
                <option className="bg-black bg-opacity-55 h-32 text-white">OCEAN</option>
                <option className="bg-black bg-opacity-55 h-32 text-white ">LAND</option>
                <option className="bg-black bg-opacity-55 h-32 text-white" >ATMOSPHERE</option>
                
              </select>
                </div>
              
              </div>
              <div className="border border-gray-600 w-[30%] h-full tracking-widest ">
              MEDIUM
                <div className="flex justify-evenly relative focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
                <select class=" w-[100%] h-[100%] bg-transparent rounded appearance-none py-2 focus:ring-2  focus:ring-slate-500 focus:border-orange-400 outline-none text-xl text-center  pl-3 pr-10">
                <option className="bg-black bg-opacity-55 h-32 text-white">MOON</option>
                <option className="bg-black bg-opacity-55 h-32 text-white">PLANETS</option>
                <option className="bg-black bg-opacity-55 h-32 text-white ">STARS</option>
                <option className="bg-black bg-opacity-55 h-32 text-white" >ASTEROIDS</option>
                
              </select>
                </div>
              
           </div>
              <div className="border border-gray-600 w-[30%] h-full">
              SPEED
                <div className="flex justify-evenly relative focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
                <select class=" w-[100%] h-[100%] bg-transparent rounded appearance-none py-2 focus:ring-2  focus:ring-slate-500 focus:border-orange-400 outline-none text-xl  pl-3 pr-10 text-center">
                <option className="bg-black bg-opacity-55 h-32 text-white tracking-[2rem]">1.0 - 2.0</option>
                <option className="bg-black bg-opacity-55 h-32 text-white">2.0-3.0</option>
                <option className="bg-black bg-opacity-55 h-32 text-white ">3.0-4.0</option>
                <option className="bg-black bg-opacity-55 h-32 text-white" >4.0-5.0</option>
                
              </select>
                </div>
           </div>
              <div className="border border-gray-600 w-[30%] h-full">
              VOLUNTEERS
                <div className="flex justify-evenly relative focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
                <select class=" w-[100%] h-[100%] bg-transparent rounded appearance-none py-2 focus:ring-2  focus:ring-slate-500 focus:border-orange-400 outline-none text-xl  pl-3 pr-10 text-center">
                <option className="bg-black bg-opacity-55 h-32 text-white ">1 ADULT</option>
                <option className="bg-black bg-opacity-55 h-32 text-white">2 KIDS</option>
                <option className="bg-black bg-opacity-55 h-32 text-white ">3 TEENAGERS</option>
                <option className="bg-black bg-opacity-55 h-32 text-white" >4 STUDENTS</option>
                
              </select>
                </div>
           </div>
              <div className="border border-gray-600 w-[30%] h-full tracking-widest flex text-2xl justify-center items-center">SEARCH</div>
            </div>
          </div>
          {/* <div className="w-1 relative -top-3 bg-black flex flex-col justify-center items-end">
          <div className="w-[40%] h-[50%] auto bg-gray-500"></div>
          <div className="w-[45%] h-[50%] auto bg-gray-500"></div>
          </div> */}
        </header>
      </div>
    );
  }
}

export default Header;
