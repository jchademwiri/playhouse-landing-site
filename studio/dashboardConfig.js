export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6149c378643371b009ff05cf',
                  title: 'Sanity Studio',
                  name: 'playhouse-landing-site-studio',
                  apiId: '631daa16-a0c9-4ea0-81c9-848213557aa9'
                },
                {
                  buildHookId: '6149c378eddc36f781ff1ef6',
                  title: 'Landing pages Website',
                  name: 'playhouse-landing-site',
                  apiId: 'a967d7c9-99b7-4a3b-a546-f2c347813b38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jchademwiri/playhouse-landing-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://playhouse-landing-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
