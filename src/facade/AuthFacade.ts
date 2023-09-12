import {AuthRepository} from "@/core/ports/AuthRepository";
import {EmailAndPasswordLogin, GoogleLogin, Logout, SignUpWithEmailAndPassword} from "@/core/user/useCases";
import {Observe} from "@/core/user/useCases/Observe";

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
