type CustomSectionProps = {
  title: String
  children: React.ReactNode
  addStyle?: String
}

const CustomSection: React.FC<CustomSectionProps> = ({title, children, addStyle}) => {
  return (
    <div className={`custom-section ${addStyle}`}>
      <div className='custom-section-container'>
        <h4 className='subhead'>{title}</h4>
        {children}
      </div>
    </div>
  )
}

export default CustomSection