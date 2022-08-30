require('dotenv').config()

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Dogechain',
    url: 'https://docs.dogechain.dog',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'dogechain-lab',
    projectName: 'dogechain-docs',
    themes: ['docusaurus-theme-search-typesense'],
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
                    label: 'Developers',
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
        },
        typesense: {
            typesenseCollectionName: 'docs.dogechain.dog', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
            typesenseServerConfig: {
                nodes: [
                    {
                        host: 'fvtlbamhupdcon8rp-1.a1.typesense.net',
                        port: 443,
                        protocol: 'https',
                    },
                ],
                apiKey: process.env.TYPESENSE_API_KEY || '',
            },
        },
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
