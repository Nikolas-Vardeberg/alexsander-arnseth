import { Home } from 'lucide-react'
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
      .title("Home Page")
      .icon(Home)
      .child(
        S.editor()
          .schemaType("home")
          .id("home")
          .title("Home Page")
      ),
      S.documentTypeListItem("article").title("Article"),
      S.documentTypeListItem("editor").title("Bakere"),
      S.documentTypeListItem("transportPage").title("Transport Page"),
    ])
