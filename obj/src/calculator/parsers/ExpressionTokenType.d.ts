/** @module calculator */
/**
 * Define types of expression tokens.
 */
export declare enum ExpressionTokenType {
    Unknown = 0,
    LeftBrace = 1,
    RightBrace = 2,
    LeftSquareBrace = 3,
    RightSquareBrace = 4,
    Plus = 5,
    Minus = 6,
    Star = 7,
    Slash = 8,
    Procent = 9,
    Power = 10,
    Equal = 11,
    NotEqual = 12,
    More = 13,
    Less = 14,
    EqualMore = 15,
    EqualLess = 16,
    ShiftLeft = 17,
    ShiftRight = 18,
    And = 19,
    Or = 20,
    Xor = 21,
    Is = 22,
    In = 23,
    NotIn = 24,
    Element = 25,
    Null = 26,
    Not = 27,
    Like = 28,
    NotLike = 29,
    IsNull = 30,
    IsNotNull = 31,
    Comma = 32,
    Unary = 33,
    Function = 34,
    Variable = 35,
    Constant = 36
}