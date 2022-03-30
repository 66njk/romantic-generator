/* React */
import { useState, useEffect } from 'react'
/* Components */
import Image from "next/image"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import WelcomeWidget from '../components/welcome'
import Tags from '../components/tags'
import CustomSection from '../components/custom-section'
/* Static */
import template from '../public/images/template.png'

const Preview: React.FC = () => {
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

const Showcase: React.FC = () => {
  return (
    <>
      <Head>
        <title>作品 - {siteTitle}</title>
      </Head>
      <Layout isHyaline>
        <WelcomeWidget title='Mr. K' bgColor='bg-emerald-100'></WelcomeWidget>
        <CustomSection title='标签'>
          <Tags tags={[{
            id: 0,
            name: 'Web / App'
          }]}></Tags>
        </CustomSection>
        <section className={`max-w-cmw min-h-screen mx-auto my-12 px-4`}>
          {/* wrap-list */}
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
    </>
  )
}

export default Showcase