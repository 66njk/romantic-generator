import { Key } from "react"

type TagsContainerProps = {
  tags: Array<{
    id: Key
    name: String
  }>
}

const Tag = ({name}) => {
  return (
    <div className='px-4 py-2 mr-2 mb-2 border border-gray-200 rounded-md text-sm text-gray-500 select-none cursor-pointer hover:bg-gray-50 hover:border-gray-500 transition-all'>
      {name}
    </div>
  )
}

const Tags = ({tags}: TagsContainerProps) => {
  return (
    <div className='flex flex-wrap mb-4'>
      {tags.map((tag) => (
        <Tag key={tag.id} name={tag.name} />
      ))}
    </div>
  )
}

export default Tags