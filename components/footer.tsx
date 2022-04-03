/* Components */
import Link from 'next/link'
import RGLogo from '../public/svg/RG_Logo_Stroke.svg'

const Footer = () => {
  return (
    <div className='w-full border-t border-gray-900 dark:border-gray-600 border-opacity-10 bg-gray-50 dark:bg-gray-700'>
      <footer className={`flex flex-col items-center container md:flex-row md:justify-between`}>
        <Link href='/'>
          <div>
            <RGLogo className={`w-auto h-9 my-8 fill-current text-gray-900 hover:text-emerald-500 cursor-pointer transition-colors`} />
            <span className='sr-only'>RealGlow Logo</span>
          </div>
        </Link>
        <div className='flex flex-col items-center md:flex-row'>
          <span className="text-sm text-gray-900 dark:text-white text-opacity-40 dark:text-opacity-40">
            Copyright © {''} 2022 {''} RealGlow. {''} All rights reserved.
          </span>
          <span className="mb-6 text-sm leading-relaxed text-gray-900 dark:text-white text-opacity-40 dark:text-opacity-40 md:ml-2 md:mb-0">
            辽ICP备2021003883号-1
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer