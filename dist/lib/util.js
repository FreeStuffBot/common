"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    static modifyBits(input, lshift, bits, value) {
        return (input & ~((2 ** bits - 1) << lshift)) | (value << lshift);
    }
    static generateWord(alphabet, length) {
        let out = '';
        while (length-- > 0)
            out += alphabet[~~(Math.random() * alphabet.length)];
        return out;
    }
}
exports.default = Util;
//# sourceMappingURL=util.js.map