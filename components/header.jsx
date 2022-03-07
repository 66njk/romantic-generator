/* Components */
import Link from 'next/link'
/* React */
import { useState } from 'react'
/* Custom Hooks */
import { useScrollTop } from '../lib/hooks'
/* Data */
import { getNavItems } from '../lib/data/common.js'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const scrollTop = useScrollTop()
  const navItems = getNavItems()

  return (
    <>
      <header className={`${scrollTop > 32 ? 'border-b' : ''} ${isActive ? 'h-screen' : 'h-20'} z-50 fixed flex flex-col items-center w-full md:h-20 border-gray-900 dark:border-gray-600 border-opacity-10 bg-white dark:bg-gray-700 overflow-hidden`}>
        <div className={`flex justify-between items-center max-w-cmw w-full h-20 px-4 ${isActive ? 'border-b border-gray-900 dark:border-gray-600 border-opacity-10' : ''}`}>
          <Link href='/'><h3 className='font-bold text-xl cursor-pointer text-gray-900 dark:text-white'>jamBoomChuu</h3></Link>
          <nav className='absolute top-20 flex flex-col justify-start items-start w-full h-auto md:static md:flex-row md:justify-around md:items-center md:w-auto'>
            {navItems.map((navItem, index) => {
              return (
                <Link href={navItem.path} key={index}>
                  <div className='w-full my-4 text-2xl tracking-widest text-gray-900 dark:text-white text-opacity-100 hover:text-opacity-100 cursor-pointer md:w-auto md:mx-4 md:my-0 md:text-base md:text-opacity-70'>
                    {navItem.name}
                  </div>
                </Link>
              )
            })}
          </nav>
          <div className='flex justify-center items-center'>
            <button className='h-8 px-6 border-gray-900 text-sm text-white bg-gray-900 rounded-sm transition-all border hover:text-gray-900 hover:bg-opacity-10 select-none'>
              <span>找到我</span>
            </button>
            <button onClick={() => setIsActive(!isActive)} className='flex flex-col justify-center items-center w-9 h-9 ml-4 md:hidden'>
              <div className={`w-6 h-px bg-gray-900 dark:bg-white -translate-y-1 transition-all ${isActive ? 'rotate-45 translate-y-px' : ''}`} />
              <div className={`w-6 h-px bg-gray-900 dark:bg-white translate-y-1 transition-all ${isActive ? '-rotate-45 translate-y-0' : ''}`} />
            </button>
          </div>
        </div>
      </header>
      {/* Placeholder */}
      <div className='w-full h-20' />
    </>
  )
}

export default Header