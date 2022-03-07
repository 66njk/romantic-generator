/* React */
import { useState, useEffect } from "react"

export function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', (e) => setScrollTop(e.path[1].scrollY))
    return () => window.removeEventListener('scroll', null)
  })
  return scrollTop
}