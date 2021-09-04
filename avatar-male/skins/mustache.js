import Color from '../../utils/color.js';

export default class Mustache {
    constructor({ prng, color }) {
        this.color = color;
        this.color.alpha = prng.pick([1, 0.75, 0.5]);
        this.name = prng.pick(Object.keys(this.paths));
    }

    paths = {
        'variant1': (style) => `<path d="M3 10v3h1v1h1v1h10v-1h1v-1h1v-3h-3v1H6v-1H3z" id="Path" fill="${style.color.hex}" fill-opacity="${style.color.alpha}"/>`,
        'variant2': (style) => `<path d="M3 13h1v1h1v1h10v-1h1v-1h1v-3h-1v1h-1v1H5v-1H4v-1H3v3z" id="Path" fill="${style.color.hex}" fill-opacity="${style.color.alpha}"/>`,
        'variant3': (style) => `<path d="M3 11v2h1v1h1v1h10v-1h1v-1h1v-2H3z" id="Path" fill="${style.color.hex}" fill-opacity="${style.color.alpha}"/>`,
        'variant4': (style) => `<path d="M3 7v6h1v1h1v1h10v-1h1v-1h1V7h-1v2h-1v1h-1v1H6v-1H5V9H4V7H3z" id="Path" fill="${style.color.hex}" fill-opacity="${style.color.alpha}"/>`
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
