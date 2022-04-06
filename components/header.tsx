/* Components */
import Link from 'next/link'
/* React */
import { useState } from 'react'
import { useRouter } from 'next/router'
/* Custom Hooks */
import { useScrollTop } from '../lib/hooks'
/* Data */
import config from '../lib/config'
import RGLogo from '../public/svg/RG_Logo_Stroke.svg'

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

  const closeMenu = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    setIsActive(false)
  }

  return (
    <>
      <header className={`${scrollTop > 32 ? 'border-b bg-white dark:bg-gray-700' : ''} z-50 fixed w-full md:h-20 section-border`}>
        <div className={`flex justify-between items-center container h-20`}>
          <div className='mr-12' onClick={() => router.push('/')}>
            <RGLogo className={`cursor-pointer w-auto h-8 fill-current text-gray-900`} />
            <span className='sr-only'>RealGlow Logo</span>
          </div>
          <nav className='hidden lg:flex absolute top-28 flex-col justify-start items-start w-smcreen sm:w-160 h-auto md:static md:flex-row md:justify-around md:items-center md:w-auto'>
            {config.navItems.map((navItem, index) => {
              return (
                <Link href={navItem.path} key={index}>
                  {/* ${firstRouter === navItem.path ? 'md:underline decoration-dashed underline-offset-8 decoration-gray-500' : ''} */}
                  <div className={`text-gray-900 dark:text-white hover:text-opacity-100 cursor-pointer w-auto mx-4 my-0 text-base text-opacity-70`}>
                    {navItem.name}
                  </div>
                </Link>
              )
            })}
          </nav>
          <div className='flex justify-center items-center'>
            <button className='hidden lg:block h-8 px-6 border-gray-900 text-sm text-white bg-gray-900 rounded-sm transition-all border hover:text-gray-900 hover:bg-opacity-10 select-none'>
              <span>找到我</span>
            </button>
            {isActive && 
            <div
              className='z-[1000] fixed top-0 left-0 w-screen h-screen'
              onTouchStart={closeMenu}
              onClick={closeMenu}
            />}
            <div className='z-[1010] relative w-9 h-9 lg:hidden'>
              <div className={`z-[1010] absolute right-0 top-[56px] w-smcreen max-w-[14rem] pr-0 bg-white shadow-2xl rounded-md transition-all ease-out duration-300 divide-y divide-gray-100 overflow-hidden origin-top-right will-change-transform ${isActive ? 'scale-100' : 'scale-0'} lg:hidden`}>
                {config.navItems.map((navItem, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex items-center w-auto h-[4.5rem] ml-6 cursor-pointer text-base text-gray-900 font-semibold dark:text-white`}
                      onClick={(e) => {
                        e.stopPropagation()
                        e.nativeEvent.stopImmediatePropagation()
                        router.push(navItem.path)
                        navItem.path === firstRouter ? setIsActive(false) : {}
                      }}
                    >
                      {navItem.name}
                    </div>
                  )
                })}
              </div>
              <button onClick={() => setIsActive(!isActive)} className='flex flex-col justify-center items-center w-9 h-9 lg:hidden'>
                <div className={`w-6 h-[2px] bg-gray-900 dark:bg-white -translate-y-1 transition-all ease-in-out duration-200 rounded-lg ${isActive ? 'rotate-45 translate-y-[2px]' : ''}`} />
                <div className={`w-6 h-[2px] bg-gray-900 dark:bg-white translate-y-1 transition-all ease-in-out duration-200 rounded-lg ${isActive ? '-rotate-45 translate-y-0' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Placeholder */}
      {!isHyaline && <div className='w-full h-20' />}
    </>
  )
}

export default Header