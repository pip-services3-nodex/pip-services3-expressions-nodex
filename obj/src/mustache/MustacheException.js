"use strict";
/** @module mustache */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MustacheException = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
/**
 * Exception that can be thrown by Mustache Template.
 */
class MustacheException extends pip_services3_commons_nodex_1.BadRequestException {
    constructor(correlationId, code, message, line, column) {
        if (line != 0 || column != 0) {
            message = message + " at line " + line + " and column " + column;
        }
        super(correlationId, code, message);
    }
}
exports.MustacheException = MustacheException;
//# sourceMappingURL=MustacheException.js.map