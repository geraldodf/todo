import Validator from "@/core/utils/Validator";
import {Errors} from "@/core/constants/Error";

export default class Title {
<<<<<<< HEAD
    readonly value: string;

    constructor(title: string) {
        this.value = title;
=======
    readonly title: string;

    constructor(title: string) {
        this.title = title;
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036

        const errors = Validator.fullValidation(title, Errors.INVALID_TITLE, Errors.EMPTY_TITLE, Errors.TITLE_CONTAINS_SPECIAL_CHARACTER)

        if (errors) throw new Error(errors.join(', '))
    }
}