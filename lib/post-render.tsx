import { DocumentRendererProps } from "@keystone-6/document-renderer"
import hljs from 'highlight.js'

const renderers: DocumentRendererProps['renderers'] = {
  block: {
    code({ children }) {
      return (
        <pre dangerouslySetInnerHTML={{
          __html: hljs.highlightAuto(children).value
        }} />
      )
    }
  }
}

export default renderers