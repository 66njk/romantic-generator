type WelcomeWidgetProps = {
  title: String
  bgColor: String
  children?: React.ReactNode
}

const WelcomeWidget: React.FC<WelcomeWidgetProps> = ({title, bgColor, children}) => {
  return (
    <div>
      <div className={`w-full h-120 border-b border-gray-900 ${bgColor}`}>
        <div className='max-w-cmw mx-auto px-4 pt-20'>
          <h1 className='mt-20 font-serif text-6xl md:text-8xl lg:text-9xl text-gray-900'>
            {title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  )
}

export default WelcomeWidget