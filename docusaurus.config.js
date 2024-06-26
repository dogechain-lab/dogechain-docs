require('dotenv').config()

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Dogechain',
    url: 'https://docs.dogechain.dog',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/logo.png',
    organizationName: 'dogechain-lab',
    projectName: 'dogechain-docs',
    themes: [
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          {
            hashed: true,
            language: ["en"],
          },
        ],
    ],
    themeConfig: {
        colorMode: {
            defaultMode: 'dark'
        },
        prism: {
            defaultLanguage: 'go'
        },
        navbar: {
            hideOnScroll: true,
            title: 'Dogechain',
            logo: {
                alt: 'Dogechain Logo',
                src: 'img/logo.png',
                href: 'docs/overview'
            },
            items: [
                {
                    to: 'docs/overview',
                    activeBasePath: 'docs/',
                    label: 'Dogechain Legacy',
                    position: 'left'
                },
                {
                    to: 'docs/drc20/overview',
                    activeBasePath: 'docs/',
                    label: 'DRC20 Bridge (PawPort)',
                    position: 'left'
                },
                {
                    to: 'docs/zkevm/overview',
                    activeBasePath: 'docs/',
                    label: 'Dogechain zkEVM',
                    position: 'left'
                },
                {
                    to: 'docs/tokenomics/overview',
                    activeBasePath: 'docs/',
                    label: 'Tokenomics',
                    position: 'left'
                },
                {
                    href: 'https://github.com/dogechain-lab/dogechain',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ]
        },
        footer: {
            style: 'dark',
            copyright: `Made with ❤ by the humans at <a href='https://trapesys.io'>Trapesys</a>`
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: false
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};
