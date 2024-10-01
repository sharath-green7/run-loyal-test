import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({ templateUrl: 'todo.component.html' })
export class TodoComponent { 
    todoList?: any[];
    pageArray?: any[] = [1,2,3,4,5];
    limit: number = 15;
    skip: number = 0;
    currentPage: number = 0;
    // currentPage == index
    //                   ? "text-blue-600  border-sky-500"
    //                   : "border-[#E4E4EB] "

    constructor(private todoService: TodoService) {}

    ngOnInit() {
        this.todoService.getAllTodo(this.limit, this.skip)
            .subscribe((todos:any) => {this.todoList = todos.todos; console.log("todos", todos.todos);});
    }

    changePage(page: number) {
        console.log("Moveto", page);
        this.currentPage = page;
        this.skip = page*15;
        this.todoService.getAllTodo(this.limit, this.skip)
            .subscribe((todos:any) => {this.todoList = todos.todos; console.log("todos", todos.todos);});
    }
}