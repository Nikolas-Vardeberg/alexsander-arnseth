import { type SchemaTypeDefinition } from 'sanity'
import { article } from './pages/article'
import { editor } from './other/editor'
import { tags } from './other/tags'
import { TransportPage } from './pages/transport-page'
import { home } from './pages/home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, editor, tags, TransportPage, home],
}
