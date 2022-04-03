/* React */
import { useState, useEffect } from "react"

export function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return scrollTop
}

export function useTagsController(data: any) {
  const [displayData, setDisplayData] = useState([])
  const [selectedTag, setSelectedTag] = useState<string>('all')

  useEffect(() => {
    if (selectedTag === 'all') {
      setDisplayData(data)
    } else {
      setDisplayData(data.filter((item) => {
        for (const tag of item.tags) {
          if (tag.value === selectedTag) {
            return true
          }
        }
      }))
    }
  }, [selectedTag])

  return { displayData, selectedTag, setSelectedTag }
}