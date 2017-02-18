import {Component} from "@angular/core";

class Todo {
    title:string;
    completed:boolean;

    constructor(title:string, completed:boolean = false) {
        this.title = title;
        this.completed = completed;
    }
}

const todos = [
    {
        title: 'Изучить JavaScript',
        completed: true
    },
    {
        title: 'Изучить Angular 2',
        completed: false
    },
    {
        title: 'Написать приложение',
        completed: false
    }
];
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})
export class AppComponent {
    title:string = "Angular 2Do";
    todos:Todo[] = todos;

    newTodoTitle:string="";

    private toggle(todo:Todo) {
        todo.completed = !todo.completed;
    }

    private delete(todo:Todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    private create() {

        let todo:Todo = new Todo(this.newTodoTitle);
        this.todos.push(todo);
        this.newTodoTitle="";
    }
}