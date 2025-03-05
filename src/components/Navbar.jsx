import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between px-20 py-6'>
    <span>Logo Here</span>
    <div className='flex flex-'>
        <span>Home</span>
        <span>About</span>
        <span>Listings</span>
        <span>Blog</span>
    </div>
</nav>
  )
};

export default Navbar