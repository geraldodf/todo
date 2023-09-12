import {AuthRepository} from "@/core/ports/AuthRepository";

export class GoogleLogin {
    constructor(private repoAuth: AuthRepository) {
    }

    async execute() {
        return this.repoAuth.googleLogin();
    }
}
