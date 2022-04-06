/* Components */
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Logo from '../public/svg/RG_Logo_Stroke.svg'

const Home: React.FC = () => {

  return (
    <Layout>
      <Head>
        <title>关于 - {siteTitle}</title>
      </Head>
      <article className={`max-w-screen-md min-h-screen mx-auto px-5`}>
        <div className='flex justify-center items-center h-32'>
          <Logo className='w-16 h-16 fill-current text-gray-900' />
        </div>
        <div className={`
          mt-8 mb-12 max-w-none prose prose-zinc dark:prose-invert
          prose-blockquote:not-italic prose-blockquote:font-normal 
          prose-blockquote:border-none prose-blockquote:rounded-md
          prose-blockquote:bg-emerald-100 dark:prose-blockquote:bg-emerald-100 
          dark:prose-blockquote:border-none prose-blockquote:p-4
          prose-code:font-normal prose-pre:bg-gray-100 prose-pre:bg-opacity-6 
          prose-pre:text-gray-800 prose-pre:overflow-scroll prose-pre:scroll-smooth
          prose-a:text-emerald-500 prose-a:no-underline prose-strong:text-inherit
          prose-code:bg-gray-100 prose-code:prose-pre:bg-opacity-60 
          prose-code:p-0.5 prose-code:mx-0.5 prose-code:rounded-sm
          prose-p:text-justify prose-li:text-justify`}
        >
          <blockquote>Hey！我亲爱的好朋友，既然你来到这了，那么我想这里的废话应该不会打扰到你。</blockquote>
          <p>这里是<strong>realglow.cn</strong>，虽然看起来很像是一个团队或工作室的网站，但实际上这是一个<strong>「个人博客」</strong>。</p>
          <p>时间进入2022年，这是移动互联网当道的时代，人们仅有的使用Web的场景要么是小程序，要么嵌套在App里。在这样的环境下做一个博客，多少带点自娱自乐的属性。</p>
          <p>为什么要花时间和精力做个没有人看的网站呢？</p>
          <h3>1. 与世界对话的方式</h3>
          <p>学习所谓的「前端开发」已经一整年了，我却连件像样的作品都拿不出手。所以，是时候创造一个充满仪式感的平台，用来强迫自己做点像样的东西。当然，这个平台本身也算是一件作品。</p>
          <h3>2. 过剩的表达欲与匮乏的表达能力</h3>
          <p>最近我总问自己，我还算是一个有趣的人吗？我可以被称作是创作者吗？我总是想当然地认为我拥有创作与表达的能力，仿佛写长文、做视频、做设计对我来说都不是什么难事。然而想到与做到之间存在距离，很长一段时间也只是在学着写代码与埋头赚钱，并没有保持阅读与创作，我迫切地需要找回这些能力。</p>
          <h3>3. 暂时的逃生舱</h3>
          <p>作为一个遇到问题只会逃避的人，写这个网站的时候，我的毕业论文才完成四分之一不到，加上实习工作的压力，以及一些别的事情。你看我多么脆弱的一个小人儿啊，就这点屁事，我处理不来了。自从分配时间的权利交到自己手上之后，任何低效和浪费都会为我带来负罪感，这远不如上课走神来得超脱自在。每晚我都会在待办清单里为这几项任务合理分配时间，期待着第二天每一项都能有不错的进展。然而事实是：除了写网页时能够快速进入心流状态，做其他任务时大脑都直接停摆。所以写网页成为了我暂时逃避的方式。</p>
          <hr/>
          <p>也希望通过这里认识同好——更多乖张有趣的人。如果我的内容恰好能帮到你，那再好不过。</p>
          <p>一起发光吧！</p>
        </div>
      </article>
    </Layout>
  )
}

export default Home