/* Components */
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from '../components/hero'
import Image from 'next/image'
import Img from '../public/images/169a512f-ede5-4eca-95f3-038de465687b.png'
import { GetStaticProps } from 'next'
import { query } from '.keystone/api'
import dayjs from 'dayjs'

export const getStaticProps: GetStaticProps = async () => {
  const items = await query.Project.findMany({
    query: `id title preview { url } createAt`
  })
  for (const post of items) {
    post.createAt = dayjs(post.createAt).format('YYYY/MM/DD')
  }
  return {
    props: {
      items
    }
  }
}

type ShowcaseItemProps = {
  id?: string
  title: string
  preview: {
    url: string
  }
  createAt: string
}

const ShowCaseItem: React.FC<ShowcaseItemProps> = ({title, preview, createAt}) => {
  return (
    <div className='w-full h-auto bg-white overflow-hidden rounded-sm cursor-pointer shadow-sm lg:hover:shadow-[0_30px_80px_-12px_rgb(17,24,39,0.15)] lg:hover:scale-[1.05] transition-all duration-500'>
      <div className='relative aspect-40/28'>
        <Image
          src={preview.url}
          alt={`${title} 预览图片`}
          layout='fill'
          priority
        />
      </div>
      <div className='flex justify-between items-center p-4'>
        <h3 className='font-semibold text-gray-900'>
          {title}
        </h3>
        <small className='font-semibold text-gray-900 text-opacity-20 leading-none'>
          {createAt}
        </small>
      </div>
    </div>
  )
}

type ShowcaseProps = {
  items: [ShowcaseItemProps]
}

const Showcase: React.FC<ShowcaseProps> = ({ items }) => {
  return (
    <>
      <Head>
        <title>作品 - {siteTitle}</title>
      </Head>
      <Layout isHyaline>
      <Hero title='作品' bgColor='bg-white' />
      <div className='min-h-screen bg-gray-50'>
        {items.length > 0 ?
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container py-12'>
            {items.map((item) => (
              <ShowCaseItem key={item.id} title={item.title} preview={item.preview} createAt={item.createAt} />
            ))}
          </div> :
          <div className='flex justify-center items-center w-full h-64 text-gray-500'>暂无作品</div>
        }
      </div>
      </Layout>
    </>
  )
}

export default Showcase