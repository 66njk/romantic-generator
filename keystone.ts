import { config, list } from '@keystone-6/core'
import { text, select, timestamp, image, relationship } from '@keystone-6/core/fields'
import { Lists } from '.keystone/types'
import { document } from '@keystone-6/fields-document'

const lists: Lists = {
  Post: list({
    fields: {
      title: text({
        validation: { isRequired: true }
      }),
      status: select({
        type: 'enum',
        options: [
          {label: '草稿', value: 'draft'},
          {label: '公开', value: 'published'}
        ]
      }),
      slug: text({
        isIndexed: 'unique',
        isFilterable: true
      }),
      tags: relationship({
        ref: 'PostsTag.posts',
        many: true
      }),
      preview: image(),
      abstract: text({
        ui: {
          displayMode: 'textarea'
        }
      }),
      content: document({
        formatting: {
          inlineMarks: {
            bold: true,
            italic: true,
            underline: true,
            strikethrough: true,
            code: true,
            superscript: true,
            subscript: true,
            keyboard: true,
          },
          listTypes: {
            ordered: true,
            unordered: true,
          },
          alignment: {
            center: true,
            end: true,
          },
          headingLevels: [1, 2, 3, 4, 5, 6],
          blockTypes: {
            blockquote: true,
            code: true
          },
          softBreaks: true,
        },
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
      createAt: timestamp({
        defaultValue: { kind: 'now' }
      })
    },
    hooks: {
      afterOperation: ({operation, item}) => {
        console.log(operation)
      }
    }
  }),
  Project: list({
    fields: {
      title: text({ validation: { isRequired: true } }),
      preview: image(),
      createAt: timestamp({
        defaultValue: { kind: 'now' }
      })
    }
  }),
  PostsTag: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      value: text({ validation: { isRequired: true } }),
      posts: relationship({
        ref: 'Post.tags',
        many: true
      })
    }
  })
}

export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true
  },
  images: {
    upload: 'local',
    local: {
      storagePath: 'public/images',
      baseUrl: '/images',
    },
  },
  lists
})