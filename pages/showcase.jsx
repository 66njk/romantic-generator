/* React */
import { useState, useEffect } from 'react'
/* Components */
import Image from "next/image"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.jsx'
/* Data */
import data from '../lib/static.json'
/* Static */
import template from '../public/images/template.png'

const Preview = () => {
  return (
    <div className='w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-3 cursor-pointer hover:scale-105 hover:-translate-y-1 hover:drop-shadow-2xl transition-transform+shadow duration-300'>
      <Image
        className='object-cover object-center rounded-md'
        src={template}
        alt='preview'
      />
    </div>
  )
}

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <Layout>
      <Head>
        <title>作品 - {siteTitle}</title>
      </Head>
      <div className=''></div>
      {/* 列表 */}
      <section className={`container min-h-screen mx-auto my-8 px-4`}>
        {/* 列表标题 and 分类 */}
        <header className='flex flex-col justify-center items-center w-full h-auto pb-6 mb-6 border-b border-gray-900 border-opacity-10'>
          <h2 className='mb-8 text-gray-900 text-4xl font-semibold'>作品列表</h2>
          <div className='flex items-center flex-wrap'>
            {data.showcaseCategory.map((item) => (
              <button 
                className={`${activeCategory === item.id ? 'text-opacity-100 bg-gray-100' : ''} h-8 px-4 mb-2 text-gray-900 text-opacity-60 text-sm rounded-sm hover:text-opacity-100 select-none`}
                onClick={() => setActiveCategory(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </header>
        {/* wraplist */}
        <div className='flex flex-wrap'>
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
        </div>
      </section>
    </Layout>
  )
}

export default Showcase