import React from 'react'

const Nav = ({handleMode,theme}) => {
  return (
    <nav>
<div className="bg-gradient-to-t from-[#2c5f2d] via-[#5f8d47] to-[#97bc62] dark:bg-gray-500 flex gap-4 text-white dark:text-white pr-2">
        <div className='my-1 mr-auto  p-2 '>
      <button onClick={handleMode}>
        {theme === "dark" ?   <i className="fa-regular fa-sun "></i> : <i className="fa-solid fa-moon"></i>}
      </button>
      </div>
<div className='py-2'><span className='border-r-2 py-1 border-black dark:border-white pr-1 '>Blog </span></div>
<div className='py-2'>
  <span className='border-r-2 py-1 border-black dark:border-white pr-1 '>   About us </span>
</div>
<div className='py-2'>
<span >  Login </span>
</div>
      </div>
    </nav>
  )
}

export default Nav
