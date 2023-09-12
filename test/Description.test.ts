import {Errors} from "@/core/constants/Error";
import Description from "@/core/shared/Description";
test('should return EMPTY_DESCRIPTION error when receive an empty description', () => {
    expect(() => new Description('')).toThrowError(Errors.EMPTY_DESCRIPTION)
})
test('should return INVALID_DESCRIPTION error when receive a null description', () => {
    expect(() => new Description(null)).toThrowError(Errors.INVALID_DESCRIPTION)
})
test('should return INVALID_DESCRIPTION error when receive an undefined description', () => {
    expect(() => new Description(undefined)).toThrowError(Errors.INVALID_DESCRIPTION)
})