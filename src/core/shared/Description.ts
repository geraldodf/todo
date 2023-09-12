import Validator from "@/core/utils/Validator";
import {Errors} from "@/core/constants/Error";

export default class Description {
    readonly value: string;

    constructor(description: string) {
        this.value = description;

        const errors = Validator.combine(
            Validator.isNullOrUndefined(this.value, Errors.INVALID_DESCRIPTION),
            Validator.isEmpty(this.value, Errors.EMPTY_DESCRIPTION)
        )

        if (errors) throw new Error(errors.join(', '))
    }
}