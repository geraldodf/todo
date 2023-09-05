import Validator from "@/core/utils/Validator";
import {Errors} from "@/core/constants/Error";

export default class Description {
    readonly description: string;

    constructor(description: string) {
        this.description = description;

        const errors = Validator.combine(
            Validator.isNullOrUndefined(this.description, Errors.INVALID_DESCRIPTION),
            Validator.isEmpty(this.description, Errors.EMPTY_DESCRIPTION)
        )

        if (errors) throw new Error(errors.join(', '))
    }
}