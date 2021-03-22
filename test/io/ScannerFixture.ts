const assert = require('chai').assert;

import { IScanner } from '../../src/io/IScanner';

export class ScannerFixture {
    private _scanner: IScanner;
    private _content: string;

    public constructor(scanner: IScanner, content: string) {
        this._scanner = scanner;
        this._content = content;
    }

    public testRead(): void {
        this._scanner.reset();

        for (let i = 0; i < this._content.length; i++) {
            let chr = this._scanner.read();
            assert.equal(this._content.charCodeAt(i), chr);
        }

        let chr = this._scanner.read();
        assert.equal(-1, chr);

        chr = this._scanner.read();
        assert.equal(-1, chr);
    }

    public testUnread(): void {
        this._scanner.reset();

        let chr = this._scanner.peek();
        assert.equal(this._content.charCodeAt(0), chr);

        chr = this._scanner.read();
        assert.equal(this._content.charCodeAt(0), chr);

        chr = this._scanner.read();
        assert.equal(this._content.charCodeAt(1), chr);

        this._scanner.unread();
        chr = this._scanner.read();
        assert.equal(this._content.charCodeAt(1), chr);

        this._scanner.unreadMany(2);
        chr = this._scanner.read();
        assert.equal(this._content.charCodeAt(0), chr);
        chr = this._scanner.read();
        assert.equal(this._content.charCodeAt(1), chr);
    }

    public testLineColumn(position: number, charAt: number, line: number, column: number): void {
        this._scanner.reset();

        // Get in position
        while (position > 1) {
            this._scanner.read();
            position--;
        }

        // Test forward scanning
        let chr = this._scanner.read();
        assert.equal(charAt, chr);
        let ln = this._scanner.line();
        assert.equal(line, ln);
        let col = this._scanner.column();
        assert.equal(column, col);

        // Moving backward
        chr = this._scanner.read();
        if (chr != -1) {
            this._scanner.unread();
        }
        this._scanner.unread();

        // Test backward scanning
        chr = this._scanner.read();
        assert.equal(charAt, chr);
        ln = this._scanner.line();
        assert.equal(line, ln);
        col = this._scanner.column();
        assert.equal(column, col);
    }
}