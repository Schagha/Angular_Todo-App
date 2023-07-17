import { TodoListItem } from '../app/todo-list/todo-list.component';

declare function sortItems(ascending: boolean, sortBy: "title" | "description" | "status", items: TodoListItem[]): void;

export { sortItems };