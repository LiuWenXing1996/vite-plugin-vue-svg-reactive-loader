const { extname } = require('path')
const fs = require('fs').promises
const { compileTemplate } = require('@vue/compiler-sfc')
const svgTryAddViewBoxAttr = require('./svgTryAddViewBoxAttr');

module.exports = function svgLoader() {
    return {
        name: 'svg-reactive-loader',
        enforce: 'pre',

        async load(id) {
            const [path, parameter] = id.split('?')

            if (!extname(path).startsWith('.svg') || parameter === 'url') {
                return null
            }

            const svg = await fs.readFile(path, 'utf-8')

            const { code } = compileTemplate({
                id: JSON.stringify(id),
                source: svgTryAddViewBoxAttr(svg),
                transformAssetUrls: false
            })

            return `${code}\nexport default render`
        }
    }
}
