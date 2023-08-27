import React from 'react'

const Nav = ({handleMode,theme}) => {
  return (
    <nav>
      <div className='bg-blue-300 dark:bg-zinc-400 flex gap-4 text-black dark:text-white pr-2'>
        <div className='my-1 mr-auto  border-[2px] rounded-full p-2 '>
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
