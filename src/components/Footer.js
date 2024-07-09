import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='w-full h-[900px] brightness-75'>
        <img className=' w-full h-full object-cover object-center' src='https://mymodernmet.com/wp/wp-content/uploads/2020/09/andrew-mccarthy-high-definition-moon-thumbnail.jpg'/>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap text-white items-center justify-center  relative -top-64 font-Font text-2xl brightness-110">
              <a className="mr-16 hover:text-orange-500">Distinctions</a>
              <a className="mr-16 hover:text-orange-500">Interactives</a>
              <a className="mx-12 font-logo text-3xl font-bold">SpaceO</a>
              <a className="mr-16 hover:text-orange-500">videos</a>
              <a className="mr-16 hover:text-orange-500">faqs</a>
            </nav>
        </footer>
      </div>
    )
  }
}

export default Footer
