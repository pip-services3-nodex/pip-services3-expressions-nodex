/** @module calculator */
import { BadRequestException } from "pip-services3-commons-nodex";
/**
 * Exception that can be thrown by Expression Parser.
 */
export declare class SyntaxException extends BadRequestException {
    constructor(correlationId: string, code: string, message: string, line: number, column: number);
}
