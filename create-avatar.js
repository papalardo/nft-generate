import { style } from './avatar-male.js';
import * as prng from './utils/prng.js';
import * as svg from './utils/svg.js';
import { ntc } from './utils/ntc.js';

export const createAvatar = (seed, options = {}) => {
    const prngInstance = prng.create(seed);

    const result = style.create({
        prng: prngInstance,
        options,
    });

    if (options.scale) {
        result.body = svg.addScale(result, options.scale);
    }
    if (options.background) {
        result.body = svg.addBackgroundColor(result, options.background);
    }
    if (options.radius) {
        result.body = svg.addViewboxMask(result, options.radius);
    }

    const createWrapper = (generated) => svg.removeWhitespace(`
        <svg ${svg.createAttrString(generated.attributes)}>
            ${generated.head ?? ''}
            ${generated.body}
        </svg>
    `);

    return {
        svg: createWrapper(result),
        skinAttributes: result.skinAttributes,
    };
}
