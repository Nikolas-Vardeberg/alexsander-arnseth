'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {linkField} from 'sanity-plugin-link-field'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import { seoMetaFields } from 'sanity-plugin-seo'
import { presentationTool } from 'sanity/presentation'
import { theme } from './sanity.theme'
import SanityThemeIcon from './common/components/sanity/SanityThemeIcon'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  theme: theme,
  icon: SanityThemeIcon,
  plugins: [
    structureTool({structure}),
    seoMetaFields(),

    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),

    linkField({
      linkableSchemaTypes: ["article", "transportPage", "home"]
    }),

    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
