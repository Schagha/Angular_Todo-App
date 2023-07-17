import { TodoListItem } from '../app/todo-list/todo-list.component';

type CharacterFrequencies = {
  [character: string]: { upperCase: number; lowerCase: number }
}

declare function countCharacters(item: TodoListItem, previousData: CharacterFrequencies): CharacterFrequencies;

export { CharacterFrequencies, countCharacters };