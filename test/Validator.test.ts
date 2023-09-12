import Validator from "@/core/utils/Validator";

test('should return error message when value is null', () => {
    const error = Validator.isNullOrUndefined(null, 'This value is invalid')
    expect(error).toBe('This value is invalid')
})

test('should return error message when value is undefined', () => {
    const error = Validator.isNullOrUndefined(undefined, 'This value is invalid')
    expect(error).toBe('This value is invalid')
})
test('should return null when value is valid', () => {
    const error = Validator.isNullOrUndefined('Cassia', 'It should not return this value')
    expect(error).toBeNull()
})
test('should return null when value isnt empty', () => {
    const error = Validator.isEmpty('Cassia', 'It should not return this value')
    expect(error).toBeNull()
})
test('should return error message when value is empty with 0 characters', () => {
    const error = Validator.isEmpty('', 'This value is empty')
    expect(error).toBe('This value is empty')
})
test('should return error message when value is empty with any characters', () => {
    const error = Validator.isEmpty('           ', 'This value is empty')
    expect(error).toBe('This value is empty')
})
test('should return 4 error messages when these values contains error', () => {
    const errors = Validator.combine(
        Validator.isEmpty('           ', 'This value is empty'),
        Validator.isEmpty('', 'This value is empty'),
        Validator.isEmpty('Cassia', 'It should not return this value'),
        Validator.isNullOrUndefined('Cassia', 'It should not return this value'),
        Validator.isNullOrUndefined(undefined, 'This value is invalid'),
        Validator.isNullOrUndefined(null, 'This value is invalid'),
    )
    expect(errors?.join(', ')).toBe('This value is empty, This value is empty, This value is invalid, This value is invalid')
})

test('should return null and 0 error messages when these values contains are correct', () => {
    const errors = Validator.combine(
        Validator.isEmpty('Cassia', 'It should not return this value'),
        Validator.isNullOrUndefined('Cassia', 'It should not return this value'),
    )
    expect(errors).toBeNull()
})

test('should return null when value is using accent characters', () => {
    const error = Validator.isValid('Cássia', 'This value is invalid because have special characters')
    expect(error).toBeNull()
})

test('should return error message when value is using special characters', () => {
    const error = Validator.combine(
        Validator.isValid('#Cássia', 'This value is invalid because have special characters'),
    )
    expect(error?.join()).toBe('This value is invalid because have special characters')
})