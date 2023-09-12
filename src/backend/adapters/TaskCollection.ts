import TaskRepository from "@/core/ports/TaskRepository";
<<<<<<< HEAD
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
=======
import Task from "@/core/models/Task";
import firebase from "@/backend/firebase/config";

export default class TaskCollection implements TaskRepository {

    converter = {
        toFirestore(task: Task) {
            return {
                title: task.title,
                description: task.description,
                finished: task.completed
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
                      options: firebase.firestore.SnapshotOptions): Task {
            const data = snapshot.data(options)
            return new Task(data?.title, data?.description, data?.finished)

        }
    }

    async delete(task: Task, emailId: string): Promise<void> {
        return this.collection(emailId).doc(`${task.id}`).delete()
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
    }

    async getAll(emailId: string): Promise<Task[]> {
        const query = await this.collection(emailId).get();
<<<<<<< HEAD
        return query.docs.map((doc) => {
=======
        return query.docs.map(doc => {
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
            const data = doc.data();
            const task = new Task(data.title, data.description, data.completed);
            task.id = doc.id;
            return task;
        });
    }

    async save(task: Task, emailId: string): Promise<Task> {
        if (task?.id) {
<<<<<<< HEAD
            await this.collection(emailId).doc(task.id).set(task);
            return task;
        } else {
            debugger;
=======
            await this.collection(emailId).doc(task.id).set(task)
            return task;
        } else {
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
            const docRef = await this.collection(emailId).add(task);
            const doc = await docRef.get();
            return {...doc.data(), id: docRef.id, ...task};
        }
    }

    collection(emailId: string) {
<<<<<<< HEAD
        return firebase
            .firestore()
            .collection(`tasks/${emailId}/tasks-user`)
            .withConverter(this.converter);
    }
}
=======
        return firebase.firestore().collection(`tasks/${emailId}/tasks-user`).withConverter(this.converter)
    }

}
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
