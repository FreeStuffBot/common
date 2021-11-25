"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleIdToMention = void 0;
function roleIdToMention(id) {
    return id
        ? ((id + '') === '1')
            ? '@everyone'
            : `<@&${id}>`
        : '';
}
exports.roleIdToMention = roleIdToMention;
//# sourceMappingURL=themeutils.js.map