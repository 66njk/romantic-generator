import data from './static.json'

export function getTagColorByName(name) {
  const colors = data.tagsColor[name]
  if (colors) {
    return colors
  } else {
    return {background: '#f3f4f6', foreground: '#374151'}
  }
}