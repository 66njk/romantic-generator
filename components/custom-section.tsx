
type CustomSectionProps = {
  title: String
  children: React.ReactNode
  addStyle?: String
}

const CustomSection: React.FC<CustomSectionProps> = ({title, children, addStyle}) => {
  return (
    <div className={`w-full h-auto border-b section-border ${addStyle}`}>
      <div className='container py-4 lg:py-8'>
        <h2 className='subhead'>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default CustomSection