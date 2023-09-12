import { AuthRepository } from "@/core/ports/AuthRepository";

export class EmailAndPasswordLogin {
    constructor(private repoAuth: AuthRepository) {
    }

    async executa(email: string, senha: string) {
        return this.repoAuth.EmailAndPasswordLogin(email, senha);
    }
}