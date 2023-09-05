import User from "../models/User";

export type ObserveUser = (user: User) => void;
export type CancelObservation = () => void;

export interface AuthRepository {
    EmailAndPasswordLogin(email: string, password: string): Promise<User>;

    googleLogin(): Promise<User>;

    SignUpWithEmailAndPassword(email: string, password: string): Promise<User>;

    logout(): Promise<void>;

    observe(observer: ObserveUser): CancelObservation;
}