/** @module calculator */

import { BadRequestException } from "pip-services3-commons-nodex";

/**
 * Exception that can be thrown by Expression Calculator.
 */
export class ExpressionException extends BadRequestException {
    public constructor(correlationId: string, code: string,
        message: string, line: number = 0, column: number = 0) {
        if (line != 0 || column != 0) {
            message = message + " at line " + line + " and column " + column;
        }
        super(correlationId, code, message);
    }
}