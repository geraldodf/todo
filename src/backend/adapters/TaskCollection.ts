import TaskRepository from "@/core/ports/TaskRepository";
import Task from "@/core/task/Task";
import firebase from "@/backend/firebase/config";
import Title from "@/core/shared/Title";
import Description from "@/core/shared/Description";

export default class TaskCollection implements TaskRepository {
    converter = {
        toFirestore(task: Task) {
            return {
                title: task.title.value,
                description: task.description.value,
                completed: task.completed,
            };
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions
        ): Task {
            const data = snapshot.data(options);
            return new Task(
                new Title(data?.title),
                new Description(data?.description),
                data?.completed
            );
        },
    };

    async delete(task: Task, emailId: string): Promise<void> {
        return this.collection(emailId).doc(`${task.id}`).delete();
    }

    async getAll(emailId: string): Promise<Task[]> {
        const query = await this.collection(emailId).get();
        return query.docs.map((doc) => {
            const data = doc.data();
            const task = new Task(data.title, data.description, data.completed);
            task.id = doc.id;
            return task;
        });
    }

    async save(task: Task, emailId: string): Promise<Task> {
        if (task?.id) {
            await this.collection(emailId).doc(task.id).set(task);
            return task;
        } else {
            debugger;
            const docRef = await this.collection(emailId).add(task);
            const doc = await docRef.get();
            return {...doc.data(), id: docRef.id, ...task};
        }
    }

    collection(emailId: string) {
        return firebase
            .firestore()
            .collection(`tasks/${emailId}/tasks-user`)
            .withConverter(this.converter);
    }
}