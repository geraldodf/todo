import Title from "@/core/shared/Title";
import {Errors} from "@/core/constants/Error";

test('should return EMPTY_TITLE error when receive an empty title', () => {
    expect(() => new Title('')).toThrowError(Errors.EMPTY_TITLE)
})
test('should return INVALID_TITLE error when receive a null title', () => {
    expect(() => new Title(null)).toThrowError(Errors.INVALID_TITLE)
})
test('should return INVALID_TITLE error when receive an undefined title', () => {
    expect(() => new Title(undefined)).toThrowError(Errors.INVALID_TITLE)
})
test('should return TITLE_CONTAINS_SPECIAL_CHARACTER error when receive a title with special characters', () => {
    expect(() => new Title('undefined¨¨')).toThrowError(Errors.TITLE_CONTAINS_SPECIAL_CHARACTER)
})
