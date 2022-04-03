
type WelcomeWidgetProps = {
  title: string
  description: string
  bgColor: string
  children?: React.ReactNode
}

const WelcomeWidget: React.FC<WelcomeWidgetProps> = ({title, description, bgColor, children}) => {
  return (
    <div>
      <div className={`w-full h-60 lg:h-96 border-b section-border ${bgColor}`}>
        <div className='container pt-20'>
          <h1 className='mt-10 mb-6 lg:mt-16 lg:mb-8 text-3xl lg:text-5xl font-semibold text-gray-900'>
            {title}
          </h1>
          <p className='text-gray-900 text-opacity-60'>
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}

export default WelcomeWidget