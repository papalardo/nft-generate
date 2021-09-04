import Color from '../../utils/color.js';

export default class Hair {
    constructor({ prng }) {
        this.color = prng.pick(this.colors);
        this.name = prng.pick(Object.keys(this.paths));
    }

    colors = [
        new Color('#090806'),
        new Color('#2c222b'),
        new Color('#71635a'),
        new Color('#b7a69e'),
        new Color('#b89778'),
        new Color('#a56b46'),
        new Color('#b55239'),
        new Color('#8d4a43'),
        new Color('#91553d'),
        new Color('#533d32'),
        new Color('#3b3024'),
        new Color('#554838'),
        new Color('#4e433f'),
        new Color('#504444'),
        new Color('#6a4e42'),
        new Color('#a7856a'),
        new Color('#977961'),
    ];

    paths = {
        'variant1': (style) => `<path d="M3 3v2h1V4h1V3h10v1h1v1h1V3h-1V2H4v1H3z" fill="${style.color.hex}"/>`,
        'variant2': (style) => `<path d="M5 2h10v1h1v1h1v3h-1V6h-1V5h-1V4h-4v1H8v1H7v1H4V6H3V4h1V3h1V2z" fill="${style.color.hex}"/>`,
        'variant3': (style) => `<path d="M3 6h1V4h1V3h2v1h1v1h4V4h1V3h2v1h1v2h1V4h-1V3h-1V2H5v1H4v1H3v2z" fill="${style.color.hex}"/>`,
        'variant4': (style) => `<path d="M3 8h1V5h12v3h1V4h-1V3h-1V2H5v1H4v1H3v4z" fill="${style.color.hex}"/>`,
        'variant5': (style) => `<path d="M2 4v1h1v1h2V4h1V2H4v1H3v1H2zm6-1h2v1h2V3h1V2H8v1zm6 1h1v2h2V5h1V4h-1V3h-1V2h-2v2z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant6': (style) => `<path d="M3 7h1V5h2V3h8v1h1v1h1v2h1V3h-2V2h-2V1h-1v1h-2V1H9v1H8V1H7v1H5v1H4v1H3v3z" fill="${style.color.hex}"/>`,
        'variant7': (style) => `<path d="M8 2h4v1h-1v1H9V3H8V2z" fill="${style.color.hex}"/>`,
        'variant8': (style) => `<path d="M9 0v1H8v1h4V1h-1V0H9z" fill="${style.color.hex}"/>`,
        'variant9': (style) => `<path d="M3 7h1V5h2V4h2V3h1v1h2v1h2v1h2v1h2V4h-1V3h-1V2H5v1H4v1H3v3z" fill="${style.color.hex}"/>`,
        'variant10': (style) => `<path d="M4 4h12V3h-1V2H5v1H4v1z" fill="${style.color.hex}"/>`,
        'variant11': (style) => `<path d="M2 7h1V5h2V4h1V3h1v1h2V3h4V2h1v1h1v1h1v1h1v2h1V6h1V4h-1V3h-1V2h-1V1h-1V0h-1v1h-2V0h-1v1H9V0H8v1H7V0H5v1H4v1H2v5z" fill="${style.color.hex}"/>`,
        'variant12': (style) => `<path d="M0 7h1v5h1v1h1V9h1V7h1V6h1V4h1V3h7v1h1v1h1v1h1v7h1v-2h1V7h-1V6h1V4h-1v1h-1V3h1V2h-1v1h-1V2h-2V1h-1V0h-1v1H5V0H4v1H3V0H2v1h1v2H2V2H1v1h1v1H1v2H0v1z" fill="${style.color.hex}"/>`,
        'variant13': (style) => `<path d="M5 2v1H4v1H3v3h2V6h1V5h6V4h1V3h1v1h-1v1h1v1h1v1h2V4h-1V3h-1V2H5z" fill="${style.color.hex}"/>`
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
