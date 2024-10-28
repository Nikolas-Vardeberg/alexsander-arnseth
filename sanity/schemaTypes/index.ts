import { type SchemaTypeDefinition } from 'sanity'
import { article } from './pages/article'
import { editor } from './other/editor'
import { tags } from './other/tags'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, editor, tags],
}
