import color from './utils/color.js';
import { ntc } from './utils/ntc.js';
import Eyes from './avatar-male/skins/eyes.js';
import Eyebrows from './avatar-male/skins/eyebrows.js';
import Mustache from './avatar-male/skins/mustache.js';
import Glass from './avatar-male/skins/glass.js';
import Hair from './avatar-male/skins/hair.js';
import Clothes from './avatar-male/skins/clothes.js';
import Mouth from './avatar-male/skins/mouth.js';
import Hat from './avatar-male/skins/hats.js';
import Skin from './avatar-male/skins/skin.js';

export const style = {
    meta: {
        title: 'Male / 8biticon',
        creator: 'Plastic Jam',
        contributor: 'Florian Körner',
        source: 'https://github.com/dicebear/dicebear',
        license: {
            name: 'MIT',
            url: 'https://github.com/dicebear/dicebear/blob/v4/packages/avatars-male-sprites/LICENSE',
        },
    },
    create: ({ prng, options }) => {
        const attributes = {};

        const skin = new Skin({ prng });

        const hair = new Hair({ prng });
        hair.color = hair.color.brighterOrDarkerThan(skin.color, 17);
        attributes.hair = hair.name;
        attributes.hairColor = ntc.name(hair.color.hex)[1];

        let body = [skin.render()];

        // Eyes
        const eyes = new Eyes({ prng });
        attributes.eyes = eyes.name;
        attributes.eyesColor = ntc.name(eyes.color.hex)[1];
        body.push(eyes.render());

        // Eyebrows
        const eyebrows = new Eyebrows({
            prng,
            color: hair.color.clone()
                .darkerThan(skin.color, 7)
                .darkerThan(hair.color, 10),
        });
        attributes.eyebrows = eyebrows.name;
        body.push(eyebrows.render());

        // Mustache
        if (prng.bool(30)) {
            const mustache = new Mustache({
                prng,
                color: hair.color.clone()
                    .darkerThan(skin.color, 7),
            });
            attributes.mustache = mustache.name;
            attributes.mustacheColor = ntc.name(mustache.color.hex)[1];
            body.push(mustache.render())
        }

        // Mouth
        const mouth = new Mouth({ prng, options });
        mouth.color = mouth.color.brighterOrDarkerThan(skin.color, 10);
        attributes.mouth = mouth.name;
        body.push(mouth.render());

        // Glasses
        if (prng.bool(25)) {
            const glass = new Glass({ prng });
            attributes.glass = glass.name;
            attributes.glassColor = ntc.name(glass.color.hex)[1];
            body.push(glass.render());
        }

        // Clothes
        const clothes = new Clothes({ prng });
        attributes.clothes = clothes.name;
        attributes.clothesColor = ntc.name(clothes.color.hex)[1];
        body.push(clothes.render());

        // Hat & Hair
        if (prng.bool(5)) {
            const hat = new Hat({ prng });
            attributes.hat = hat.name;
            body.push(hat.render());
        } else {
            attributes.hair = hair.name;
            attributes.hairColor = ntc.name(hair.color.hex)[1];
            body.push(hair.render())
        }

        return {
            skinAttributes: attributes,
            attributes: {
                viewBox: '0 0 20 20',
                'shape-rendering': 'crispEdges',
            },
            body: body
                .filter((path) => Boolean(path))
                .join(''),
        };
    },
};
