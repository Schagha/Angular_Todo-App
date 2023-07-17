import { Injectable, EventEmitter } from '@angular/core';
import { TodoItemStatus } from './todo-item/todo-item.component';
import { TodoListItem } from './todo-list/todo-list.component';

import { sortItems } from '../tasks/sortItems.js';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  public todoListChanged = new EventEmitter<TodoListItem[]>();

  private todoListItems: TodoListItem[] = [];

  constructor() {
    this.todoListItems.push({
      title: 'Walk the dog',
      description: 'Take Rufus, the dog, out for a walk in the park.',
      status: TodoItemStatus.Open,
    });
    this.todoListItems.push({
      title: 'Feed the cat',
      description: 'Feed Marge, the cat. She likes goose liver.',
      status: TodoItemStatus.Done,
    });
    this.todoListItems.push({
      title: 'Buy catfood',
      status: TodoItemStatus.Deleted,
    });
  }

  getItems(): TodoListItem[] {
    return this.todoListItems;
  }

  addTodoItem(title: string, description?: string): void {
    this.todoListItems.push({
      title,
      description,
      status: TodoItemStatus.Open,
    });
    this.todoListChanged.emit(this.todoListItems);
  }

  sortItems(ascending: boolean, sortBy: 'title' | 'description' | 'status'): void {
    sortItems(ascending, sortBy, this.todoListItems);
  }
}
