import { Key } from 'react'

export type Tag = {
  id: Key
  name: string
  value: string
}

type TagsProps = {
  tags: Array<Tag>,
  state: [string, React.Dispatch<React.SetStateAction<string>>]
}

const Tags = ({ tags, state }: TagsProps) => {
  const [selectedTag, setSelectedTag] = state
  
  return (
    <div className='flex flex-wrap mb-4'>
      {tags.map((tag) => (
        <div
          className={`${selectedTag === tag.value ? 'bg-gray-50 border-opacity-50' : 'border-opacity-10' } px-4 py-2 mb-2 mr-2 border border-gray-900 rounded-md text-sm text-gray-500 select-none cursor-pointer hover:bg-gray-50 hover:border-gray-500 transition-all`}
          onClick={() => setSelectedTag(tag.value)}
          key={tag.id}
        >
          {tag.name}
        </div>
      ))}
    </div>
  )
}

export default Tags