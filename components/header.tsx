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
import ArrowToRight from '../public/svg/icon/arrow-toright.svg'

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
      <header className={`${scrollTop > 32 ? 'border-b bg-white dark:bg-gray-700' : ''} ${isActive ? 'h-screen bg-white dark:bg-gray-600' : 'h-20'} z-50 fixed w-full md:h-20 section-border overflow-hidden`}>
        <div className={`flex justify-between items-center container h-20 ${isActive ? 'border-b border-gray-900 dark:border-gray-600 border-opacity-10' : ''}`}>
          <Link href='/'>
            <div>
              <RGLogo className={`cursor-pointer w-auto h-8 mr-12 fill-current text-gray-900 hover:text-emerald-500 transition-colors`} />
              <span className='sr-only'>RealGlow Logo</span>
            </div>
          </Link>
          <nav className='absolute top-28 flex flex-col justify-start items-start w-smcreen sm:w-160 h-auto md:static md:flex-row md:justify-around md:items-center md:w-auto'>
            {config.navItems.map((navItem, index) => {
              return (
                <Link href={navItem.path} key={index}>
                  <div className='flex justify-between items-center w-full'>
                    {/* ${firstRouter === navItem.path ? 'md:underline decoration-dashed underline-offset-8 decoration-gray-500' : ''} */}
                    <div className={`my-4 text-2xl tracking-widest text-gray-900 dark:text-white text-opacity-100 hover:text-opacity-100 cursor-pointer md:w-auto md:mx-4 md:my-0 md:text-base md:text-opacity-70`}>
                      {navItem.name}
                    </div>
                    <ArrowToRight className='md:hidden w-6 h-6 m-2 fill-current text-gray-900 text-opacity-100' />
                  </div>
                </Link>
              )
            })}
          </nav>
          <div className='flex justify-center items-center'>
            <button className='hidden md:block h-8 px-6 border-gray-900 text-sm text-white bg-gray-900 rounded-sm transition-all border hover:text-gray-900 hover:bg-opacity-10 select-none'>
              <span>找到我</span>
            </button>
            <button onClick={() => setIsActive(!isActive)} className='flex flex-col justify-center items-center w-9 h-9 md:hidden'>
              <div className={`w-6 h-[2px] bg-gray-900 dark:bg-white -translate-y-1 transition-all ease-in-out duration-200 rounded-lg ${isActive ? 'rotate-45 translate-y-[2px]' : ''}`} />
              <div className={`w-6 h-[2px] bg-gray-900 dark:bg-white translate-y-1 transition-all ease-in-out duration-200 rounded-lg ${isActive ? '-rotate-45 translate-y-0' : ''}`} />
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