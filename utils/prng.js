const MIN = -2147483648;
const MAX = 2147483647;

function xorshift(value) {
    value ^= value << 13;
    value ^= value >> 17;
    value ^= value << 5;

    return value;
}

function hashSeed(seed) {
    let hash = 0;

    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
        hash = xorshift(hash);
    }

    return hash;
}

function randomSeed() {
    return MIN + Math.floor((MAX - MIN) * Math.random()).toString();
}

export function create(seed) {
    seed = seed ?? randomSeed();

    let value = hashSeed(seed) || 1;

    const next = () => (value = xorshift(value));

    const integer = (min, max) => {
        return Math.floor(((next() - MIN) / (MAX - MIN)) * (max + 1 - min) + min);
    };

    return {
        seed,
        bool(likelihood = 50) {
            return integer(0, 100) < likelihood;
        },
        integer(min, max) {
            return integer(min, max);
        },
        pick(arr) {
            return arr[integer(0, arr.length - 1)];
        },
    };
}
