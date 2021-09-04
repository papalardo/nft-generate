import Color from '../../utils/color.js';

export default class Skin {
    constructor({ prng }) {
        this.color = prng.pick(this.colors);
    }

    colors = [
        new Color('#FFDBAC'),
        new Color('#F5CFA0'),
        new Color('#EAC393'),
        new Color('#E0B687'),
        new Color('#CB9E6E'),
        new Color('#B68655'),
        new Color('#A26D3D'),
        new Color('#8D5524'),
    ];

    getPath(style) {
        return `<path d="M8 15v1H4v1H3v3h14v-3h-1v-1h-4v-1h3v-1h1v-1h1v-3h1V7h-1V4h-1V3h-1V2H5v1H4v1H3v3H2v3h1v3h1v1h1v1h3z" fill="${style.color.hex}"/>
            <path d="M5 15v-1H4v-1H3v-3H2V7h1V4h1V3h1V2h10v1h1v1h1v3h1v3h-1v3h-1v1h-1v1H5z" fill="#FFF" fill-opacity=".1"/>`;
    };

    getStyle() {
        return {
            color: this.color,
        }
    }

    render() {
        return this.getPath(this.getStyle());
    }
}
