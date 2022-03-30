/* Components */
import Link from 'next/link'
/* React */
import { useState } from 'react'
import { useRouter } from 'next/router'
/* Custom Hooks */
import { useScrollTop } from '../lib/hooks'
/* Data */
import config from '../lib/config'

type HeaderProps = {
  isHyaline: Boolean
}

const Header: React.FC<HeaderProps> = ({ isHyaline }) => {
  /* 路由实例 */
  const router = useRouter()
  /* 滚动高度 */
  const scrollTop = useScrollTop()
  /* 是否下拉 */
  const [isActive, setIsActive] = useState(false)
  /* 一级路由名称 */
  const firstRouter = '/' + router.asPath.split('/')[1]

  return (
    <>
      <header className={`${scrollTop > 32 ? 'border-b bg-white bg-opacity-90 backdrop-blur-xl saturate-200 dark:bg-gray-700' : ''} ${isActive ? 'h-screen bg-white dark:bg-gray-600' : 'h-20'} z-50 fixed flex flex-col items-center w-full md:h-20 border-gray-900 dark:border-gray-600 border-opacity-10 overflow-hidden transition-colors duration-300`}>
        <div className={`flex justify-between items-center max-w-cmw w-full h-20 px-4 ${isActive ? 'border-b border-gray-900 dark:border-gray-600 border-opacity-10' : ''}`}>
          <Link href='/'><h3 className='font-bold text-xl cursor-pointer text-gray-900 dark:text-white'>jamBoomChuu</h3></Link>
          <nav className='absolute top-40 flex flex-col justify-start items-start w-full h-auto md:static md:flex-row md:justify-around md:items-center md:w-auto'>
            {config.navItems.map((navItem, index) => {
              return (
                <Link href={navItem.path} key={index}>
                  <div className={`${firstRouter === navItem.path ? 'text-emerald-500 md:text-opacity-100' : ''} w-full my-4 text-2xl tracking-widest text-gray-900 dark:text-white text-opacity-100 hover:text-opacity-100 cursor-pointer md:w-auto md:mx-4 md:my-0 md:text-base md:text-opacity-70`}>
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
      {!isHyaline && <div className='w-full h-20' />}
    </>
  )
}

export default Header