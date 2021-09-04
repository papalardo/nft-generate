import fs from 'fs';
import * as prng from './utils/prng.js';
import { createAvatar } from './create-avatar.js';

const makeId = (len, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => [...Array(len)].map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('')

const backgrounds = [
    '#4f989d',
    '#8f5e7d',
    '#8a6bb3',
    '#d0a243',
    '#90b85c',
];

const existingSkins = JSON.parse(fs.readFileSync('./generatedSkins.json').toString());

Array.from({ length: 1 })
    .forEach((_, index) => {
        const seed = 'ediano';
        const options = {
            scale: 80,
            background: prng.create(seed).pick(backgrounds),
            mood: [
                'happy',
                'surprised',
            ],
        };

        const avatar = createAvatar(seed.toString(), options);

        fs.writeFileSync(`skins/${seed.toString()}.svg`, avatar.svg);

        existingSkins.push({
            seed,
            attributes: avatar.skinAttributes,
        })
    });

fs.writeFileSync('./generatedSkins.json', JSON.stringify(existingSkins));