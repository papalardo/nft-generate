import Color from '../../utils/color.js';

export default class Hats {
    constructor({ prng }) {
        this.color = prng.pick(this.colors);
        this.name = prng.pick(Object.keys(this.paths));
    }

    colors = [
        new Color('#18293b'),
        new Color('#2e1e05'),
        new Color('#989789'),
        new Color('#3d6ba7'),
        new Color('#517459'),
        new Color('#a62116'),
    ];

    paths = {
        'Top hat': (style) => `<path d="M4 3H2v1h16V3h-2V0H4v3z" fill="${style.color.hex}"/>`,
        'Coif': (style) => `<path d="M2 2v2h16V2h-1V1h-1V0H4v1H3v1H2z" fill="${style.color.hex}"/>`,
        'Cap': (style) => `<path d="M6 0v1H5v1H4v2h14V3h-2V2h-1V1h-1V0H6z" fill="${style.color.hex}"/>`,
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
