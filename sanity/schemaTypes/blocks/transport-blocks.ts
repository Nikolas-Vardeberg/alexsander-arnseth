import { toPlainText } from '@portabletext/react';
import { defineField } from 'sanity';

// "lv" | "lh" | "sv" | "sh" | "ss"
export const transportBlockVariantOptions = [
	{ title: 'Vanlig', value: 'default' },
	{ title: 'Stor vertical', value: 'lv' },
	{ title: 'Stor horizontal', value: 'lh' },
	{ title: 'Liten horizontal', value: 'sh' },
	{ title: 'Liten 4 i bredden', value: 'ss' },
];

export const transportBlocks = defineField({
	name: 'transportBlocks',
	title: 'Transport blokker',
	type: 'object',
	fields: [
		{
			name: 'variant',
			type: 'string',
			title: 'Type',
			options: {
				list: transportBlockVariantOptions,
				aiAssist: { exclude: true },
			},
			initialValue: 'default',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'flipHorizontal',
			title: 'Flipp horisontalt',
			type: 'boolean',
			hidden: ({ parent }) => parent?.variant !== 'lh',
			options: {
				aiAssist: { exclude: true },
			},
		},
		{
			name: 'title',
			title: 'Tittel',
			type: 'string',
		},
		{
			name: 'moreLink',
			type: 'reference',
			title: 'Se mer lenke',
			description: 'Lenke til siden hvor brukeren kan se mer av innholdet',
			to: [{ type: 'transportPage' }, { type: 'article' }],
		},
		{
			name: 'moreLinkTitle',
			type: 'string',
			title: 'Se mer tittel',
			description: 'Tittel på lenken til siden hvor brukeren kan se mer av innholdet',
		},
		{
			name: 'pages',
			title: 'Sider',
			type: 'array',
			of: [
				{
					title: "Vanlig sidereferanse",
					type: 'reference',
					to: [
						{ type: 'article' },
						{ type: 'transportPage' },
					],
					validation: (Rule) => Rule.required(),
				},
				{
					type: "object",
					title: "Overskrevet sidereferanse",
					fields: [
						{
							name: "title",
							type: "string",
							title: "Tittel",
							description: "Tittel brukt i transportinnganger. Bruker fra referansen hvis ikke satt",
						},
                        {
                            name: "image",
                            title: "Bilde",
                            type: "image",
                            fields: [
                                {
                                    name: "alt",
                                    title: "Alternative Tekst",
                                    type: "string",
                                }
                            ]
                        },
						defineField({
							name: 'teaserText',
							type: 'blockContent',
							title: 'Tekst',
							description: 'Tekst brukt i transportinnganger. Bruker fra referansen hvis ikke satt',
							validation: (R) =>
								R.custom((value) => {
									if (!value) return true;
									// biome-ignore lint/suspicious/noExplicitAny: <explanation>
									const text = toPlainText(value as any[])?.trim();

									if (text?.length > 300) {
										return `Teksten er for lang (${text.length}/300 tegn)`;
									}
									return true;
								}).warning(),
						}),
						{
							title: "Referanse",
							type: 'reference',
							name: "page",
							to: [
								{ type: 'article' },
								{ type: 'transportPage' },
							],
							validation: (Rule) => Rule.required(),
						}
					],

					preview: {
						select: {
							title: "title",
							backupTitle: "page.teaserTitle",
							backupBackupTitle: "page.title",
							media: "image",
							backupMedia: "page.teaserImage",
							backupBackupMedia: "page.mainImage",
						},
						prepare(selection) {
							const { title, backupTitle, backupBackupTitle, media, backupMedia, backupBackupMedia } = selection;
							return {
								title: title || backupTitle || backupBackupTitle,
								subtitle: title,
								media: media || backupMedia || backupBackupMedia,
							};
						}
					}
				},
				{
					type: "object",
					title: "Eksternal link",
					name: "externalLink",
					fields: [
						{
							name: "title",
							type: "string",
							title: "Tittel",
						},
						{
							name: "url",
							type: "url",
							title: "URL",
						},

                        {
                            name: "image",
                            title: "Bilde",
                            type: "image",
                            fields: [
                                {
                                    name: "alt",
                                    title: "Alternative Tekst",
                                    type: "string"
                                }
                            ]
                        },

						defineField({
							name: 'teaserText',
							type: 'blockContent',
							title: 'Tekst',
							description: 'Tekst brukt i transportinnganger. Bruker ingress hvis ikke satt',
							validation: (R) =>
								R.custom((value) => {
									if (!value) return true;
									// biome-ignore lint/suspicious/noExplicitAny: <explanation>
									const text = toPlainText(value as any[])?.trim();

									if (text?.length > 300) {
										return `Teksten er for lang (${text.length}/300 tegn)`;
									}
									return true;
								}).warning(),
						}),
					]
				}
			]
		},
		{
			name: 'options',
			title: 'Innstillinger',
			type: 'object',
			fields: [
				{
					name: 'hideLabel',
					title: 'Skjul label',
					type: 'boolean',
					initialValue: false,
					options: {
						aiAssist: { exclude: true },
					},
				},
				{
					name: 'hideTags',
					title: 'Skjul tags',
					type: 'boolean',
					initialValue: false,
					options: {
						aiAssist: { exclude: true },
					},
				},
			],
			options: {
				collapsible: true,
				collapsed: true,
				aiAssist: { exclude: true },
			},
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title,
				subtitle: 'Transport Block',
			};
		},
	},
});