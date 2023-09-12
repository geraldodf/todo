<<<<<<< HEAD
import User from "@/core/user/User";
=======
import User from "../models/User";
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036

export type ObserveUser = (user: User) => void;
export type CancelObservation = () => void;

export interface AuthRepository {
    EmailAndPasswordLogin(email: string, password: string): Promise<User>;

    googleLogin(): Promise<User>;

    SignUpWithEmailAndPassword(email: string, password: string): Promise<User>;

    logout(): Promise<void>;

    observe(observer: ObserveUser): CancelObservation;
}