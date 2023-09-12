import {AuthRepository} from "@/core/ports/AuthRepository";
import {ObserveUser} from "@/core/ports/AuthRepository";

export class Observe {
    constructor(private repoAuth: AuthRepository) {
    }

    execute(observer: ObserveUser) {
        return this.repoAuth.observe(observer);
    }
}
