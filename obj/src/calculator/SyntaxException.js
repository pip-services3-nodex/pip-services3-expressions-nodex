"use strict";
/** @module calculator */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxException = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
/**
 * Exception that can be thrown by Expression Parser.
 */
class SyntaxException extends pip_services3_commons_nodex_1.BadRequestException {
    constructor(correlationId, code, message, line, column) {
        if (line != 0 || column != 0) {
            message = message + " at line " + line + " and column " + column;
        }
        super(correlationId, code, message);
    }
}
exports.SyntaxException = SyntaxException;
//# sourceMappingURL=SyntaxException.js.map