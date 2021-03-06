/** @module mustache */

import { BadRequestException } from "pip-services3-commons-nodex";

/**
 * Exception that can be thrown by Mustache Template.
 */
export class MustacheException extends BadRequestException {
    public constructor(correlationId: string, code: string,
        message: string, line: number, column: number) {
        if (line != 0 || column != 0) {
            message = message + " at line " + line + " and column " + column;
        }
        super(correlationId, code, message);
    }
}