import {AuthRepository} from "@/core/ports/AuthRepository";

export class Logout {
    constructor(private repoAuth: AuthRepository) {
    }

    async execute() {
        return this.repoAuth.logout();
    }
}

// TODO implementar interface comum pra todos casos de uso