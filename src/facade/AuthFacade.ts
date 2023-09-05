import {EmailAndPasswordLogin, GoogleLogin, Logout, SignUpWithEmailAndPassword,} from "../core/models/useCase/user";
import {Observe} from "@/core/models/useCase/user/Observe";
import {AuthRepository} from "../core/ports/AuthRepository";

export class AuthFacade {
    constructor(private repoAuth: AuthRepository) {
    }

    googleLogin() {
        return new GoogleLogin(this.repoAuth).execute();
    }

    emailAndPasswordLogin(email: string, password: string) {
        return new EmailAndPasswordLogin(this.repoAuth).executa(email, password);
    }

    registerWithEmailAndPasswor(email: string, password: string) {
        return new SignUpWithEmailAndPassword(this.repoAuth).execute(email, password);
    }

    logout() {
        return new Logout(this.repoAuth).execute();
    }

    observe(observer: any) {
        return new Observe(this.repoAuth).execute(observer);
    }
}
