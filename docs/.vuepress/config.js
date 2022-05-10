const { description, repository } = require('../../package');

const { defaultTheme } = require('@vuepress/theme-default');

const { shikiPlugin } = require('@vuepress/plugin-shiki');
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");
const { copyCodePlugin } = require("vuepress-plugin-copy-code2");

module.exports = {
    lang: 'en-US',

    title: description,
    description: `${description} - Resource namespace`,

    head: [
        ['meta', { name: 'theme-color', content: '#1783E8' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon.png" }],
    ],

    theme: defaultTheme({
        navbar: false,
        sidebar: false,
        repo: repository,
        editLink: false,
        contributors: false,
        lastUpdated: false,
    }),

    plugins: [
        shikiPlugin({}),
        mdEnhancePlugin({
            container: true,
            codegroup: true,
            align: true,
        }),
        copyCodePlugin({}),
    ]
};