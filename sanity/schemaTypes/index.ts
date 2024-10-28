import { type SchemaTypeDefinition } from 'sanity'
import { article } from './pages/article'
import { editor } from './other/editor'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, editor],
}
