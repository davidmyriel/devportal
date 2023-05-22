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
    component: ComponentCreator('/docs', '7e8'),
    routes: [
      {
        path: '/docs/apispec',
        component: ComponentCreator('/docs/apispec', '7d8'),
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
        path: '/docs/category/qdrant-manual',
        component: ComponentCreator('/docs/category/qdrant-manual', 'f75'),
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
        path: '/docs/manual/administration',
        component: ComponentCreator('/docs/manual/administration', '0f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/collections',
        component: ComponentCreator('/docs/manual/collections', 'a9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/configuration',
        component: ComponentCreator('/docs/manual/configuration', 'a93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/distributed_deployment',
        component: ComponentCreator('/docs/manual/distributed_deployment', '254'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/filtering',
        component: ComponentCreator('/docs/manual/filtering', 'bbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/indexing',
        component: ComponentCreator('/docs/manual/indexing', '4c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/optimizer',
        component: ComponentCreator('/docs/manual/optimizer', '255'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/payload',
        component: ComponentCreator('/docs/manual/payload', 'f71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/points',
        component: ComponentCreator('/docs/manual/points', '05e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/quantization',
        component: ComponentCreator('/docs/manual/quantization', 'ea4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/search',
        component: ComponentCreator('/docs/manual/search', '5ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/snapshots',
        component: ComponentCreator('/docs/manual/snapshots', 'd83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/storage',
        component: ComponentCreator('/docs/manual/storage', 'ddd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/manual/telemetry',
        component: ComponentCreator('/docs/manual/telemetry', 'b81'),
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
