import { AuthRepository } from "@/core/ports/AuthRepository";

export class SignUpWithEmailAndPassword {
  constructor(private repoAuth: AuthRepository) {}

  async execute(email: string, password: string) {
    return this.repoAuth.SignUpWithEmailAndPassword(email, password);
  }
}