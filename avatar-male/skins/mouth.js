import Color from '../../utils/color.js';

export default class Mouth {
    paths = {};

    constructor({ prng, options }) {
        this.color = prng.pick(this.colors);
        this.mountPaths({ options });
        this.localName = prng.pick(Object.keys(this.paths));
        this.name = this.localName.split('#')[0];
    }

    colors = [
        new Color('#eec1ad'),
        new Color('#dbac98'),
        new Color('#d29985')
    ];

    mountPaths({ options }) {
        while (Object.keys(this.paths).length === 0) {
            if (undefined === options.mood || options.mood.indexOf('sad') > -1) {
                this.paths = {
                    ...this.paths,
                    'sad#Variant1': (style) => `<path d="M8 13h3v1H8v-1z" fill="${style.color.hex}"/>`,
                    'sad#Variant2': (style) => `<path d="M8 13h4v1H8v-1z" fill="${style.color.hex}"/>`,
                    'sad#Variant3': (style) => `<path d="M9 13h2v1H9v-1z" fill="${style.color.hex}"/>`,
                    'sad#Variant4': (style) => `<path d="M8 12v1h3v1h1v-1h-1v-1H8z" fill="${style.color.hex}"/>`,
                    'sad#Variant5': (style) => `<path d="M8 13v1h1v-1h3v-1H9v1H8z" fill="${style.color.hex}"/>`
                }
            }

            if (undefined === options.mood || options.mood.indexOf('happy') > -1) {
                this.paths = {
                    ...this.paths,
                    'happy#Variant1': (style) => `<path d="M7 12v1h1v1h4v-1H8v-1H7z" fill="${style.color.hex}"/>`,
                    'happy#Variant2': (style) => `<path d="M10 12v1H9v1h2v-2h-1z" fill="${style.color.hex}"/>`,
                    'happy#Variant3': (style) => `<path d="M8 13v1h4v-1h1v-1h-1v1H8z" fill="${style.color.hex}"/>`,
                    'happy#Variant4': (style) => `<path d="M8 12v2h4v-2H8z" fill="#FFF"/>`
                }
            }

            if (undefined === options.mood || options.mood.indexOf('surprised') > -1) {
                this.paths = {
                    ...this.paths,
                    'surprised#Variant1': (style) => `<path d="M9 12v2h2v-2H9z" fill="${style.color.hex}"/>`,
                    'surprised#Variant2': (style) => `<path d="M9 13v1h1v-1H9z" fill="${style.color.hex}"/>`
                }
            }

            if (Object.keys(this.paths).length === 0) {
                // Reset mood option because it appears to be invalid.
                options.mood = undefined;
            }
        }
        return this.paths;
    }

    getStyle() {
        return {
            color: this.color,
        }
    }

    render() {
        return this.paths[this.localName](this.getStyle());
    }
}
