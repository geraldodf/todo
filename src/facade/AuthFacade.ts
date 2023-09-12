<<<<<<< HEAD
import {AuthRepository} from "@/core/ports/AuthRepository";
import {EmailAndPasswordLogin, GoogleLogin, Logout, SignUpWithEmailAndPassword} from "@/core/user/useCases";
import {Observe} from "@/core/user/useCases/Observe";
=======
import {EmailAndPasswordLogin, GoogleLogin, Logout, SignUpWithEmailAndPassword,} from "../core/models/useCase/user";
import {Observe} from "@/core/models/useCase/user/Observe";
import {AuthRepository} from "../core/ports/AuthRepository";
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036

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
