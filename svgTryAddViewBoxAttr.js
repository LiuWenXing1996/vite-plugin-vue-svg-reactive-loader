const { parse, render } = require('postsvg');

module.exports = function svgTryAddViewBoxAttr(svgString) {
    if (!svgString) return svgString;
    const tree = parse(svgString);
    const root = tree.root;
    if (!root.attrs.viewBox) {
        const viewBox = `0 0 ${root?.attrs?.width || 100} ${root?.attrs?.height || 100}`;
        root.attrs.viewBox = viewBox;
    }
    return render(tree);
}