import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'df7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd55'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd9f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '476'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e77'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '67c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '046'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd0b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '76b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '697'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '418'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'd6a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '970'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '37f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'f48'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '33a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '207'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'cf6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '8b6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b9e'),
    routes: [
      {
        path: '/docs/benchmarks',
        component: ComponentCreator('/docs/benchmarks', '9ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/client-libraries',
        component: ComponentCreator('/docs/category/client-libraries', '3c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/concepts',
        component: ComponentCreator('/docs/category/concepts', 'ab6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/integrations',
        component: ComponentCreator('/docs/category/integrations', '3d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/qdrant-cloud',
        component: ComponentCreator('/docs/category/qdrant-cloud', '80f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorials',
        component: ComponentCreator('/docs/category/tutorials', 'f40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud/backups',
        component: ComponentCreator('/docs/cloud/backups', '65f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud/capacity',
        component: ComponentCreator('/docs/cloud/capacity', '139'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud/scaling',
        component: ComponentCreator('/docs/cloud/scaling', 'aba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Administration',
        component: ComponentCreator('/docs/concepts/Administration', '035'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Collections',
        component: ComponentCreator('/docs/concepts/Collections', '8b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Configuration',
        component: ComponentCreator('/docs/concepts/Configuration', 'c77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Distributed_Deployment',
        component: ComponentCreator('/docs/concepts/Distributed_Deployment', 'd04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Filtering',
        component: ComponentCreator('/docs/concepts/Filtering', '7ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Indexing',
        component: ComponentCreator('/docs/concepts/Indexing', '8ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Optimizer',
        component: ComponentCreator('/docs/concepts/Optimizer', '83c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Payload',
        component: ComponentCreator('/docs/concepts/Payload', '422'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Points',
        component: ComponentCreator('/docs/concepts/Points', 'bd7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Quantization',
        component: ComponentCreator('/docs/concepts/Quantization', 'aff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Search',
        component: ComponentCreator('/docs/concepts/Search', '046'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Snapshots',
        component: ComponentCreator('/docs/concepts/Snapshots', '087'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Storage',
        component: ComponentCreator('/docs/concepts/Storage', '271'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/Telemetry',
        component: ComponentCreator('/docs/concepts/Telemetry', '145'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gettingstarted/install_qdrant',
        component: ComponentCreator('/docs/gettingstarted/install_qdrant', 'fe2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gettingstarted/qdrant_101',
        component: ComponentCreator('/docs/gettingstarted/qdrant_101', '092'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gettingstarted/quick_start',
        component: ComponentCreator('/docs/gettingstarted/quick_start', '372'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations/congratulations',
        component: ComponentCreator('/docs/integrations/congratulations', '5bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations/create-a-blog-post',
        component: ComponentCreator('/docs/integrations/create-a-blog-post', '47b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations/create-a-document',
        component: ComponentCreator('/docs/integrations/create-a-document', 'ae8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations/create-a-page',
        component: ComponentCreator('/docs/integrations/create-a-page', 'd9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations/deploy-your-site',
        component: ComponentCreator('/docs/integrations/deploy-your-site', 'b88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations/markdown-features',
        component: ComponentCreator('/docs/integrations/markdown-features', '3db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/libraries/congratulations',
        component: ComponentCreator('/docs/libraries/congratulations', '667'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/libraries/create-a-blog-post',
        component: ComponentCreator('/docs/libraries/create-a-blog-post', '40e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/libraries/create-a-document',
        component: ComponentCreator('/docs/libraries/create-a-document', '6c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/reference',
        component: ComponentCreator('/docs/reference', 'bc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/releasenotes',
        component: ComponentCreator('/docs/releasenotes', '2ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/techsupport',
        component: ComponentCreator('/docs/techsupport', '3f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorials/manage-docs-versions',
        component: ComponentCreator('/docs/tutorials/manage-docs-versions', '6e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorials/translate-your-site',
        component: ComponentCreator('/docs/tutorials/translate-your-site', 'e13'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '855'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
