import { CreditCard, Home, PanelBottom, PanelTop, SettingsIcon } from 'lucide-react'
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
      S.listItem()
      .title("Generelle instillinger")
      .icon(SettingsIcon)
      .child(
        S.list()
          .title("Settings")
          .items([
            S.listItem()
              .title("Footer")
              .icon(PanelTop)
              .child(
                S.editor()
                  .schemaType("footer")
                  .id("footer")
                  .title("Footer")
              ),
            S.listItem()
              .title("Header")
              .icon(PanelBottom)
              .child(
                S.editor()
                  .schemaType("header")
                  .id("header")
                  .title("Header")
              ),
    ])
)
])
