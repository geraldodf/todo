import Validator from "@/core/utils/Validator";
import {Errors} from "@/core/constants/Error";

export default class Title {
    readonly value: string;

    constructor(title: string) {
        this.value = title;

        const errors = Validator.fullValidation(title, Errors.INVALID_TITLE, Errors.EMPTY_TITLE, Errors.TITLE_CONTAINS_SPECIAL_CHARACTER)

        if (errors) throw new Error(errors.join(', '))
    }
}