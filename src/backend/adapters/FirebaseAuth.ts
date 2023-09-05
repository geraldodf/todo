import {
    AuthRepository,
    CancelObservation,
    ObserveUser,
} from "@/core/ports/AuthRepository";
import firebase from "@/backend/firebase/config";
import User from "@/core/models/User";

export default class FirebaseAuth implements AuthRepository {
    private async normalizedUser(
        firebaseUser: firebase.User
    ): Promise<User> {
        const token = await firebaseUser.getIdToken();

        return {
            uid: firebaseUser.uid,
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            token,
            provider: firebaseUser.providerData[0]?.providerId,
            imageUrl: firebaseUser.photoURL,
        };
    }

    async EmailAndPasswordLogin(email: string, password: string): Promise<User> {
        const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

        const normalizedUser = this.normalizedUser(user.user);
        return normalizedUser;
    }

    async googleLogin(): Promise<User> {
        const user = await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        return this.normalizedUser(user.user);
    }

    async SignUpWithEmailAndPassword(
        email: string,
        password: string
    ): Promise<User> {
        const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        return this.normalizedUser(user.user);
    }

    logout(): Promise<void> {
        return firebase.auth().signOut();
    }

    observe(observer: ObserveUser): CancelObservation {
        return firebase.auth().onIdTokenChanged(async (firebaseUser: firebase.User) => {
            const normalizedUser = !!firebaseUser ? await this.normalizedUser(firebaseUser) : null;
            observer(normalizedUser);
        });
    }
}
