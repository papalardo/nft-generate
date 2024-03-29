import hexToRgb from 'pure-color/parse/hex.js';
import rgbToHsv from 'pure-color/convert/rgb2hsv.js';
import rgbToHex from 'pure-color/convert/rgb2hex.js';
import hsvToRgb from 'pure-color/convert/hsv2rgb.js';

export default class Color {
    alpha = 1;

    color = {};

    constructor(color = '#000') {
        if (color[0] === '#') {
            this.hex = color;
        } else {
            let match = /^(rgb|rgba|hsv)\(([0-9\%\,\.\s]+)\)$/.exec(color.trim());

            if (match) {
                let values = match[2].split(',').map((val) => parseInt(val.trim()));

                switch (match[1]) {
                    case 'rgb':
                        this.rgb = values;

                        break;

                    case 'rgba':
                        this.rgba = values;

                        break;

                    case 'hsv':
                        this.hsv = values;

                        break;

                    default:
                        throw new Error('Unsupported color format: ' + color);
                }
            } else {
                throw new Error('Unknown color format: ' + color);
            }
        }
    }

    clone() {
        return new Color('rgb(' + this.rgb.join(',') + ')');
    }

    set rgb(rgb) {
        if (rgb.length !== 3) {
            throw new Error('An array with a length of 3 is expected.');
        }

        this.alpha = 1;
        this.color = {
            rgb: rgb,
        };
    }

    get rgb() {
        return (this.color.rgb = this.color.rgb || (this.color.hex ? this.hexToRgb(this.hex) : this.hsvToRgb(this.hsv)));
    }

    set rgba(rgba) {
        if (rgba.length !== 4) {
            throw new Error('An array with a length of 3 is expected.');
        }

        this.rgb = [rgba[0], rgba[1], rgba[2]];
        this.alpha = rgba[3];
    }

    get rgba() {
        return [this.rgb[0], this.rgb[1], this.rgb[2], this.alpha];
    }

    set hsv(hsv) {
        if (hsv.length !== 3) {
            throw new Error('An array with a length of 3 is expected.');
        }

        this.alpha = 1;
        this.color = {
            hsv: hsv,
        };
    }

    get hsv() {
        // Slice array to return copy
        return (this.color.hsv = this.color.hsv || this.rgbToHsv(this.rgb)).slice(0);
    }

    set hex(hex) {
        this.alpha = 1;
        this.color = {
            hex: hex,
        };
    }

    get hex() {
        // Slice array to return copy
        return (this.color.hex = this.color.hex || this.rgbToHex(this.rgb)).slice(0);
    }

    brighterThan(color, difference) {
        let primaryColorHsv = this.hsv;
        let secondaryColorHsv = color.hsv;

        if (primaryColorHsv[2] >= secondaryColorHsv[2] + difference) {
            return this;
        }

        primaryColorHsv[2] = secondaryColorHsv[2] + difference;

        if (primaryColorHsv[2] > 360) {
            primaryColorHsv[2] = 360;
        }

        this.hsv = primaryColorHsv;

        return this;
    }

    darkerThan(color, difference) {
        let primaryColorHsv = this.hsv;
        let secondaryColorHsv = color.hsv;

        if (primaryColorHsv[2] <= secondaryColorHsv[2] - difference) {
            return this;
        }

        primaryColorHsv[2] = secondaryColorHsv[2] - difference;

        if (primaryColorHsv[2] < 0) {
            primaryColorHsv[2] = 0;
        }

        this.hsv = primaryColorHsv;

        return this;
    }

    brighterOrDarkerThan(color, difference) {
        let primaryColorHsv = this.hsv;
        let secondaryColorHsv = color.hsv;

        if (primaryColorHsv[2] <= secondaryColorHsv[2]) {
            return this.darkerThan(color, difference);
        } else {
            return this.brighterThan(color, difference);
        }
    }

    rgbToHex(rgb) {
        return rgbToHex(rgb);
    }

    hexToRgb(hex) {
        return hexToRgb(hex).map((val) => Math.round(val));
    }

    rgbToHsv(rgb) {
        return rgbToHsv(rgb).map((val) => Math.round(val));
    }

    hsvToRgb(hsv) {
        return hsvToRgb(hsv).map((val) => Math.round(val));
    }
}
