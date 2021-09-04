import Color from '../../utils/color.js';

export default class Eyebrows {
    constructor({ prng, color }) {
        this.color = color;
        this.name = prng.pick(Object.keys(this.paths));
    }

    paths = {
        'variant1': (style) => `<path d="M7 5v1H5v1H4V6h1V5h2zm7 0v1h-2v1h-1V6h1V5h2z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant2': (style) => `<path d="M8 4v1H7v1H5V5h2V4h1zm4 0h1v1h2v1h-2V5h-1V4z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant3': (style) => `<path d="M6 5h3v2H8V6H6V5zm5 0h3v1h-2v1h-1V5z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant4': (style) => `<path d="M5 5h3v1h1v1H8V6H5V5zm10 0h-3v1h-1v1h1V6h3V5z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant5': (style) => `<path d="M6 5H4v2h1V6h1V5zm8 0h2v2h-1V6h-1V5z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant6': (style) => `<path d="M5 6h2v1H5V6zm8 0h2v1h-2V6z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant7': (style) => `<path d="M6 5h1v1h1v1H5V6h1V5zm7 0h1v1h1v1h-3V6h1V5z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant8': (style) => `<path d="M6 5h2v1h1v1H8V6H6V5zm8 0h-2v1h-1v1h1V6h2V5z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant9': (style) => `<path d="M12 7V6h1V5h1v1h1v1h-1V6h-1v1h-1zM5 7V6h1V5h1v1h1v1H7V6H6v1H5z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant10': (style) => `<path d="M7 5v1H5v1H4V6h1V5h2zm6 0h2v1h1v1h-1V6h-2V5z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant11': (style) => `<path d="M4 7V5h3v1H5v1H4zm12-2v2h-1V6h-2V5h3z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant12': (style) => `<path d="M7 5h1v1h1v1H8V6H7V5zm6 0v1h-1v1h-1V6h1V5h1z" fill-rule="evenodd" fill="${style.color.hex}"/>`,
        'variant13': (style) => `<path d="M4 7V6h1V5h1v1H5v1H4zm10-2h1v1h1v1h-1V6h-1V5z" fill-rule="evenodd" fill="${style.color.hex}"/>`
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
