import Color from '../../utils/color.js';

export default class Clothes {
    constructor({ prng }) {
        this.color = prng.pick(this.colors);
        this.name = prng.pick(Object.keys(this.paths));
    }

    colors = [
        new Color('#5bc0de'),
        new Color('#5cb85c'),
        new Color('#428bca'),
        new Color('#03396c'),
        new Color('#005b96'),
        new Color('#6497b1'),
        new Color('#1b85b8'),
        new Color('#5a5255'),
        new Color('#559e83'),
        new Color('#ae5a41'),
        new Color('#c3cb71'),
        new Color('#666547'),
        new Color('#ffe28a'),
    ];

    paths = {
        'Skull Shirt': (style) => `<path d="M3 20v-3h1v-1h12v1h1v3H3z" fill="${style.color.hex}"/><path d="M5 20v-2h1v-1h8v1h1v2h-2v-1h-2v1H9v-1H7v1H5z" fill="#FFF" fill-opacity=".2"/>`,
        'Suspenders': (style) => `<path d="M3 20v-3h1v-1h3v2h6v-2h3v1h1v3H3z" fill="${style.color.hex}"/><path d="M5 16H4v1H3v3h2v-4zm1 0h1v2h6v-2h1v4H6v-4zm9 0h1v1h1v3h-2v-4z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`,
        'Dress Shirt': (style) => `<path d="M3 20v-3h1v-1h3v-1h1v1h1v1h2v-1h1v-1h1v1h3v1h1v3H3z" fill="${style.color.hex}"/><path d="M6 16H4v1H3v3h6v-2H8v-1H6v-1zm2 0h1-1zm3 0h1-1zm2 0h1v1h-2v1h-1v2h6v-3h-1v-1h-3z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`,
        'Coverall': (style) => `<path d="M5 16H4v1H3v3h14v-3h-1v-1h-3v1H7v-1H5z" fill="${style.color.hex}"/><path d="M10 20v-1h3v1h-3z" fill="#FFF" fill-opacity=".5"/><path d="M5 16H4v1H3v3h1v-1h1v-3zm1 0h1v1h6v-1h1v2H6v-2zm9 0h1v1h1v3h-1v-1h-1v-3z" fill-rule="evenodd" fill="#FFF" fill-opacity=".8"/>`,
        'Plaid Shirt': (style) => `<path d="M3 20v-3h1v-1h4v1h4v-1h4v1h1v3H3z" fill="${style.color.hex}"/><path d="M3 20v-1h1v1H3zm2 0v-1h1v1H5zm2 0v-1h1v1H7zm2 0v-1h1v1H9zm2 0v-1h1v1h-1zm2 0v-1h1v1h-1zm2 0v-1h1v1h-1zm1-2h1v1h-1v-1zm-2 0h1v1h-1v-1zm-2 0h1v1h-1v-1zm-2 0h1v1h-1v-1zm-2 0h1v1H8v-1zm-2 0h1v1H6v-1zm-2 0h1v1H4v-1zm-1-1h1v1H3v-1zm2 0h1v1H5v-1zm2 0h1v1H7v-1zm2 0h1v1H9v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zM4 16h1v1H4v-1zm2 0h1v1H6v-1zm6 0h1v1h-1v-1zm2 0h1v1h-1v-1z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`,
        'Basic Shirt': (style) => `<path d="M3 20v-3h1v-1h4v1h4v-1h4v1h1v3H3z" fill="${style.color.hex}"/>`,
        // 'Basic Shirt': (style) => `<path d="M3 20v-3h1v-1h4v-1h4v1h4v1h1v3H3z" fill="${style.color.hex}"/><path d="M3 20v-3h1v-1h12v1h1v3H3z" fill="#FFF" fill-opacity=".2"/><path d="M12 19v-1h3v1h-3z" fill="#FFF" fill-opacity=".2"/>`,
        // 'variant3': (style) => `<path d="M3 20v-3h1v-1h12v1h1v3H3z" fill="${style.color.hex}"/><path d="M8 16H4v1H3v3h14v-3h-1v-1h-4v1h1v1h-1v1h-1v-1H9v1H8v-1H7v-1h1v-1z" fill="#FFF" fill-opacity=".2"/><path d="M9 16v1h2v-1H9z" fill="#FFF"/>`,
        // 'variant4': (style) => `<path d="M3 20v-3h1v-1h12v1h1v3H3z" fill="${style.color.hex}"/><path d="M9 16H4v1H3v3h6v-2H8v-1h1v-1zm2 0h5v1h1v3h-6v-2h1v-1h-1v-1z" fill-rule="evenodd" fill="#FFF" fill-opacity=".3"/>`,
        // 'variant6': (style) => `<path d="M3 20v-3h1v-1h4v1h1v1h2v-1h1v-1h4v1h1v3H3z" fill="${style.color.hex}"/><path d="M4 17v-1h3v1H4zm9 0v-1h3v1h-3z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`,
        // 'variant10': (style) => `<path d="M3 20v-3h1v-1h4v1h4v-1h4v1h1v3H3z" fill="${style.color.hex}"/><path d="M3 20v-2h1v2H3zm3 0v-2h2v2H6zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zm2-3v1h1v-1h-1zm-2 1v-2h-2v2h2zm-6-1v1h2v-1H8zm-4-1v2h2v-2H4z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`,
        // 'variant11': (style) => `<path d="M3 20v-3h1v-1h4v1h4v-1h4v1h1v3H3z" fill="${style.color.hex}"/><path d="M3 19h14v1H3v-1zm0-2h14v1H3v-1z" fill-rule="evenodd" fill="#FFF" fill-opacity=".2"/>`,
        // 'variant13': (style) => `<path d="M3 20v-3h1v-1h12v1h1v3H3z" fill="${style.color.hex}"/>`
    }

    getStyle() {
        return {
            color: this.color,
        }
    }

    render() {
        return this.paths[this.name](this.getStyle());
    }
}