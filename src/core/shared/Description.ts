import Validator from "@/core/utils/Validator";
import {Errors} from "@/core/constants/Error";

export default class Description {
<<<<<<< HEAD
    readonly value: string;

    constructor(description: string) {
        this.value = description;

        const errors = Validator.combine(
            Validator.isNullOrUndefined(this.value, Errors.INVALID_DESCRIPTION),
            Validator.isEmpty(this.value, Errors.EMPTY_DESCRIPTION)
=======
    readonly description: string;

    constructor(description: string) {
        this.description = description;

        const errors = Validator.combine(
            Validator.isNullOrUndefined(this.description, Errors.INVALID_DESCRIPTION),
            Validator.isEmpty(this.description, Errors.EMPTY_DESCRIPTION)
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
        )

        if (errors) throw new Error(errors.join(', '))
    }
}