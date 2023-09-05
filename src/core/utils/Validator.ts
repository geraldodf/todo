import {Errors} from "@/core/constants/Error";

export type returnType = string | null;

export default class Validator {

    static combine(...errors: (string | null)[]): string[] | null[] {
        const filteredErrors = errors.filter((error) => error !== null) as string[];
        return filteredErrors.length > 0 ? filteredErrors : null;
    }

    static isNullOrUndefined(value: string, errorMsg: string): returnType {
        return value !== null && value !== undefined ? null : errorMsg;
    }

    static isEmpty(value: string, errorMsg: string): returnType {
        return !(value?.trim() === '') ? null : errorMsg;
    }

    static isValid(value: string, errorMsg: string): returnType {
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
        return regex.test(value) ? null : errorMsg;
    }

    static fullValidation(value: string, errorMsgNullOrUndefined: string, errorMsgEmpty: string, errorMsgValid: string): string[] | null {
        return Validator.combine(
            Validator.isNullOrUndefined(value, errorMsgNullOrUndefined),
            Validator.isEmpty(value, errorMsgEmpty),
            Validator.isValid(value, errorMsgValid),
        )
    }
}