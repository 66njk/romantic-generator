
type WelcomeWidgetProps = {
  title: string
  bgColor: string
  children?: React.ReactNode
}

const Hero: React.FC<WelcomeWidgetProps> = ({title, bgColor, children}) => {
  return (
    <div>
      <div className={`w-full border-b section-border ${bgColor}`}>
        <div className='container pt-20'>
          <h1 className='mt-8 mb-6 text-4xl font-semibold text-gray-900'>
            {title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Hero