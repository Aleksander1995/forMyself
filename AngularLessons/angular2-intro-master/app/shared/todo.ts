export class Todo {
    id: number;

    constructor(title:string, completed:boolean = false) {
        this.title = title;
        this.completed = completed;
    }
}