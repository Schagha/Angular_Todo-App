import { Component, OnInit } from '@angular/core';
import { TodoItemStatus } from '../todo-item/todo-item.component';
import { ItemsService } from '../items.service';

export interface TodoListItem {
  title: string;
  description?: string;
  status: TodoItemStatus;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  items: TodoListItem[];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }

  isChecked(index: number): boolean {
    if (this.items.length >= index) {
      return this.items[index].status === TodoItemStatus.Done;
    }
    return false;
  }

  changeChecked(index: number): void {
    if (this.items.length >= index) {
      const item = this.items[index];
      if (item.status === TodoItemStatus.Open) {
        item.status = TodoItemStatus.Done;
      } else {
        item.status = TodoItemStatus.Open;
      }
    }
  }

  isDeleted(index: number): boolean {
    if (this.items.length >= index) {
      return this.items[index].status === TodoItemStatus.Deleted;
    }
    return false;
  }

  delete(index: number): void {
    if (this.items.length >= index) {
      this.items[index].status = TodoItemStatus.Deleted;
    }
  }
}
