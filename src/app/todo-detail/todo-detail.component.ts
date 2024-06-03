import { Component, Input, OnInit } from '@angular/core';
import { TodosService, Todo } from '../todos.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  @Input() todoId: number | null = null;
  todo: Todo | undefined;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    if (this.todoId !== null) {
      this.todosService.getTodoById(this.todoId).subscribe((todo: Todo) => {
        this.todo = todo;
      });
    }
  }
}
