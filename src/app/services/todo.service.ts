import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

const baseUrl = `https://dummyjson.com/todos`
@Injectable({ providedIn: 'root' })
export class TodoService {
    constructor(private http: HttpClient) { }
    
    getAllTodo(limit: number, skip: number) {
        return this.http.get<Todo[]>(baseUrl + `?limit=${limit}&skip=${skip}`);
    }
}