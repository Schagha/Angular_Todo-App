import { Component, OnInit, Input } from '@angular/core';

export enum TodoItemStatus {
  Open,
  Done,
  Deleted,
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() title: string;
  @Input() description: string | undefined;
  @Input() status: TodoItemStatus;

  constructor() {}

  ngOnInit(): void {}

  isDone(): boolean {
    return this.status === TodoItemStatus.Done;
  }

  isDeleted(): boolean {
    return this.status === TodoItemStatus.Deleted;
  }
}
