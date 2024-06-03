import { Component, OnInit } from '@angular/core';
import { TodosService, Todo } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  searchQuery: string = '';
  isSearchEnabled: boolean = false;
  selectedTodoId: number | null = null;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;
      this.filteredTodos = data;
    });
  }

  onSearchQueryChange(): void {
    this.isSearchEnabled = this.searchQuery.trim().length > 0;
  }

  searchTodos(): void {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      this.filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(query)
      );
    } else {
      this.filteredTodos = this.todos;
    }
  }

  viewDetails(todoId: number): void {
    this.selectedTodoId = todoId;
  }

  clearSelectedTodo(): void {
    this.selectedTodoId = null;
  }

  randomMethod() {}
}
