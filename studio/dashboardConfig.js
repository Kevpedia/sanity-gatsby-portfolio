export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e15d1f4e5f96b82fa2b7282',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4tucke5o',
                  apiId: 'f385d61d-f7fc-4509-9397-ae7a19803ea7'
                },
                {
                  buildHookId: '5e15d1f47d5afd3af296eac9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wbxeqyqz',
                  apiId: '13f56622-a90e-463d-837c-5335ef0a1c98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kevpedia/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wbxeqyqz.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
