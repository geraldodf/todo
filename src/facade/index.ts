import TaskCollection from "@/backend/adapters/TaskCollection";
import { TaskFacade } from "./TaskFacade";
import { AuthFacade } from "./AuthFacade";
import FirebaseAuth from "@/backend/adapters/FirebaseAuth";

export class Core {
    get auth() {
        const repo = new FirebaseAuth();
        return new AuthFacade(repo);
    }

    get task() {
        const repo = new TaskCollection();
        return new TaskFacade(repo);
    }
}

const core = new Core();

export { core };