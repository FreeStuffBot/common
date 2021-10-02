"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
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
exports.Util = Util;
//# sourceMappingURL=util.js.map