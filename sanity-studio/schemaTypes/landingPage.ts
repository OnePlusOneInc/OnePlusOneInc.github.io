import {defineType, defineField} from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'string',
      description: 'Text to use for the Call To Action buttons.',
      validation: (rule) => rule.required(),
      initialValue: 'Get Early Access',
    }),
    defineField({
      name: 'hero',
      type: 'object',
      description: 'Texts to use for the hero section.',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          description: 'The title of the hero section.',
          initialValue: 'Turn all Partnerships into Revenue',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
          description: 'Subtitle for the hero section.',
          initialValue:
            'Our AI Partnerships Intelligence Platform analyzes sales calls to uncover partner opportunities. Our insights and workflows empower you to boost revenue and close deals faster through partnerships.',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      description: 'Title and cards for the metrics section.',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'title',
          description: 'Title to use for the metrics section.',
          type: 'string',
          initialValue: 'When you tap into your Partner Ecosystem',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'cards',
          description: 'Text to use for the 3 cards.',
          type: 'array',
          validation: (rule) => rule.required().min(3),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  description: 'Title to be used in the card.',
                  validation: (rule) => rule.required(),
                  initialValue: '2X',
                }),
                defineField({
                  name: 'subtitle',
                  type: 'string',
                  description: 'Subtitle to be used in the card.',
                  validation: (rule) => rule.required(),
                  initialValue: 'Drive 2x more revenue',
                }),
              ],
              preview: {select: {title: 'title', subtitle: 'subtitle'}},
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'problems',
      title: 'Problems',
      description: 'Title and cards for the problem section.',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'title',
          description: 'Title to use for the problems section.',
          type: 'string',
          initialValue: 'The GTM Problem',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          description: 'Subtitle to be used for the problems section.',
          type: 'string',
          initialValue:
            'B2B companies are struggling to hit revenue targets in this economic downturn. Buyers are overwhelmed by volume-based tactics, generic outreach, and AI-generated content.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'cards',
          description: 'Text to use for the 3 cards.',
          type: 'array',
          validation: (rule) => rule.required().min(3),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  description: 'Title to be used in the card.',
                  validation: (rule) => rule.required(),
                  initialValue: '36',
                }),
                defineField({
                  name: 'subtitle',
                  type: 'string',
                  description: 'Subtitle to be used in the card.',
                  validation: (rule) => rule.required(),
                  initialValue: 'An average of 306 cold emails sent to generate 1 lead',
                }),
              ],
              preview: {select: {title: 'title', subtitle: 'subtitle'}},
            },
          ],
        }),
        defineField({
          name: 'conclusion',
          description: 'Text to be used for the conclusion of this section.',
          type: 'string',
          initialValue: 'This is why 84% of B2B purchases start with a referral',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      description: 'Title, subtitle and questions for the section with the scrolling questions.',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'title',
          description: 'Title to use for the questions section.',
          type: 'string',
          initialValue: 'But Partnerships are still stuck in the old days',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          description: 'Subtitle to be used for the questions section.',
          type: 'string',
          initialValue:
            'Partnerships often lose momentum, miss timelines, fail to launch, or bring consistent results because Partner Managers are stuck using tools and processes built for other GTM departments.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Items',
          description: 'Lists of questions to be used in this section.',
          type: 'array',
          validation: (rule) => rule.required().min(3),
          of: [
            {
              type: 'string',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      description: 'Title, subtitle and features for the features section.',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'title',
          description: 'Title to use for the features section.',
          type: 'string',
          initialValue: 'A New Era for Partnerships',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          description: 'Subtitle to be used for the features section.',
          type: 'string',
          initialValue:
            'We empower B2B partnership teams with AI-powered insights, workflows, and automation to activate new partnerships, uncover referrals, and boost revenue.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Items',
          description: 'Lists of features to be used in this section.',
          type: 'array',
          validation: (rule) => rule.required(),
          of: [
            {
              type: 'string',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      description: 'Data to be used for the footer section.',
      validation: (rule) => rule.required(),
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          initialValue: 'Never let a referral escape',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'Landing Page'},
  },
})
